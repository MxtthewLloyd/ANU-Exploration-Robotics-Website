import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/team", label: "Team" },
  { href: "/vehicle", label: "Vehicle" },
  { href: "/updates", label: "Updates" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <Image src="/logo.png" alt="Exploration Robotics logo" width={200} height={40} />
        </Link>
        <nav className="flex gap-6 text-sm">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}