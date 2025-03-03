import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import styles from '@components/Calendar/Calendar.module.css';
import useItemContext from '@/hooks/useItemContext';
import useDateContext from '@/hooks/useDateContext';
import { formatDateWithTimezone } from '@/utils/dateUtils';
import BasicModal from '@components/BasicModal/BasicModal';
import DisplayItems from '@components/DisplayItems/DisplayItems'
import CalendarCell from '@components/CalendarCell/CalendarCell';

import CreateItem from '@components/CreateItem/CreateItem';
import ItemsModal from '@components/ItemsModal/ItemsModal';

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
      let cellKey = `cell-${i}-${date}`;
      cols.push(
        <CalendarCell key={cellKey} items={items as any[]} currentDay={currentDay} onCellClick={onCellClick} />
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
      <ItemsModal handleClose={handleClose} modalItems={modalItems} modalOpen={modalOpen} currentDayCode={currentDayCode}/>
    </div>
  )
};

export default CalendarCells;