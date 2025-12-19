import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Building Quality That Lasts
        </h1>
        <p className="text-xl mb-8">
          Renovations, HVAC, and Commercial Construction You Can Trust
        </p>
        <Link href="/projects">
          <button className="bg-orange-500 px-8 py-3 rounded text-lg font-semibold hover:bg-orange-600">
            View Our Work
          </button>
        </Link>
      </div>
    </section>
  );
}
