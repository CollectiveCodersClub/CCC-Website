import type { Metadata } from "next";
import { Press_Start_2P, Open_Sans } from "next/font/google";
import "./globals.css";

const pressStart = Press_Start_2P({ 
  subsets: ["latin"], 
  weight: ["400"],
  display: 'swap', 
  variable: '--font-press-start' 
});
const openSans = Open_Sans({
  subsets: ["latin"], 
  display: 'swap',
  variable: '--font-open-sans'
})

export const metadata: Metadata = {
  title: "Collective Coders Club",
  description: "The official website of the Collective Coders Club, where we are bridging the gap between students and real world experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pressStart.variable} ${openSans.variable} bg-black text-white`}>{children}</body>
    </html>
  );
}
