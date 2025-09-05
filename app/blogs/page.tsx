"use client";
import Link from "next/link";

const blogs = [
  {
    image: "/img/blog1.jpg",
    category: "Adventure",
    title: "Exploring the Hidden Gems of Himachal",
    excerpt: "Discover offbeat locations, local stories, and unplanned adventures in the valleys of Himachal.",
    slug: "himachal-hidden-gems",
  },
  {
    image: "/img/blog2.jpg",
    category: "Travel Tips",
    title: "How to Pack Smart for Your Next Trip",
    excerpt: "Simple yet powerful packing tips that make your unplanned journeys more comfortable.",
    slug: "packing-smart-tips",
  },
  {
    image: "/img/blog3.jpg",
    category: "Stories",
    title: "A Night Under the Spiti Sky",
    excerpt: "From stargazing to bonfires, here’s what made my Spiti trip unforgettable.",
    slug: "spiti-sky-night",
  },
];

export default function BlogPage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative py-32 flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/blog-hero.jpg')", // replace with your image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Our Stories</h1>
          <p className="mt-4 text-lg text-gray-200">
            Real adventures, travel tips, and unforgettable experiences from our community.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Latest Blogs
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-2 rounded"></div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-emerald-600 font-medium uppercase">
                    {post.category}
                  </p>
                  <h3 className="text-xl font-semibold text-gray-800 mt-2">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-gray-600 text-sm">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block mt-4 text-emerald-600 font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center px-6 md:px-20">
        <h2 className="text-3xl font-bold text-gray-800">
          Inspired by These Stories?
        </h2>
        <p className="mt-4 text-gray-600">
          Join us on our next adventure and create your own unforgettable story.
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
