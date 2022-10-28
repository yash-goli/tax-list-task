import { API_URL } from '../../config';
import { TaxItems, TaxItemRow} from '../models/types';

const api = async (): Promise<TaxItems> => {
  try {
    const result = await fetch(API_URL);
    return await result.json() as TaxItems;
  } catch (e) {
    console.error(e);
    throw new Error('Error: fetching data');
  }
};

export default api;