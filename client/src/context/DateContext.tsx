'use client';

import { createContext, useState, useEffect } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import { formatDateWithTimezone } from '@/utils/dateUtils';

const DateContext = createContext({
  currentMonth: new Date(),
  dateData: [],
  setMonthFocus: (date: Date) => { }, // Placeholder function to avoid errors
  resetDateData: () => { },
});

export const DateContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentMonth, setCurrentMonth] = useState((new Date()));
  const [dateData, setDateData] = useState<any>([]);
  useEffect(() => {
    console.log("DATECONTEXT USE EFFECT BBABY");
    const formattedCurrentMonth = new Date(formatDateWithTimezone(currentMonth));
    const weeks = generateWeeks(formattedCurrentMonth);
    setDateData(weeks);
  }, [currentMonth]);

  const generateWeeks = (currentMonth: Date) => {
    const monthStart: Date = startOfMonth(currentMonth);
    const monthEnd: Date = endOfMonth(currentMonth);
    const startDate: Date = startOfWeek(monthStart);
    const endDate: Date = endOfWeek(monthEnd);

    const weeks = [];
    let day = startDate;
    while (day <= endDate) {
      let days: any = {};
      for (let i = 0; i < 7; i++) {
        const key = format(day, 'yyyy-MM-dd');
        const value: any[] = [];
        days[key] = value;
        day = addDays(day, 1);
      }
      weeks.push(days);
      days = [];
    }
    return weeks;
  };
  const setMonthFocus = (date: Date) => {
    setCurrentMonth(date);
  };
  const resetDateData = () => {
    const weeks = generateWeeks(currentMonth);
    setDateData(weeks);
  }


  return (
    <DateContext.Provider value={{ dateData, currentMonth, setMonthFocus, resetDateData }}>
      {children}
    </DateContext.Provider>
  );
}

export default DateContext;