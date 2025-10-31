import React, { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";

export default function Home() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/event/get-event`
        );
        setEvents(res.data || []);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };
    fetchEvents();
  }, []);

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(search.toLowerCase()) &&
      event.location.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <div className="bg-black text-white flex flex-col min-h-screen">
      <section className="relative h-[85vh] w-full flex items-center justify-center text-center">
        <img
          src="/images/heroimg.jpg"
          alt="Event crowd"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-cyan-500 drop-shadow-lg">
            Discover Events That Inspire You
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto mb-8 text-lg">
            Explore concerts, workshops, meetups, and festivals happening near
            you. Join the fun today!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#events"
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-3 rounded-full transition duration-300"
            >
              Explore Events
            </a>
            <Link
              to="/create"
              className="px-8 py-2 bg-cyan-90text-gray-300 hover:text-white border-3 border-gray-700 hover:border-cyan-500 text-white font-medium rounded-full shadow-md hover:shadow-cyan-500/30 transition-all duration-300"
            >
              Create Event
            </Link>
          </div>
        </div>
      </section>

      {/* SEARCH + EVENTS SECTION */}
      <section
        id="events"
        className="px-6 md:px-16 py-16 border-t border-gray-800 grow"
      >
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-3">
          Upcoming Events
        </h2>
        <p className="text-center text-cyan-400 mb-10">
          Search and filter to find your perfect match
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-cyan-800 bg-gray-900 text-white rounded px-4 py-2 w-full md:w-1/3 focus:ring-2 focus:ring-cyan-500 outline-none placeholder-gray-400"
          />
          <input
            type="text"
            placeholder="Filter by location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border border-cyan-800 bg-gray-900 text-white rounded px-4 py-2 w-full md:w-1/3 focus:ring-2 focus:ring-cyan-500 outline-none placeholder-gray-400"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <EventCard key={event._id} event={event} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No events found. please wait
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
