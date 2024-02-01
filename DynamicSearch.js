
function logCheckedCheckboxes() {
  var checkedFuelCheckboxes = document.querySelectorAll('.fuel-checkbox:checked');
  var checkedServiceCheckboxes = document.querySelectorAll('.Services-checkbox:checked');

  var checkedFuelLabels = Array.from(checkedFuelCheckboxes).map(function (checkbox) {
    return checkbox.nextElementSibling.textContent;
  });

  var checkedServiceLabels = Array.from(checkedServiceCheckboxes).map(function (checkbox) {
    return checkbox.nextElementSibling.textContent;
  });

  console.log('Checked Fuel Checkboxes:', checkedFuelLabels);
  console.log('Checked Service Checkboxes:', checkedServiceLabels);

  // Call the function to display gas stations and log them
  var userInput = document.getElementById('DynamicsearchInput').value.toLowerCase();
  var selectedFuelTypes = checkedFuelLabels;
  var selectedServices = checkedServiceLabels;

  var checkboxesChecked = selectedFuelTypes.length > 0 && selectedServices.length > 0; // Use && instead of ||

  var filteredGasStations = GasStations.filter(function (gasStation) {
    var cityMatch = gasStation.City.toLowerCase().includes(userInput);

    var fuelMatch = checkboxesChecked && selectedFuelTypes.some(function (fuelType) {
      // Check if the fuel type is present in the gas station's Fuel Types array
      return gasStation['Fuel Types'][0][fuelType] === '1';
    });

    var serviceMatch = checkboxesChecked && selectedServices.some(function (selectedService) {
      // Check if the selected service is included in the gas station's Services array
      return gasStation.Services.some(function (service) {
        // Compare the lowercase version of the selected service with the lowercase version of the service checkbox label
        return selectedService.toLowerCase() === service.ServiceDes.toLowerCase();
      });
    });

    return cityMatch && (!checkboxesChecked || (fuelMatch && serviceMatch)); // Use && instead of ||
  });

  displayGasStations(filteredGasStations, 'Dynamicsearch-results');
  logSelectedFilters(selectedFuelTypes, selectedServices);
  logDisplayedGasStations(filteredGasStations);
}

function logDisplayedGasStations(displayedGasStations) {
  console.log('Displayed Gas Stations:', displayedGasStations);
}


    // Function to handle dynamic search of gas stations
    function DynamicsearchGasStations() {
      var userInput = document.getElementById('DynamicsearchInput').value.toLowerCase();
      var selectedFuelTypes = getSelectedFuelTypes();
      var selectedServices = getSelectedServices();

      var checkboxesChecked = selectedFuelTypes.length > 0 || selectedServices.length > 0;

      var filteredGasStations = GasStations.filter(function (gasStation) {
        var cityMatch = gasStation.City.toLowerCase().includes(userInput);

        var fuelMatch = checkboxesChecked && selectedFuelTypes.some(function (fuelType) {
          return gasStation['Fuel Types'][0][fuelType] === '1';
        });

        var serviceMatch = checkboxesChecked && selectedServices.some(function (selectedService) {
          return gasStation.Services.some(function (service) {
            return service.ServiceDes.toLowerCase().includes(selectedService);
          });
        });

        return cityMatch && (!checkboxesChecked || (fuelMatch || serviceMatch));
      });

      displayGasStations(filteredGasStations, 'Dynamicsearch-results');
      logSelectedFilters(selectedFuelTypes, selectedServices);
     
    }
  
    // Function to get the selected fuel types
    function getSelectedFuelTypes() {
      var selectedFuelTypes = [];
      var fuelCheckboxes = document.querySelectorAll('.filter-checkbox-fuel:checked');

      fuelCheckboxes.forEach(function (checkbox) {
        selectedFuelTypes.push(checkbox.id);
      });

      return selectedFuelTypes;
    }

    // Function to get the selected services
    function getSelectedServices() {
      var selectedServices = [];
      var serviceCheckboxes = document.querySelectorAll('.filter-checkbox-service:checked');

      serviceCheckboxes.forEach(function (checkbox) {
        selectedServices.push(checkbox.id);
      });

      return selectedServices;
    }

    // Function to display gas stations in the results container
    function displayGasStations(gasStations, containerId) {
      var container = document.getElementById(containerId);
      container.innerHTML = ''; // Clear previous results

      if (gasStations.length === 0) {
        // Display a message when no results are found
        container.innerHTML = '<div class="nothing-found">Oops! No results found.</div>';
      } else {
        // Display the filtered gas stations
        gasStations.forEach(function (station, index) {
          var listItem = document.createElement('div');
          listItem.className = 'list';
          listItem.innerHTML = `
            <p class="number">${index + 1}</p>
            <div>
              <p class="p1 margin2">${station.CusDesc}</p>
              <p class="p2 margin2">${station.CusAddress}</p>
            </div>
            <div>
              <img src="./Images/go.svg" alt="" 
                   data-latitude="${station.Lati}" 
                   data-longitude="${station.longi}" 
                   onclick="moveToLocation(${station.Lati}, ${station.longi})" />
            </div>
          `;
          container.appendChild(listItem);
        });
      }
    }

    // Function to log the selected filters in the console
    function logSelectedFilters(selectedFuelTypes, selectedServices) {
      console.log('Selected Fuel Types:', selectedFuelTypes);
      console.log('Selected Services:', selectedServices);
    }

    // Function to move to a specific location on the map
    function moveToLocation(latitude, longitude) {
      var map = /* your map object, e.g., */ google.maps.Map; // Replace with the actual map object
      var newLatLng = new google.maps.LatLng(latitude, longitude);
      map.panTo(newLatLng);
    }
 