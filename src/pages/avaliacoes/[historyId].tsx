import { Button } from '@/components/atoms/Button';
import { Spinner } from '@/components/atoms/Spinner';
import { mentorshipFeedbackQuestions } from '@/data/static-info';
import { useAuthContext } from '@/context/Auth/AuthContext';
import { useProtectPage } from '@/hooks/useProtectPage';
import { queryClient } from '@/lib/react-query';
import {
  createMentorshipFeedback,
  useMentorshipFeedbackDetailService,
} from '@/services/user/useMentorshipFeedbackService';
import {
  ContainerSpinnerLoading,
} from '@/styles/pages/me';
import {
  FeedbackBackLink,
  FeedbackCard,
  FeedbackComment,
  FeedbackError,
  FeedbackEyebrow,
  FeedbackFooter,
  FeedbackForm,
  FeedbackHeader,
  FeedbackHint,
  FeedbackInfoCard,
  FeedbackInfoGrid,
  FeedbackInfoLabel,
  FeedbackInfoValue,
  FeedbackPageContainer,
  FeedbackQuestionBlock,
  FeedbackQuestionLabel,
  FeedbackReadOnlyBlock,
  FeedbackStarButton,
  FeedbackStarsRow,
  FeedbackSubmitButton,
  FeedbackSubmittedBadge,
  FeedbackSubtitle,
  FeedbackTextarea,
  FeedbackTitle,
} from '@/styles/pages/feedback';
import { handleError } from '@/utils/handleError';
import { useMutation } from '@tanstack/react-query';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type RatingField =
  | 'mentoringRating'
  | 'mentorClarityRating'
  | 'mentorSupportRating'
  | 'goalProgressRating'
  | 'platformExperienceRating';

const initialFormValues: Record<RatingField, number> & { comment: string } = {
  mentoringRating: 0,
  mentorClarityRating: 0,
  mentorSupportRating: 0,
  goalProgressRating: 0,
  platformExperienceRating: 0,
  comment: '',
};

