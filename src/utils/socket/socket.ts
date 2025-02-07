/* eslint-disable */
import { io } from 'socket.io-client';
import { getToken } from '../protectRoute/ProtectedRoute';

const socket = io('http://localhost:4040');

export const joinRoom = () => {
  const token = getToken();
  if (token) {
    socket.emit('join', token);
  } else {
    console.error("Token not found.");
  }
};

export const disconnect = () => {
  if (socket.connected) {
    socket.disconnect();
  }
};

export default socket;