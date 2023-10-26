import { getWeekDays } from '@/utils/get-week-days'
import * as Popover from '@radix-ui/react-popover'
import dayjs from 'dayjs'
import { useMemo, useState } from 'react'
import {
  CalendarActions,
  CalendarDay,
  CalendarTable,
  Container,
  LeftCalendarAction,
  RightCalendarAction,
} from './styles'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { useCalendarContext } from './Root'
import { SelectMonths } from './SelectMonths'
import { SelectYears } from './SelectYears'

interface CalendarWeek {
  week: number
  days: {
    date: dayjs.Dayjs
    notCurrentMonth?: boolean
  }[]
}

type CalendarWeeks = CalendarWeek[]

interface ContentProps extends Popover.PopoverContentProps {
  selected?: Date | null
  onSelected?: (value: Date) => void
}

export function Content({ onSelected, selected, ...props }: ContentProps) {
  const { currentDate, setCurrentDate } = useCalendarContext()

  const shortWeekDays = getWeekDays()

  const calendarWeeks = useMemo(() => {
    const daysInMonthArray = Array.from({
      length: currentDate.daysInMonth(),
    }).map((_, index) => currentDate.set('date', index + 1))

    const firstWeekDay = currentDate.get('day')

    const previousMonthFillArray = Array.from({
      length: firstWeekDay,
    })
      .map((_, index) => currentDate.subtract(index + 1, 'day'))
      .reverse()

    const lastDayInCurrentMonth = currentDate.set(
      'date',
      currentDate.daysInMonth()
    )
    const lastWeekDay = lastDayInCurrentMonth.get('day')

    const nextMonthFillArray = Array.from({
      length: 6 - lastWeekDay,
    }).map((_, index) => {
      return lastDayInCurrentMonth.add(index + 1, 'day')
    })

    const calendarDays = [
      ...previousMonthFillArray.map((date) => ({
        date,
        notCurrentMonth: true,
      })),
      ...daysInMonthArray.map((date) => ({ date })),
      ...nextMonthFillArray.map((date) => ({ date, notCurrentMonth: true })),
    ]

    const calendarWeeks = calendarDays.reduce<CalendarWeeks>(
      (weeks, _, i, original) => {
        const isNewWeek = i % 7 === 0

        if (isNewWeek) {
          weeks.push({
            week: i / 7 + 1,
            days: original.slice(i, i + 7),
          })
        }

        return weeks
      },
      []
    )

    return calendarWeeks
  }, [currentDate])

  function handlePreviousMonth() {
    const previousMonthDate = currentDate.subtract(1, 'month')
    setCurrentDate(previousMonthDate)
  }

  function handleNextMonth() {
    const nextMonthDate = currentDate.add(1, 'month')
    setCurrentDate(nextMonthDate)
  }

  const currentYear = new Date().getFullYear()

  return (
    <Popover.Portal>
      <Container align="start" {...props}>
        <CalendarActions>
          <LeftCalendarAction onClick={handlePreviousMonth}>
            <ArrowBackIosIcon />
          </LeftCalendarAction>
          <RightCalendarAction
            disabled={currentDate.isAfter(dayjs(`${currentYear}-12`))}
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
                {days.map(({ date, notCurrentMonth }) => (
                  <td key={date.toString()}>
                    <CalendarDay
                      pressed={date.isSame(dayjs(selected))}
                      onPressedChange={() =>
                        onSelected && onSelected(date.toDate())
                      }
                      isNotCurrentMonth={notCurrentMonth ?? false}
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
    </Popover.Portal>
  )
}
