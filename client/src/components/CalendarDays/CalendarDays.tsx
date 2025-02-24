import React from 'react';
import styles from '@components/Calendar/Calendar.module.css';

const CalendarDays: React.FC = () => {
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

export default CalendarDays;