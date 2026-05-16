export interface IMentorScheduleParticipant {
  name: string;
  email: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

export interface IMentorSchedule {
  eventUuid: string;
  eventUri: string;
  eventName: string;
  description: string;
  startTime: string;
  endTime: string;
  duration: string;
  joinUrl: string;
  eventUrl: string;
  participants: IMentorScheduleParticipant[];
}
