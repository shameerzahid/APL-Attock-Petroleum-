function searchByKeyword() {
  const keywordInput = document.getElementById('keywordInput').value.toLowerCase();
  const keywordResultsContainer = document.getElementById('keyword-results');
  keywordResultsContainer.innerHTML = ''; // Clear previous results

  let resultCount = 0;

  // Check if keywordInput is empty
  if (keywordInput === '') {
    // Clear previous results container
    const keywordResultsContainer = document.getElementById('keyword-results');
    keywordResultsContainer.innerHTML = '';
    return; // Exit the function if the keyword is empty
  }

  for (const station of GasStations) {
    const cusDesc = station.CusDesc.toLowerCase();
    if (cusDesc.includes(keywordInput)) {
      resultCount++;

      const resultDiv = document.createElement('div');
      resultDiv.classList.add('list');

      const numberP = document.createElement('p');
      numberP.classList.add('number');
      numberP.textContent = resultCount;
      resultDiv.appendChild(numberP);

      const infoDiv = document.createElement('div');

      const p1 = document.createElement('p');
      p1.classList.add('p1', 'margin2');
      p1.textContent = station.CusDesc;
      infoDiv.appendChild(p1);

      const p2 = document.createElement('p');
      p2.classList.add('p2', 'margin2');
      p2.textContent = station.CusAddress;
      infoDiv.appendChild(p2);

      resultDiv.appendChild(infoDiv);

      const goDiv = document.createElement('div');
      const goImg = document.createElement('img');
      goImg.src = './Images/go.svg';
      goImg.alt = '';
      // Attach an event listener to the "Go" image to show the location on the map
      goImg.addEventListener('click', function () {
        showOnMap(station.Lati, station.longi, station);
      });
      goDiv.appendChild(goImg);

      resultDiv.appendChild(goDiv);

      keywordResultsContainer.appendChild(resultDiv);
    }
  }
}

function showOnMap(latitude, longitude, station) {
  var location = new google.maps.LatLng(latitude, longitude);
  map.setCenter(location);

  // Create a marker at the specified location
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: station.CusDesc // You can customize the title based on your requirement
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
    "<p class='info-text'>" + station.Lati + " , " + station.longi + "</p>";
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
