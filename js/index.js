
var map = L.map('map');
var tiles;
var lokacija;

navigator.geolocation.getCurrentPosition(createMap);

function createMap(position) {
    map.setView([position.coords.latitude, position.coords.longitude], 20);

    tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(map);
}

map.on('click', function(e) {
    if(lokacija == null)
        lokacija = new L.marker(e.latlng).addTo(map);
    else
        lokacija.setLatLng(e.latlng);
});

