document.getElementById("RouteInputFrom").addEventListener("input", generateRouteOnInput);
    document.getElementById("RouteInputTo").addEventListener("input", generateRouteOnInput);
  
    function generateRouteOnInput() {
        const inputFrom = document.getElementById("RouteInputFrom").value.toLowerCase();
        const inputTo = document.getElementById("RouteInputTo").value.toLowerCase();
  
        const filteredStations = GasStations.filter((station) => {
            return (
                station.City.toLowerCase().includes(inputFrom) ||
                station.City.toLowerCase().includes(inputTo)
            );
        });
  
        displayRouteResults(filteredStations);
  
        if (filteredStations.length >= 2) {
            const origin = filteredStations[0];
            const destination = filteredStations[1];
            calculateAndDisplayRoute(origin, destination);
        }
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
                      <img src="./Images/go.svg" alt="" onclick="moveToLocation(${station.Lati}, ${station.longi})"/>
                  </div>
              `;
  
            resultsContainer.appendChild(listItem);
        });
    }
  
    function moveToLocation(latitude, longitude) {
        var location = new google.maps.LatLng(latitude, longitude);
        map.setCenter(location);
        var infoWindow = new google.maps.InfoWindow({
            content: "Gas Station Information",
        });
        infoWindow.open(map, marker);
    }
  
    function calculateAndDisplayRoute(origin, destination) {
        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer();
  
        directionsRenderer.setMap(map);
  
        const request = {
            origin: origin.CusAddress,
            destination: destination.CusAddress,
            travelMode: google.maps.TravelMode.DRIVING,
        };
  
        directionsService.route(request, function (result, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsRenderer.setDirections(result);
            } else {
                console.error("Directions request failed due to " + status);
            }
        });
    }