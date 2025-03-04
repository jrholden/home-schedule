import { Backend } from './Backend';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import { getWeekOfMonth } from '@utils/dateUtils';
import { promiseHooks } from 'v8';
export const ItemService = {
  // Service logic here
  getItems: async (currentMonth: Date, dateData: any[]) => {
    const formattedDate = encodeURIComponent(currentMonth.toISOString());
    try {

      if (dateData?.length > 0) {
        let mockDateData: any[] = dateData.map(obj => ({ ...obj }));;
        //create copy so we don't mutate the original
        mockDateData = dateData.map(obj => ({ ...obj }));
        const result = await Backend.get(`/items/get?currentMonth=${formattedDate}`);
        if (result.items) {
          result.items.map((item: any) => {
            const realDate = new Date(item.date);
            const key = format(realDate, 'yyyy-MM-dd');
            const weekIndex = getWeekOfMonth(realDate) - 1;
            mockDateData[weekIndex][key].push(item.item);
          });
          return mockDateData;
        }
      }
      return dateData;
    } catch (err: any) {
      throw new Error(err);
    }
  },
  saveItem: async (data: any) => {
    try {
      const savedItemId = await Backend.post('/item/save', data);
      return savedItemId;
    } catch (err: any) {
      throw new Error(err);
    }
  },
  getItemTitle: async (_id: string) => {
    try {
      const itemTitle = await Backend.post('/item/get/title', { _id: _id });
      return itemTitle;
    } catch (err: any) {
      throw new Error(err);
    }
  },
  getItemType: async (_id: string) => {
    try {
      const itemType = await Backend.post('/item/get/type', { _id: _id });
      return itemType;
    } catch (err: any) {
      throw new Error(err);
    }
  },
  patchItemTitle: async (_id: string, title: string) => {
    try {
      const status = await Backend.patch('/item/patch/title', { _id: _id, title: title });
      return status;
    } catch (err: any) {
      throw new Error(err);
    }
  },
  patchItemType: async (_id: string, itemType: string) => {
    try {
      const status = await Backend.patch('/item/patch/title', { _id: _id, itemType: itemType });
      return status;
    } catch (err: any) {
      throw new Error(err);
    }
  },
  getItemData: async (_id: string) => {
    let promises: Promise<any>[] = [];
    promises.push(ItemService.getItemTitle(_id));
    promises.push(ItemService.getItemType(_id));

    let result = await Promise.all(promises);
    return result.reduce((acc, obj) => {
      return { ...acc, ...obj };
    }, {});
  }
};
