export interface Schedule {
  eventName: string;
  description: string;
  startTime: string;
  endTime: string;
  duration: string;
  participant: {
    name: string;
    email: string;
    questions: {
      question: string;
    }[];
  };
  callRoom: string | null;
  urlSchedule: string;
}
