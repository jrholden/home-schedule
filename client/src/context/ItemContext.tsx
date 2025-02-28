'use client';

import { createContext, useState, useEffect } from "react";
import { ItemService } from '@services/ItemService';
import useDateContext from "@hooks/useDateContext";


const ItemContext = createContext({
  items: [],
  loading: true,
  addItem: (newItem: any) => { },// Placeholder function to avoid errors
});

export const ItemContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { currentMonth, dateData, resetDateData } = useDateContext();
  const [items, setItems] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      
    console.log("ITEMCONTEXT ITEM ITEM CONTEXT FUCK YEAH");
      let result: any;
      try {
        setLoading(true);
        if (dateData && dateData.length > 0) {
          result = await ItemService.getItems(currentMonth, dateData);
          setItems(result);
        }

      } catch (err) {
        setError('Failed to fetch data + ' + err);
      } finally {
        if (result) {
          setLoading(false);
        }
      }
    };
    fetchItems();
  }, [currentMonth, dateData]);

  const addItem = async (newItem: any) => {
    try {
      setLoading(true);
      const savedItem = await ItemService.saveItem(newItem);
      resetDateData();

    } catch (err) {
      setError('Failed to fetch data + ' + err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ItemContext.Provider value={{ items, loading, addItem }}>
      {children}
    </ItemContext.Provider>
  );
}

export default ItemContext;