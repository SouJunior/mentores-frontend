import * as Tabs from '@radix-ui/react-tabs';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { useAuthContext } from '@/context/Auth/AuthContext';
import { useMentorshipFeedbackOverviewService } from '@/services/user/useMentorshipFeedbackService';
import { TabContainer, TitleTab } from '../styles';
import {
  EmptyReviewsMessage,
  PrivacyNotice,
  RatingSummary,
  ReviewActionLink,
  ReviewCard,
  ReviewCardHeader,
  ReviewComment,
  ReviewMentorOnlyNotice,
  ReviewMeta,
  ReviewsTabsContent,
  ReviewsTabsList,
  ReviewsTabsRoot,
  ReviewsTabsTrigger,
  ReviewTitle,
  ReviewTitleGroup,
} from './styles';

function getAverageRating(ratings: number[]) {
  if (!ratings.length) {
    return 0;
  }

  const total = ratings.reduce((sum, rating) => sum + rating, 0);
  return total / ratings.length;
}

export function ReviewsTab() {
  const { activeProfileType, userSession } = useAuthContext();
  const isMentorProfile = activeProfileType === 'mentor';
  const feedbackOverview = useMentorshipFeedbackOverviewService(
    userSession?.token,
    userSession?.id,
    {
      enabled: !isMentorProfile && Boolean(userSession?.token && userSession?.id),
    }
  );

  const defaultTab = useMemo(() => {
    if ((feedbackOverview.data?.pending?.length || 0) > 0) {
      return 'pending';
    }

    return 'completed';
  }, [feedbackOverview.data?.pending?.length]);

  return (
    <TabContainer value="reviews">
      <TitleTab>Avaliações</TitleTab>

      {isMentorProfile ? (
        <ReviewMentorOnlyNotice>
          Nesta etapa da funcionalidade, o portal já permite acompanhar e enviar
          apenas as avaliações do perfil mentorado(a). Para responder uma
          mentoria concluída, troque para o perfil mentorado(a).
        </ReviewMentorOnlyNotice>
      ) : (
        <ReviewsTabsRoot defaultValue={defaultTab}>
          <ReviewsTabsList aria-label="Avaliações">
            <ReviewsTabsTrigger value="pending">
              Aguardando avaliação
            </ReviewsTabsTrigger>
            <ReviewsTabsTrigger value="completed">
              Concluídas
            </ReviewsTabsTrigger>
          </ReviewsTabsList>

          <PrivacyNotice>
            Seu feedback fica vinculado à sessão realizada e é solicitado uma
            única vez por mentoria concluída.
          </PrivacyNotice>

          <Tabs.Content value="pending">
            <ReviewsTabsContent>
              {feedbackOverview.isLoading ? (
                <EmptyReviewsMessage>Carregando avaliações...</EmptyReviewsMessage>
              ) : feedbackOverview.isError ? (
                <EmptyReviewsMessage>
                  Não foi possível carregar suas avaliações pendentes.
                </EmptyReviewsMessage>
              ) : feedbackOverview.data?.pending?.length ? (
                feedbackOverview.data.pending.map(session => (
                  <ReviewCard key={session.historyId}>
                    <ReviewCardHeader>
                      <ReviewTitleGroup>
                        <ReviewTitle>{session.eventName}</ReviewTitle>
                        <ReviewMeta>
                          Com {session.mentorName} em{' '}
                          {dayjs(session.sessionDate).format(
                            'DD/MM/YYYY [às] HH:mm'
                          )}
                        </ReviewMeta>
                      </ReviewTitleGroup>

                      <ReviewActionLink href={`/avaliacoes/${session.historyId}`}>
                        Avaliar mentoria
                      </ReviewActionLink>
                    </ReviewCardHeader>

                    {session.duration ? (
                      <ReviewMeta>Duração: {session.duration}</ReviewMeta>
                    ) : null}
                  </ReviewCard>
                ))
              ) : (
                <EmptyReviewsMessage>
                  Ainda não há mentorias concluídas aguardando sua avaliação.
                </EmptyReviewsMessage>
              )}
            </ReviewsTabsContent>
          </Tabs.Content>

          <Tabs.Content value="completed">
            <ReviewsTabsContent>
              {feedbackOverview.isLoading ? (
                <EmptyReviewsMessage>Carregando histórico...</EmptyReviewsMessage>
              ) : feedbackOverview.isError ? (
                <EmptyReviewsMessage>
                  Não foi possível carregar seu histórico de avaliações.
                </EmptyReviewsMessage>
              ) : feedbackOverview.data?.completed?.length ? (
                feedbackOverview.data.completed.map(session => {
                  const averageRating = getAverageRating([
                    session.feedback.mentoringRating,
                    session.feedback.mentorClarityRating,
                    session.feedback.mentorSupportRating,
                    session.feedback.goalProgressRating,
                    session.feedback.platformExperienceRating,
                  ]);

                  return (
                    <ReviewCard key={session.historyId}>
                      <ReviewCardHeader>
                        <ReviewTitleGroup>
                          <ReviewTitle>{session.eventName}</ReviewTitle>
                          <ReviewMeta>
                            Com {session.mentorName} em{' '}
                            {dayjs(session.sessionDate).format(
                              'DD/MM/YYYY [às] HH:mm'
                            )}
                          </ReviewMeta>
                        </ReviewTitleGroup>

                        <RatingSummary>
                          Média {averageRating.toFixed(1)}/5
                        </RatingSummary>
                      </ReviewCardHeader>

                      {session.feedback.comment ? (
                        <ReviewComment>{session.feedback.comment}</ReviewComment>
                      ) : (
                        <ReviewMeta>
                          Avaliação enviada sem comentário adicional.
                        </ReviewMeta>
                      )}
                    </ReviewCard>
                  );
                })
              ) : (
                <EmptyReviewsMessage>
                  Você ainda não concluiu nenhuma avaliação.
                </EmptyReviewsMessage>
              )}
            </ReviewsTabsContent>
          </Tabs.Content>
        </ReviewsTabsRoot>
      )}
    </TabContainer>
  );
}
