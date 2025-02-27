import React from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import styles from '@components/Calendar/Calendar.module.css';

interface CalendarHeaderProps {
  currentMonth: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ currentMonth, onPrevMonth, onNextMonth }) => {
  return (
    <div className={`${styles.header} row flex-middle`}>
      <button className={`${styles.col} col col-start`} onClick={onPrevMonth}>
        <div className="icon">back</div>
      </button>
      <div className={`${styles.col} col col-center`}>
        <span>{format(currentMonth, 'MMMM yyyy')}</span>
      </div>
      <button className={`${styles.col} col col-end`} onClick={onNextMonth}>
        <div className="icon">next</div>
      </button>
    </div>
  );
};

export default CalendarHeader;