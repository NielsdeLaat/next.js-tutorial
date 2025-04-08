import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-indigo-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        <h1 className="text-3xl font-bold">
          <Link href="/" className="hover:underline">
            Next.js Tutorial
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/routing" className="hover:underline">
                Routing
              </Link>
            </li>
            <li>
              <Link href="/tailwind" className="hover:underline">
                Tailwind
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
