// Initialize and add the map
function initMap() {
  // The location of Uluru
  const ottawa = { lat: 45.387, lng: -75.696 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: ottawa,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: ottawa,
    map: map,
  });
}
