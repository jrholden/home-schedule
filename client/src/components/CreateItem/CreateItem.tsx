import React, { useState } from 'react';
import useItemContext from '@/hooks/useItemContext';
import ItemTypeDropdown from '@components/ItemTypeDropdown/ItemTypeDropdown';
import { ItemType } from '@shared/enums';

const CreateItem: React.FC = () => {
  const { addItem } = useItemContext();
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');  
  const [itemType, setItemType] = useState<ItemType>(ItemType.TypeA);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && startDate && endDate) {
      addItem({ title, startDate, endDate, itemType });
      setTitle('');
      setStartDate('');
      setEndDate('');
      setItemType(ItemType.TypeA);
    }
  };

  return (
    <div>
      <h1>Create Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Start Date:</label>
          <input
            type="date"
            id="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="date">End Date:</label>
          <input
            type="date"
            id="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <ItemTypeDropdown value={itemType} onChange={setItemType} />
        <button type="submit">Create Item</button>
      </form>
    </div>
  );
};

export default CreateItem;