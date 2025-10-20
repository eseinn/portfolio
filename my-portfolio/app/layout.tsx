import type { Metadata } from "next";
import "./globals.css";
import Nav from "./Sections/Nav";

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
        className={`antialiased grid bg-[#112D4E] max-w-[1200px] px-10 mx-auto text-[#DBE2EF] `}
      >
        <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 via-black/90 to-black/50 -z-10" />
        <Nav />

        {children}
      </body>
    </html>
  );
}
