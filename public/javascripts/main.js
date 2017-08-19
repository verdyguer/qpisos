$(document).ready(function () {
  const sol = {
    lat: 40.417080,
    lng: -3.703612
  };

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: sol
  });

  let marker = [];
  myListings.forEach(function (listing) {
    let title = listing.title
    let position = {
      lat: listing.location.coordinates[1],
      lng: listing.location.coordinates[0]
    };
    var pin = new google.maps.Marker({ position, map, title });
    marker.push(pin)
  });

});

$(".button-collapse").sideNav();
$('select').material_select();
$('.dropdown-button').dropdown({
           inDuration: 300,
           outDuration: 225,
           constrain_width: true, 
           hover: true, 
           gutter: 0, 
           belowOrigin: false 
           }
      );





