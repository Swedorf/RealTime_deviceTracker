(()=>{const t=io(),o=L.map("map");let e;L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(o);let a=!0;navigator.geolocation.watchPosition((r=>{const{latitude:n,longitude:i}=r.coords;a&&(o.setView([n,i],15),a=!1),e?e.setLatLng([n,i]):e=L.marker([n,i]).addTo(o),t.emit("locationUpdate",{lat:n,lng:i})}),(t=>{console.error(t)}),{enableHighAccuracy:!0}),t.on("locationUpdate",(t=>{L.marker([t.lat,t.lng]).addTo(o)}))})();