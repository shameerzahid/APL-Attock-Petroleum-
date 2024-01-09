
var map;
var infoWindow;
var currentLocation;
var hoverInfoWindow;

function myMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            currentLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var mapProp = {
                center: currentLocation,
                zoom: 15,
                styles: [
                    {
                        elementType: 'geometry',
                        stylers: [{ color: '#ffffff' }]
                    },
                    {
                        elementType: 'labels.text.stroke',
                        stylers: [{ color: '#ffffff' }]
                    },
                    {
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#000000' }]
                    },
                    {
                        featureType: 'administrative.locality',
                        elementType: 'labels.text.fill',
                        stylers: [{ color: '#000000' }]
                    },
                    // Add more style rules as needed
                ],
            };

            map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

            var marker = new google.maps.Marker({
                position: currentLocation,
                map: map,
                title: 'You are here!',
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    fillColor: 'blue',
                    fillOpacity: 1,
                    strokeWeight: 1,
                    scale: 10
                }
            });

            infoWindow = new google.maps.InfoWindow();

            for (var i = 0; i < GasStations.length; i++) {
                addMarker(GasStations[i]);
            }
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function addMarker(gasStation) {
    var gasStationLocation = {
        lat: parseFloat(gasStation.Lati),
        lng: parseFloat(gasStation.longi)
    };

    var gasStationMarker = new google.maps.Marker({
        position: gasStationLocation,
        map: map,
        icon: {
            url: './attock-petroleum.png',
            scaledSize: new google.maps.Size(30, 30)
        }
    });
    hoverInfoWindow = new google.maps.InfoWindow();
    gasStationMarker.addListener('mouseover', function () {
        displayHoverInfo(gasStationMarker, gasStation);
    });
    
    // Optional: Close the hover info window on mouseout
    gasStationMarker.addListener('mouseout', function () {
        hoverInfoWindow.close();
    });
    function displayHoverInfo(marker, gasStation) {
        var hoverInfoContent = "<div class='hover-window'>"; // Set your desired maximum width in pixels
        hoverInfoContent += "<h2 class='hover-title'>" + gasStation.CusDesc + "</h2>";
        hoverInfoContent += "<p class='hover-text'>" + gasStation.CusAddress + "</p>"; // Add address
        hoverInfoContent += "</div>";
    
        hoverInfoWindow.setContent(hoverInfoContent);
        hoverInfoWindow.open(map, marker);
    }
    

    gasStationMarker.addListener('click', function () {
        displayStationInfo(gasStationMarker, gasStation);
    });
}

function displayStationInfo(marker, gasStation) {
    var gasStationLocation = {
        lat: parseFloat(gasStation.Lati),
        lng: parseFloat(gasStation.longi)
    };

    var distance = calculateDistance(currentLocation, gasStationLocation);

    var infoContent = "<div class='click-window''>"; // Set your desired maximum width in pixels
    infoContent += "<h2 class='info-title'>" + gasStation.CusDesc + "</h2>";
    infoContent += "<h2 class='info-heading'>Site ID:</h2>";
    infoContent += "<p class='info-text'>" + gasStation.CusCode + "</p>"; // Add Site ID
    infoContent += "<h2 class='info-heading'>Distance:</h2>";
    infoContent += "<p class='info-text'>Distance: " + distance.toFixed(2) + " km</p>";
    infoContent += "<h2 class='info-heading'>Coordinates:</h2>";
    infoContent += "<p class='info-text'>" + gasStation.Lati + " , " + gasStation.longi + "</p>"; // Add Coordinates
    infoContent += "<h2 class='info-heading'>Fuel:</h2>";
    // Iterate over Fuel Types and add them to the info window
    infoContent += "<p class='info-text'>" + Object.keys(gasStation['Fuel Types'][0]).join(', ') + "</p>";
    infoContent += "<h2 class='info-heading'>Services</h2>";
    // Iterate over Services and add only the service descriptions to the info window
    gasStation.Services.forEach(service => {
        infoContent += "<p class='info-text'>Service: " + service.ServiceDes + "</p>";
    });
    infoContent += "<h2 class='info-heading'>Contact:</h2>";
    infoContent += "<p class='info-text'>" + gasStation.CusAddress + "</p>"; // Add Site ID
    infoContent += "</div>";

    infoWindow.setContent(infoContent);
    infoWindow.open(map, marker);
}



