import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
import Section from "@/components/Section/page";
import Sidebar from "@/components/Sidebar/page";
import Main from "@/components/Main/page";
import RighBar from "@/components/RightBar/page";
import {Providers} from "./providers";
import NextNProgress from 'nextjs-progressbar';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-color-white">  
      <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
