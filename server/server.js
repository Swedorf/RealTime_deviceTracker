const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const path = require('path');

// Setup express app
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

// Create HTTP server and attach Socket.io
const server = http.createServer(app);
const io = socketIo(server);

// Listen for client connections
io.on('connection', (socket) => {
  console.log('A device connected:', socket.id);

  // Listen for location updates from the client
  socket.on('locationUpdate', (data) => {
    console.log('Location update received:', data);

    // Broadcast location update to all clients except the sender
    socket.broadcast.emit('locationUpdate', data);
  });

  socket.on('disconnect', () => {
    console.log('A device disconnected:', socket.id);
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
