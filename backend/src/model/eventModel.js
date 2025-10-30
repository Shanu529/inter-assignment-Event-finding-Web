

import mongoose from "mongoose";


const eventCreateSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    time: {
        type: Date,
        required: true
    },

    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    maxParticipants: {
        type: Number,
        required: true,
    },

    currentParticipants: {
        type: Number,
        default: 0
    },

});

const eventCreate = mongoose.model("eventCreate", eventCreateSchema)
export default eventCreate;
