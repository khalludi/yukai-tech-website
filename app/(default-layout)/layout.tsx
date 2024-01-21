import "./globals.css";
import { Inter } from "next/font/google";
import { CMS_NAME } from "@/lib/constants";
import Link from "next/link";

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
        <p>2023 Yukai Technologies</p>
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
          <nav className="flex items-center justify-between px-20 pt-10">
            <Link href={"/"} className="font-bold text-4xl">
              yukai.tech
            </Link>
            <div className="flex items-center gap-10">
              <Link href="/about" className="text-xl font-medium">
                About
              </Link>
              <Link href="/blog" className="text-xl font-medium">
                Blog
              </Link>
              <Link
                href="/contact-us"
                className="text-xl font-medium p-2 bg-black text-white rounded-lg"
              >
                Contact Us
              </Link>
            </div>
          </nav>
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
