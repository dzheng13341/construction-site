import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl text-black font-bold">
          Air and Sun Construction
        </Link>

        <div className="space-x-6">
          <Link href="/" className=" text-black">Home</Link>
          <Link href="/services" className=" text-black">Services</Link>
          <Link href="/projects" className="text-black">Projects</Link>
          <Link href="/jobs" className="text-black">Jobs</Link>
          <Link href="/contact" className="text-black">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
