var d = document.querySelector("#d");
var h = document.querySelector("#h");
var m = document.querySelector("#m");
var s = document.querySelector("#s");

//set TIME
let end = new Date("Apr 8, 3021 21:59:59").getTime();

var x = setInterval(function(){
    // Get today's date and time
let start = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = end - start;
let eday = Math.floor(distance/(1000 * 60 * 60 * 24));
let ehour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let eminute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let eseconds = Math.floor((distance % (1000 * 60)) / 1000);

d.innerHTML = eday + " روز";
h.innerHTML = ehour + " ساعت";
m.innerHTML = eminute + " دقیقه";
s.innerHTML = eseconds + " ثانیه";

 // If the count down is finished, write some text
 if (distance < 0) {
  clearInterval(x);
  d.innerHTML = "0";
  h.innerHTML = "0";
  m.innerHTML = "0";
  s.innerHTML = "0";
}
}, 1000);

var darsad = document.querySelector("#inhundered");
var percent = document.querySelector("progress");
darsad.append(" " + percent.getAttribute("value") + " %");
