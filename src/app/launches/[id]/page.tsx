'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchLaunchById } from '@/lib/api';
import { Launch } from '@/types';
import Layout from '@/app/components/Layout';
import Image from 'next/image';
import { getLaunchStatus } from '@/app/utils/statusUtil';

const LaunchDetail = () => {
  const { id } = useParams();
  const [launch, setLaunch] = useState<Launch | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (typeof id === 'string') {
        try {
          const launchData = await fetchLaunchById(id);
          console.log(launchData);
          setLaunch(launchData);
        } catch (error) {
          setError('Error fetching launch data.');
          console.error('Error fetching launch data:', error);
        }
      } else {
        setError('Invalid launch ID.');
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return (
      <Layout>
        <main className="min-h-screen bg-gray-100 p-8">
          <div className="mb-8">
            <h1 className="text-center text-4xl font-bold">Launch Details</h1>
          </div>
          <div className="text-center text-red-600">{error}</div>
        </main>
      </Layout>
    );
  }

  if (!launch) {
    return (
      <Layout>
        <main className="min-h-screen bg-gray-100 p-8">
          <div className="mb-8">
            <h1 className="text-center text-4xl font-bold">Launch Details</h1>
          </div>
          <div className="text-center">Loading...</div>
        </main>
      </Layout>
    );
  }

  // Using our util function to get status text and color
  const { statusText, statusColor } = getLaunchStatus(
    launch.upcoming,
    launch.success,
  );

  return (
    <Layout>
      <main className="min-h-screen p-8">
        <article className="mx-5 rounded-2xl">
          <figure className="max-w-xxl mx-auto aspect-square h-[650px]">
            <Image
              height={650}
              width={1000}
              className="object-fit h-[650px] rounded-xl"
              src={launch.links.patch.small || '/default-patch.jpg'}
              alt={launch.name}
            />
          </figure>
          <div className="max-h-[450px] px-8 md:px-0">
            <section className="md:max-w-xxl mx-auto max-w-xl -translate-y-20 transform rounded-2xl bg-white px-10 py-8 shadow-lg sm:-translate-y-16">
              <div className="space-between flex">
                <h2 className="mb-4 text-center text-3xl font-semibold">
                  {launch.name}
                </h2>
              </div>
              <div className="space-between pb-10">
                <h3 className="text-xl font-semibold">Launched on:</h3>
                <div className="flex items-center justify-between">
                  <time dateTime={new Date(launch.date_utc).toISOString()}>
                    Date: {new Date(launch.date_utc).toLocaleDateString()}
                  </time>
                  <time>{new Date(launch.date_utc).toLocaleTimeString()}</time>
                </div>
              </div>

              <div className="space-between pb-10">
                <h3 className="text-xl font-semibold">Status:</h3>
                <p className={`text-lg font-semibold ${statusColor}`}>
                  {statusText}
                </p>
              </div>
            </section>
          </div>
        </article>
      </main>
    </Layout>
  );
};

export default LaunchDetail;
