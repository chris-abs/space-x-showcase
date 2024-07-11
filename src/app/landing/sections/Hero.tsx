import Image from 'next/image';

import { Company } from '@/types';

interface HeroProps {
  company: Company | null;
}

const Hero: React.FC<HeroProps> = ({ company }) => {
  if (!company) return null;

  const { summary } = company;

  return (
    <section>
      <div className="bg-black py-20 text-white">
        <div className="container mx-auto my-12 flex flex-col items-center md:my-24 md:flex-row">
          <article className="flex w-full flex-col items-start justify-center p-8 lg:w-1/3">
            <h1 className="tracking-loose p-2 text-3xl text-yellow-300 md:text-5xl">
              SpaceX
            </h1>
            <h2 className="mb-2 text-3xl leading-relaxed md:text-5xl md:leading-snug">
              Mission: Occupy Mars
            </h2>
            <p className="mb-4 text-sm text-gray-50 md:text-base">{summary}</p>
            <a
              href="#"
              className="rounded border border-yellow-300 bg-transparent px-4 py-2 text-yellow-300 shadow hover:border-transparent hover:bg-yellow-300 hover:text-black hover:shadow-lg"
            >
              Explore Now
            </a>
          </article>
          <aside className="mb-6 ml-0 mt-12 justify-center p-8 md:mb-0 md:ml-12 md:mt-0 lg:w-2/3">
            <div className="flex h-48 flex-wrap content-center">
              <figure className="mt-28 hidden xl:block">
                <Image
                  src="/space-x-shuttle.png"
                  alt="space x shuttle"
                  width={205}
                  height={257}
                />
              </figure>
              <figure className="mt-24 inline-block p-8 md:mt-0 md:p-0">
                <Image
                  src="/space-explorer.png"
                  alt="space explorer"
                  priority
                  width={324}
                  height={436}
                />
              </figure>
              <figure className="mt-28 hidden lg:block">
                <Image
                  src="/space-x-rocket.png"
                  alt="space x rocket"
                  width={203}
                  height={254}
                />
              </figure>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
