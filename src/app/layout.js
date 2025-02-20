import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Component/navbar";
import Footer from "./Component/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
import head from 'next/head';

export const metadata = {
  title: "ShineWave",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
