function initMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var map = new google.maps.Map(document.getElementById('map'), {
<<<<<<< HEAD:googleapi/directions.js
    zoom: 7,
    center: {lat: 41.85, lng: -87.65}
=======
    zoom: 12,
    center: {lat: 33.6694444, lng: -117.8222222}

>>>>>>> 888ca5f... #2 Added text overlay for build vote section:googleapi/googlemap.js
  });
  directionsDisplay.setMap(map);

<<<<<<< HEAD:googleapi/directions.js
=======
  /*Traffic Layer*/
  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);

>>>>>>> 888ca5f... #2 Added text overlay for build vote section:googleapi/googlemap.js
  var onChangeHandler = function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  };
  document.getElementById('start').addEventListener('change', onChangeHandler);
  document.getElementById('end').addEventListener('change', onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  directionsService.route({
    origin: document.getElementById('start').value,
    destination: document.getElementById('end').value,
    travelMode: google.maps.TravelMode.DRIVING
  }, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to' + status);
    }
  });
}
