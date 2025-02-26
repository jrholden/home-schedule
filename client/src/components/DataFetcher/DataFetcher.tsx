'use client';

import React, { useEffect, useState } from 'react';
import useItemContext from '@/hooks/useItemContext';
import useDateContext from '@/hooks/useDateContext';
import CreateItem from '../CreateItem/CreateItem';

const DataFetcher: React.FC = () => {
  const {items, loading, addItem} = useItemContext();
  const {currentMonth, dateData} = useDateContext();

  let month = currentMonth.toISOString();
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>{month}</h1>
      <CreateItem />
    </div>
  );
};

export default DataFetcher;