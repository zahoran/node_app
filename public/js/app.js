console.log('Client side javascript file is loaded!');

const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + 'Boston' +
  '.json?access_token=pk.eyJ1IjoiZGFuaWVsemFob3JhbiIsImEiOiJjanUwNW5wcjEweWdqNDNwbjhlbHRrcHptIn0.Xx28DmAeFdSfS_llb3CvDQ&limit=1';

fetch('http://localhost:3000/weather?address=Boston').then((res) => {
  res.json().then((data) => {
    console.log(data);
  })
})
