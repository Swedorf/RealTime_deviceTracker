/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/client.js":
/*!**************************!*\
  !*** ./public/client.js ***!
  \**************************/
/***/ (() => {

eval("const socket = io();\n\n// Initialize the map, but don't set the view yet\nconst map = L.map('map');\n\n// Load and display tile layers on the map\nL.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\n    attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\n}).addTo(map);\n\nlet marker;\nlet firstTime = true; // Flag to check if it's the first location update\n\n// Watch the user's location\nnavigator.geolocation.watchPosition((position) => {\n    const { latitude, longitude } = position.coords;\n\n    // If it's the first time, set the map view to the user's location with a zoom level of 15\n    if (firstTime) {\n        map.setView([latitude, longitude], 15);\n        firstTime = false;\n    }\n\n    // Update or create the marker for the user's location\n    if (marker) {\n        marker.setLatLng([latitude, longitude]);\n    } else {\n        marker = L.marker([latitude, longitude]).addTo(map);\n    }\n\n    // Send the location to the server\n    socket.emit('locationUpdate', { lat: latitude, lng: longitude });\n\n}, (err) => {\n    console.error(err);\n}, {\n    enableHighAccuracy: true\n});\n\n// Listen for location updates from other devices\nsocket.on('locationUpdate', (data) => {\n    L.marker([data.lat, data.lng]).addTo(map);\n});\n\n\n//# sourceURL=webpack://real-time-device-tracker/./public/client.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/client.js"]();
/******/ 	
/******/ })()
;