"use client";
import { Star, Users, Compass, Clock, Headset } from "lucide-react";

export default function AboutPage() {
  return (
    <main>
    {/* Hero Section */}
      <section
        className="relative py-32 flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/about-hero.jpg')", // replace with your about image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="mt-4 text-lg text-gray-200">
            Transforming lives through unplanned adventures and authentic travel
            experiences.
          </p>
        </div>
      </section>

    {/* Stats Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12">
            Why Choose <span className="text-emerald-600">Unplanned Diaries</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
            {/* Trips Hosted */}
            <div>
              <Compass className="mx-auto h-10 w-10 text-emerald-600" />
              <h3 className="text-2xl font-bold text-gray-800 mt-2">150+</h3>
              <p className="text-gray-600 text-sm">Trips Hosted</p>
            </div>

            {/* Happy Travelers */}
            <div>
              <Users className="mx-auto h-10 w-10 text-emerald-600" />
              <h3 className="text-2xl font-bold text-gray-800 mt-2">1000+</h3>
              <p className="text-gray-600 text-sm">Happy Travelers</p>
            </div>

            {/* Google Rating */}
            <div>
              <Star className="mx-auto h-10 w-10 text-emerald-600" />
              <h3 className="text-2xl font-bold text-gray-800 mt-2">4.8 ★</h3>
              <p className="text-gray-600 text-sm">Google Rating</p>
            </div>

            {/* Experience */}
            <div>
              <Clock className="mx-auto h-10 w-10 text-emerald-600" />
              <h3 className="text-2xl font-bold text-gray-800 mt-2">2+</h3>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>

            {/* Support */}
            <div>
              <Headset className="mx-auto h-10 w-10 text-emerald-600" />
              <h3 className="text-2xl font-bold text-gray-800 mt-2">24/7</h3>
              <p className="text-gray-600 text-sm">Assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 md:px-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
        <div className="w-18 h-1 bg-emerald-500 mx-auto mt-2 rounded"></div>
        <p className="mt-6 text-gray-600 leading-relaxed">
          At <span className="font-semibold text-emerald-600">Unplanned Diaries</span>, 
        we&apos;ve been redefining travel with unforgettable experiences 
        that go beyond typical itineraries. At <span className="font-semibold">Unplanned Diaries</span>, 
        it&apos;s not just a trip it&apos;s a vibe. We bring together wanderers, storytellers, 
        and adventurers to create memories that last a lifetime.
        </p>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">🤝 Our Values</h3>
            <p className="mt-4 text-gray-600">
              Authenticity, sustainability, and human connection drive everything 
              we do at <span className="font-semibold text-emerald-600">Unplanned Diaries</span>.
            </p>
          </div>
            <div>
            <h3 className="text-xl font-semibold text-gray-800">🌍 Our Mission</h3>
            <p className="mt-4 text-gray-600">
              To make travel feel personal, spontaneous, and unforgettable by building 
              a community that thrives on good vibes, great stories, and once-in-a-lifetime 
              adventures. Whether it&apos;s the mountains or the music, we make sure your 
              journey feels just right.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">✨ Our Promise</h3>
            <p className="mt-4 text-gray-600">
              Every trip with us is designed to leave you with more than memories it&apos;s about transformation and growth.
            </p>
          </div>
        </div>
      </section>

    {/* Our Team Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
          <div className="w-36 h-1 bg-emerald-500 mx-auto mt-2 rounded"></div>
          <p className="mt-4 text-gray-600">
            The passionate explorers behind{" "}
            <span className="font-semibold text-emerald-600">Unplanned Diaries</span>.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="/team1.jpg" // replace with real image
                alt="Team Member"
                className="w-32 h-32 rounded-full object-cover shadow-lg"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                Aditi Sharma
              </h3>
              <p className="text-gray-500 text-sm">Founder & CEO</p>
              <p className="mt-2 text-gray-600 text-sm">
                Adventurer, storyteller & dreamer behind the vision.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="/team2.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full object-cover shadow-lg"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                Rahul Mehta
              </h3>
              <p className="text-gray-500 text-sm">Operations Head</p>
              <p className="mt-2 text-gray-600 text-sm">
                Keeps the chaos in check & ensures smooth adventures.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="/team3.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full object-cover shadow-lg"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                Simran Kaur
              </h3>
              <p className="text-gray-500 text-sm">Community Manager</p>
              <p className="mt-2 text-gray-600 text-sm">
                Brings together travelers & creates lasting bonds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center px-6 md:px-20">
        <h2 className="text-3xl font-bold text-gray-800">
          Ready for Your Next Adventure?
        </h2>
        <p className="mt-4 text-gray-600">
          Explore our upcoming trips and be part of the Unplanned Diaries journey.
        </p>
        <a
          href="/trips"
          className="mt-6 inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          Explore Trips
        </a>
      </section>
    </main>
  );
}
