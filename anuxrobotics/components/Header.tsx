"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Team" },
  { href: "/vehicle", label: "Vehicle" },
  { href: "/updates", label: "Updates" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-[var(--line)]">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Exploration Robotics logo" width={160} height={32} />
        </Link>
        <nav className="hidden gap-10 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wide transition-transform duration-200 hover:scale-110 hover:text-[var(--coral)] ${
                  isActive ? "text-[var(--coral)]" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}