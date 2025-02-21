export function getFormattedDate(dataISO: string) {
  const date = new Date(dataISO);

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  };

  const format = new Intl.DateTimeFormat('pt-BR', options);

  return format.format(date);
}

export function getFormattedTime(dataISO: string) {
  const date = new Date(dataISO);

  const time = date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return time;
}
