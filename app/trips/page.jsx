"use client";
import { useState } from "react";
import DestinationCard from "@/components/DestinationCard";

const trips = [
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
    image: "/img/spiti.jpg",
    title: "Spiti Valley",
    price: "₹8999",
    duration: "7 days trip",
  },
];

export default function TripsPage() {
  const [sort, setSort] = useState("recommended");

  return (
    <main>
      {/* Hero */}
      <section
        className="relative py-32 flex flex-col items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/hero.jpg')", // replace with your trips bg image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-100">
            Find Your Next Adventure
          </h1>
          <p className="mt-2 text-gray-200">
            Browse through our curated trips and choose the vibe that suits you best.
          </p>
        </div>
      </section>

      {/* Filters + Sort */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Filters (simple demo, can connect to Strapi later) */}
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 border rounded-full text-sm hover:bg-emerald-50">
            Trekking
          </button>
          <button className="px-4 py-2 border rounded-full text-sm hover:bg-emerald-50">
            Beach
          </button>
          <button className="px-4 py-2 border rounded-full text-sm hover:bg-emerald-50">
            Culture
          </button>
        </div>

        {/* Sort Dropdown */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border rounded-md px-3 py-2 text-sm"
        >
          <option value="recommended">Recommended</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="duration">Duration</option>
        </select>
      </div>

      {/* Grid of Trips */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip, idx) => (
            <DestinationCard key={idx} {...trip} />
          ))}
        </div>
      </section>

      {/* Load More */}
      <div className="flex justify-center py-10">
        <button className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">
          Load More
        </button>
      </div>
    </main>
  );
}
