import axios from 'axios';

export const fetchBookData = async (id: string) => {
  try {
    const response = await axios.get(`${process.env.URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении данных о книге:', error);
  }
};
