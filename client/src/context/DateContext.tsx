'use client';

import { createContext, useState, useEffect } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';


const DateContext = createContext({
  currentMonth: new Date(),
  dateData: [],
  setMonthFocus: (date: Date) => { }, // Placeholder function to avoid errors
});

export const DateContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [dateData, setDateData] = useState<any>(null);
  useEffect(() => {
    const monthStart: Date = startOfMonth(currentMonth);
    const monthEnd: Date = endOfMonth(currentMonth);
    const startDate: Date = startOfWeek(monthStart);
    const endDate: Date = endOfWeek(monthEnd);

    const weeks = [];
    let days: any[] = [];
    let day = startDate;
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        days.push({date: day, items: []});
        day = addDays(day, 1);
      }
      weeks.push(days);
      days = [];
    }
    setDateData(weeks);
  }, [currentMonth]);

  const setMonthFocus = (date: Date) => {
    setCurrentMonth(date);
  };


  return (
    <DateContext.Provider value={{ dateData, currentMonth, setMonthFocus }}>
      {children}
    </DateContext.Provider>
  );
}

export default DateContext;