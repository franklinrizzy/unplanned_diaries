import { Search, MapPin, Calendar, Users } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight shadow-lg">
          Your Next Adventure Awaits!
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-100 shadow-lg">
          We&apos;re not just a travel agency. We&apos;re the ones who are
          here to transform your travel dreams into reality.
        </p>

        {/* Search Box */}
        <div className="mt-10 bg-white rounded-xl shadow-[2px_4px_8px_2px_rgba(0,0,0,0.25)] flex flex-col md:flex-row items-stretch overflow-hidden">
          {/* Destination */}
          <div className="flex items-center gap-2 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-300">
            <MapPin className="text-gray-500" />
            <input
              type="text"
              placeholder="City or Destination"
              className="w-full outline-none text-gray-700"
            />
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-300">
            <Calendar className="text-gray-500" />
            <input
              type="text"
              placeholder="Date of stay"
              className="w-full outline-none text-gray-700"
            />
          </div>

          {/* Person */}
          <div className="flex items-center gap-2 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-300">
            <Users className="text-gray-500" />
            <input
              type="number"
              placeholder="Person"
              className="w-full outline-none text-gray-700"
            />
          </div>

          {/* Search Button */}
          <button className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 transition whitespace-nowrap">
            Find Trips
            <Search size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
