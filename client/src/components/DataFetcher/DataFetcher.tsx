'use client';

import React, { useEffect, useState } from 'react';
import useItemContext from '@/hooks/useItemContext';

const DataFetcher: React.FC = () => {
  const {items, loading, addItem} = useItemContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(items, null, 2)}</pre>
    </div>
  );
};

export default DataFetcher;