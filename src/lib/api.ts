import axios from 'axios';

import { Company, Launch } from '@/types';

const api = axios.create({
  // public facing api url doesn't typically require env variables but
  // added anyway for this instance
  baseURL: process.env.NEXT_PUBLIC_SPACEX_API_BASE_URL,
});

export async function fetchCompany(): Promise<Company> {
  try {
    const response = await api.get('/company');
    return response.data as Company;
  } catch (error) {
    console.error('Error fetching company data:', error);
    throw error;
  }
}

export async function fetchLaunches(): Promise<Launch[]> {
  try {
    const response = await api.get('/launches');
    return response.data;
  } catch (error) {
    console.error('Error fetching launches:', error);
    return [];
  }
}

export async function fetchUpcomingLaunches(): Promise<Launch[]> {
  try {
    const response = await api.get('/launches/upcoming');
    return response.data as Launch[];
  } catch (error) {
    console.error('Error fetching upcoming launches:', error);
    throw new Error('Error fetching upcoming launches');
  }
}

export async function fetchLaunchById(id: string): Promise<Launch | null> {
  try {
    const response = await api.get(`/launches/${id}`);
    return response.data as Launch;
  } catch (error) {
    console.error(`Error fetching launch ${id}:`, error);
    return null;
  }
}
