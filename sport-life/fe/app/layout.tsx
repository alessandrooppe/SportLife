import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RoutingTabs } from "@/components/routing-tabs";
import { useMemo } from "react";
import { TabProp } from "@/model/tab-type";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sport Life!",
  description: "Sport Life App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const tabs: TabProp[] = useMemo(() => {
    return [
      { href: "/", label: "Home" },
      { href: "/calculator", label: "Calculator" },
      { href: "/about-us", label: "About Us" },
    ]
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <RoutingTabs tabs={tabs} />
          
        {children}
      </body>
    </html>
  );
}
