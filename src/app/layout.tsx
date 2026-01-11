import type { Metadata } from "next";
import "./globals.css";
import  Header from "@/components/Layouts/Header";
import CustomScrollbar from "@/components/Layouts/CustomScrollbar";
import { Analytics } from "@vercel/analytics/next"
import FooterSection from "@/components/Layouts/Footer";

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
      <head>
     
      <meta name="google-site-verification" content="T6KEfvY5mg61yDcFbDKpQCYP_4-yBhpBp51u4_IQn20" />
      </head>
      <body className="overflow-x-hidden">
        <Analytics/>
        <CustomScrollbar/>
        <Header/>
        {children}
        <FooterSection/>
      </body>
    </html>
  );
}