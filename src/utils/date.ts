import config from 'config';
import {differenceInDays, format as formatDF, isFirstDayOfMonth as isFirstDayOfMonthDF, parse} from 'date-fns';

export const format = (date: Date, formatStr: string) => formatDF(date, formatStr);

export const parseDate = (dateStr: string) => parse(dateStr, config.date.format, new Date());

export const calculateDaysBetween = (startDate: string, endDate: string) => {
  const start = parseDate(startDate);
  const end = parseDate(endDate);
  return differenceInDays(end, start);
};

export const isFirstDayOfMonth = (date: Date) => isFirstDayOfMonthDF(date);

export const convertDateToKey = (date: Date) => date.toISOString();