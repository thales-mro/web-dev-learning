// var h1 = document.querySelector("h1");

// h1.style.color = "pink";

// var body = document.querySelector("body");
// var isBlue = false;

// setInterval(function() {
//     if (isBlue) {
//         body.style.background = "white";
//     } else {
//         body.style.background = "#3498db";
//     }
//     isBlue = !isBlue;
// }, 100000);

var tag = document.getElementById("highlight");

// tag.style.color = "blue";
// tag.style.border = "10px solid red";
// tag.style.fontSize = "70px";
// tag.style.backgroundColor = "yellow";
// tag.style.marginTop = "200px";

tag.classList.add("some-class");

console.log(tag);

console.dir(tag);

var tags = document.getElementsByClassName("bolded");
console.log(tags);
console.dir(tags);

console.log(tags[0].textContent)
tags[0].textContent = "It is modified!";

var tags2 = document.getElementsByTagName("li");
console.log(tags2);
console.dir(tags2);

var tag2 = document.querySelector("#highlight");
console.log(tag2);
console.dir(tag2);

var tags3 = document.querySelectorAll("h1");
console.log(tags3);
console.dir(tags3);

var ul = document.querySelector("ul");
console.log(ul.innerHTML);

var a = document.querySelector("a");
a.setAttribute("href", "http://www.google.com");
console.log(a.getAttribute("href"));