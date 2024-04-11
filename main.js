let lat = 67.8802837;
let long = 12.970926;
let zoom = 13;


let map = L.map('map').setView([lat, long], zoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([67.8802837, 12.970926]).addTo(map);
marker.bindPopup(`
    <h2>Lofoten!</h2><br>
    <ul>
        <li>Breite: ${lat.toFixed(5)}</li>
        <li>Laenge: ${long.toFixed(5)}</li>
    </ul>
`).openPopup();

let circle = L.circle([67.9, 13], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);