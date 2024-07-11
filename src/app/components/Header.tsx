import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-lg backdrop-filter">
      <section className="mx-auto max-w-[1500px] px-4">
        <nav className="flex h-16 items-center justify-between">
          <Link href="/">
            <Image
              className="text-2xl font-semibold text-gray-900"
              alt="spaceX brand logo"
              src="./space-x.svg"
              width="200"
              height="60"
              priority
            />
          </Link>
          <ul className="flex space-x-4 text-white">
            <li>
              <Link href="/launches">Legacy Launches</Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
