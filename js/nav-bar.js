function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav bg-primary") {
    x.className += " responsive";
  } else {
    x.className = "topnav bg-primary";
  }
} 