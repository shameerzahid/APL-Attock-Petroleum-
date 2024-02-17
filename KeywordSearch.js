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
      infoDiv.classList.add("searched-data")
      const p1 = document.createElement('p');
      p1.classList.add('p1', 'noneclass');
      p1.textContent = station.CusDesc;
      infoDiv.appendChild(p1);

      const p2 = document.createElement('p');
      p2.classList.add('p2', 'noneclass');
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
  if (resultCount === 0) {
    const oopsMessage = document.createElement('div');
    oopsMessage.textContent = 'Oops! No results found.';
    oopsMessage.classList.add('oops-message');
    oopsMessage.style.marginTop = '10px';
    oopsMessage.style.marginBottom = '6px';
    keywordResultsContainer.appendChild(oopsMessage);
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
var bookmarkImageSrc = isGasStationBookmarked(gasStation.CusDesc) ? "././images/removefrombookmark.svg" : "././images/addtobook.svg";
infoContent += "<div class='my-bookmark' onclick='addToBookmark(\"" + gasStation.CusDesc + "\", \"" + gasStation.CusAddress + "\", " + gasStation.Lati + ", " + gasStation.longi + ")'><img class='book-img' src='" + bookmarkImageSrc + "'>" + bookmarkText + "</div>";

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
