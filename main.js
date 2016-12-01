function run () {

function googleMap() {
    var city = document.querySelector('#address').value;
    return $.ajax({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+city,
        dataType: 'json',
    });
}

var promise = googleMap()
console.log('promise is', promise)

promise.then(function(response) {
    var lat = response.results[0].geometry.location.lat
    var lng = response.results[0].geometry.location.lng
    $('#lat').html("")
    $('#lng').html("")
    $('#lat').append("Latitude: ", lat)
    $('#lng').append("Longitute: ", lng)
})
}
