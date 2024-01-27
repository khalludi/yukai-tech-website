import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Navbar from "@/app/(default-layout)/Navbar";
import { Suspense } from "react";

export const metadata = {
  title: `Yukai Technologies`,
  description: `AWS Consulting Services company and blog`,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 bg-black">
      <div className="container mx-auto px-5 py-8 gap-5 flex flex-col items-center justify-center text-white">
        <p>
          <Link href="#">Privacy Policy</Link> -{" "}
          <Link href="#">Terms of Use</Link> - <Link href="#">Disclaimer</Link>
        </p>
        <p>&#169; 2023 Yukai Technologies</p>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <section className="min-h-screen">
          <Suspense fallback={"loading"}>
            <Navbar />
          </Suspense>
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
