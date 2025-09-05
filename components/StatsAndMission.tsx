const StatsAndMission = () => {
  return (
    <section
    className="relative py-20 bg-cover bg-center"
    style={{ backgroundImage: "url('/img/bg.jpg')" }}
    >
    {/* Gradient Overlay to blend */}
    <div className="absolute inset-0 bg-gradient-to-b from-white via-black/40"></div>

    {/* Content */}
    <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Stats Card */}
        <div className="bg-white rounded-2xl shadow-md p-8 grid grid-cols-2 gap-6 text-center w-full md:w-1/2">
        <div>
            <h3 className="text-2xl font-bold text-emerald-600">150+</h3>
            <p className="text-gray-600">Trips Hosted</p>
        </div>
        <div>
            <h3 className="text-2xl font-bold text-emerald-600">1000+</h3>
            <p className="text-gray-600">Happy Travelers</p>
        </div>
        <div>
            <h3 className="text-2xl font-bold text-emerald-600">4.8 ★</h3>
            <p className="text-gray-600">Google Rating</p>
        </div>
        <div>
            <h3 className="text-2xl font-bold text-emerald-600">2+</h3>
            <p className="text-gray-600">Years Experience</p>
        </div>
        </div>

        {/* Mission Box */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 md:w-1/2">
        <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
        <p className="text-gray-200 leading-relaxed">
            "To make travel feel personal, spontaneous, and unforgettable—by
            building a community that thrives on good vibes, great stories, and
            once-in-a-lifetime adventures..."
        </p>
        </div>
    </div>
    </section>
  );
};

export default StatsAndMission;
