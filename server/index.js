import express from "express";
import cors from "cors";
import http from 'http';
import { Server } from "socket.io";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import RoomRouter from './routers/Room.js'
import UserRouter from './routers/User.js'

dotenv.config();

const app = express();
const server = http.createServer(app);

mongoose.connect(process.env.mongoDB).then(() =>
    server.listen("https://chat-app-with-socket-io-dun.vercel.app", () => {
        console.log("Server is listening in PORT " + "https://chat-app-with-socket-io-dun.vercel.app");
    })).catch(err => console.log(err));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use('/room', RoomRouter);
app.use('/user', UserRouter);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["POST", "GET"]
    }
})

io.on("connection", (socket) => {
    console.log("User connected", socket.id);


    socket.on("join_room", (data) => {
        socket.join(data);
        console.log(socket.id + " joined " + data);
    })

    socket.on("send_message", data => {
        socket.to(data.room).emit("recieve_message", data);
    })

    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id);
    })
})

