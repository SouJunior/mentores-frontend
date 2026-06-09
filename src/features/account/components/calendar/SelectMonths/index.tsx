import { Select } from '@/components/select';
import { SelectItem } from '@/components/select/SelectItem';
import { useCalendarContext } from '../Root';

export function SelectMonths() {
  const { months, currentDate, setCurrentDate } = useCalendarContext();

  function handleMonthSelect(value: unknown) {
    setCurrentDate(currentDate.set('month', Number(value)));
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
