import {Backend} from './Backend';

export const ItemService =  {
  // Service logic here
  getItems: async () => {
    try {
      const items = await Backend.get('/items/');
      return items;
    } catch (err:any) {
      throw new Error(err);
    }
  },
  saveItem: async (data:any) => {
    try {
      const items = await Backend.post('/items/save', data);
      return items;
    } catch (err:any) {
      throw new Error(err);
    }
  }
};
