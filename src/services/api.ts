import axios from 'axios';
import { UnsplashApiResponse } from '../types/image.ts';

const API_KEY: string = import.meta.env
  .VITE_UNSPLASH_API_KEY;

const BASE_API_URL: string = 'https://api.unsplash.com';

export const fetchImages = async (
  query: string,
  page: number
) => {
  try {
    const response = await axios.get<UnsplashApiResponse>(
      `${BASE_API_URL}search/photos`,
      {
        params: {
          query: query,
          page: page,
          per_page: 12,
          client_id: API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
