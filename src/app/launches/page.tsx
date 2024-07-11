'use client';
import { useEffect, useState } from 'react';
import { Launch } from '@/types';
import { fetchLaunches } from '@/lib/api';
import Layout from '../components/Layout';
import LaunchCard from '@/app/components/LaunchCard';

const isRecentLaunch = (launchDate: string) => {
  const launchDateTime = new Date(launchDate).getTime();
  const threeYearsAgo = new Date().setFullYear(new Date().getFullYear() - 3);
  return launchDateTime >= threeYearsAgo;
};

const sortLaunches = (launches: Launch[]) => {
  return launches.sort(
    (a, b) => new Date(b.date_utc).getTime() - new Date(a.date_utc).getTime(),
  );
};

const LegacyLaunchesPage = () => {
  const [launches, setLaunches] = useState<Launch[]>([]);

  useEffect(() => {
    const fetchLaunchesData = async () => {
      try {
        const launchesData: Launch[] = await fetchLaunches();
        setLaunches(launchesData);
      } catch (error) {
        console.error('Error fetching launches:', error);
      }
    };

    fetchLaunchesData();
  }, []);

  const sortedLaunches = sortLaunches(launches);
  const recentLaunches = sortedLaunches.filter((launch) =>
    isRecentLaunch(launch.date_utc),
  );
  const legacyLaunches = sortedLaunches.filter(
    (launch) => !isRecentLaunch(launch.date_utc),
  );

  return (
    <Layout>
      <main className="min-h-screen p-8">
        <h1 className="py-8 text-center text-4xl font-bold text-white">
          SpaceX Launches
        </h1>

        <section>
          <div className="mb-4 flex items-center space-x-2 text-white">
            <h2 className="text-3xl font-semibold">Recent Launches</h2>
            <p className="text-lg">• last 3 years</p>
          </div>
          <div className="overflow-x-scroll p-4">
            <ul className="inline-flex space-x-6">
              {recentLaunches.map((launch) => (
                <li
                  key={launch.id}
                  className="min-w-[300px] cursor-pointer rounded-lg p-6 shadow-md"
                >
                  <LaunchCard
                    id={launch.id}
                    name={launch.name}
                    date={launch.date_utc}
                    webcast={launch.links.webcast}
                    img={launch.links.patch.small}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-semibold text-white">
            Legacy Launches
          </h2>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {legacyLaunches.map((launch) => (
              <li
                key={launch.id}
                className="cursor-pointer rounded-lg p-6 shadow-md"
              >
                <LaunchCard
                  id={launch.id}
                  name={launch.name}
                  date={launch.date_utc}
                  webcast={launch.links.webcast}
                  img={launch?.links?.patch?.small}
                />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  );
};

export default LegacyLaunchesPage;
