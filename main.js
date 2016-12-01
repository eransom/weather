
function makeAjaxRequest (){
 return $.ajax({
 url: 'https://maps.googleapis.com/maps/api/geocode/json?address=Orlando,+FL&key=AIzaSyAvtPrtbQmam8PDbWyPy407RnWEcnagc78&libraries=places',
 dataType: 'json',
 });
}

var promise = makeAjaxRequest()
promise.then (function(response){
  var lat = response.results[0].geometry.location.lat
  var lng = response.results[0].geometry.location.lng
})

// google.maps.event.addDomListener(window, 'load', initialize);
//   function initialize () {
//     var autocomplete = new.google.maps.places.autocomplete(document.getElementById('address'));
//
//     google.maps.event.addListener(autocomplete, 'place_changed', function () {
//
//     var places = autocomplete.getplace();
//     var location = "<b>Location:</b>" + places.formatted_address + "<br/>";
//       location += "<b>Latitude:</b>" + places.geometry.location.A + "<br/>";
//       longitude += "<b>Longitude:</b>" + places.geometry.location.F + "<br/>";
//     document.getElementById.('lblresult').innerHTML = location;
//     });
//   };
