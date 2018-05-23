
        var map;
        var markers = [];
        

        function initMap() {
            var element = document.getElementById('map');
            var options = {
                zoom: 10,
                center: {lat: 54.6269, lng: 39.6916},
                mapTypeId: google.maps.MapTypeId.HYBRID
            };

            map = new google.maps.Map(element, options);
            var geocoder = new google.maps.Geocoder();
            var marker;
            
            document.getElementById('submit').addEventListener('click', function() {
                fromAddressToPoint(geocoder, map);
                markers.push(marker);
                map.zoom = 18;
                console.dir(markers);
                
            });
        }

            function fromAddressToPoint(geocoder, resultsMap) {
                var city = document.getElementById('city');
                var street = document.getElementById('street');
                var home = document.getElementById('home');
                var address = city.value + street.value + home.value;

                geocoder.geocode({'address': address}, function(results, status) {
                    if (status === 'OK') {
                        resultsMap.setCenter(results[0].geometry.location);
                        var marker = new google.maps.Marker({
                            map: resultsMap,
                            position: results[0].geometry.location
                        });                       
                        
                        var banner = 'г. '+city.value;
                        if (street.value) {
                            banner += ', ул. '+street.value;
                        }
                        if (home.value) {
                            banner += ', д. '+home.value;
                        }

                        var infoWindow = new google.maps.InfoWindow({
                            content: banner
                        });

                        marker.addListener('click', function() {
                            infoWindow.open(map, marker);
                        });   

                    } else {
                        alert('Товарищ, что-то пошло не так - возникла ошибка: ' + status);
                    }
                });  
            }
