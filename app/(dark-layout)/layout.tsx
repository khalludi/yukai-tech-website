import "../(default-layout)/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import Footer from "@/components/Footer";

export const metadata = {
  title: `Yukai Technologies`,
  description: `AWS Consulting Services company and blog`,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <section className="min-h-screen bg-black text-white">
          <Suspense fallback={"loading"}>
            <Navbar contactUsPage={true} />
          </Suspense>
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
