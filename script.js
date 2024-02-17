var map;
var infoWindow;
var currentLocation;
var hoverInfoWindow;

function myMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        var mapProp = {
          center: currentLocation,
          zoom: 15,
       
        };

        map = new google.maps.Map(
          document.getElementById("googleMap"),
          mapProp
        );

        var marker = new google.maps.Marker({
          position: currentLocation,
          map: map,
          title: "You are here!",
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: "blue",
            fillOpacity: 1,
            strokeWeight: 1,
            scale: 10,
          },
        });

        infoWindow = new google.maps.InfoWindow();

        for (var i = 0; i < GasStations.length; i++) {
          addMarker(GasStations[i]);
        }
      },
      function () {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }
  
}

function addMarker(gasStation) {
  var gasStationLocation = {
    lat: parseFloat(gasStation.Lati),
    lng: parseFloat(gasStation.longi),
  };

  var gasStationMarker = new google.maps.Marker({
    position: gasStationLocation,
    map: map,
    icon: {
      url: "./attock-petroleum.png",
      scaledSize: new google.maps.Size(30, 30),
    },
  });
  hoverInfoWindow = new google.maps.InfoWindow();
  gasStationMarker.addListener("mouseover", function () {
    displayHoverInfo(gasStationMarker, gasStation);
  });

  // Optional: Close the hover info window on mouseout
  gasStationMarker.addListener("mouseout", function () {
    hoverInfoWindow.close();
  });
  // function displayHoverInfo(marker, gasStation) {
  //   var hoverInfoContent = "<div class='hover-window'>"; // Set your desired maximum width in pixels
  //   hoverInfoContent +=
  //     "<h2 class='hover-title'>" + gasStation.CusDesc + "</h2>";
  //   hoverInfoContent +=
  //     "<p class='hover-text'>" + gasStation.CusAddress + "</p>"; // Add address
  //   hoverInfoContent += "</div>";

  //   hoverInfoWindow.setContent(hoverInfoContent);
  //   hoverInfoWindow.open(map, marker);
  // }

  gasStationMarker.addListener("click", function () {
    displayStationInfo(gasStationMarker, gasStation);
  });
}

function displayStationInfo(marker, gasStation) {
  var gasStationLocation = {
    lat: parseFloat(gasStation.Lati),
    lng: parseFloat(gasStation.longi),
  };

  var distance = calculateDistance(currentLocation, gasStationLocation);

  var infoContent = "<div class='click-window''>"; // Set your desired maximum width in pixels
  infoContent += "<h2 class='info-title'>" + gasStation.CusDesc + "</h2>";
  infoContent += "<h2 class='info-heading'>Site ID:</h2>";
  infoContent += "<p class='info-text'>" + gasStation.CusCode + "</p>"; // Add Site ID
  infoContent += "<h2 class='info-heading'>Distance:</h2>";
  infoContent +=
    "<p class='info-text'>Distance: " + distance.toFixed(2) + " km</p>";
  infoContent += "<h2 class='info-heading'>Coordinates:</h2>";
  infoContent +=
    "<p class='info-text'>" +
    gasStation.Lati +
    " , " +
    gasStation.longi +
    "</p>"; // Add Coordinates

  infoContent += "<h2 class='info-heading'>Fuel:</h2>";
  // Iterate over Fuel Types and add them to the info window
  infoContent +=
    "<p class='info-text'>" +
    Object.keys(gasStation["Fuel Types"][0]).join(", ") +
    "</p>";

    
    // add image here
// Function to check if a gas station is bookmarked
function isGasStationBookmarked(CusDesc) {
  var existingBookmarks = getBookmarks();
  console.log(existingBookmarks)
  return existingBookmarks.some(function(bookmark) {
    return (bookmark.CusDesc === CusDesc)
  });
}

// Generate infoContent with dynamic bookmark button text
var bookmarkText = isGasStationBookmarked(gasStation.CusDesc) ? "Remove From Bookmark" : "Add To Bookmark";
var bookmarkImageSrc = isGasStationBookmarked(gasStation.CusDesc) ? "./Images/removefrombookmark.svg" : "./Images/addtobook.svg";
infoContent += "<div class='my-bookmark' onclick='addToBookmark(\"" + gasStation.CusDesc + "\", \"" + gasStation.CusAddress + "\", " + gasStation.Lati + ", " + gasStation.longi + ")'><img class='book-img' src='" + bookmarkImageSrc + "'>" + bookmarkText + "</div>";


  infoContent += "<h2 class='info-heading'>Services</h2>";
  // Iterate over Services and add only the service descriptions to the info window
  gasStation.Services.forEach((service) => {
    infoContent +=
      "<p class='info-text'>Service: " + service.ServiceDes + "</p>";
  });
  infoContent += "<h2 class='info-heading'>Contact:</h2>";
  infoContent += "<p class='info-text'>" + gasStation.CusAddress + "</p>"; // Add Site ID
  infoContent += "</div>";

  infoWindow.setContent(infoContent);
  infoWindow.open(map, marker);
}

