//open window left//
document.addEventListener("DOMContentLoaded", function() {
  var elements = document.querySelectorAll(".windoow");

  elements.forEach(function(element) {
    element.addEventListener("click", function() {
      element.style.transform = "translateX(-22px)"; 
    });
  });
});

//open window right//
document.addEventListener("DOMContentLoaded", function() {
  var elements = document.querySelectorAll(".reaction");

  elements.forEach(function(element) {
    element.addEventListener("click", function() {
      element.style.transform = "translateX(22px)"; 
    });
  });
});

//zoom window //







//open door left//
document.addEventListener("DOMContentLoaded", function() {
  var elements = document.querySelectorAll(".door1");

  elements.forEach(function(element) {
    element.addEventListener("click", function() {
      element.style.transform = "translateX(-32px)"; 
    });
  });
});

//open door right//
document.addEventListener("DOMContentLoaded", function() {
  var elements = document.querySelectorAll(".door2");

  elements.forEach(function(element) {
    element.addEventListener("click", function() {
      element.style.transform = "translateX(32px)"; 
    });
  });
});

let wido = document.querySelectorAll(".win1");
      wido.forEach((element) => {
        element.addEventListener("click", (e) => {
          e.target.parentElement.classList.toggle("active");
        });
      });
