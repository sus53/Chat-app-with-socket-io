import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    room: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }

})

const Room = mongoose.model("rooms", messageSchema);

export default Room;