"use client";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative py-32 flex flex-col items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/contact-hero.jpg')", // replace with your image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-200">
            Have questions? We’d love to hear from you. Reach out and let’s
            start your next adventure.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              WhatsApp Us
            </a>
            <a
              href="tel:+919876543210"
              className="bg-white text-emerald-600 border border-emerald-500 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Contact Info & Intro */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Let’s Start a Conversation
            </h2>
            <div className="w-16 h-1 bg-emerald-500 mt-2 rounded"></div>
            <p className="mt-6 text-gray-600 leading-relaxed">
              At <span className="font-semibold text-emerald-600">Unplanned Diaries</span>, 
              we believe every great journey starts with a simple chat. Whether
              you want to know more about our trips, need help planning your
              travel, or just want to say hi — we’re always here.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-emerald-600" />
                <p className="text-gray-700">
                  123, Main Street, New Delhi, India
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-emerald-600" />
                <a
                  href="tel:+919876543210"
                  className="text-gray-700 hover:text-emerald-600 transition"
                >
                  +91 98765 43210
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-emerald-600" />
                <a
                  href="mailto:support@unplannediaries.com"
                  className="text-gray-700 hover:text-emerald-600 transition"
                >
                  support@unplannediaries.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <MessageCircle className="h-6 w-6 text-emerald-600" />
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-emerald-600 transition"
                >
                  WhatsApp: +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form (no box) */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 text-center md:text-left">
              Get a Call Back
            </h3>
            <p className="mt-2 text-gray-600 text-sm text-center md:text-left">
              Fill in your details and our team will reach out to you shortly.
            </p>

            <form className="mt-8 space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-30 bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-6 rounded-lg font-medium transition"
              >
                Send
              </button>
            </form>
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
