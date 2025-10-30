

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { MapPin, CalendarDays, Users, ArrowLeft } from "lucide-react";

export default function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/v1/event/get-event/${id}`
        );
        setEvent(res.data.event);
      } catch (err) {
        console.error("Error fetching event:", err);
      }
    };
    fetchEvent();
  }, [id]);

  if (!event) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-950">
        <p className="text-gray-400 text-lg animate-pulse">
          Loading event details...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-gray-900 border border-gray-800 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 p-8 relative overflow-hidden">
        
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-linear-to-br from-cyan-800/10 via-transparent to-blue-800/10 rounded-2xl pointer-events-none"></div>

        {/* Back Button */}
        <Link
          to="/"
          className="absolute top-5 left-5 text-gray-400 hover:text-cyan-400 flex items-center gap-1 text-sm transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>

        {/* Event Title */}
        <h2 className="text-3xl font-extrabold text-cyan-400 mb-3 mt-10">
          {event.title || "Untitled Event"}
        </h2>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-6">
          {event.description || "No description available."}
        </p>

        {/* Event Info */}
        <div className="space-y-3 text-gray-300 text-sm">
          <p className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-rose-400" />
            <span>{event.location || "Location not specified"}</span>
          </p>

          <p className="flex items-center">
            <CalendarDays className="w-4 h-4 mr-2 text-blue-400" />
            <span>
              {event.date
                ? new Date(event.date).toLocaleString()
                : event.time
                ? new Date(event.time).toLocaleString()
                : "Date not available"}
            </span>
          </p>

          <p className="flex items-center">
            <Users className="w-4 h-4 mr-2 text-green-400" />
            <span>
              {event.currentParticipants || event.participants?.length || 0} /{" "}
              {event.maxParticipants || "∞"} participants
            </span>
          </p>
        </div>

        <div className="border-t border-gray-800 my-5"></div>

        {/* Join or View Button */}
        <div className="text-center">
          <Link
            to={`/event/${event._id}`}
            className="inline-block bg-linear-to-br from-cyan-600 to-blue-500 hover:from-cyan-500 hover:to-blue-400 text-white font-semibold py-2.5 px-6 rounded-xl shadow-md hover:shadow-cyan-400/30 transition-all duration-300"
          >
            Join Event
          </Link>
        </div>
      </div>
    </div>
  );
}
