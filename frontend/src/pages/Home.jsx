import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "../components/EventCard";
import { useNavigate } from "react-router-dom";

function Home() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const fatchedEvent = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/event/get-event`
      );
      setEvents(response.data || []);
    };
    fatchedEvent();
  }, []);
  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(search.toLowerCase()) &&
      event.location.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <div className="px-14 py-10 bg-gray-900 border-b pt-32 border-gray-800 text-white placeholder-white">
      <h1 className="text-center  text-2xl md:text-5xl font-bold mb-2">
        Discover Amazing Events
      </h1>
      <p className="text-center text-cyan-400 mb-8">
        Find and join events in your area
      </p>

      <div className="flex justify-center gap-4 mb-10 placeholder-white ">
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-4 py-2 w-1/3"
        />
        <input
          type="text"
          placeholder="Filter by location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded px-4 py-2 w-1/3"
        />

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default Home;
