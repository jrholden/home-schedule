import { Backend } from './Backend';

export const ItemService = {
  // Service logic here
  getItems: async (currentMonth: Date, dateData?:any[]) => {
    const formattedDate = encodeURIComponent(currentMonth.toISOString());
    try {
      const result = await Backend.get(`/items/get?currentMonth=${formattedDate}`);
      if(dateData){
        for (let i = 0; i < result.items.length; i++) {
          const itemDate = new Date(result.items[i].date);
          const itemWeek = Math.floor((itemDate.getDate() - 1) / 7);
          const itemDay = itemDate.getDay();
          dateData[itemWeek][itemDay].items.push(result.items[i].item);
        }  
      }
      return dateData;
    } catch (err: any) {
      throw new Error(err);
    }
  },
  saveItem: async (data: any) => {
    try {
      const savedItemId = await Backend.post('/items/save', data);
      return savedItemId;
    } catch (err: any) {
      throw new Error(err);
    }
  }
};
