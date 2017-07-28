$(document).ready(function(){
  const sol = {
    lat: 40.417080,
    lng: -3.703612
  };

const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: sol
  });
   // Add listing markers to map
  let markers = [];
  myListings.forEach(function(listing){
    let addres = listing. titlelisting.title
    let position = {
      lat: listing.location.coordinates[1],
      lng: listing.location.coordinates[0]
    };
    var pin = new google.maps.Marker({ position, map, title  });
    markers.push(pin)
  });

});