import React from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import styles from '@components/Calendar/Calendar.module.css';

interface CalendarCellsProps {
  currentMonth: Date;
}

const CalendarCells: React.FC<CalendarCellsProps> = ({ currentMonth }) => {
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

export default CalendarCells;