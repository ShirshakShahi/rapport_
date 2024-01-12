import { Link } from "react-router-dom";

interface NavProps {
  navItems?: {
    label: string;
    key: string;
    path: string;
  }[];
}

const Nav: React.FC<NavProps> = ({ navItems }) => {
  return (
    <ul className=" bg-slate-800 h-screen w-[200px]">
      {navItems?.map((el) => (
        <li key={el.key} className="mt-3 h-10 flex items-center justify-center">
          <Link
            to={el.path}
            className="text-white text-lg h-9 w-[11rem] self-center rounded-lg pl-5 pt-1 hover:bg-slate-500 "
          >
            {el.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
