import { Schedule } from '@/services/interfaces/Schedule.interface';
import { getFormattedTime } from '@/utils/format-date-iso8601';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  DetailsBtn,
  EventDetail,
  EventHeader,
  EventName,
  EventTime,
  EventTitle,
  EventWrapper,
  InfoContent,
  InfoTitle,
  InfoWrapper,
  ManageBtn,
} from './style';

export default function EventAccordion({ schedule }: { schedule: Schedule }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toastClipboard = () => {
    toast('Copiado para a área de transferência!', {
      position: 'top-center',
      autoClose: 1000,
      closeButton: false,
      style: {
        backgroundColor: '#72c270',
        color: '#083D07',
        fontWeight: 500,
      },
    });
  };

  return (
    <EventWrapper>
      <EventHeader onClick={() => setIsOpen(!isOpen)}>
        <EventTitle>
          <EventTime>{`${getFormattedTime(schedule.startTime)} - ${getFormattedTime(schedule.endTime)}`}</EventTime>
          <EventName>
            {/* Avatar mentorado provisório */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="12" fill="#ddd" />
              <circle cx="12" cy="9" r="4" fill="#bbb" />
              <path
                d="M4 20c1.5-4 6-5 8-5s6 1 8 5"
                stroke="#bbb"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            {schedule.participant.name}
          </EventName>
        </EventTitle>
        <DetailsBtn>
          Detalhes
          {isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </DetailsBtn>
      </EventHeader>
      <EventDetail open={isOpen}>
        <InfoWrapper>
          <InfoTitle>Email:</InfoTitle>
          <InfoContent>{schedule.participant.email}</InfoContent>
        </InfoWrapper>
        <InfoWrapper>
          <InfoTitle>Sala da chamada: </InfoTitle>
          <InfoContent
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            {schedule.callRoom ? (
              <>
                {schedule.callRoom}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="#ACACAC"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    navigator.clipboard.writeText(
                      schedule.callRoom ? schedule.callRoom : ''
                    );
                    toastClipboard();
                  }}
                >
                  <g clip-path="url(#clip0_10133_10065)">
                    <path
                      d="M6.40156 12.798C5.96156 12.798 5.5849 12.6414 5.27156 12.328C4.95823 12.0147 4.80156 11.638 4.80156 11.198V1.59805C4.80156 1.15805 4.95823 0.78138 5.27156 0.468047C5.5849 0.154714 5.96156 -0.00195312 6.40156 -0.00195312H13.6016C14.0416 -0.00195312 14.4182 0.154714 14.7316 0.468047C15.0449 0.78138 15.2016 1.15805 15.2016 1.59805V11.198C15.2016 11.638 15.0449 12.0147 14.7316 12.328C14.4182 12.6414 14.0416 12.798 13.6016 12.798H6.40156ZM6.40156 11.198H13.6016V1.59805H6.40156V11.198ZM3.20156 15.998C2.76156 15.998 2.3849 15.8414 2.07156 15.528C1.75823 15.2147 1.60156 14.838 1.60156 14.398V3.19805H3.20156V14.398H12.0016V15.998H3.20156Z"
                      fill="#ACACAC"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_10133_10065">
                      <rect
                        width="16"
                        height="16"
                        fill="#ACACAC"
                        transform="translate(0 -0.00195312)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </>
            ) : (
              'Não disponível'
            )}
          </InfoContent>
        </InfoWrapper>
        <InfoWrapper>
          <InfoTitle>Questões: </InfoTitle>
          <InfoContent>
            {schedule.participant.questions.map((q, index) => (
              <div key={index}>{q.question}</div>
            ))}
          </InfoContent>
        </InfoWrapper>
        <ManageBtn href={schedule.urlSchedule} target="_blank">
          Gerenciar chamada
        </ManageBtn>
      </EventDetail>
    </EventWrapper>
  );
}
