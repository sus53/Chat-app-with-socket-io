import { ArrowBackIosNew, Send } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { format } from 'timeago.js';
import Emoji from './Emoji';
import './room.scss'


function Room({ roomName, socket, username }) {

    const [emoji, setEmoji] = useState(false);
    const [message, setMessage] = useState([]);
    const [currentMessage, setCurrentMessage] = useState('');

    const SendMessageHandler = async () => {
        const msgData = {
            room: roomName,
            message: currentMessage,
            author: username,
            time: format(new Date())
        }
        const data = await socket.emit("send_message", msgData);
        setMessage(msg => [...msg, msgData]);
        setCurrentMessage("");
    }

    useEffect(() => {
        socket.on("recieve_message", data => {
            setMessage(msg => [...msg, data]);
        })
    }, [socket])

    return (
        <div className='room'>
            <div className='room-head'>
                <Link to='/dashboard' className='link'><ArrowBackIosNew className='icon' /></Link>
                <div>
                    {roomName}
                </div>
            </div>
            <div className='room-body'>
                <div className='message'>
                    <div>
                        {message.length > 0 && message.map((msg, i) =>
                            <div className={username == msg.author ? 'message-sent' : 'message-recieved'} key={i}>
                                {msg.message}
                                <div className='message-info'>
                                    <div>Sent by {msg.author}</div>
                                    <div>{msg.time}</div>
                                </div>
                            </div>)}
                    </div>
                </div>


                <div className={emoji ? 'message-input-emoji message-input' : 'message-input'}>
                    <div>
                        <Emoji emoji={emoji} setEmoji={setEmoji} setCurrentMessage={setCurrentMessage} />
                        <input onChange={(e) => setCurrentMessage(e.target.value)} value={currentMessage} placeholder="Message" />
                    </div>
                    <button onClick={() => { SendMessageHandler() }}><Send /></button>
                </div>
            </div>
        </div>
    )
}

export default Room