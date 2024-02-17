function logCheckedCheckboxes() {
  var checkedFuelCheckboxes = document.querySelectorAll(
    ".fuel-checkbox:checked"
  );
  var checkedServiceCheckboxes = document.querySelectorAll(
    ".Services-checkbox:checked"
  );

  var checkedFuelLabels = Array.from(checkedFuelCheckboxes).map(function (
    checkbox
  ) {
    return checkbox.nextElementSibling.textContent;
  });

  var checkedServiceLabels = Array.from(checkedServiceCheckboxes).map(function (
    checkbox
  ) {
    return checkbox.nextElementSibling.textContent;
  });

  console.log("Checked Fuel Checkboxes:", checkedFuelLabels);
  console.log("Checked Service Checkboxes:", checkedServiceLabels);

  // Call the function to display gas stations and log them
  var userInput = document
    .getElementById("DynamicsearchInput")
    .value.toLowerCase();
  var selectedFuelTypes = checkedFuelLabels;
  var selectedServices = checkedServiceLabels;

  var checkboxesChecked =
    selectedFuelTypes.length > 0 && selectedServices.length > 0; // Use && instead of ||

  var filteredGasStations = GasStations.filter(function (gasStation) {
    var cityMatch = gasStation.City.toLowerCase().includes(userInput);

    var fuelMatch = selectedFuelTypes.some(function (fuelType) {
      // Check if the fuel type is present in the gas station's Fuel Types array
      return gasStation["Fuel Types"][0][fuelType] === "1";
    });

    var serviceMatch = selectedServices.some(function (selectedService) {
      // Check if the selected service is included in the gas station's Services array
      return gasStation.Services.some(function (service) {
        // Compare the lowercase version of the selected service with the lowercase version of the service checkbox label
        return (
          selectedService.toLowerCase() === service.ServiceDes.toLowerCase()
        );
      });
    });
    if (selectedFuelTypes.length > 0 && selectedServices.length > 0) {
      // console.log('one');
      return cityMatch && fuelMatch && serviceMatch;
    }
    if (selectedFuelTypes.length > 0) {
      // console.log('two');
      return cityMatch && fuelMatch;
    }
    if (selectedServices.length > 0) {
      // console.log('three');
      return cityMatch && serviceMatch;
    }

    // return cityMatch && (!checkboxesChecked || (fuelMatch || serviceMatch)); // Use && instead of ||
    return cityMatch && (!checkboxesChecked || (fuelMatch && serviceMatch)); // Use && instead of ||
  });

  // var filteredGasStations = filteredData;
  console.log(filteredGasStations);
  displayGasStations(filteredGasStations, "Dynamicsearch-results");
  logSelectedFilters(selectedFuelTypes, selectedServices);
}

function DynamicsearchGasStations() {
  var userInput = document
    .getElementById("DynamicsearchInput")
    .value.toLowerCase();

  // Check if userInput is empty
  if (userInput === '') {
    // Clear results container
    clearResultsContainer("Dynamicsearch-results");
    logSelectedFilters([], getSelectedServices());
    return;
  }

  var selectedServices = getSelectedServices();

  var serviceCheckboxesChecked = selectedServices.length > 0;

  var filteredGasStations = GasStations.filter(function (gasStation) {
    var cityMatch = gasStation.City.toLowerCase().includes(userInput);

    var serviceMatch =
      !serviceCheckboxesChecked ||
      (serviceCheckboxesChecked &&
        selectedServices.some(function (selectedService) {
          return gasStation.Services.some(function (service) {
            // Compare the lowercase version of the selected service with the lowercase version of the service description
            return (
              selectedService.toLowerCase() === service.ServiceDes.toLowerCase()
            );
          });
        }));

    return cityMatch && serviceMatch;
  });

  displayGasStations(filteredGasStations, "Dynamicsearch-results");
  logSelectedFilters([], selectedServices); // Since fuel types are not used, passing an empty array for fuel types
}

function clearResultsContainer(containerId) {
  var resultsContainer = document.getElementById(containerId);
  resultsContainer.innerHTML = '';
}

// Function to get the selected fuel types
function getSelectedFuelTypes() {
  var selectedFuelTypes = [];
  var fuelCheckboxes = document.querySelectorAll(
    ".filter-checkbox-fuel:checked"
  );

  fuelCheckboxes.forEach(function (checkbox) {
    selectedFuelTypes.push(checkbox.id);
  });

  return selectedFuelTypes;
}

// Function to get the selected services
function getSelectedServices() {
  var selectedServices = [];
  var serviceCheckboxes = document.querySelectorAll(
    ".filter-checkbox-service:checked"
  );

  serviceCheckboxes.forEach(function (checkbox) {
    selectedServices.push(checkbox.id);
  });

  return selectedServices;
}

// Function to display gas stations in the results container
function displayGasStations(gasStations, containerId) {
  var container = document.getElementById(containerId);
  container.innerHTML = ""; // Clear previous results

 if (gasStations.length === 0) {
    // Display a message when no results are found
    const oopsMessage = document.createElement('div');
    oopsMessage.textContent = 'Oops! No results found.';
    oopsMessage.classList.add('oops-message');
    oopsMessage.style.marginTop = '10px';
    oopsMessage.style.marginBottom = '6px';
    container.appendChild(oopsMessage);
    return; // Exit the function
  } else {
    // Display the filtered gas stations
    gasStations.forEach(function (station, index) {
      var listItem = document.createElement("div");
      listItem.className = "list";
      listItem.innerHTML = `
                <p class="number">${index + 1}</p>
                <div class="searched-data">
                    <p class="p1 ">${station.CusDesc}</p>
                    <p class="p2 ">${station.CusAddress}</p>
                </div>
                <div>
                    <img class="map-show" src="./Images/go.svg" alt=""
                       
                    />
                </div>
            `;
      container.appendChild(listItem);

      const goImg = listItem.querySelector(".map-show");

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
    });
  }
}
// onclick="moveToLocation(${station.Lati}, ${station.longi})"
// Function to log the selected filters in the console
function logSelectedFilters(selectedFuelTypes, selectedServices) {
  console.log("Selected Fuel Types:", selectedFuelTypes);
  console.log("Selected Services:", selectedServices);
}
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

