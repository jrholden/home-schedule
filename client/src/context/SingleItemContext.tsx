'use client';

import { createContext, useState, useEffect } from "react";
import { ItemService } from '@services/ItemService';

export interface ItemDataI {
  title: string
}

const SingleItemContext = createContext({
  item:{title:''},
  loading: true,
  getItem: (_id:string) => {}
})

export const SingleItemContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [item, setItem] = useState<ItemDataI>({title:''});
  const [itemId, setItemId] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItemData = async () => {
      setLoading(true);
      try{
        ItemService.getItemTitle(itemId).then((data) => {
          setItem(data);
          setLoading(false);
        });
      }catch (error){
        console.log(error);
      }
    }

    if(itemId){
      fetchItemData();
    }
  }, [itemId]);

  const getItem = async(_id: string) => {
    setItemId(_id);
  };

  return (
    <SingleItemContext.Provider value={{ item, loading, getItem }}>
      {children}
    </SingleItemContext.Provider>
  );
}

export default SingleItemContext;