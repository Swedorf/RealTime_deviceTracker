const socket = io();

// Initialize the map, but don't set the view yet
const map = L.map('map');

// Load and display tile layers on the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let marker;
let firstTime = true; // Flag to check if it's the first location update

// Watch the user's location
navigator.geolocation.watchPosition((position) => {
    const { latitude, longitude } = position.coords;

    // If it's the first time, set the map view to the user's location with a zoom level of 15
    if (firstTime) {
        map.setView([latitude, longitude], 15);
        firstTime = false;
    }

    // Update or create the marker for the user's location
    if (marker) {
        marker.setLatLng([latitude, longitude]);
    } else {
        marker = L.marker([latitude, longitude]).addTo(map);
    }

    // Send the location to the server
    socket.emit('locationUpdate', { lat: latitude, lng: longitude });

}, (err) => {
    console.error(err);
}, {
    enableHighAccuracy: true
});

// Listen for location updates from other devices
socket.on('locationUpdate', (data) => {
    L.marker([data.lat, data.lng]).addTo(map);
});
