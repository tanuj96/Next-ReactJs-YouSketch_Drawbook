import { io } from "socket.io-client";
const URL = process.env.NODE.ENV === 'production' ? 'https://yousketch-server.onrender.com' : 'http://localhost:5000';
export const socket = io(URL);