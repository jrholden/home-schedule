import React from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import styles from '@components/Calendar/Calendar.module.css';
import useItemContext from '@/hooks/useItemContext';

interface CalendarCellsProps {
  currentMonthData: any;
  currentMonth: Date;
}

const CalendarCells: React.FC<CalendarCellsProps> = ({ currentMonth, currentMonthData }) => {
  const {items, loading} = useItemContext();
  const onCellClick = (dateData: any) => {
    console.log(dateData);
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if(items){
    currentMonthData = items;
  }

  let rows = [];
  let cols = [];

  for (let i = 0; i < currentMonthData.length; i++) {
    let weeks = currentMonthData[i];
    let key = '';
    for (let j = 0; j < weeks.length; j++) {
      let currentDay = weeks[j].date;
      let currentDayItemCount = weeks[j].items.length;
      let formattedDate = format(currentDay, 'd');
      key=currentDay.toString();
      cols.push(
        <div
          className={`col cell ${styles.col} ${styles.cell} ${!isSameMonth(currentDay, currentMonth) ? styles.disabled : isSameDay(currentDay, new Date()) ? styles.selected : ''}`}
          key={key}
          onClick={() => onCellClick(weeks[j])}
        >
          <span className={`number ${currentDayItemCount > 0 ? styles.bold : ''}`}>{formattedDate}</span>
        </div>
      );
    }
    rows.push(
      <div className={`${styles.row} row`} key={key}>
        {cols}
      </div>
    );
    cols = [];
  }
  return <div className={styles.body}>{rows}</div>;
};

export default CalendarCells;