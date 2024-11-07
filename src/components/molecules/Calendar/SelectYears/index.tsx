import { Select } from '@/components/atoms/Select';
import { SelectItem } from '@/components/atoms/Select/SelectItem';
import { useCalendarContext } from '../Root';

export function SelectYears() {
  const { years, currentDate, setCurrentDate } = useCalendarContext();

  function handleYearSelect(year: string) {
    setCurrentDate(currentDate.set('year', Number(year)));
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
