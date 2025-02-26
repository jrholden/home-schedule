'use client';

import { createContext, useState, useEffect } from "react";
import { ItemService } from '@services/ItemService';
import useDateContext from "@hooks/useDateContext";


const ItemContext = createContext({
  items: [],
  loading: true,
  addItem: (newItem: any) => { }, // Placeholder function to avoid errors
});

export const ItemContextProvider = ({ children }: { children: React.ReactNode }) => {
  const {currentMonth, dateData} = useDateContext();
  const [items, setItems] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const result = await ItemService.getItems(currentMonth, dateData);
        console.log("RESULT");
        console.log(result);
        setItems(result);
      } catch (err) {
        setError('Failed to fetch data + ' + err);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [currentMonth, dateData]);

  const addItem = async (newItem: any) => {
    try {
      setLoading(true);
      const savedItem = await ItemService.saveItem(newItem);
      if(currentMonth.getMonth()+1 === newItem.startDate.getMonth()+1 && currentMonth.getFullYear() === newItem.startDate.getFullYear()){
        setItems((prevItems: any) => [...prevItems, savedItem]);
      }else{
        setItems((prevItems: any) => [...prevItems]);
      }
      
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