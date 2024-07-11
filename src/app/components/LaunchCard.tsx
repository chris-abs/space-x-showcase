import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from './Button';

interface LaunchCardProps {
  id: string;
  name: string;
  date: string;
  webcast: string;
  img: string | null;
}

const LaunchCard: React.FC<LaunchCardProps> = ({
  name,
  date,
  webcast,
  img,
  id,
}) => {
  const router = useRouter();

  // Parse the date string into a Date object
  const launchDate = new Date(date);

  // Format date to include time and timezone
  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZoneName: 'short',
  };

  // Format date to include full date, month, and year
  const dateFormatOptions: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  // Get formatted date and time strings
  const formattedDate = launchDate.toLocaleDateString(
    undefined,
    dateFormatOptions,
  );
  const formattedTime = launchDate.toLocaleTimeString(
    undefined,
    dateTimeOptions,
  );

  // Handle click event to navigate to the launch detail page
  const handleCardClick = () => {
    router.push(`/launches/${id}`);
  };

  return (
    <article
      onClick={handleCardClick}
      className="group col-span-1 cursor-pointer border border-gray-700 bg-gray-800"
    >
      <div className="flex w-full flex-col shadow-md transition hover:shadow-lg">
        <figure className="w-full overflow-hidden">
          <Image
            width={200}
            height={300}
            className="w-full transform bg-black object-cover transition duration-200 ease-out group-hover:scale-110"
            src={img || '/default-patch.jpg'}
            alt={`${name} mission patch`}
          />
        </figure>
        <section className="flex flex-col gap-3 p-3">
          <h2 className="truncate text-lg font-semibold text-white">{name}</h2>
          <div>
            <time className="block text-xs font-light text-neutral-500">
              Date:
            </time>
            <time>{formattedDate}</time>
          </div>
          <div>
            <time className="block text-xs font-light text-neutral-500">
              Time:
            </time>
            <time>{formattedTime}</time>
          </div>
          <Button
            href={webcast}
            external
            icon={
              <svg
                className="h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            }
          >
            Webcast Link
          </Button>
        </section>
      </div>
    </article>
  );
};

export default LaunchCard;
