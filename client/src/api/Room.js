import axios from 'axios'

const URL = "https://chat-app-eight-sable.vercel.app/room"

export const GetRoom = () => axios.get(URL);

export const CreateRoom = (room) => axios.post(URL, room);