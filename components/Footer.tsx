import Link from "next/link";

export default function Footer() {
  return (
    <footer className="sticky top-[100vh] bg-accent-1 border-t border-accent-2 bg-black">
      <div className="container mx-auto px-5 py-8 gap-5 flex flex-col items-center justify-center text-white">
        <p>
          <Link href="/">Privacy Policy</Link> -{" "}
          <Link href="/">Terms of Use</Link> - <Link href="/">Disclaimer</Link>
        </p>
        <p>&#169; 2023 Yukai Technologies</p>
      </div>
    </footer>
  );
}
