import { Heart, Users, Compass } from "lucide-react";

const reasons = [
  {
    icon: <Heart className="w-6 h-6 text-emerald-600" />,
    title: "Curated With Love",
    description:
      "Every trip is handcrafted to deliver the perfect blend of adventure, comfort, and spontaneity—with a strong focus on local culture and real connections.",
  },
  {
    icon: <Users className="w-6 h-6 text-emerald-600" />,
    title: "Community Driven",
    description:
      "We filter like-minded travelers to build groups that feel like long-lost friends—because good company makes great journeys.",
  },
  {
    icon: <Compass className="w-6 h-6 text-emerald-600" />,
    title: "Authentic Adventures",
    description:
      "Go beyond the ordinary! We craft authentic adventures that help you experience destinations like a true local.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      {/* Heading */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
          Why Choose <span className="text-emerald-600">UnPlanned Diaries</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          For over 3 years, we've been redefining travel with unforgettable
          experiences that go beyond typical itineraries. At UnPlanned Diaries,
          it's not just a trip—it's a vibe.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-50 mb-4">
              {reason.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              {reason.title}
            </h3>
            <p className="mt-2 text-gray-600 text-sm">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
