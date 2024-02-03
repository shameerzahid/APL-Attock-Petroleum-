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
    container.innerHTML =
      '<div class="nothing-found">Oops! No results found.</div>';
  } else {
    // Display the filtered gas stations
    gasStations.forEach(function (station, index) {
      var listItem = document.createElement("div");
      listItem.className = "list";
      listItem.innerHTML = `
                <p class="number">${index + 1}</p>
                <div>
                    <p class="p1 margin2">${station.CusDesc}</p>
                    <p class="p2 margin2">${station.CusAddress}</p>
                </div>
                <div>
                    <img class="map-show" src="./Images/go.svg" alt=""
                       
                    />
                </div>
            `;
      container.appendChild(listItem);

      const goImg = listItem.querySelector(".map-show");

      goImg.addEventListener('click', function () {
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
            if (typeof calculateDistance === 'function') {
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
                infoContent += "<p class='info-text'>Distance: " + distance.toFixed(2) + " km</p>";
                infoContent += "<h2 class='info-heading'>Coordinates:</h2>";
                infoContent += "<p class='info-text'>" + bookmark.Lati + " , " + bookmark.longi + "</p>";
                infoContent += "<h2 class='info-heading'>Fuel:</h2>";
                infoContent += "<p class='info-text'>" + Object.keys(bookmark["Fuel Types"][0]).join(", ") + "</p>";
                infoContent += "<div class='my-bookmark' onclick='addToBookmark(\"" + bookmark.CusDesc + '", "' + bookmark.CusAddress + '", ' + bookmark.Lati + ", " + bookmark.longi + ")'><img class='book-img' src='./Vector.png'>Add To Bookmark  </div>";
                infoContent += "<h2 class='info-heading'>Services</h2>";
    
                bookmark.Services.forEach((service) => {
                    infoContent += "<p class='info-text'>Service: " + service.ServiceDes + "</p>";
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
}
// onclick="moveToLocation(${station.Lati}, ${station.longi})"
// Function to log the selected filters in the console
function logSelectedFilters(selectedFuelTypes, selectedServices) {
  console.log("Selected Fuel Types:", selectedFuelTypes);
  console.log("Selected Services:", selectedServices);
}


