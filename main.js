var map = L.map('map').setView([67.8802837, 12.970926], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([67.8802837, 12.970926]).addTo(map);
    marker.bindPopup("<strong>Hello world!</strong><br>I am a popup.").openPopup();

    var circle = L.circle([67.9, 13], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);