function printMapAndMarker(title, lng, lat) {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: { lat: lat, lng: lng }
  });

  var marker = new google.maps.Marker({
    position: { lat: lat, lng: lng },
    map: map,
    title: title
  });
}
