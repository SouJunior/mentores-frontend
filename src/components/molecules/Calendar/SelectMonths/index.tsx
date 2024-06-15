import { Select } from '@/components/atoms/Select';
import { SelectItem } from '@/components/atoms/Select/SelectItem';
import { useCalendarContext } from '../Root';

export function SelectMonths() {
  const { months, currentDate, setCurrentDate } = useCalendarContext();

  function handleMonthSelect(index: string) {
    setCurrentDate(currentDate.set('month', Number(index)));
  }

  const currentMonth = String(currentDate.month());
  return (
    <Select
      value={currentMonth}
      onValueChange={handleMonthSelect}
      placeholder="Abril"
    >
      {months.map((month, index) => (
        <SelectItem value={String(index)} key={month}>
          {month}
        </SelectItem>
      ))}
    </Select>
  );
}
