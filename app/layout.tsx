import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chandra Prasad R | SFMC Consultant & Full-Stack Developer",
  description: "Senior Salesforce Marketing Cloud Consultant and Full-Stack Developer specializing in enterprise integrations, AMPScript, SSJS, and Next.js applications.",
  keywords: ["Salesforce Marketing Cloud", "SFMC Consultant", "Next.js Developer", "AMPscript", "Full-Stack", "API Integration"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}