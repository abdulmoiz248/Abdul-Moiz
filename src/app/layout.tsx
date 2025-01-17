import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import CustomScrollbar from "@/components/CustomScrollbar";

export const metadata: Metadata = {
  title: "Abdul Moiz",
  description: "Abdul Moiz's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomScrollbar/>
        <Header/>
        {children}
      </body>
    </html>
  );
}
