import dayjs from 'dayjs';

export function getRemainingTimeUntilMsTimestamp(timestampMs: number) {
  const timestampDayjs = dayjs(timestampMs);
  const nowDayjs = dayjs();
  if (timestampDayjs.isBefore(nowDayjs)) {
    return {
      seconds: '0',
      minutes: '0',
      hours: '0',
      days: '0',
      now: true
    }
  }
  return {
    seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
    minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
    hours: getRemainingHours(nowDayjs, timestampDayjs),
    days: getRemainingDays(nowDayjs, timestampDayjs),
    now: false
  };
}

function getRemainingSeconds(nowDayjs: dayjs.Dayjs, timestampDayjs: dayjs.Dayjs) {
  const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
  return padWithZeros(seconds, 2);
}

function getRemainingMinutes(nowDayjs: dayjs.Dayjs, timestampDayjs: dayjs.Dayjs) {
  const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
  return padWithZeros(minutes, 2);
}

function getRemainingHours(nowDayjs: dayjs.Dayjs, timestampDayjs: dayjs.Dayjs) {
  const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24;
  return padWithZeros(hours, 2);
}

function getRemainingDays(nowDayjs: dayjs.Dayjs, timestampDayjs: dayjs.Dayjs) {
  const days = timestampDayjs.diff(nowDayjs, 'day');
  return days.toString();
}

function padWithZeros(number: number, minLength: number) {
  const numberString = number.toString();
  if (numberString.length >= minLength) return numberString;
  return "0".repeat(minLength - numberString.length) + numberString;
}