// Function to retrieve bookmarks from cookies
var infoWindow = new google.maps.InfoWindow();
function getBookmarks() {
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(";");
  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i].trim();
    if (cookie.startsWith("bookmarks=")) {
      var bookmarksJSON = cookie.substring("bookmarks=".length);
      return JSON.parse(bookmarksJSON);
    }
  }
  return [];
}
function initBookmarkDisplay() {
  var bookmarks = getBookmarks();
  var bookmarkContainer = document.getElementById("open-Bookmark");
  bookmarkContainer.innerHTML = ""; // Clear existing content
  if (bookmarks.length === 0) {
    bookmarkContainer.innerHTML = '<div class="center" style="padding: 8px">Oops! No item found.</div>';
    return;
  }
  // Display each bookmark
  bookmarks.forEach(function (bookmark, index) {
    var bookmarkItem = document.createElement("div");
    bookmarkItem.className = "bookmarkItem";
    bookmarkItem.innerHTML = `
          <div class="list bookmark-list">
              <p class="number">${index + 1}</p>
              <div class="searched-data">
                  <p class=" p1">${bookmark.CusDesc}</p>
                  <p class="p2">${bookmark.CusAdd}</p>
              </div>
              <div class="img-flex">
                  <img onclick="removeBookmark(${index})" src="./Images/unmarkit.svg" alt="unmark" />
                  <img class="show-me" src="./Images/go.svg" alt="go" />
              </div>
          </div>`;

    bookmarkContainer.appendChild(bookmarkItem);

    // Add event listener to the "go" image
    var goImg = bookmarkItem.querySelector(".show-me");
    goImg.addEventListener("click", function () {
      console.log("CusDesc:", bookmark.CusDesc);
      console.log("CusAdd:", bookmark.CusAdd);
      console.log("Latitude:", bookmark.Lati);
      console.log("Longitude:", bookmark.longi);

      // Create a marker at the specified location
      var location = new google.maps.LatLng(bookmark.Lati, bookmark.longi);

      // Assuming `map` is a global variable containing the Google Maps instance
      map.setCenter(location);

      var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: bookmark.CusDesc,
      });

      try {
        // Check if `calculateDistance` is a valid function
        if (typeof calculateDistance === "function") {
          var distance = calculateDistance(currentLocation, {
            lat: parseFloat(bookmark.Lati),
            lng: parseFloat(bookmark.longi),
          });

          console.log("Distance:", distance);

          var infoContent = "<div class='click-window'>";
          infoContent += "<h2 class='info-title'>" + bookmark.CusDesc + "</h2>";
          infoContent += "<h2 class='info-heading'>Site ID:</h2>";
          infoContent += "<p class='info-text'>" + bookmark.CusCode + "</p>";
          infoContent += "<h2 class='info-heading'>Distance:</h2>";
          infoContent +=
            "<p class='info-text'>Distance: " + distance.toFixed(2) + " km</p>";
          infoContent += "<h2 class='info-heading'>Coordinates:</h2>";
          infoContent +=
            "<p class='info-text'>" +
            bookmark.Lati +
            " , " +
            bookmark.longi +
            "</p>";
          infoContent +=
            "<div class='my-bookmark' onclick='addToBookmark(\"" +
            bookmark.CusDesc +
            '", "' +
            bookmark.CusAddress +
            '", ' +
            bookmark.Lati +
            ", " +
            bookmark.longi +
            ")'><img class='book-img' src='./Vector.png'>Add To Bookmark  </div>";
          infoContent += "<h2 class='info-heading'>Services</h2>";
          bookmark.Services.forEach((service) => {
            infoContent +=
              "<p class='info-text'>Service: " + service.ServiceDes + "</p>";
          });
          infoContent += "<h2 class='info-heading'>Contact:</h2>";
          infoContent += "<p class='info-text'>" + bookmark.CusAddress + "</p>";
          infoContent += "</div>";
          var infoWindow = new google.maps.InfoWindow();
          infoWindow.setContent(infoContent);

          // Assuming `map` is a global variable containing the Google Maps instance
          infoWindow.open(map, marker);
        } else {
          console.error("calculateDistance is not a valid function.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    });
  });
}

window.onload = function () {
  initBookmarkDisplay();
};

function removeBookmark(index) {
  var bookmarks = getBookmarks();
  bookmarks.splice(index, 1);
  document.cookie = "bookmarks=" + JSON.stringify(bookmarks);
  initBookmarkDisplay();
}
