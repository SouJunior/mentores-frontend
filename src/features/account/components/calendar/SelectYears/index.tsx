import { Select } from '@/shared/components/select';
import { SelectItem } from '@/shared/components/select/SelectItem';
import { useCalendarContext } from '../Root';

export function SelectYears() {
  const { years, currentDate, setCurrentDate } = useCalendarContext();

  function handleYearSelect(value: unknown) {
    setCurrentDate(currentDate.set('year', Number(value)));
  }

  const currentYear = String(currentDate.year());

  return (
    <Select
      value={currentYear}
      onValueChange={handleYearSelect}
      placeholder="Abril"
    >
      {years.map(year => (
        <SelectItem value={String(year)} key={year}>
          {year}
        </SelectItem>
      ))}
    </Select>
  );
}
