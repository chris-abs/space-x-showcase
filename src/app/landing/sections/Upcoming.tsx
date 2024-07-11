import { Launch } from '@/types';
import LaunchCard from '@/app/components/LaunchCard';

interface UpcomingLaunchesProps {
  launches: Launch[];
}

const UpcomingLaunches: React.FC<UpcomingLaunchesProps> = ({ launches }) => {
  return (
    <article className="mb-8">
      <h2 className="mb-4 text-center text-3xl font-semibold text-white">
        Upcoming Launches
      </h2>
      <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {launches.map((launch) => (
          <LaunchCard
            key={launch.id}
            id={launch.id}
            date={launch.date_utc}
            name={launch.name}
            webcast={launch.links.webcast}
            img={launch.links.patch.small}
          />
        ))}
      </section>
    </article>
  );
};

export default UpcomingLaunches;
