import {Backend} from './Backend';

export const ItemService =  {
  // Service logic here
  getItems: async () => {
    try {
      const result = await Backend.get('/items/get');
      return result.items;
    } catch (err:any) {
      throw new Error(err);
    }
  },
  saveItem: async (data:any) => {
    try {
      const savedItemId = await Backend.post('/items/save', data);
      return savedItemId;
    } catch (err:any) {
      throw new Error(err);
    }
  }
};
