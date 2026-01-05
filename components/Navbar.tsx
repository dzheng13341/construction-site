import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm w-full">
      <div className="max-w-7xl mx-auto pr-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 whitespace-nowrap -ml-18">
          <span className="ml-4 text-2xl md:text-3xl font-bold text-black">
            <span className="text-blue-500">Air</span>{" "}
            And
            <span className="text-orange-500"> Sun</span>{" "}
            Construction
          </span>
        </Link>

        <div className="space-x-6">
          <Link href="/" className=" text-black">Home</Link>
          <Link href="/services" className=" text-black">Services</Link>
          <Link href="/design" className="text-black">Design</Link>
          <Link href="/projects" className="text-black">Projects</Link>
          <Link href="/jobs" className="text-black">Career</Link>
          <Link href="/contact" className="text-black">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
