
 function toggleSearch() {
    var searchDiv = document.getElementById("open-search");
    var dynamicSearchDiv = document.getElementById("open-DynamicSearch");
    var RoutePlanning = document.getElementById("open-RoutePlanner");
    var KeywordSearch = document.getElementById("open-keywordSearch");
    var Bookmark = document.getElementById("open-Bookmark");

    var downImage = document.getElementById("searchDownImage");

    // Toggle the display of the search div
    searchDiv.style.display =
      searchDiv.style.display === "none" ? "block" : "none";
      dynamicSearchDiv.style.display =
      dynamicSearchDiv.style.display === "block" ? "none" : "none";
      RoutePlanning.style.display =
      RoutePlanning.style.display === "block" ? "none" : "none";
      KeywordSearch.style.display =
      KeywordSearch.style.display === "block" ? "none" : "none";
      Bookmark.style.display =
      Bookmark.style.display === "block" ? "none" : "none";

    // Rotate the down image based on the display status of the search div
    downImage.style.transform =
      searchDiv.style.display === "none" ? "rotate(0deg)" : "rotate(180deg)";
  }

  //   open dynamic search
  function toggleDynamicSearch() {
    var searchDiv = document.getElementById("open-search");
    var dynamicSearchDiv = document.getElementById("open-DynamicSearch");
    var RoutePlanning = document.getElementById("open-RoutePlanner");
    var KeywordSearch = document.getElementById("open-keywordSearch");
    var Bookmark = document.getElementById("open-Bookmark");
    var downImage2 = document.getElementById("show-DynamicSearch");
    // Toggle the display of the Dynamic Search div
    dynamicSearchDiv.style.display =
      dynamicSearchDiv.style.display === "none" ? "block" : "none";
      RoutePlanning.style.display =
      RoutePlanning.style.display === "block" ? "none" : "none";
      KeywordSearch.style.display =
      KeywordSearch.style.display === "block" ? "none" : "none";
      Bookmark.style.display =
      Bookmark.style.display === "block" ? "none" : "none";
      searchDiv.style.display =
      searchDiv.style.display === "block" ? "none" : "none";
    downImage2.style.transform =
      dynamicSearchDiv.style.display === "none"
        ? "rotate(0deg)"
        : "rotate(180deg)";
  }

  //   open RoutePlanning
  function toggleRoutePlanning() {
    var searchDiv = document.getElementById("open-search");
    var dynamicSearchDiv = document.getElementById("open-DynamicSearch");
    var RoutePlanning = document.getElementById("open-RoutePlanner");
    var KeywordSearch = document.getElementById("open-keywordSearch");
    var Bookmark = document.getElementById("open-Bookmark");
    var downImage2 = document.getElementById("show-RoutePlanner");
    // Toggle the display of the Dynamic Search div
    RoutePlanning.style.display =
      RoutePlanning.style.display === "none" ? "block" : "none";
      dynamicSearchDiv.style.display =
      dynamicSearchDiv.style.display === "block" ? "none" : "none";
      KeywordSearch.style.display =
      KeywordSearch.style.display === "block" ? "none" : "none";
      Bookmark.style.display =
      Bookmark.style.display === "block" ? "none" : "none";
      searchDiv.style.display =
      searchDiv.style.display === "block" ? "none" : "none";
    downImage2.style.transform =
      RoutePlanning.style.display === "none"
        ? "rotate(0deg)"
        : "rotate(180deg)";
  }

  //   open keyword search
  function toggleKeywordSearch() {
    var searchDiv = document.getElementById("open-search");
    var dynamicSearchDiv = document.getElementById("open-DynamicSearch");
    var RoutePlanning = document.getElementById("open-RoutePlanner");
    var KeywordSearch = document.getElementById("open-keywordSearch");
    var Bookmark = document.getElementById("open-Bookmark");
    var downImage2 = document.getElementById("show-keywordSearch");
    // Toggle the display of the Dynamic Search div
    KeywordSearch.style.display =
      KeywordSearch.style.display === "none" ? "block" : "none";
      RoutePlanning.style.display =
      RoutePlanning.style.display === "block" ? "none" : "none";
      dynamicSearchDiv.style.display =
      dynamicSearchDiv.style.display === "block" ? "none" : "none";
      Bookmark.style.display =
      Bookmark.style.display === "block" ? "none" : "none";
      searchDiv.style.display =
      searchDiv.style.display === "block" ? "none" : "none";
    downImage2.style.transform =
      KeywordSearch.style.display === "none"
        ? "rotate(0deg)"
        : "rotate(180deg)";
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
    // Toggle the display of the Dynamic Search div
    Bookmark.style.display =
      Bookmark.style.display === "none" ? "block" : "none";
      KeywordSearch.style.display =
      KeywordSearch.style.display === "block" ? "none" : "none";
      RoutePlanning.style.display =
      RoutePlanning.style.display === "block" ? "none" : "none";
      dynamicSearchDiv.style.display =
      dynamicSearchDiv.style.display === "block" ? "none" : "none";
      searchDiv.style.display =
      searchDiv.style.display === "block" ? "none" : "none";
    downImage2.style.transform =
      Bookmark.style.display === "none" ? "rotate(0deg)" : "rotate(180deg)";
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