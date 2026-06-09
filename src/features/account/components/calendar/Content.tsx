'use client';

import { PopoverContent } from '@/shared/components/ui/popover';
import { Toggle } from '@/shared/components/ui/toggle';
import { getWeekDays } from '@/shared/utils/get-week-days';
import dayjs from 'dayjs';
import {
  ChevronLeft as ArrowBackIosIcon,
  ChevronRight as ArrowForwardIosIcon,
} from 'lucide-react';
import { ComponentProps, useMemo } from 'react';
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

interface ContentProps extends ComponentProps<typeof PopoverContent> {
  selected?: Date | null;
  onSelected?: (value: Date) => void;
}

interface CalendarDayProps extends ComponentProps<typeof Toggle> {
  isDisabled: boolean;
}

function CalendarDay({
  isDisabled,
  className = '',
  ...props
}: CalendarDayProps) {
  return (
    <Toggle
      className={`cursor-pointer w-[1.1rem] transition-[0.3s] text-center leading-[150%] p-2 all-unset hover:not-disabled:bg-[rgba(215,217,215,0.3)] aria-pressed:text-[#1165BA] aria-pressed:font-bold data-[state=on]:text-[#1165BA] data-[state=on]:font-bold data-disabled:cursor-not-allowed focus-visible:shadow-[0_0_0_2px_rgba(17,101,186,0.6)] ${isDisabled ? 'text-[#D9D9D9]' : ''} ${className}`}
      {...props}
    />
  );
}

export function Content({
  onSelected,
  selected,
  className = '',
  ...props
}: ContentProps) {
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
    <PopoverContent
      align="start"
      className={`bg-white rounded-lg px-10 pt-4 pb-2 relative max-w-84 transition-none shadow-[2px_0_16px_rgba(0,0,0,0.1)] ${className}`}
      {...props}
    >
      <div className="flex gap-2 items-center">
        <button
          onClick={handlePreviousMonth}
          className="all-unset leading-none cursor-pointer text-[#666666] absolute top-5 left-[0.7rem] p-1 disabled:opacity-60 disabled:cursor-not-allowed [&_svg]:w-4.5 [&_svg]:h-4.5 focus-visible:shadow-[0_0_0_2px_rgba(17,101,186,0.6)]"
        >
          <ArrowBackIosIcon />
        </button>
        <button
          disabled={currentDate.isAfter(dayjs())}
          onClick={handleNextMonth}
          className="all-unset leading-none cursor-pointer text-[#666666] absolute top-5 right-2 p-1 disabled:opacity-60 disabled:cursor-not-allowed [&_svg]:w-4.5 [&_svg]:h-4.5 focus-visible:shadow-[0_0_0_2px_rgba(17,101,186,0.6)]"
        >
          <ArrowForwardIosIcon />
        </button>

        <SelectMonths />
        <SelectYears />
      </div>

      <table className="mt-2 table-fixed border-collapse text-[#666666] w-full [&_thead_th]:font-bold [&_thead_th]:leading-[150%] [&_tbody_td]:box-border">
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
      </table>
    </PopoverContent>
  );
}
