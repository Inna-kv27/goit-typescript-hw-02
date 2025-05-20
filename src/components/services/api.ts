import axios from 'axios';

const API_KEY =
  'ZromXuc4KLg-EaBhN7hhFghXlYnV31pPDizBcyRwx9Y';

axios.defaults.baseURL = 'https://api.unsplash.com/';

export const fetchImages = async (query, page) => {
  try {
    const response = await axios.get('/search/photos', {
      params: {
        query: query,
        page: page,
        per_page: 12,
        client_id: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
