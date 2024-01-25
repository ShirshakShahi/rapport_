import { NavLink } from "react-router-dom";

interface NavProps {
  navItems?: {
    label: string;
    key: string;
    path: string;
  }[];
  logout?: string;
}

const Nav: React.FC<NavProps> = ({ navItems, logout }) => {
  return (
    <ul className=" bg-slate-800 h-screen w-[200px] flex flex-col">
      {navItems?.map((el) => (
        <li key={el.key} className="mt-3 h-10 flex items-center justify-center">
          <NavLink
            to={el.path}
            className="text-white text-lg h-9 w-[11rem] self-center rounded-lg pl-5 pt-1 hover:bg-slate-500 "
          >
            {el.label}
          </NavLink>
        </li>
      ))}
      {logout && (
        <li className="mt-3 h-10 flex justify-center self-end">
          <div className="text-white text-lg h-9 w-[11rem] self-center rounded-lg pl-5 pt-1 hover:cursor-pointer hover:bg-slate-500">
            {logout}
          </div>
        </li>
      )}
    </ul>
  );
};

export default Nav;
