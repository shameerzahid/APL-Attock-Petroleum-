var map; // Declare map globally to make it accessible in other functions

function generateRouteOnInput() {
    var routeContainer = document.getElementById("Route-Container");
    var routeInputs = routeContainer.getElementsByClassName("Routesearch-input");

    // Check if both RouteSearch-Inputs have values
    if (!routeInputs[0].value || !routeInputs[1].value) {
        console.log("Please enter both starting and ending locations for routing.");
        return;
    }

    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();

    map = new google.maps.Map(document.getElementById("googleMap"), {
        center: { lat: 0, lng: 0 },
        zoom: 8,
    });

    directionsRenderer.setMap(map);

    var waypoints = [];
    for (var i = 0; i < routeInputs.length; i++) {
        waypoints.push({
            location: routeInputs[i].value,
            stopover: true,
        });
    }

    directionsService.route(
        {
            origin: routeInputs[0].value,
            destination: routeInputs[1].value,
            waypoints: waypoints.slice(1, -1), // Exclude the origin and destination from waypoints
            optimizeWaypoints: true,
            travelMode: google.maps.TravelMode.DRIVING,
        },
        function (response, status) {
            if (status === "OK") {
                directionsRenderer.setDirections(response);
            } else {
                alert("Directions request failed due to " + status);
            }
        }
    );

    // Call the function to display results containing all data with the same city names
    displayRouteResults(GasStations.filter(station =>
        station.City.toLowerCase() === routeInputs[0].value.toLowerCase() ||
        station.City.toLowerCase() === routeInputs[1].value.toLowerCase()
    ));
}

function displayRouteResults(stations) {
    const resultsContainer = document.getElementById("Route-results");
    resultsContainer.innerHTML = "";

    stations.forEach((station, index) => {
        const listItem = document.createElement("div");
        listItem.classList.add("list");
        listItem.innerHTML = `
              <p class="number">${index + 1}</p>
              <div>
                  <p class="p1 margin2">${station.CusDesc}</p>
                  <p class="p2 margin2">${station.CusAddress}</p>
              </div>
              <div>
                  <img src="./Images/go.svg" alt="" onclick="moveToLocation(${station.Lati}, ${station.longi}, '${station.CusDesc}')"/>
              </div>
          `;

        resultsContainer.appendChild(listItem);
    });
}

function moveToLocation(latitude, longitude, stationName) {
    var location = new google.maps.LatLng(latitude, longitude);

    // Create a marker for the gas station
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: stationName,
    });

    // Center the map to the gas station's location
    map.setCenter(location);

    // Create an info window with gas station information
    var infoWindow = new google.maps.InfoWindow({
        content: "Gas Station Information: " + stationName,
    });

    // Open the info window at the marker
    infoWindow.open(map, marker);
}
