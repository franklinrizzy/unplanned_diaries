const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-white">Unplanned Diaries</h2>
            <p className="mt-4 text-gray-400 text-sm">
              We're not just a travel company - we're life transformers! 
              Specializing in unplanned adventures that create unforgettable stories and change 
              perspectives through authentic travel experiences.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="/" className="hover:text-emerald-500 transition">Home</a></li>
              <li><a href="/about" className="hover:text-emerald-500 transition">About</a></li>
              <li><a href="/trips" className="hover:text-emerald-500 transition">Trips</a></li>
              <li><a href="/contact" className="hover:text-emerald-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Adventures */}
          <div>
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-500 transition">Custom Trips</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition">Group Tours</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition">Travel Planning</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition">Guided Adventures</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <p className="mt-4 text-gray-400 text-sm">
                Address: Adventure Hub, New Delhi, India<br />
                Phone: +91 98765 43210<br />
                Email: hello@unplanneddiaries.com
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Unplanned Diaries | Tansforming lives through travel | All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
