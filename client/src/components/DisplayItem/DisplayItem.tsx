import React, { useEffect } from 'react';
import useSingleItemContext from '@/hooks/useSingleItemContext';

export interface DisplayItemProps {
  itemId: any;
}


const DisplayItem: React.FC<DisplayItemProps> = ({ itemId }) => {
  const { item, getItem, loading } = useSingleItemContext();
  useEffect(() => {
    getItem(itemId);
  }, [item]);

  if (loading) {
    return (
      <div>
        Loading...
      </div>
    );
  } else {
    return (
      <ul>
        <li>{item.title}</li>
        <li>{item.itemType}</li>
      </ul>
    );
  }
};

export default DisplayItem;