function calculateDistance(point1, point2) {
  var R = 6371;
  var dLat = ((point2.lat - point1.lat) * Math.PI) / 180;
  var dLon = ((point2.lng - point1.lng) * Math.PI) / 180;
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((point1.lat * Math.PI) / 180) *
      Math.cos((point2.lat * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var distance = R * c;
  return distance;
}

function handleLocationError(
  browserHasGeolocation,
  infoWindow,
  currentLocation
) {
  // Handle errors here
}

var fieldNumber = 3;

function addField() {
  var routeContainer = document.getElementById("routeContainer");

  // Create a new field div
  var newField = document.createElement("div");
  newField.className = "field";

  // Add the number
  var number = document.createElement("p");
  number.className = "number";
  number.textContent = fieldNumber++;
  newField.appendChild(number);

  // Add the input field
  var inputField = document.createElement("input");
  inputField.className = "search-input";
  inputField.type = "text";
  inputField.placeholder = "Enter a location";
  newField.appendChild(inputField);

  // Add the cancel icon
  var cancelIcon = document.createElement("span");
  cancelIcon.className = "cancel-icon";
  cancelIcon.textContent = "✖";
  cancelIcon.onclick = function () {
    removeField(this);
  };
  newField.appendChild(cancelIcon);

  // Append the new field to the container
  routeContainer.appendChild(newField);
}

function removeField(element) {
  // Check if the field is fixed (first two fields) before removing
  var field = element.parentNode;
  var isFixed = field.getAttribute("data-fixed");

  if (isFixed !== "true") {
    // If not fixed, remove the field
    field.parentNode.removeChild(field);
  }
}

function refreshMap() {
  location.reload();
 
}

function toggleSearchTab() {
  var searchDiv = document.getElementById("searchDiv");
  var Div2 = document.getElementById("DynamicsearchDiv");
  var Div2 = document.getElementsByClassName("DynamicsearchDiv");
  var Div3 = document.getElementById("RoutesearchDiv");
  var Div4 = document.getElementById("KeywordsearchDiv");
  if (searchDiv.style.display === "none") {
    // Show the search div with animation
    searchDiv.style.display = "block";
    Div2.style.display = "none";
    Div3.style.display = "none";
    Div4.style.display = "none";
    searchDiv.style.animationName = "slideDown";
  } else {
    // Hide the search div with animation
    searchDiv.style.animationName = "slideUp";
    setTimeout(function () {
      searchDiv.style.display = "none";
    }, 500); // Adjust the timeout to match the animation duration
  }
}
function toggleDynamicSearchTab() {
  var DynamicsearchDiv = document.getElementById("DynamicsearchDiv");
  var Div2 = document.getElementById("searchDiv");
  var Div3 = document.getElementById("RoutesearchDiv");
  var Div4 = document.getElementById("KeywordsearchDiv");
  if (DynamicsearchDiv.style.display === "none") {
    // Show the search div with animation

    DynamicsearchDiv.style.display = "block";
    Div2.style.display = "none";
    Div3.style.display = "none";
    Div4.style.display = "none";
    DynamicsearchDiv.style.animationName = "slideDown";
  } else {
    // Hide the search div with animation
    DynamicsearchDiv.style.animationName = "slideUp";
    setTimeout(function () {
      DynamicsearchDiv.style.display = "none";
    }, 500); // Adjust the timeout to match the animation duration
  }
}

function togglekeywordTab() {
  var KeywordsearchDiv = document.getElementById("KeywordsearchDiv");
  var Div2 = document.getElementById("DynamicsearchDiv");
  var Div3 = document.getElementById("RoutesearchDiv");
  var Div4 = document.getElementById("searchDiv");
  if (KeywordsearchDiv.style.display === "none") {
    // Show the search div with animation
    KeywordsearchDiv.style.display = "block";
    Div2.style.display = "none";
    Div3.style.display = "none";
    Div4.style.display = "none";
    KeywordsearchDiv.style.animationName = "slideDown";
  } else {
    // Hide the search div with animation
    KeywordsearchDiv.style.animationName = "slideUp";
    setTimeout(function () {
      KeywordsearchDiv.style.display = "none";
    }, 500); // Adjust the timeout to match the animation duration
  }
}
function toggleRouteTab() {
  var RoutesearchDiv = document.getElementById("RoutesearchDiv");
  var Div2 = document.getElementById("DynamicsearchDiv");
  var Div3 = document.getElementById("KeywordsearchDiv");
  var Div4 = document.getElementById("searchDiv");
  if (RoutesearchDiv.style.display === "none") {
    // Show the search div with animation
    RoutesearchDiv.style.display = "block";
    Div2.style.display = "none";
    Div4.style.display = "none";
    Div3.style.display = "none";
    RoutesearchDiv.style.animationName = "slideDown";
  } else {
    // Hide the search div with animation
    RoutesearchDiv.style.animationName = "slideUp";
    setTimeout(function () {
      RoutesearchDiv.style.display = "none";
    }, 500); // Adjust the timeout to match the animation duration
  }
}

function initMap() {
  var input = document.getElementById("searchInput");
  var autocomplete = new google.maps.places.Autocomplete(input);

  // Add a listener for place changed event
  google.maps.event.addListener(autocomplete, "place_changed", function () {
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      return;
    }

    // Update the suggestion container with the selected place information
    var suggestionContainer = document.getElementById(
      "search-suggestion-container"
    );
    suggestionContainer.innerHTML =
      "Selected Place: " +
      place.name +
      "<br>" +
      "Address: " +
      place.formatted_address;
  });
}

//   perform search base on the city

function performSearch() {
  var searchTerm = document.getElementById("searchInput").value;

  // Find the gas station data for the entered city
  var gasStation = GasStations.find(
    (station) => station.City.toLowerCase() === searchTerm.toLowerCase()
  );

  if (gasStation) {
    // Extract latitude and longitude from the gas station data
    var latitude = parseFloat(gasStation.Lati);
    var longitude = parseFloat(gasStation.longi);

    // Center the map on the gas station location
    map.setCenter({ lat: latitude, lng: longitude });

    // You may also want to add a marker to indicate the location
    var marker = new google.maps.Marker({
      map: map,
      position: { lat: latitude, lng: longitude },
      title: gasStation.CusDesc,
    });

    // Additional actions you want to perform after the search
    // ...
  } else {
    alert("Gas station data not found for the city: " + searchTerm);
  }
}

//   route between two cities

function performRouteSearch() {
  var routeContainer = document.getElementById("routeContainer");
  var routeInputs = routeContainer.getElementsByClassName("search-input");

  if (routeInputs.length < 2) {
    alert("Please enter at least two locations for routing.");
    return;
  }

  var directionsService = new google.maps.DirectionsService();
  var directionsRenderer = new google.maps.DirectionsRenderer();

  var map = new google.maps.Map(document.getElementById("googleMap"), {
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
      destination: routeInputs[routeInputs.length - 1].value,
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
}

// Search base on keyword

function performKeywordSearch() {
  var container = document.getElementById("search-suggestion-container");
  var keywordInput = document
    .getElementById("KeywordInput")
    .value.toLowerCase();
  var suggestionContainer = document.getElementById(
    "search-suggestion-container"
  );
  suggestionContainer.innerHTML = "";

  // Filter GasStations array based on the entered keyword
  var matchingStations = GasStations.filter((station) =>
    station.CusAddress.toLowerCase().includes(keywordInput)
  );

  // Display suggestions
  if (matchingStations.length > 0) {
    container.style.display = "block";
    matchingStations.forEach((station) => {
      var suggestion = document.createElement("div");
      suggestion.className = "suggestion";
      suggestion.textContent = station.CusAddress;
      suggestion.style.paddingBottom = "5px";
      suggestion.style.cursor = "pointer";
      // Add a hover effect to change opacity
      suggestion.addEventListener("mouseenter", function () {
        suggestion.style.opacity = "0.8";
      });

      suggestion.addEventListener("mouseleave", function () {
        suggestion.style.opacity = "1";
      });
      // Add a click event listener to perform actions when suggestion is clicked
      suggestion.addEventListener("click", function () {
        // Perform actions when a suggestion is clicked (e.g., show on map)
        // You can customize this based on your requirements
        showOnMap(station);
      });

      suggestionContainer.appendChild(suggestion);
    });
  } else {
    container.style.display = "none";
    // Display a message when no matching suggestions are found
    var noResultsMessage = document.createElement("div");
    noResultsMessage.textContent = "No matching results found";
    suggestionContainer.appendChild(noResultsMessage);
  }
}

function showOnMap(station) {
  // Perform actions to show the selected station on the map
  // You can customize this based on your requirements
  var latitude = parseFloat(station.Lati);
  var longitude = parseFloat(station.longi);

  // Center the map on the gas station location
  map.setCenter({ lat: latitude, lng: longitude });

  // You may also want to add a marker to indicate the location
  var marker = new google.maps.Marker({
    map: map,
    position: { lat: latitude, lng: longitude },
    title: station.CusDesc,
  });

  // Additional actions you want to perform after showing on the map
  // ...
}


// Initialize an empty array to store bookmarks
var bookmarks = [];
function addToBookmark(CusDesc, CusAdd, Lati, longi) {
  // Retrieve existing bookmarks from the cookie
  var existingBookmarks = getBookmarks();

  // Create an object with the bookmark information
  var bookmarkInfo = {
      CusDesc: CusDesc,
      CusAdd: CusAdd,
      Lati: Lati,
      longi: longi
  };

  // Add the new bookmark to the existing bookmarks
  existingBookmarks.push(bookmarkInfo);

  // Convert the array to a JSON string
  var bookmarksJSON = JSON.stringify(existingBookmarks);

  // Set the combined bookmarks in the cookie
  document.cookie = "bookmarks=" + encodeURIComponent(bookmarksJSON) + "; path=/";

  // You can also set an expiration time if needed, e.g., expires=Sun, 01 Jan 2023 00:00:00 GMT
  initBookmarkDisplay();
  // You can perform additional actions as needed

  // Change the SVG content
  var bookmarkButton = document.querySelector(".my-bookmark svg");
  if (bookmarkButton) {
    bookmarkButton.innerHTML = `
      <svg width="12px" height="13px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 13.4673L6.24548 17.6665C5.63355 18.3509 4.5 17.9181 4.5 17V3C4.5 2.44772 4.94772 2 5.5 2H14.5C15.0523 2 15.5 2.44772 15.5 3V17C15.5 17.9181 14.3665 18.3509 13.7545 17.6665L10 13.4673Z" fill="#000000"/>
      </svg>
    `;
  }
}


