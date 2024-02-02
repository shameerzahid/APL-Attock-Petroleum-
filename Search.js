function searchGasStations() {
  var searchInput = document.getElementById("searchInput").value.toLowerCase();
  var searchResults = [];

  // Loop through GasStations array and check if the city matches the search input
  GasStations.forEach(function (station) {
    if (station.City.toLowerCase().includes(searchInput)) {
      searchResults.push(station);
    }
  });

  // Display the number of results in the console
  console.log("Number of results: " + searchResults.length);

  // Display the search results in the div
  displaySearchResults(searchResults);
}
function displaySearchResults(results) {
  var searchResultsDiv = document.getElementById("search-results");
  searchResultsDiv.innerHTML = ""; // Clear previous results

  results.forEach(function (result, index) {
    var customerDescription = result.CusDesc;
    var customerAddress = result.CusAddress;
    var latitude = result.Lati;
    var longitude = result.longi;

    // Create HTML elements to display results
    var resultItem = document.createElement("div");
    resultItem.className = "list";

    var numberElement = document.createElement("p");
    numberElement.className = "number";
    numberElement.textContent = (index + 1).toString();

    var searchedDataDiv = document.createElement("div");
    searchedDataDiv.className = "searched-data";
    searchedDataDiv.style.paddingLeft = "10px";

    var p1 = document.createElement("p");
    p1.className = "p1";
    p1.textContent = customerDescription;

    var p2 = document.createElement("p");
    p2.className = "p2";
    p2.textContent = customerAddress;

    var imgElement = document.createElement("img");
    imgElement.src = "./Images/go.svg";
    imgElement.alt = "";

    // Add onclick event to the "Go" image
    imgElement.onclick = function () {
      // Call a function to navigate to the latitude and longitude
      navigateToLocation(latitude, longitude, result);
    };

    // Append elements to the resultItem div
    searchedDataDiv.appendChild(p1);
    searchedDataDiv.appendChild(p2);
    resultItem.appendChild(numberElement);
    resultItem.appendChild(searchedDataDiv);
    resultItem.appendChild(imgElement);
    // searchResultsDiv.style.maxHeight = "200px";
    // Append the resultItem to the searchResultsDiv
    searchResultsDiv.appendChild(resultItem);

    // Add a line break after every third result
    if ((index + 1) % 3 === 0 && index !== results.length - 1) {
      searchResultsDiv.appendChild(document.createElement("br"));
    }
  });
}
// Function to navigate to the specified latitude and longitude
// Function to navigate to the specified latitude and longitude
function navigateToLocation(latitude, longitude, result) {
  // Assuming "map" is the reference to your Google Map instance
  // You should replace "map" with the actual reference to your map

  // Convert latitude and longitude to LatLng object
  var location = new google.maps.LatLng(latitude, longitude);

  // Center the map on the specified location
  map.setCenter(location);

  // Create a marker at the specified location
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: result.CusDesc, // You can customize the title based on your requirement
  });

  // Calculate distance (assuming calculateDistance and currentLocation are defined)
  var distance = calculateDistance(currentLocation, {
    lat: parseFloat(result.Lati),
    lng: parseFloat(result.longi),
  });

  // Create the popup content similar to displaySearchedStationInformation
  var infoContent = "<div class='click-window'>";
  infoContent += "<h2 class='info-title'>" + result.CusDesc + "</h2>";
  infoContent += "<h2 class='info-heading'>Site ID:</h2>";
  infoContent += "<p class='info-text'>" + result.CusCode + "</p>";
  infoContent += "<h2 class='info-heading'>Distance:</h2>";
  infoContent +=
    "<p class='info-text'>Distance: " + distance.toFixed(2) + " km</p>";
  infoContent += "<h2 class='info-heading'>Coordinates:</h2>";
  infoContent +=
    "<p class='info-text'>" + result.Lati + " , " + result.longi + "</p>";
  infoContent += "<h2 class='info-heading'>Fuel:</h2>";
  infoContent +=
    "<p class='info-text'>" +
    Object.keys(result["Fuel Types"][0]).join(", ") +
    "</p>";
  infoContent +=
    "<div class='my-bookmark' onclick='addToBookmark(\"" +
    result.CusDesc +
    '", "' +
    result.CusAddress +
    '", ' +
    result.Lati +
    ", " +
    result.longi +
    ")'><img class='book-img' src='./Vector.png'>Add To Bookmark  </div>";
  infoContent += "<h2 class='info-heading'>Services</h2>";

  // Assuming gasStation.Services is available
  result.Services.forEach((service) => {
    infoContent +=
      "<p class='info-text'>Service: " + service.ServiceDes + "</p>";
  });

  infoContent += "<h2 class='info-heading'>Contact:</h2>";
  infoContent += "<p class='info-text'>" + result.CusAddress + "</p>";
  infoContent += "</div>";

  // Create an InfoWindow
  var infoWindow = new google.maps.InfoWindow();

  // Set the content of the InfoWindow
  infoWindow.setContent(infoContent);

  // Open the InfoWindow
  infoWindow.open(map, marker);

  // Log the result object to the console
  console.log(result);
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

    // Change the opacity of the bookmark button to indicate that it has been clicked
    var bookmarkButton = document.querySelector(".my-bookmark");
    if (bookmarkButton) {
        bookmarkButton.style.opacity = 0.5; // Set the desired opacity value
    }
}