$(document).ready(function() {

	var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 40.417080, lng: -3.703612}
  });

  var geocoder = new google.maps.Geocoder();
	document.getElementById('address').addEventListener('change', function(){
		console.log('Address changed');
		geocodeaddress(geocoder, map);
	})
  document.getElementById('submit').addEventListener('click', function() {
		console.log('Submited');
    geocodeaddress(geocoder, map);
  });

  function geocodeaddress(geocoder, resultsMap) {
	  var address = document.getElementById('address').value;

	  geocoder.geocode({'address': address}, function(results, status) {
			console.log('Geocoder has come back. Results %j status %s', results, status);
	    if (status === 'OK') {
				// results[0].geometry.location.lat()
				// results[0].geometry.location.lng()
	      resultsMap.setCenter(results[0].geometry.location);
	      var marker = new google.maps.Marker({
	        map: resultsMap,
	        position: results[0].geometry.location
	      });
	      document.getElementById('latitude').value = results[0].geometry.location.lat();
	      document.getElementById('longitude').value = results[0].geometry.location.lng();
	    } else {
	      alert('Geocode was not successful for the following reason: ' + status);
	    }
	  });
	}
});
$(".button-collapse").sideNav();
$('select').material_select();
$(".dropdown-button").dropdown();
