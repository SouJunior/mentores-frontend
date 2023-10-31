import * as Popover from '@radix-ui/react-popover'
import dayjs from 'dayjs'
import { ReactNode, createContext, useContext, useMemo, useState } from 'react'

interface RootProps extends Popover.PopoverProps {
  children: ReactNode
}

interface CalendarContextType {
  currentDate: dayjs.Dayjs
  setCurrentDate: (value: dayjs.Dayjs) => void
  months: string[]
  years: number[]
}

const CalendarContext = createContext({} as CalendarContextType)

export function Root({ children, ...props }: RootProps) {
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set('date', 1)
  })

  const months = useMemo(() => {
    const formatter = new Intl.DateTimeFormat('pt-BR', {
      month: 'long',
    })

    return Array.from(Array(12).keys()).map((number) => {
      const monthName = formatter.format(new Date(Date.UTC(2021, number + 1)))
      return monthName
        .substring(0, 1)
        .toUpperCase()
        .concat(monthName.substring(1))
    })
  }, [])

  const years = useMemo(() => {
    const currentYear = new Date().getFullYear()
    const lessYearRange = currentYear - 80
    const range = Array.from(
      { length: (lessYearRange - currentYear) / -1 + 1 },
      (_, i) => currentYear + i * -1
    )
    return range
  }, [])

  return (
    <CalendarContext.Provider
      value={{ months, years, currentDate, setCurrentDate }}
    >
      <Popover.Root {...props}>{children}</Popover.Root>
    </CalendarContext.Provider>
  )
}

export const useCalendarContext = () => useContext(CalendarContext)
