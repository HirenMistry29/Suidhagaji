// services/socketService.js
import io from 'socket.io-client';

const socket = io('http://localhost:8080'); // Update with your server URL if different

export default socket;
