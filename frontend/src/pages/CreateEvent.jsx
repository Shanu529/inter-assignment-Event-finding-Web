

import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function CreateEvent() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    time: "",
    location: "",
    maxParticipants: "",
  });

  const changeStateDataFrom = (e) => {
    if (!e.target.name) return;
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlerFomr = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/event/create-event`,
        form
      );
      toast.success("Successfully created!");
      navigate("/");
    } catch (error) {
      toast.error("Failed to create event");
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 pt-32 flex justify-center items-center px-4 py-10">
      <Toaster position="top-center" />

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl w-full">
        
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
          <h1 className="md:text-4xl text-2xl font-extrabold text-cyan-400">
            Plan Your Next Event 
          </h1>
          <p className="text-gray-400 text-sm px-4 sm:px-8 md:px-0 md:text-lg leading-relaxed">
            Create, organize, and share your events easily with{" "}
            <span className="text-cyan-500 font-semibold">Eventify</span>. Fill
            out the details below to get started!
          </p>
        </div>
        <div className="w-full lg:w-1/2 bg-gray-900 border border-gray-800 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-cyan-400">
            Create Event
          </h2>

          <form className="space-y-5" onSubmit={handlerFomr}>
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block mb-1 text-gray-300 font-medium"
              >
                Title
              </label>
              <input
                name="title"
                onChange={changeStateDataFrom}
                value={form.title}
                type="text"
                id="title"
                placeholder="Enter event title"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
              />
            </div>

            {/* Location */}
            <div>
              <label
                htmlFor="location"
                className="block mb-1 text-gray-300 font-medium"
              >
                Location
              </label>
              <input
                name="location"
                onChange={changeStateDataFrom}
                value={form.location}
                type="text"
                id="location"
                placeholder="Enter location"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
              />
            </div>

            {/* Time */}
            <div>
              <label
                htmlFor="time"
                className="block mb-1 text-gray-300 font-medium"
              >
                Time
              </label>
              <input
                name="time"
                onChange={changeStateDataFrom}
                value={
                  form.time
                    ? new Date(form.time).toISOString().slice(0, 16)
                    : ""
                }
                type="datetime-local"
                id="time"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
              />
            </div>

            {/* Max Participants */}
            <div>
              <label
                htmlFor="maxParticipants"
                className="block mb-1 text-gray-300 font-medium"
              >
                Max Participants
              </label>
              <input
                name="maxParticipants"
                onChange={changeStateDataFrom}
                value={form.maxParticipants}
                type="number"
                id="maxParticipants"
                placeholder="Enter max participants"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block mb-1 text-gray-300 font-medium"
              >
                Description
              </label>
              <textarea
                name="description"
                onChange={changeStateDataFrom}
                value={form.description}
                id="description"
                rows="4"
                placeholder="Enter description"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-linear-to-br from-cyan-600 to-blue-500 hover:from-cyan-500 hover:to-blue-400 text-white font-semibold py-2.5 rounded-lg shadow-md hover:shadow-cyan-400/30 transition-all duration-300"
            >
              Create Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;
