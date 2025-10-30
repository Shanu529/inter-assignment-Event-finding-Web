


import express from "express"
const router = express.Router();

import { createEvent, deleteEvent, getAllEvent, getOneEvent } from "../controllers/eventController.js"

router.post("/create-event", createEvent)

router.delete("/delete-event", deleteEvent)

router.get("/get-event", getAllEvent)

router.get("/get-event/:id", getOneEvent)

export default router;