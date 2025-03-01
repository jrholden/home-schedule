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
      <div>
        {item.title}
      </div>
    );
  }
};

export default DisplayItem;
