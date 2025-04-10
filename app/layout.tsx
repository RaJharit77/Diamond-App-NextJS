import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Diamond Store®",
  icons: {
    icon: "/assets/diamond_blue.jpg",
  },
  type: "image/svg+xml",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <div>
          <Navbar />
          <main className="pt-0">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
