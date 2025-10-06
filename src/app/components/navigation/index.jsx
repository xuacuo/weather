"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkItem = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`hover:text-gray-900 transition ${
        isActive ? "text-gray-900 underline underline-offset-4" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default function Navigation() {
  return (
    <nav
      className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50"
      aria-label="Main navigation"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center py-2">
        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold tracking-widest text-gray-900 uppercase hover:text-gray-600 transition"
        >
          Hayao Miyazaki
        </Link>

        <p className="text-sm text-gray-500 italic mt-1">
          A Journey Through Imagination
        </p>

        <ul className="flex flex-wrap justify-center md:justify-start mt-4 gap-x-6 md:gap-x-10 text-gray-700 font-medium text-sm uppercase tracking-wide">
          <li><LinkItem href="/about">About</LinkItem></li>
          <li><LinkItem href="/works">Works</LinkItem></li>
          <li><LinkItem href="/themes">Themes</LinkItem></li>
          <li><LinkItem href="/legacy">Legacy</LinkItem></li>
          <li><LinkItem href="/contact">Contact</LinkItem></li>
        </ul>
      </div>
    </nav>
  );
}
