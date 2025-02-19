'use client';

import React, { useEffect, useState } from 'react';
import { Backend } from '@services/Backend';

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await Backend.get(`${process.env.NEXT_PUBLIC_API_URL}/`);
        const result2 = await Backend.get(`${process.env.NEXT_PUBLIC_API_URL}/api/`);
        setData(result2);
      } catch (err) {
        setError('Failed to fetch data + ' + err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataFetcher;