import { GetRoom, CreateRoom } from "../api/Room";

export const FetchRoom = async () => {
    try {
        const { data } = await GetRoom();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const MakeRoom = async (room) => {
    try {
        const { data } = CreateRoom(room);
        return data;
    } catch (error) {
        console.log(error)
    }
}