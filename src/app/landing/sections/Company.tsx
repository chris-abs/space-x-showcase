import { Company } from '@/types';

interface DetailsProps {
  company: Company | null;
}

const Details: React.FC<DetailsProps> = ({ company }) => {
  if (!company) return null;
  return (
    <section className="my-24">
      <h2 className="mb-4 text-center text-3xl font-semibold text-white">
        Company Information
      </h2>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
        <article className="rounded-lg bg-gray-100 p-6 shadow-md">
          <h2 className="text-xl font-semibold text-black">About</h2>
          <ul className="mt-4 text-sm text-black opacity-80">
            <li>Founder: {company.founder}</li>
            <li>Founded: {company.founded}</li>
            <li>No. Employees: {company.employees}</li>
          </ul>
        </article>
        <article className="rounded-lg bg-gray-100 p-6 shadow-md">
          <h2 className="text-xl font-semibold text-black">Headquarters</h2>
          <ul className="mt-4 text-sm text-black opacity-80">
            <li>{company.headquarters.address}</li>
            <li>{company.headquarters.city}</li>
            <li>{company.headquarters.state}</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Details;
