

import { get } from "mongoose";
import eventCreate from "../model/eventModel.js";

// Create new event
export const createEvent = async (req, res) => {
    const { title, time, location, description, maxParticipants } = req.body;

    try {
        if (!title || !time || !location || !description || !maxParticipants) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Create new event
        const newEvent = new eventCreate({
            title,
            time,
            location,
            description,
            maxParticipants
        });

        console.log(" Saving event...");
        const savedEvent = await newEvent.save();
        console.log(" Event saved:", savedEvent);

        res.status(201).json({
            message: "Event created successfully",
            eventCreate: savedEvent,
        });

    } catch (error) {
        console.error(" Error creating event:", error);
        res.status(500).json({
            message: "Server error while creating event",
            error: error.message,
        });
    }
};

// Delete event
export const deleteEvent = async (req, res) => {
    const { id } = req.body;

    try {
        if (!id) {
            return res.status(400).json({ message: "you don't have Id" });
        }

        const deletingEvent = await eventCreate.findByIdAndDelete(id);

        if (!deletingEvent) {
            return res.status(404).json({ message: "there is no event found" });
        }

        res.status(200).json({ message: "Event Deleted Successfully" });
    } catch (error) {
        console.error("Error deleting event:", error);
        return res.status(500).json({
            message: "error in deleting controller",
            error: error.message,
        });
    }
};


// find one event by id
export const getOneEvent = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) {
            return res.status(400).json({ message: "You must provide an ID" });
        }

        const getOneEvent = await eventCreate.findById(id);

        if (!getOneEvent) {
            return res.status(404).json({ message: "No event found with this ID" });
        }
        res.status(200).json({
            message: "Event retrieved successfully",
            event: getOneEvent,
        });
    } catch (error) {
        console.error("Error fetching event:", error);
        return res.status(500).json({
            message: "Server error while fetching event",
            error: error.message,
        });
    }
};

// get all the events
export const getAllEvent = async (req, res) => {

    try {
        const getAllEvent = await eventCreate.find({})
        return res.status(200).json(getAllEvent)
    } catch (error) {
        console.log("error in gettting all events lists", error);
        res.status(400).json({ message: "something went wrong", error: error.message })
    }
}