'use client';

import { createContext, useState, useEffect } from "react";
import { ItemService } from '@services/ItemService';

export interface ItemDataI {
  title: string,
  itemType: string
}

const SingleItemContext = createContext({
  item:{title:'',itemType:''},
  loading: true,
  getItem: (_id:string) => {}
})

export const SingleItemContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [item, setItem] = useState<ItemDataI>({title:'',itemType:''});
  const [itemId, setItemId] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItemData = async () => {
      setLoading(true);
      try{
        ItemService.getItemData(itemId).then((data) => {
          console.log(data);
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