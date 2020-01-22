document.querySelector('#submit').addEventListener('click', (e) => {
  e.preventDefault()
  alert('thank you for your message')
})

var map;
function initMap() {
  var bb = { lat: 49.8224, lng: 19.0584 };
  map = new google.maps.Map(document.getElementById('map'), {
    center: bb,
    zoom: 8
  });
  var marker = new google.maps.Marker({ position: bb, map });
}