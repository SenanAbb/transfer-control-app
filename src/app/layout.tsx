import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import MobileNavbar from "@/components/MobileNavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Transfer Control App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <MobileNavbar />
      </body>
    </html>
  );
}