function calculateDistance(point1, point2) {
    var R = 6371;
    var dLat = (point2.lat - point1.lat) * Math.PI / 180;
    var dLon = (point2.lng - point1.lng) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(point1.lat * Math.PI / 180) * Math.cos(point2.lat * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distance = R * c;
    return distance;
}

function handleLocationError(browserHasGeolocation, infoWindow, currentLocation) {
    // Handle errors here
}































// var map;
// var infoWindow;
// var currentLocation;

// function myMap() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function (position) {
//             currentLocation = {
//                 lat: position.coords.latitude,
//                 lng: position.coords.longitude
//             };

//             var mapProp = {
//                 center: currentLocation,
//                 zoom: 8,
//                 styles: [
//                     // Add your map styles here
//                 ],
//             };

//             map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

//             var marker = new google.maps.Marker({
//                 position: currentLocation,
//                 map: map,
//                 title: 'You are here!',
//                 icon: {
//                     path: google.maps.SymbolPath.CIRCLE,
//                     fillColor: 'blue',
//                     fillOpacity: 1,
//                     strokeWeight: 1,
//                     scale: 10
//                 }
//             });

//             infoWindow = new google.maps.InfoWindow();

//             // Fetch data from the API
//             fetch('http://115.186.178.11:8080/RaadAPI/Locator/GetWebRetailSites/json?UserID=SUPER&VersionCode=1&priceFetch=true')
//             .then(response => response.json())
//             .then(dataWrapper => {
//                 console.log('Fetched data:', dataWrapper);
        
//                 // Access the "List" property
//                 const data = dataWrapper.List;
        
//                 // Check if data is an array and not empty
//                 if (Array.isArray(data) && data.length > 0) {
//                     // Iterate through the fetched data and add markers on the map
//                     data.forEach(gasStation => {
//                         // Check if gasStation has expected properties
//                         if (gasStation && gasStation.Lati && gasStation.longi && gasStation.CusDesc && gasStation.CusAddress && gasStation.City && gasStation.HSDPrice) {
//                             addMarker(gasStation);
//                         } else {
//                             console.error('Invalid gas station data:', gasStation);
//                         }
//                     });
//                 } else {
//                     console.error('Empty or invalid data array:', data);
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching data from the API:', error);
//             });
        
//         }, function () {
//             handleLocationError(true, infoWindow, map.getCenter());
//         });
//     } else {
//         handleLocationError(false, infoWindow, map.getCenter());
//     }
// }

// function addMarker(gasStation) {
//     console.log("Add marker")
//     var gasStationLocation = {
//         lat: parseFloat(gasStation.Lati),
//         lng: parseFloat(gasStation.longi)
//     };

//     var gasStationMarker = new google.maps.Marker({
//         position: gasStationLocation,
//         map: map,
//         title: gasStation.CusDesc,
//         icon: {
//             url: './loginimage.webp',
//             scaledSize: new google.maps.Size(30, 30)
//         }
//     });

//     gasStationMarker.addListener('click', function () {
//         displayStationInfo(gasStationMarker, gasStation);
//     });
// }

// function displayStationInfo(marker, gasStation) {
//     var gasStationLocation = {
//         lat: parseFloat(gasStation.Lati),
//         lng: parseFloat(gasStation.longi)
//     };

//     var distance = calculateDistance(currentLocation, gasStationLocation);
//     var infoContent = "<div style='max-width: 1000px;'>";
//     infoContent = "<h2 class='info-title'>" + gasStation.CusDesc + "</h2>";
//     infoContent += "<p class='info-text'>Address: " + gasStation.CusAddress + "</p>";
//     infoContent += "<p class='info-text'>City: " + gasStation.City + "</p>";
//     infoContent += "<p class='info-text'>HSD Price: " + gasStation.HSDPrice + "</p>";
//     infoContent += "<p class='info-text'>Distance: " + distance.toFixed(2) + " km</p>";
//     infoContent += "</div>";
//     infoWindow.setContent(infoContent);
//     infoWindow.open(map, marker);
// }

// function calculateDistance(point1, point2) {
//     var R = 6371;
//     var dLat = (point2.lat - point1.lat) * Math.PI / 180;
//     var dLon = (point2.lng - point1.lng) * Math.PI / 180;
//     var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//         Math.cos(point1.lat * Math.PI / 180) * Math.cos(point2.lat * Math.PI / 180) *
//         Math.sin(dLon / 2) * Math.sin(dLon / 2);
//     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     var distance = R * c;
//     return distance;
// }

// function handleLocationError(browserHasGeolocation, infoWindow, currentLocation) {
//     // Handle errors here
// }
