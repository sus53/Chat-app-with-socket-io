import { Person, AddHome, Logout } from '@mui/icons-material';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './dashboard.scss';
import { useNavigate } from "react-router-dom";
import CreateRoom from '../createRoom/CreateRoom';
import { FetchRoom } from '../../function/Room';


function Dashboard({ username, setUsername, setRoomName, socket }) {

    const [menu, setMenu] = useState(false);
    const [rooms, setRooms] = useState([]);
    const [isCreateRoom, setIsCreateRoom] = useState(false);
    const navigate = useNavigate();

    const fetchRoom = async () => {
        const data = await FetchRoom();
        setRooms([...data]);
    }

    useEffect(() => {
        fetchRoom();
    }, [isCreateRoom])


    useEffect(() => {

        const checkUsername = () => {
            if (!username) {
                const name = window.sessionStorage.getItem('user');
                if (!name) navigate('/');
                else setUsername(name)
            }
        }

        checkUsername();
    }, [username])

    const onRoomClick = (room) => {
        socket.emit("join_room", room)
        setRoomName(room);
    }

    return (
        <div className='dashboard'>
            <div className='head'>
                <input placeholder='Enter room name.....' />
                <button className={menu ? 'menu-toggler r-90' : 'menu-toggler '} onClick={() => setMenu(!menu)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <div className={menu ? 'menu-toggle' : 'menu-toggle o-none'}>
                    <div><span className='icon'><Person /></span>{username}</div>
                    <div><button onClick={() => setIsCreateRoom(true)}><span className='icon'><AddHome /></span>Create Room</button></div>
                    <div><Link to='/' className='link'><button onClick={() => { { setUsername(null) }; sessionStorage.removeItem('user'); }} ><span className='icon'><Logout /></span>Log out</button></Link></div>
                </div>
            </div>
            <div className='body'>
                {rooms.length > 0 ? rooms.map((room) => <div key={room._id} onClick={() => onRoomClick(room.room)}>
                    <Link className='link' to='/room'>
                        <button>
                            <div className='room-head'>
                                s
                            </div>
                            <div className='room-body'>
                                {room.room}
                            </div>
                        </button>
                    </Link></div>) : <div className='text-align-center'>No room available</div>}

            </div>
            <div className={isCreateRoom ? 'p-fixed-center' : 'd-none'}>
                <CreateRoom setIsCreateRoom={setIsCreateRoom} fetchRoom={fetchRoom} />
            </div>
        </div >
    )
}

export default Dashboard