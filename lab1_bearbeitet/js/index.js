function initCities() {
    mapAddress('map1', 'berlin');
    mapAddress('map2', 'minsk');
    mapAddress('map3', 'saransk');
    mapAddress('map4', 'kiew');
    mapAddress('map5', 'Dessau');

}


function mapAddress(mapElement, address) {
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({'address': address}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var mapOptions = {
                zoom: 14,
                center: results[0].geometry.location,
                disableDefaultUI: true
            };
            var map = new google.maps.Map(document.getElementById(mapElement), mapOptions);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        } else {
            alert("Geocode was not successful for the following reason: " + status);
        }
    });
}