export default function MentorshipFeedbackPage() {
  const router = useRouter();
  const isProtectedPageLoading = useProtectPage();
  const { userSession } = useAuthContext();
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState<Partial<Record<RatingField, string>>>({});

  const historyId = useMemo(() => {
    const routeHistoryId = router.query.historyId;

    if (Array.isArray(routeHistoryId)) {
      return routeHistoryId[0];
    }

    return routeHistoryId;
  }, [router.query.historyId]);

  const feedbackDetail = useMentorshipFeedbackDetailService(
    userSession?.token,
    historyId,
  );

  const { mutateAsync: submitFeedback, isPending: isSubmitting } = useMutation({
    mutationFn: async () => {
      if (!userSession?.token || !historyId) {
        throw new Error('Usuário não autenticado.');
      }

      const nextErrors: Partial<Record<RatingField, string>> = {};

      mentorshipFeedbackQuestions.forEach(question => {
        const ratingField = question.key as RatingField;

        if (!formValues[ratingField]) {
          nextErrors[ratingField] = 'Selecione uma nota de 1 a 5.';
        }
      });

      setErrors(nextErrors);

      if (Object.keys(nextErrors).length) {
        throw new Error('Preencha todas as notas obrigatórias.');
      }

      return createMentorshipFeedback(
        {
          historyId,
          mentoringRating: formValues.mentoringRating,
          mentorClarityRating: formValues.mentorClarityRating,
          mentorSupportRating: formValues.mentorSupportRating,
          goalProgressRating: formValues.goalProgressRating,
          platformExperienceRating: formValues.platformExperienceRating,
          comment: formValues.comment.trim() || undefined,
        },
        userSession.token,
      );
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['mentorshipFeedbackOverview', userSession?.id],
      });
      await queryClient.invalidateQueries({
        queryKey: ['mentorshipFeedbackDetail', historyId],
      });

      toast.success('Feedback enviado com sucesso!');
      router.push('/me?tab=reviews');
    },
    onError: error => {
      if (error instanceof Error && error.message === 'Preencha todas as notas obrigatórias.') {
        return;
      }

      handleError('Não foi possível enviar seu feedback.');
    },
  });

  if (isProtectedPageLoading) {
    return (
      <ContainerSpinnerLoading>
        <Spinner className="spinner" />
      </ContainerSpinnerLoading>
    );
  }

  if (feedbackDetail.isLoading) {
    return (
      <ContainerSpinnerLoading>
        <Spinner className="spinner" />
      </ContainerSpinnerLoading>
    );
  }

  if (feedbackDetail.isError || !feedbackDetail.data) {
    return (
      <FeedbackPageContainer>
        <FeedbackCard>
          <FeedbackTitle>Não foi possível carregar esta avaliação</FeedbackTitle>
          <FeedbackSubtitle>
            Verifique se a mentoria existe e se você está logado(a) com a conta
            correta.
          </FeedbackSubtitle>
          <Button as={Link} href="/me?tab=reviews">
            Voltar para minhas avaliações
          </Button>
        </FeedbackCard>
      </FeedbackPageContainer>
    );
  }

  const session = feedbackDetail.data;
  const isReadOnly = Boolean(session.feedback);

  return (
    <FeedbackPageContainer>
      <FeedbackCard>
        <FeedbackHeader>
          <FeedbackEyebrow>Feedback da mentoria</FeedbackEyebrow>
          <FeedbackTitle>{session.eventName}</FeedbackTitle>
          <FeedbackSubtitle>
            Sua opinião ajuda a melhorar a experiência do portal e a qualidade
            das mentorias da comunidade.
          </FeedbackSubtitle>
        </FeedbackHeader>

        <FeedbackInfoGrid>
          <FeedbackInfoCard>
            <FeedbackInfoLabel>Mentor(a)</FeedbackInfoLabel>
            <FeedbackInfoValue>{session.mentor.fullName}</FeedbackInfoValue>
          </FeedbackInfoCard>

          <FeedbackInfoCard>
            <FeedbackInfoLabel>Data da sessão</FeedbackInfoLabel>
            <FeedbackInfoValue>
              {session.sessionEndTime
                ? dayjs(session.sessionEndTime).format('DD/MM/YYYY [às] HH:mm')
                : 'Não informada'}
            </FeedbackInfoValue>
          </FeedbackInfoCard>
        </FeedbackInfoGrid>

        {session.description ? (
          <FeedbackHint>{session.description}</FeedbackHint>
        ) : null}

        {isReadOnly ? (
          <FeedbackReadOnlyBlock>
            <FeedbackSubmittedBadge>
              Feedback enviado em{' '}
              {session.submittedAt
                ? dayjs(session.submittedAt).format('DD/MM/YYYY [às] HH:mm')
                : 'data não informada'}
            </FeedbackSubmittedBadge>

            {mentorshipFeedbackQuestions.map(question => {
              const ratingField = question.key as RatingField;
              const rating = session.feedback?.[ratingField];

              return (
                <div key={question.key}>
                  <FeedbackQuestionLabel>{question.label}</FeedbackQuestionLabel>
                  <FeedbackHint>Nota registrada: {rating}/5</FeedbackHint>
                </div>
              );
            })}

            {session.feedback?.comment ? (
              <FeedbackComment>{session.feedback.comment}</FeedbackComment>
            ) : (
              <FeedbackHint>
                Nenhum comentário adicional foi enviado nessa avaliação.
              </FeedbackHint>
            )}
          </FeedbackReadOnlyBlock>
        ) : (
          <FeedbackForm
            onSubmit={async event => {
              event.preventDefault();
              await submitFeedback();
            }}
          >
            {mentorshipFeedbackQuestions.map(question => {
              const ratingField = question.key as RatingField;

              return (
                <FeedbackQuestionBlock key={question.key}>
                  <FeedbackQuestionLabel>{question.label}</FeedbackQuestionLabel>

                  <FeedbackStarsRow>
                    {[1, 2, 3, 4, 5].map(value => (
                      <FeedbackStarButton
                        key={value}
                        type="button"
                        $isActive={formValues[ratingField] === value}
                        onClick={() => {
                          setFormValues(currentState => ({
                            ...currentState,
                            [ratingField]: value,
                          }));
                          setErrors(currentState => ({
                            ...currentState,
                            [ratingField]: undefined,
                          }));
                        }}
                      >
                        {value}
                      </FeedbackStarButton>
                    ))}
                  </FeedbackStarsRow>

                  {errors[ratingField] ? (
                    <FeedbackError>{errors[ratingField]}</FeedbackError>
                  ) : null}
                </FeedbackQuestionBlock>
              );
            })}

            <FeedbackQuestionBlock>
              <FeedbackQuestionLabel>
                Comentário opcional
              </FeedbackQuestionLabel>
              <FeedbackTextarea
                maxLength={600}
                value={formValues.comment}
                onChange={event =>
                  setFormValues(currentState => ({
                    ...currentState,
                    comment: event.target.value,
                  }))
                }
                placeholder="Se quiser, compartilhe mais detalhes sobre a sessão."
              />
              <FeedbackHint>{formValues.comment.length}/600</FeedbackHint>
            </FeedbackQuestionBlock>

            <FeedbackFooter>
              <FeedbackBackLink as={Link} href="/me?tab=reviews">
                Voltar para minhas avaliações
              </FeedbackBackLink>

              <FeedbackSubmitButton disabled={isSubmitting} type="submit">
                {isSubmitting ? 'Enviando...' : 'Enviar feedback'}
              </FeedbackSubmitButton>
            </FeedbackFooter>
          </FeedbackForm>
        )}
      </FeedbackCard>

      <ToastContainer position="top-center" />
    </FeedbackPageContainer>
  );
}
