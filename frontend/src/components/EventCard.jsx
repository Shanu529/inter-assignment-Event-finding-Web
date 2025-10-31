
import { Link } from "react-router-dom";
import { MapPin, CalendarDays, Users } from "lucide-react";

export default function EventCard({ event = {} }) {
  return (
    <div className="bg-black border-3 border-cyan-950 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 p-6 group">
      {/* Title */}
      <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
        {event.title || "Untitled Event"}
      </h2>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
        {event.description || "No description available."}
      </p>

      {/* Info section */}
      <div className="space-y-2 mb-4 text-sm">
        <p className="flex items-center text-gray-300">
          <MapPin className="w-4 h-4 mr-2 text-rose-400" />
          {event.location || "Unknown location"}
        </p>
        <p className="flex items-center text-gray-300">
          <CalendarDays className="w-4 h-4 mr-2 text-blue-400" />
          {event.time ? new Date(event.time).toLocaleString() : "No date"}
        </p>
        <p className="flex items-center text-gray-300">
          <Users className="w-4 h-4 mr-2 text-green-400" />
          {event.currentParticipants || 0} / {event.maxParticipants || "∞"}{" "}
          participants
        </p>
      </div>

      {/* Button */}
      <div className="mt-4">
        <Link
          to={`/event/${event._id}`}
          className="block text-center bg-linear-to-br from-cyan-950  hover:from-cyan-500  text-white font-medium py-2.5 rounded-xl shadow-md hover:shadow-cyan-500/30 transition-all duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
