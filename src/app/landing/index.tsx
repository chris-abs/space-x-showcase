'use client';
import { useEffect, useState } from 'react';

import { Company, Launch } from '@/types';
import { fetchCompany, fetchUpcomingLaunches } from '@/lib/api';
import Layout from '../components/Layout';
import Hero from './sections/Hero';
import UpcomingLaunches from './sections/Upcoming';
import Details from './sections/Company';

const Landing = () => {
  const [company, setCompany] = useState<Company | null>(null);
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const companyData = await fetchCompany();
        setCompany(companyData);
      } catch (error) {
        setError('Error fetching company data. Please try again later.');
        console.error('Error fetching company data:', error);
      }

      try {
        const launchesData = await fetchUpcomingLaunches();
        setLaunches(launchesData);
      } catch (error) {
        console.error('Error fetching upcoming launches:', error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <main className="min-h-screen bg-gray-100 p-8">
        <header className="mb-8">
          <h1 className="text-center text-4xl font-bold">SpaceX Launches</h1>
        </header>
        <div className="text-center text-red-600">{error}</div>
      </main>
    );
  }

  return (
    <Layout>
      <Hero company={company} />
      <main className="min-h-screen p-8">
        <UpcomingLaunches launches={launches} />
        <Details company={company} />
      </main>
    </Layout>
  );
};

export default Landing;
