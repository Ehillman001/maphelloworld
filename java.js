let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    const Carleton University = { lat: 45.38776201738197, lng: -75.69603093064909 },
    zoom: 8,
  });
  const marker = new google.maps.Marker({
    position: Carleton University,
    map: map,
  });
}
