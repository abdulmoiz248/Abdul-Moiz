import type { Metadata } from "next";
import { DefaultSeo } from 'next-seo'
import "./globals.css";
import Header from "@/components/Layouts/Header";
import CustomScrollbar from "@/components/Layouts/CustomScrollbar";
import { Analytics } from "@vercel/analytics/react";
import seoConfig from "../next-seo.config";

export const metadata: Metadata = {
  title: "Abdul Moiz | Full Stack Developer",
  description: "Official portfolio of Abdul Moiz — Full Stack Developer, Data Scientist, and AI Engineer. Explore projects and services.",
  verification: {
    google: "T6KEfvY5mg61yDcFbDKpQCYP_4-yBhpBp51u4_IQn20",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DefaultSeo {...seoConfig} />
        <Analytics />
        <CustomScrollbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
