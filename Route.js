var map; // Declare map globally to make it accessible in other functions
var infoWindow = new google.maps.InfoWindow();
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
        // alert("Directions request failed due to " + status);
      }
    }
  );

  // Call the function to display results containing all data with the same city names
  displayRouteResults(
    GasStations.filter(
      (station) =>
        station.City.toLowerCase() === routeInputs[0].value.toLowerCase() ||
        station.City.toLowerCase() === routeInputs[1].value.toLowerCase()
    )
  );
}

function displayRouteResults(stations) {
  const resultsContainer = document.getElementById("Route-results");
  resultsContainer.innerHTML = "";

  if (stations.length === 0) {
    const messageElement = document.createElement("div");
    messageElement.textContent = "Oops! No results found.";
    resultsContainer.appendChild(messageElement);
    return;
  }
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
                  <img class="show-popup" src="./Images/go.svg" alt=""/>
              </div>
          `;

    resultsContainer.appendChild(listItem);
    const goImg = listItem.querySelector(".show-popup");

    goImg.addEventListener("click", function () {
   
      var location = new google.maps.LatLng(station.Lati, station.longi);
      map.setCenter(location);

      // Create a marker at the specified location
      var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: station.CusDesc, // You can customize the title based on your requirement
      });

      // Calculate distance (assuming calculateDistance and currentLocation are defined)
      var distance = calculateDistance(currentLocation, {
        lat: parseFloat(station.Lati),
        lng: parseFloat(station.longi),
      });

      // Create the popup content similar to displaySearchedStationInformation
      var infoContent = "<div class='click-window'>";
      infoContent += "<h2 class='info-title'>" + station.CusDesc + "</h2>";
      infoContent += "<h2 class='info-heading'>Site ID:</h2>";
      infoContent += "<p class='info-text'>" + station.CusCode + "</p>";
      infoContent += "<h2 class='info-heading'>Distance:</h2>";
      infoContent +=
        "<p class='info-text'>Distance: " + distance.toFixed(2) + " km</p>";
      infoContent += "<h2 class='info-heading'>Coordinates:</h2>";
      infoContent +=
        "<p class='info-text'>" +
        station.Lati +
        " , " +
        station.longi +
        "</p>";
      infoContent += "<h2 class='info-heading'>Fuel:</h2>";
      infoContent +=
        "<p class='info-text'>" +
        Object.keys(station["Fuel Types"][0]).join(", ") +
        "</p>";
      infoContent +=
        "<div class='my-bookmark' onclick='addToBookmark(\"" +
        station.CusDesc +
        '", "' +
        station.CusAddress +
        '", ' +
        station.Lati +
        ", " +
        station.longi +
        ")'><img class='book-img' src='./Vector.png'>Add To Bookmark  </div>";
      infoContent += "<h2 class='info-heading'>Services</h2>";

      // Assuming gasStation.Services is available
      station.Services.forEach((service) => {
        infoContent +=
          "<p class='info-text'>Service: " + service.ServiceDes + "</p>";
      });

      infoContent += "<h2 class='info-heading'>Contact:</h2>";
      infoContent += "<p class='info-text'>" + station.CusAddress + "</p>";
      infoContent += "</div>";

      var infoWindow = new google.maps.InfoWindow();

      // Set the content of the InfoWindow
      infoWindow.setContent(infoContent);
      // Open the InfoWindow
      infoWindow.open(map, marker);
    });

    // createMarker(station.Lati, station.longi, station.CusDesc,station);
  });
  GasStations.forEach((station) => {
    createMarker(station.Lati, station.longi, station.CusDesc, station);
  });
}

var markers = [];

// Function to create a marker on the map
function createMarker(latitude, longitude, stationName, stationData) {
  var location = new google.maps.LatLng(latitude, longitude);

  // Create a marker for the gas station with the custom image
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: stationName,
    icon: {
      url: "./attock-petroleum.png",
      scaledSize: new google.maps.Size(30, 30),
    },
  });

  // Add a click event listener to the marker
  marker.addListener("click", function () {
    displayStationInformation(stationData);
    moveToLocation(latitude, longitude, stationName);
  });

  // Add the marker to the markers array
  markers.push(marker);
}

function displayStationInformation(gasStation) {
  var distance = calculateDistance(currentLocation, {
    lat: parseFloat(gasStation.Lati),
    lng: parseFloat(gasStation.longi),
  });

  var infoContent = "<div class='click-window'>";
  infoContent += "<h2 class='info-title'>" + gasStation.CusDesc + "</h2>";
  infoContent += "<h2 class='info-heading'>Site ID:</h2>";
  infoContent += "<p class='info-text'>" + gasStation.CusCode + "</p>";
  infoContent += "<h2 class='info-heading'>Distance:</h2>";
  infoContent +=
    "<p class='info-text'>Distance: " + distance.toFixed(2) + " km</p>";
  infoContent += "<h2 class='info-heading'>Coordinates:</h2>";
  infoContent +=
    "<p class='info-text'>" +
    gasStation.Lati +
    " , " +
    gasStation.longi +
    "</p>";
  infoContent += "<h2 class='info-heading'>Fuel:</h2>";
  infoContent +=
    "<p class='info-text'>" +
    Object.keys(gasStation["Fuel Types"][0]).join(", ") +
    "</p>";
  infoContent +=
    "<div class='my-bookmark' onclick='addToBookmark(\"" +
    gasStation.CusDesc +
    '", "' +
    gasStation.CusAddress +
    '", ' +
    gasStation.Lati +
    ", " +
    gasStation.longi +
    ")'><img class='book-img' src='./Vector.png'>Add To Bookmark  </div>";
  infoContent += "<h2 class='info-heading'>Services</h2>";
  gasStation.Services.forEach((service) => {
    infoContent +=
      "<p class='info-text'>Service: " + service.ServiceDes + "</p>";
  });
  infoContent += "<h2 class='info-heading'>Contact:</h2>";
  infoContent += "<p class='info-text'>" + gasStation.CusAddress + "</p>";
  infoContent += "</div>";

  infoWindow.setContent(infoContent);
  infoWindow.open(map, markers[markers.length - 1]);
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
  // var infoWindow = new google.maps.InfoWindow({
  //     content: "Gas Station Information: " + stationName,
  // });

  // Open the info window at the marker
  infoWindow.open(map, marker);
}
var bookmarks = [];

function addToBookmark(CusDesc, CusAdd, Lati, longi) {
  // Retrieve existing bookmarks from the cookie
  var existingBookmarks = getBookmarks();

  // Create an object with the bookmark information
  var bookmarkInfo = {
    CusDesc: CusDesc,
    CusAdd: CusAdd,
    Lati: Lati,
    longi: longi,
  };

  // Add the new bookmark to the existing bookmarks
  existingBookmarks.push(bookmarkInfo);

  // Convert the array to a JSON string
  var bookmarksJSON = JSON.stringify(existingBookmarks);

  // Set the combined bookmarks in the cookie
  document.cookie =
    "bookmarks=" + encodeURIComponent(bookmarksJSON) + "; path=/";

  // You can also set an expiration time if needed, e.g., expires=Sun, 01 Jan 2023 00:00:00 GMT
  initBookmarkDisplay();
  // You can perform additional actions as needed

  // Change the opacity of the bookmark button to indicate that it has been clicked
  var bookmarkButton = document.querySelector(".my-bookmark");
  if (bookmarkButton) {
    bookmarkButton.style.opacity = 0.5; // Set the desired opacity value
  }
}
