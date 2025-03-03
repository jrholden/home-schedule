import React from 'react';
import { format, isSameMonth, isSameDay } from 'date-fns';
import useDateContext from '@hooks/useDateContext';

import styles from '@components/Calendar/Calendar.module.css';

interface CalendarCellProps {
  currentDay: Date,
  items: any[],
  onCellClick: (items: any[], currentDay:Date) => void

}

const CalendarCell: React.FC<CalendarCellProps> = ({currentDay, items, onCellClick}) => {
  const { currentMonth } = useDateContext();
  const onMyCellClick = () => {
    onCellClick(items, currentDay)
  }
  let formattedDate = format(currentDay, 'd');
  let colKey = currentDay.toString();
  return (
    <div
          className={`col cell ${styles.col} ${styles.cell} ${!isSameMonth(currentDay, currentMonth) ? styles.disabled : isSameDay(currentDay, new Date()) ? styles.selected : ''}`}
          key={colKey}
          onClick={() => onMyCellClick()}
        >
          <span className={`number ${items.length > 0 ? styles.bold : ''}`}>{formattedDate}</span>
        </div>
  );
};

export default CalendarCell;
