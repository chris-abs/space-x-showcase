import { fetchLaunches } from '@/lib/api';
import { Launch } from '@/types/Launch';

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

export default async function LandingPage() {
  const launches: Launch[] = await fetchLaunches();
  const sortedLaunches = sortLaunches(launches);

  const recentLaunches = sortedLaunches.filter((launch) =>
    isRecentLaunch(launch.date_utc),
  );
  const legacyLaunches = sortedLaunches.filter(
    (launch) => !isRecentLaunch(launch.date_utc),
  );

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8">
        <h1 className="text-center text-4xl font-bold">SpaceX Launches</h1>
      </header>

      <section>
        <div className="mb-4 flex items-center space-x-2">
          <h2 className="text-3xl font-semibold">Recent Launches</h2>
          <p className="text-lg">• last 3 years</p>
        </div>
        <div className="overflow-x-auto p-4">
          <ul className="inline-flex space-x-6">
            {recentLaunches.map((launch) => (
              <li
                key={launch.id}
                className="min-w-[300px] rounded-lg bg-white p-6 shadow-md"
              >
                <article>
                  <h3 className="mb-2 text-2xl font-semibold">{launch.name}</h3>
                  <p className="text-gray-600">
                    {new Date(launch.date_utc).toLocaleDateString()}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 text-3xl font-semibold">Legacy Launches</h2>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {legacyLaunches.map((launch) => (
            <li key={launch.id} className="rounded-lg bg-white p-6 shadow-md">
              <article>
                <h3 className="mb-2 text-2xl font-semibold">{launch.name}</h3>
                <p className="text-gray-600">
                  {new Date(launch.date_utc).toLocaleDateString()}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
