export interface ICalendlyAvailableTime {
  start_time: string;
  status: string;
  invitees_remaining?: number;
  scheduling_url?: string;
}

export interface ICalendlyAvailableTimesResponse {
  eventType: {
    uri: string;
    name: string;
    schedulingUrl?: string;
  };
  availableTimes: ICalendlyAvailableTime[];
}

export interface ICreateCalendlyInviteeRequest {
  startTime: string;
  schedulingUrl?: string;
  timezone: string;
  description?: string;
}

export interface ICreateCalendlyInviteeResponse {
  schedulingUrl: string;
  selectedStartTime: string;
  scheduled: boolean;
  requiresCalendlyRedirect: boolean;
}
