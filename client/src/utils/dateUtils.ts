
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import { format as formatTZ, toZonedTime } from 'date-fns-tz';
import {TIMEZONE as tz} from '@shared/constants';

export function getWeekOfMonth(date: Date): number {
  const monthStart: Date = startOfMonth(date);
  const dayOfWeek = monthStart.getDay();
  return Math.ceil((date.getDate() + dayOfWeek) / 7);
}
export const formatDateWithTimezone = (date: Date | string): string => {
  let zonedDate;
  if (typeof date === 'string' && !date.includes('T')) {
    zonedDate = toZonedTime(`${date}T00:00:00`, tz);
  } else {
    zonedDate = toZonedTime(new Date(date), tz);
  }
  return formatTZ(zonedDate, "yyyy-MM-dd'T'HH:mm:ssXXX", { timeZone: tz });

};