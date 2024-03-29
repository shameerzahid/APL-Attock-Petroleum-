function toggleSearch() {
  var searchDiv = document.getElementById("open-search");
  var dynamicSearchDiv = document.getElementById("open-DynamicSearch");
  var RoutePlanning = document.getElementById("open-RoutePlanner");
  var KeywordSearch = document.getElementById("open-keywordSearch");
  var Bookmark = document.getElementById("open-Bookmark");
  var downImage = document.getElementById("searchDownImage");
  var dynamisearchDownImage = document.getElementById("show-DynamicSearch");
  var RouteDownImage = document.getElementById("show-RoutePlanner");
var keywordDownImage = document.getElementById("show-keywordSearch");
var bookmarkDownImage = document.getElementById("show-Bookmark");

  // Ensure initial display state is set correctly when the page loads
  if (searchDiv.style.display === "") {
      searchDiv.style.display = "none"; // Set initial display state to "none"
  }

  // Toggle the display of the search div
  searchDiv.style.display = searchDiv.style.display === "none" ? "block" : "none";
  dynamicSearchDiv.style.display = "none"; // Hide other divs
  RoutePlanning.style.display = "none";
  KeywordSearch.style.display = "none";
  Bookmark.style.display = "none";
  dynamisearchDownImage.src = dynamicSearchDiv.style.display === "none" ? "./Images/Down.svg" : "./Images/up.svg";
  RouteDownImage.src = RoutePlanning.style.display === "none" ? "./Images/Down.svg" : "./Images/up.svg";
  keywordDownImage.src = KeywordSearch.style.display === "none" ? "./Images/Down.svg" : "./Images/up.svg";
  bookmarkDownImage.src  = Bookmark.style.display === "none" ? "./Images/Down.svg" : "./Images/up.svg";
  
  // Rotate the down image based on the display status of the search div
  downImage.src = searchDiv.style.display === "none" ? "./Images/Down.svg" : "./Images/up.svg";
}



  //   open dynamic search
  function toggleDynamicSearch() {
    var searchDiv = document.getElementById("open-search");
    var dynamicSearchDiv = document.getElementById("open-DynamicSearch");
    var RoutePlanning = document.getElementById("open-RoutePlanner");
    var KeywordSearch = document.getElementById("open-keywordSearch");
    var Bookmark = document.getElementById("open-Bookmark");
    var downImage2 = document.getElementById("show-DynamicSearch");
    var RouteDownImage = document.getElementById("show-RoutePlanner");
    var searchDownImage = document.getElementById("searchDownImage");
    var keywordDownImage = document.getElementById("show-keywordSearch");
    var bookmarkDownImage = document.getElementById("show-Bookmark");
    // Ensure initial display state is set correctly when the page loads
    if (dynamicSearchDiv.style.display === "") {
        dynamicSearchDiv.style.display = "none"; // Set initial display state to "none"
    }

    // Toggle the display of the Dynamic Search div
    dynamicSearchDiv.style.display = dynamicSearchDiv.style.display === "none" ? "block" : "none";
    searchDiv.style.display = "none"; // Hide other divs
    RoutePlanning.style.display = "none";
    KeywordSearch.style.display = "none";
    Bookmark.style.display = "none";
    searchDownImage.src = searchDiv.style.display === "none" ? "./Images/Down.svg" : "./Images/up.svg";
    RouteDownImage.src = RoutePlanning.style.display === "none" ? "./Images/Down.svg" : "./Images/up.svg";
    keywordDownImage.src = KeywordSearch.style.display === "none" ? "./Images/Down.svg" : "./Images/up.svg";
    bookmarkDownImage.src  = Bookmark.style.display === "none" ? "./Images/Down.svg" : "./Images/up.svg";
    
    downImage2.src = dynamicSearchDiv.style.display === "none" ? "./Images/Down.svg" : "./Images/up.svg";

  }

  //   open RoutePlanning
  function toggleRoutePlanning() {
    var searchDiv = document.getElementById("open-search");
    var dynamicSearchDiv = document.getElementById("open-DynamicSearch");
    var RoutePlanning = document.getElementById("open-RoutePlanner");
    var KeywordSearch = document.getElementById("open-keywordSearch");
    var Bookmark = document.getElementById("open-Bookmark");
    var searchDiv = document.getElementById("open-search");
    var dynamicSearchDiv = document.getElementById("open-DynamicSearch");
    var RoutePlanning = document.getElementById("open-RoutePlanner");
    var KeywordSearch = document.getElementById("open-keywordSearch");
    var Bookmark = document.getElementById("open-Bookmark");
    var downImage2 = document.getElementById("show-RoutePlanner");
    var searchDownImage = document.getElementById("searchDownImage");
      var dynamisearchDownImage = document.getElementById("show-DynamicSearch");
  var keywordDownImage = document.getElementById("show-keywordSearch");
  var bookmarkDownImage = document.getElementById("show-Bookmark");
    // Ensure initial display state is set correctly when the page loads
    if (RoutePlanning.style.display === "") {
        RoutePlanning.style.display = "none"; // Set initial display state to "none"
    }

    // Toggle the display of the RoutePlanning div
    RoutePlanning.style.display = RoutePlanning.style.display === "none" ? "block" : "none";
    searchDiv.style.display = "none"; // Hide other divs
    dynamicSearchDiv.style.display = "none";
    KeywordSearch.style.display = "none";
    Bookmark.style.display = "none";
    searchDownImage.src = searchDiv.style.display === "none" ? "./Images/Down.svg" : "./Images/up.svg";
    dynamisearchDownImage.src = dynamicSearchDiv.style.display === "none" ? "./Images/Down.svg" : "./Images/up.svg";
    keywordDownImage.src = KeywordSearch.style.display === "none" ? "./Images/Down.svg" : "./Images/up.svg";
    bookmarkDownImage.src  = Bookmark.style.display === "none" ? "./Images/Down.svg" : "./Images/up.svg";
    
    downImage2.src = RoutePlanning.style.display === "none" ? "./Images/Down.svg" : "./Images/up.svg";

  }
  function reloadPageAndToggleKeywordSearch() {
    // Reload the page
    location.reload();

    // Set a timeout to delay showing the KeywordSearch div after the page reloads
    setTimeout(function () {
        toggleKeywordSearch();
    }, 1000); // You can adjust the timeout duration as needed
}

  //   open keyword search
  function toggleKeywordSearch() {
    var searchDiv = document.getElementById("open-search");
    var dynamicSearchDiv = document.getElementById("open-DynamicSearch");
    var RoutePlanning = document.getElementById("open-RoutePlanner");
    var KeywordSearch = document.getElementById("open-keywordSearch");
    var Bookmark = document.getElementById("open-Bookmark");
    var downImage2 = document.getElementById("show-keywordSearch");
    var searchDownImage = document.getElementById("searchDownImage");
    var dynamisearchDownImage = document.getElementById("show-DynamicSearch");
    var RouteDownImage = document.getElementById("show-RoutePlanner");
var bookmarkDownImage = document.getElementById("show-Bookmark");
    // Ensure initial display state is set correctly when the page loads
    if (KeywordSearch.style.display === "") {
        KeywordSearch.style.display = "none"; // Set initial display state to "none"
    }

    // Toggle the display of the KeywordSearch div
    KeywordSearch.style.display = KeywordSearch.style.display === "none" ? "block" : "none";
    searchDiv.style.display = "none"; // Hide other divs
    dynamicSearchDiv.style.display = "none";
    RoutePlanning.style.display = "none";
    Bookmark.style.display = "none";
    searchDownImage.src = searchDiv.style.display === "none" ? "./Images/Down.svg" : "./Images/up.svg";
    dynamisearchDownImage.src = dynamicSearchDiv.style.display === "none" ? "./Images/Down.svg" : "./Images/up.svg";
    RouteDownImage.src = RoutePlanning.style.display === "none" ? "./Images/Down.svg" : "./Images/up.svg";
    bookmarkDownImage.src  = Bookmark.style.display === "none" ? "./Images/Down.svg" : "./Images/up.svg";
    
    downImage2.src = KeywordSearch.style.display === "none" ? "./Images/Down.svg" : "./Images/up.svg";
}



  function togglefilter(){
      var Bookmark = document.getElementById("filter");
    var downImage2 = document.getElementById("up");
    Bookmark.style.display =
      Bookmark.style.display === "none" ? "block" : "none";
    downImage2.style.transform =
      Bookmark.style.display === "none" ? "rotate(0deg)" : "rotate(180deg)";

  }
  //   open Bookmark
  function togglebookmark() {
    var searchDiv = document.getElementById("open-search");
    var dynamicSearchDiv = document.getElementById("open-DynamicSearch");
    var RoutePlanning = document.getElementById("open-RoutePlanner");
    var KeywordSearch = document.getElementById("open-keywordSearch");
    var Bookmark = document.getElementById("open-Bookmark");
    var downImage2 = document.getElementById("show-Bookmark");
    var searchDownImage = document.getElementById("searchDownImage");
    var dynamisearchDownImage = document.getElementById("show-DynamicSearch");
    var RouteDownImage = document.getElementById("show-RoutePlanner");
    var keywordDownImage = document.getElementById("show-keywordSearch");

    // Ensure initial display state is set correctly when the page
    // Ensure initial display state is set correctly when the page loads
    if (Bookmark.style.display === "") {
        Bookmark.style.display = "none"; // Set initial display state to "none"
    }

    // Toggle the display of the Bookmark div
    Bookmark.style.display = Bookmark.style.display === "none" ? "block" : "none";
    searchDiv.style.display = "none"; // Hide other divs
    dynamicSearchDiv.style.display = "none";
    RoutePlanning.style.display = "none";
    KeywordSearch.style.display = "none";
    searchDownImage.src = searchDiv.style.display === "none" ? "./Images/Down.svg" : "./Images/up.svg";
    dynamisearchDownImage.src = dynamicSearchDiv.style.display === "none" ? "./Images/Down.svg" : "./Images/up.svg";
    RouteDownImage.src = RoutePlanning.style.display === "none" ? "./Images/Down.svg" : "./Images/up.svg";
    keywordDownImage.src  = KeywordSearch.style.display === "none" ? "./Images/Down.svg" : "./Images/up.svg";
    
    downImage2.src = Bookmark.style.display === "none" ? "./Images/Down.svg" : "./Images/up.svg";
}


  var checkboxes = document.querySelectorAll(".checkbox.custom");
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      // Check if the checkbox is checked
      if (this.checked) {
        // If checked, change the color of the corresponding <p> element to black
        this.nextElementSibling.style.color = "black";
      } else {
        // If unchecked, revert the color to the default
        this.nextElementSibling.style.color = "";
      }
    });
  });