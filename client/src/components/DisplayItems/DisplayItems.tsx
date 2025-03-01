import React, { ReactNode } from 'react';
import DisplayItem from '@components/DisplayItem/DisplayItem';
import { SingleItemContextProvider } from '@/context/SingleItemContext';

export interface DisplayItemsProps {
  items: any[];
}

const DisplayItems: React.FC<DisplayItemsProps> = ({ items }) => {

  console.log(items)

  const itemContent = items.map((item) => {
    return (
      <li key={item._id}>
        <SingleItemContextProvider>
          <DisplayItem itemId={item._id} />
        </SingleItemContextProvider>
      </li>
    )
  })

  return (

    <ul>
      {itemContent}
    </ul>
  );
};

export default DisplayItems;
