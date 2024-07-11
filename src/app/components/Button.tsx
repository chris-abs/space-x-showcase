import { useRouter } from 'next/navigation';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({ href, children, icon, external }) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!external) {
      e.preventDefault();
      router.push(href);
    }
  };

  return external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center rounded border border-yellow-300 bg-transparent px-4 py-2 text-yellow-300 shadow hover:border-transparent hover:bg-yellow-300 hover:text-black hover:shadow-lg"
    >
      {children}
      {icon && <span className="ms-2">{icon}</span>}
    </a>
  ) : (
    <button
      onClick={handleClick}
      className="flex items-center rounded border border-yellow-300 bg-transparent px-4 py-2 text-yellow-300 shadow hover:border-transparent hover:bg-yellow-300 hover:text-black hover:shadow-lg"
    >
      {children}
      {icon && <span className="ms-2">{icon}</span>}
    </button>
  );
};

export default Button;
