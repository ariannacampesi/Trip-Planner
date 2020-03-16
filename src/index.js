console.log('it is working');

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5uZnJhbmNhbSIsImEiOiJjazd1b2hneHIxZHJhM2RwNGVoenl1Zmp3In0._8OFoJBpQdq3re8eP4QnpA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

