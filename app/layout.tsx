import { ReactNode } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Diamond Store®",
  description: "Your go-to store for premium jewelry and diamonds.",
  icons: {
    icon: "/assets/diamond_blue.jpg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-poppins">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
