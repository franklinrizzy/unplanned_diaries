const testimonials = [
  {
    name: "Angelina Simple",
    role: "Traveler",
    image: "/img/angelina.jpg",
    text: "This service made my trip smooth and enjoyable. Everything was perfectly arranged.",
  },
  {
    name: "Viola Natalie",
    role: "Digital Nomad",
    image: "/img/viola.jpg",
    text: "A truly wonderful experience — professional, seamless, and stress-free travel planning!",
  },
  {
    name: "Robert John K.",
    role: "Photographer",
    image: "/img/robert.jpg",
    text: "I loved how simple and easy the process was. Highly recommended to fellow travelers!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-emerald-600 font-medium">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What people say about us
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {testimonials.map((t, i) => (
          <div key={i} className="text-center">
            {/* Avatar */}
            <img
              src={t.image}
              alt={t.name}
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />

            {/* Quote */}
            <p className="text-gray-600 italic leading-relaxed mb-4">
              “{t.text}”
            </p>

            {/* Name + Role */}
            <div>
              <h4 className="font-semibold text-gray-900">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
