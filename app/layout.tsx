import { ReactNode } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

export const metadata = {
  title: "Diamond Store®",
  icons: {
    icon: "/assets/diamond_blue.jpg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-poppins">
        <div>
          <Navbar />
          <main className="pt-0">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
