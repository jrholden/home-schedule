import React from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import styles from '@components/Calendar/Calendar.module.css';

interface CalendarCellsProps {
  currentMonthData: any;
  currentMonth: Date;
}

const CalendarCells: React.FC<CalendarCellsProps> = ({ currentMonth, currentMonthData }) => {
  if (!currentMonthData) {
    return <div>Loading...</div>;
  }

  let rows = [];
  let cols = [];
  let currentDay:Date = currentMonthData[0][0].date;

  for (let i = 0; i < currentMonthData.length; i++) {
    let weeks = currentMonthData[i];
    let key = '';
    for (let j = 0; j < weeks.length; j++) {
      currentDay = weeks[j].date;
      let formattedDate = format(currentDay, 'd');
      key=currentDay.toString();
      cols.push(
        <div
          className={`col cell ${styles.col} ${styles.cell} ${!isSameMonth(currentDay, currentMonth) ? styles.disabled : isSameDay(currentDay, new Date()) ? styles.selected : ''}`}
          key={key}
          onClick={() => console.log(format(currentDay, 'yyyy-MM-dd'))}
        >
          <span className="number">{formattedDate}</span>
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