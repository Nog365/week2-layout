
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-800 text-white p-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <h1 className="text-2xl font-bold">
          My Website
        </h1>

        <nav aria-label="Main navigation">
          <ul className="flex gap-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
