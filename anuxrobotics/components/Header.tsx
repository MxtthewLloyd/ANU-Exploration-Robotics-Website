import Link from "next/link";

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
        <Link href="/" className="font-semibold tracking-tight">
          ANU Exploration Robotics
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
