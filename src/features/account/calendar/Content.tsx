'use client';

import { getWeekDays } from '@/utils/get-week-days';
import { ChevronLeft as ArrowBackIosIcon } from 'lucide-react';
import { ChevronRight as ArrowForwardIosIcon } from 'lucide-react';
import dayjs from 'dayjs';
import { ComponentProps, useMemo } from 'react';
import {
  CalendarActions,
  CalendarDay,
  CalendarTable,
  Container,
  LeftCalendarAction,
  RightCalendarAction,
} from './styles';
import { useCalendarContext } from './Root';
import { SelectMonths } from './SelectMonths';
import { SelectYears } from './SelectYears';

interface CalendarWeek {
  week: number;
  days: {
    date: dayjs.Dayjs;
    disabled?: boolean;
  }[];
}

type CalendarWeeks = CalendarWeek[];

interface ContentProps extends ComponentProps<typeof Container> {
  selected?: Date | null;
  onSelected?: (value: Date) => void;
}

export function Content({ onSelected, selected, ...props }: ContentProps) {
  const { currentDate, setCurrentDate } = useCalendarContext();

  const shortWeekDays = getWeekDays();

  const calendarWeeks = useMemo(() => {
    const daysInMonthArray = Array.from({
      length: currentDate.daysInMonth(),
    }).map((_, index) => currentDate.set('date', index + 1));

    const firstWeekDay = currentDate.get('day');

    const previousMonthFillArray = Array.from({
      length: firstWeekDay,
    })
      .map((_, index) => currentDate.subtract(index + 1, 'day'))
      .reverse();

    const lastDayInCurrentMonth = currentDate.set(
      'date',
      currentDate.daysInMonth()
    );
    const lastWeekDay = lastDayInCurrentMonth.get('day');

    const nextMonthFillArray = Array.from({
      length: 6 - lastWeekDay,
    }).map((_, index) => {
      return lastDayInCurrentMonth.add(index + 1, 'day');
    });

    const calendarDays = [
      ...previousMonthFillArray.map(date => ({
        date,
        disabled: true,
      })),
      ...daysInMonthArray.map(date => {
        const isDateAfterCurrentDate = date.isAfter(dayjs());
        return { date, disabled: isDateAfterCurrentDate };
      }),
      ...nextMonthFillArray.map(date => ({ date, disabled: true })),
    ];

    return calendarDays.reduce<CalendarWeeks>((weeks, _, i, original) => {
      const isNewWeek = i % 7 === 0;
      if (isNewWeek) {
        weeks.push({
          week: i / 7 + 1,
          days: original.slice(i, i + 7),
        });
      }
      return weeks;
    }, []);
  }, [currentDate]);

  function handlePreviousMonth() {
    setCurrentDate(currentDate.subtract(1, 'month'));
  }

  function handleNextMonth() {
    setCurrentDate(currentDate.add(1, 'month'));
  }

  return (
    <Container align="start" {...props}>
      <CalendarActions>
        <LeftCalendarAction onClick={handlePreviousMonth}>
          <ArrowBackIosIcon />
        </LeftCalendarAction>
        <RightCalendarAction
          disabled={currentDate.isAfter(dayjs())}
          onClick={handleNextMonth}
        >
          <ArrowForwardIosIcon />
        </RightCalendarAction>

        <SelectMonths />
        <SelectYears />
      </CalendarActions>

      <CalendarTable>
        <thead>
          <tr>
            {shortWeekDays.map((weekDay, index) => (
              <th key={weekDay + index}>{weekDay}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {calendarWeeks.map(({ days, week }) => (
            <tr key={week}>
              {days.map(({ date, disabled }) => (
                <td key={date.toString()}>
                  <CalendarDay
                    pressed={date.isSame(dayjs(selected))}
                    onPressedChange={() =>
                      onSelected && onSelected(date.toDate())
                    }
                    isDisabled={disabled ?? false}
                    disabled={date.isAfter(dayjs())}
                  >
                    {date.get('date')}
                  </CalendarDay>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </CalendarTable>
    </Container>
  );
}
