import axios from 'axios'

const URL = "http://localhost:4000/room"

export const GetRoom = () => axios.get(URL);

export const CreateRoom = (room) => axios.post(URL, room);