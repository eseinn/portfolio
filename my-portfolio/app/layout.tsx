import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Children, PropsWithChildren } from "react";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Einar Smári",
  description: "My portfolio as a web/full-stack developer",
};

const NavItem = ({ children }: PropsWithChildren) => (
  <div className="mx-10 hover:text-gray-600 text-white hover:bg-gray-300 p-2 rounded-4xl transition-all">
    {children}
  </div>
);

const NavBar = ({ children }: PropsWithChildren) => (
  <div className="flex w-fit rounded-2xl font-bold text-xl m-auto">
    {children}
  </div>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"grid bg-[#112D4E] max-w-[1200px] p-10 mx-auto text-white "}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-transparent to-black/50 -z-10"></div>
        <NavBar>
          <Link href="/projects" className="">
            <NavItem>Projects</NavItem>
          </Link>

          <Link href="/about">
            <NavItem>About </NavItem>
          </Link>

          <Link href="/contact">
            <NavItem>Contact </NavItem>
          </Link>
        </NavBar>
        {children}
      </body>
    </html>
  );
}
