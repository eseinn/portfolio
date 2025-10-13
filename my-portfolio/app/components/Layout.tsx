"use client";
import { Link } from "react-scroll";
import { NavBar, NavItem } from "./NavBar";
import { PropsWithChildren } from "react";

const Item = ({ name, children }: PropsWithChildren<{ name: string }>) => {
  return (
    <Link
      spy
      tabIndex={0}
      activeClass="underline" // highlight active link
      smooth
      duration={400}
      to={name}
      className="cursor-pointer"
    >
      <NavItem>{children}</NavItem>
    </Link>
  );
};
const Layout = () => {
  return (
    <NavBar>
      <Item name="home">Home</Item>
      <Item name="projects">Projects</Item>
      <Item name="about">About</Item>
      <Item name="contact">Contact</Item>
    </NavBar>
  );
};

export default Layout;
