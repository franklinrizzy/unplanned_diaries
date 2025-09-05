import DestinationCard from "@/components/DestinationCard";

const destinations = [
  {
    image: "/img/manali.jpg",
    title: "Manali-Sissu-Kasol",
    price: "₹6499",
    duration: "6 days trip",
  },
  {
    image: "/img/dharamshala.jpg",
    title: "McLeod Ganj-Dharamshala-Triund",
    price: "₹7499",
    duration: "10 days trip",
  },
  {
    image: "/img/jibhi.jpg",
    title: "Jibhi-Jalori Pass-Tirthan Valley",
    price: "₹7499",
    duration: "10 days trip",
  },
  {
    image: "/img/manali.jpg",
    title: "Kepulauan Wakatobi",
    price: "₹7499",
    duration: "10 days trip",
  },
  {
    image: "/img/leh.jpg",
    title: "Leh Ladakh",
    price: "₹8499",
    duration: "7 days trip",
  },
  {
    image: "/img/spiti.jpg",
    title: "Spiti Valley",
    price: "₹8999",
    duration: "7 days trip",
  },
];

const TrendingDestinations = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="text-center mb-12">
        <p className="text-green-600 font-medium">Top Destination</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Discover your love
        </h2>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((item, index) => (
          <DestinationCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default TrendingDestinations;
