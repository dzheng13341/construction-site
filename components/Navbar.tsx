import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 whitespace-nowrap">
          <Image
            src="/logo.png"
            alt="Air & Sun Co Logo"
            width={95}
            height={95}
            priority
          />
          <span className="text-xl font-bold text-black">
            Air and Sun Construction
          </span>
        </Link>

        <div className="space-x-6">
          <Link href="/" className=" text-black">Home</Link>
          <Link href="/services" className=" text-black">Services</Link>
          <Link href="/projects" className="text-black">Projects</Link>
          <Link href="/jobs" className="text-black">Career</Link>
          <Link href="/contact" className="text-black">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
