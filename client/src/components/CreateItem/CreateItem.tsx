import React, { useState } from 'react';
import useItemContext from '@/hooks/useItemContext';
import ItemTypeDropdown from '@components/ItemTypeDropdown/ItemTypeDropdown';
import { ItemType } from '@shared/enums';
import { formatDateWithTimezone } from '@/utils/dateUtils';
import styles from './CreateItem.module.css';

interface CreateItemProps {
  closeSomething?: () => void;
  initialStartDate?: string;
  initialEndDate?: string;
}

const CreateItem: React.FC<CreateItemProps> = ({closeSomething, initialStartDate, initialEndDate}) => {
  const { addItem } = useItemContext();
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);  
  const [itemType, setItemType] = useState<ItemType>(ItemType.TypeA);

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStartDate = e.target.value;
    setStartDate(newStartDate);
    if (!endDate || new Date(endDate) < new Date(newStartDate)) {
      setEndDate(newStartDate);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && startDate && endDate) {
      let betterStartDate = formatDateWithTimezone(startDate);
      let betterEndDate = formatDateWithTimezone(endDate);
      addItem({title: title, startDate: betterStartDate, endDate: betterEndDate, itemType:itemType});
      setTitle('');
      setStartDate('');
      setEndDate('');
      setItemType(ItemType.TypeA);
      if(closeSomething){
        closeSomething();
      }
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1>Create Item</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.formLabel}>Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="date" className={styles.formLabel}>Start Date:</label>
          <input
            type="date"
            id="date"
            value={startDate}
            onChange={(e) => handleStartDateChange(e)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="date" className={styles.formLabel}>End Date:</label>
          <input
            type="date"
            id="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
        <ItemTypeDropdown value={itemType} onChange={setItemType} />
        </div>
        <button type="submit" className={styles.formButton}>Create Item</button>
      </form>
    </div>
  );
};

export default CreateItem;