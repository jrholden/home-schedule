import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import styles from '@components/Calendar/Calendar.module.css';
import useItemContext from '@/hooks/useItemContext';
import useDateContext from '@/hooks/useDateContext';
import { formatDateWithTimezone } from '@/utils/dateUtils';
import BasicModal from '@components/BasicModal/BasicModal';
import DisplayItems from '@components/DisplayItems/DisplayItems'

import CreateItem from '../CreateItem/CreateItem';

interface CalendarCellsProps {

}

const CalendarCells: React.FC<CalendarCellsProps> = () => {
  const { currentMonth } = useDateContext();
  const { items, loading } = useItemContext();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalItems, setModalItems] = useState<any[]>([]);
  const [currentDayCode, setCurrentDayCode] = useState<any>('');
  const onCellClick = (dateItems: any, currentDay:any) => {
    setCurrentDayCode(format(new Date(currentDay), 'yyyy-MM-dd'));
    setModalItems(dateItems);
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  let rows: any[] = [];
  let cols: any[] = [];
  for (let i = 0; i < items.length; i++) {
    const week = items[i];
    let rowKey = "row-" + i;
    for (const [date, items] of Object.entries(week)) {
      let currentDay = new Date(formatDateWithTimezone(date));
      let currentDayItemCount = 0;
      let formattedDate = format(currentDay, 'd');
      if ((items as any[]).length > 0) {
        currentDayItemCount = (items as any[]).length;
      }
      let colKey = currentDay.toString();

      cols.push(
        <div
          className={`col cell ${styles.col} ${styles.cell} ${!isSameMonth(currentDay, currentMonth) ? styles.disabled : isSameDay(currentDay, new Date()) ? styles.selected : ''}`}
          key={colKey}
          onClick={() => onCellClick(items, currentDay)}
        >
          <span className={`number ${currentDayItemCount > 0 ? styles.bold : ''}`}>{formattedDate}</span>
        </div>
      );
    }
    rows.push(
      <div className={`${styles.row} row`} key={rowKey}>
        {cols}
      </div>
    );
    cols = [];
  }


  return (
    <div className={styles.body}>
      {rows}
      <BasicModal open={modalOpen} handleClose={handleClose} title="Items">
        <DisplayItems items={modalItems} />
        <CreateItem closeSomething={handleClose} initialStartDate={currentDayCode} initialEndDate={currentDayCode}/>
      </BasicModal>
    </div>
  )
};

export default CalendarCells;