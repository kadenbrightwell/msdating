// Get the timestamp "1673990000000" in milliseconds
var timestamp = 1673990000000;
// Get the current time in milliseconds
var currentTime = new Date().getTime();
// Get the difference between the timestamp and the current time
var difference = currentTime - timestamp;
// Get the element with the id "counter"
var counter = document.getElementById("counter");
// Update the element with the difference in milliseconds
counter.innerHTML = difference;
// Update the element every 10 milliseconds

/*---UPDATES---*/

/*
var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var colorIndex = 0;

setInterval(function() {
  var currentTime = new Date().getTime();
  var difference = currentTime - timestamp;
  var text = difference.toString();
  var chars = text.split("");

  for (var i = 0; i < chars.length; i++) {
    var char = chars[i];
    chars[i] = "<span class='char' style='color: " + colors[i % colors.length] + ";'>" + char + "</span>";
  }
  counter.innerHTML = chars.join("");
}, 10);
*/

//purple wave
/*var colors = {
  0: "#b491c8",
  1: "#7c5295",
  2: "#663a82",
  3: "#52307c",
  4: "#3c1361",
  5: "#b491c8",
  6: "#7c5295",
  7: "#663a82",
  8: "#52307c",
  9: "#3c1361",
};*/

//color pallete
/*var colors = {
  0: "#741A21",
  1: "#DB462B",
  2: "#F9CB65",
  3: "#11818D",
  4: "#1D6E83",
  5: "#741A21",
  6: "#DB462B",
  7: "#F9CB65",
  8: "#11818D",
  9: "#1D6E83",
};*/

//purple gradient
var colors = {
  0: "#D7A1F9",
  1: "#CE8CF8",
  2: "#BC61F5",
  3: "#B24BF3",
  4: "#A020F0",
  5: "#880ED4",
  6: "#692D94",
  7: "#6C0BA9",
  8: "#51087E",
  9: "#461257",
};

setInterval(function() {
  var currentTime = new Date().getTime();
  var difference = currentTime - timestamp;
  var text = difference.toString();
  var chars = text.split("");

  for (var i = 0; i < chars.length; i++) {
    var char = chars[i];
    var color = colors[char];
    chars[i] = "<span class='char' style='color: " + color + ";'>" + char + "</span>";
  }
  counter.innerHTML = chars.join("");
}, 10);














// Get the button elements
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

// Add event listeners for the buttons
btn1.addEventListener("click", function() {
  // Update the values of the colors object for Color Palette 1
  colors = {
    0: "#741A21",
    1: "#DB462B",
    2: "#F9CB65",
    3: "#11818D",
    4: "#1D6E83",
    5: "#741A21",
    6: "#DB462B",
    7: "#F9CB65",
    8: "#11818D",
    9: "#1D6E83",
  };
});

btn2.addEventListener("click", function() {
  // Update the values of the colors object for Color Palette 2
  colors = {
    0: "#D7A1F9",
    1: "#CE8CF8",
    2: "#BC61F5",
    3: "#B24BF3",
    4: "#A020F0",
    5: "#880ED4",
    6: "#692D94",
    7: "#6C0BA9",
    8: "#51087E",
    9: "#461257",
  };
});

btn3.addEventListener("click", function() {
  // Update the values of the colors object for Color Palette 3
  colors = {
    0: "#b491c8",
    1: "#7c5295",
    2: "#663a82",
    3: "#52307c",
    4: "#3c1361",
    5: "#b491c8",
    6: "#7c5295",
    7: "#663a82",
    8: "#52307c",
    9: "#3c1361",
  };
});












// Define an array of image URLs
var images = [
  "assets/image1.JPG",
  "assets/image2.JPG",
  "assets/image3.JPG",
  "assets/image4.JPG",
  "assets/image5.JPG",
  "assets/image6.JPG",
  "assets/image7.JPG",
  "assets/image8.JPG",
  "assets/image9.JPG",
];

// Get the slideshow image element
var slideshowImage = document.getElementById("slideshow-image");

// Set the initial index to 0
var currentIndex = 0;

// Set the initial image
slideshowImage.style.backgroundImage = "url(" + images[currentIndex] + ")";

// Create a function to update the image
function updateImage() {
  // Increment the current index
  currentIndex++;
  
  // If the current index is greater than the number of images, set it back to 0
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  
  // Update the background image of the slideshow image element
  slideshowImage.style.backgroundImage = "url(" + images[currentIndex] + ")";
  
  // Call the function again after 5 seconds
  setTimeout(updateImage, 5000);
}

// Call the updateImage function to start the slideshow
updateImage();
