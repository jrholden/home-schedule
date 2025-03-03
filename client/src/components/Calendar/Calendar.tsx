'use client';
import React, { useState } from 'react';
import { addMonths, subMonths } from 'date-fns';
import CalendarCells from '@components/CalendarCells/CalendarCells';
import CalendarDays from '@components/CalendarDays/CalendarDays';
import CalendarHeader from '@components/CalendarHeader/CalendarHeader';
import DataFetcher from '@components/DataFetcher/DataFetcher';
import useDateContext from '@/hooks/useDateContext';

import styles from './Calendar.module.css';

const Calendar: React.FC = () => {
  const { currentMonth, setMonthFocus } = useDateContext();

  const handlePrevMonth = () => {
    setMonthFocus(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setMonthFocus(addMonths(currentMonth, 1));
  };

  return (
    <div>
      <div className={styles.calendar}>
        <CalendarHeader
          currentMonth={currentMonth}
          onPrevMonth={handlePrevMonth}
          onNextMonth={handleNextMonth}
        />
        <CalendarDays />
        <CalendarCells />
      </div>
    </div>
  );
};

export default Calendar;