 // Function to retrieve bookmarks from cookies
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

  // Create a function to initialize the bookmark display
  function initBookmarkDisplay() {
    var bookmarks = getBookmarks();
    var bookmarkContainer = document.getElementById("open-Bookmark");
    bookmarkContainer.innerHTML = ""; // Clear existing content

    // Display each bookmark
    bookmarks.forEach(function (bookmark, index) {
      var bookmarkItem = document.createElement("div");
      bookmarkItem.className = "bookmarkItem";
      bookmarkItem.innerHTML = `
        <div class="list bookmark-list">
          <p class="number">${index + 1}</p>
          <div>
            <p class=" p1 margin">${bookmark.CusDesc}</p>
            <p class="p2  margin">${bookmark.CusAdd}</p>
          </div>
          <div class="img-flex">
            <img onclick="removeBookmark(${index})" src="./Images/unmarkit.svg" alt="unmark" />
            <img src="./Images/go.svg" alt="go" onclick="navigateToBookmark(${bookmark.Lati}, ${bookmark.longi})" />
          </div>
        </div>`;
      bookmarkContainer.appendChild(bookmarkItem);
    });
  }

  // Create a function to navigate to a bookmarked location
  function navigateToBookmark(latitude, longitude) {
    // Replace the following line with your code to navigate to the specified latitude and longitude
    var location = new google.maps.LatLng(latitude, longitude);

    // Center the map on the specified location
    map.setCenter(location);

    // Optionally, you can open an info window with additional information
    var infoWindow = new google.maps.InfoWindow({
      content: "Gas Station Information",
      // You can customize the content based on GasStation object properties
    });

    // Open the info window
    infoWindow.open(map, marker);
  }

  // Initialize bookmark display when the page loads
  window.onload = function () {
    initBookmarkDisplay();
  };
  // Function to remove a bookmark
function removeBookmark(index) {
var bookmarks = getBookmarks();

// Remove the bookmark at the specified index
bookmarks.splice(index, 1);

// Update the bookmarks in the cookie
document.cookie = "bookmarks=" + JSON.stringify(bookmarks);

// Reinitialize the bookmark display
initBookmarkDisplay();
}
