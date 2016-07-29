/****************************************************
*                The Break Statement                *
****************************************************/
var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;

/****************************************************
*              The Continue Statement               *
****************************************************/
var text = "";
var i;
for (i=0; i<10; i++) {
  if (i === 3) {continue;}
  text += "The number is " + i + "<br>";
}
document.getElementById("continue").innerHTML = text;
