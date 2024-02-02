function refreshMap() {
    location.reload();
   
  }
  // script.js

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
        navigateToLocation(latitude, longitude);
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
  function navigateToLocation(latitude, longitude) {
    // Assuming "map" is the reference to your Google Map instance
    // You should replace "map" with the actual reference to your map
  
    // Convert latitude and longitude to LatLng object
    var location = new google.maps.LatLng(latitude, longitude);
  
    // Center the map on the specified location
    map.setCenter(location);
  
    // Create a marker at the specified location
    // var marker = new google.maps.Marker({
    //   position: location,
    //   map: map,
    //   title: "Gas Station Location"
    // });
  
    // Optionally, you can open an info window with additional information
    var infoWindow = new google.maps.InfoWindow({
      content: "Gas Station Information"
      // You can customize the content based on GasStation object properties
    });
  
    // Open the info window
    infoWindow.open(map, marker);
  }
   