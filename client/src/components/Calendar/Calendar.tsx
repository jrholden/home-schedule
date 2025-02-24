'use client';
import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import styles from './Calendar.module.css';
import DataFetcher from '../DataFetcher/DataFetcher';

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const renderHeader = () => {
    return (
      <div className={`${styles.header} row flex-middle`}>
        <div className={`${styles.col} col col-start`}>
          <div className="icon" onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
            back
          </div>
        </div>
        <div className={`${styles.col} col col-center`}>
          <span>
            {format(currentMonth, 'MMMM yyyy')}
          </span>
        </div>
        <div className={`${styles.col} col col-end`} onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
          <div className="icon">next</div>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      <div className={`${styles.days} row`}>
        {daysOfWeek.map(day => (
          <div className={`${styles.col} ${styles.day}`} key={day}>
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, 'd');
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${styles.col} ${styles.cell} ${!isSameMonth(day, currentMonth) ? styles.disabled : isSameDay(day, new Date()) ? styles.selected : ''}`}
            key={day.toString()}
            onClick={() => console.log(format(cloneDay, 'yyyy-MM-dd'))}
          >
            <span className="number">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className={`${styles.row} row`} key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className={styles.body}>{rows}</div>;
  };

  return (
    <div>
      <div className={styles.calendar}>
        {renderHeader()}
        {renderDays()}
        {renderCells()}
      </div>
      <DataFetcher />
    </div>
  );
};

export default Calendar;