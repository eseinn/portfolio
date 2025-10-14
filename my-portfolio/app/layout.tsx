import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components//Nav";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"grid bg-[#112D4E] max-w-[1200px] px-10 mx-auto text-white "}
      >
        <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-black/100 to-black/20 -z-10" />
        <Nav />

        {children}
      </body>
    </html>
  );
}
