

import mongoose from "mongoose";



// connect to mongodb
export const mongodbConnection = async () => {

    try {
        await mongoose.connect(process.env.DATABASE_URL).then(() => {
            console.log("mongoDB connect successfuly");
        })
    } catch (error) {
        console.log("error in mongodb connection", error);

    }
}