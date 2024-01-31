function searchByKeyword() {
    const keywordInput = document.getElementById('keywordInput').value.toLowerCase();
    const keywordResultsContainer = document.getElementById('keyword-results');
    keywordResultsContainer.innerHTML = ''; // Clear previous results
  
    let resultCount = 0;
  
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
        goImg.addEventListener('click', function() {
          showOnMap(station.Lati, station.longi);
        });
        goDiv.appendChild(goImg);
  
        resultDiv.appendChild(goDiv);
  
        keywordResultsContainer.appendChild(resultDiv);
      }
    }
  }
  
  function showOnMap(latitude, longitude) {
        var location = new google.maps.LatLng(latitude, longitude);
        map.setCenter(location);
        var infoWindow = new google.maps.InfoWindow({
            content: "Gas Station Information",
        });
        infoWindow.open(map, marker);
    }