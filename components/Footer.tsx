export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            Air And Sun Construction
          </h3>
          <p className="text-sm">
            Building quality residential and commercial projects with
            reliability, safety, and craftsmanship.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Services
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Renovations</li>
            <li>HVAC Installation</li>
            <li>Electrical</li>
            <li>Commercial Construction</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Contact
          </h4>
          <ul className="space-y-2 text-sm">
            <li>📞 (916) 291-9416</li>
            <li>✉️ info@airandsunco.com</li>
            <li>📍 8982 Elder Creek Rd Sacramento, CA</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Licensed & Insured</li>
            <li>Bonded</li>
            <li>© {new Date().getFullYear()} Air And Sun Construction</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center text-sm py-4">
        Built with professionalism and care.
      </div>
    </footer>
  );
}
