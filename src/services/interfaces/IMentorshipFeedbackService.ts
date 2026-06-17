export interface IMentorshipFeedbackSummary {
  historyId: string;
  mentorId: string;
  mentorName: string;
  eventName: string;
  sessionDate: string;
  duration?: string;
}

export interface IMentorshipFeedbackAnswers {
  id?: string;
  mentoringRating: number;
  mentorClarityRating: number;
  mentorSupportRating: number;
  goalProgressRating: number;
  platformExperienceRating: number;
  comment?: string | null;
  createdAt?: string;
}

export interface IMentorshipFeedbackCompleted
  extends IMentorshipFeedbackSummary {
  feedback: IMentorshipFeedbackAnswers;
}

export interface IMentorshipFeedbackOverview {
  pending: IMentorshipFeedbackSummary[];
  completed: IMentorshipFeedbackCompleted[];
}

export interface IMentorshipFeedbackDetail {
  historyId: string;
  mentor: {
    id: string;
    fullName: string;
    specialties?: string[];
  };
  eventName: string;
  description: string;
  joinUrl: string;
  inviteeName: string;
  sessionStartTime?: string | null;
  sessionEndTime?: string | null;
  duration?: string;
  submittedAt?: string | null;
  feedback: IMentorshipFeedbackAnswers | null;
}

export interface ICreateMentorshipFeedbackRequest {
  historyId: string;
  mentoringRating: number;
  mentorClarityRating: number;
  mentorSupportRating: number;
  goalProgressRating: number;
  platformExperienceRating: number;
  comment?: string;
}
