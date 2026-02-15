import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white px-6 py-4 shadow-lg">
      <h1>
        <Link href="/" className="text-xl font-bold tracking-wide hover:text-gray-300">
          Dev Tools
        </Link>
      </h1>
    </header>
  );
}
