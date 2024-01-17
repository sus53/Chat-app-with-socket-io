import { Close } from '@mui/icons-material';
import React, { useState } from 'react'
import './createRoom.scss'
import { MakeRoom } from '../../function/Room';

function CreateRoom({ setIsCreateRoom, fetchRoom }) {

    const [room, setRoom] = useState("");

    const createHandler = async () => {
        await MakeRoom({ "room": room });
        setRoom("");
        fetchRoom();
        setIsCreateRoom(false);
    }

    return (
        <div className='createRoom'>
            <h1>Create Room</h1>
            <Close className='close-create-room-btn' onClick={() => setIsCreateRoom(false)} />
            <div>
                <label>Room Name</label>
                <input type={"text"} onChange={(e) => { setRoom(e.target.value) }} value={room} />
            </div>
            <div>
                <button onClick={() => createHandler()}>Create</button>
            </div>
        </div>
    )
}

export default CreateRoom