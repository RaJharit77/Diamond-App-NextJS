import { ReactNode } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";

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
        <link rel="icon" type="image/svg+xml" href="./public/img/diamond_blue.jpg" />
      </head>
      <body className="font-poppins">
        <div>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
