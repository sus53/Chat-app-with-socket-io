import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import CreateUser from "./components/createUser/CreateUser";
import './app.scss';
import Room from "./components/room/Room";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateRoom from "./components/createRoom/CreateRoom";


const socket = io.connect("https://chat-app-eight-sable.vercel.app");

function App() {

  const [username, setUsername] = useState(null);
  const [roomName, setRoomName] = useState(null);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard username={username} setUsername={setUsername} socket={socket} setRoomName={setRoomName} />} />
          <Route path="/room" element={<Room roomName={roomName} socket={socket} username={username} />} />
          <Route path="/" element={<CreateUser setUsername={setUsername} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
