import axios from 'axios';
import { Word } from  "../types";

const api = axios.create({
    baseURL: 'https://b59af07216cb4b61.mokky.dev',
});

export const fetchWords = async (): Promise<Word[]> => {
    const response = await api.get('/words');
    console.log(response.data);
    if (Array.isArray(response.data) && response.data.length > 0 && Array.isArray(response.data[0].words)) {
        return response.data[0].words;
    } else {
        throw new Error('Неверный формат данных от API');
    }
};
