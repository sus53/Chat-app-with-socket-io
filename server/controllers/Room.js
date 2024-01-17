import Room from "../models/Room.js";

export const GetRoom = async (req, res) => {
    try {
        const room = await Room.find();
        res.status(200).json(room);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const CreateRoom = async (req, res) => {
    const room = new Room(req.body);
    try {
        await room.save();
        res.status(201).json({ username: req.body.room });

    } catch (error) {
        res.status(402).json({ message: error.message });
    }
}