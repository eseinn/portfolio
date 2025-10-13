import { PropsWithChildren } from "react";

const NavItem = ({ children }: PropsWithChildren) => (
  <div className="mx-10 text-white  p-2 rounded-4xl transition-all">
    {children}
  </div>
);

const NavBar = ({ children }: PropsWithChildren) => (
  <div className="bg-black w-fit sticky top-5 flex flex-col sm:flex-row rounded-2xl font-bold text-xl ml-auto ">
    {children}
  </div>
);

export { NavBar, NavItem };
