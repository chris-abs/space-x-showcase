import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SPACEX_API_BASE_URL,
});

export async function fetchLaunches() {
  try {
    const response = await api.get('/launches');
    return response.data;
  } catch (error) {
    console.error('Error fetching launches:', error);
    return [];
  }
}
