const mymap = L.map('map').setView([37.835, -95.430], 4);

const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

// this.map.locate({
//     watch: true,
//     setView: true,
//     maxZoom: 16
// }).on('locationfound', (e) => {
//     if (!this.marker) {
//         this.marker = leaflet.marker([e.latitude, e.longitude], { icon: carIcon }).addTo(this.map);
//     } else {
//         this.marker.setLatLng([e.latitude, e.longitude]);
//     }
// }