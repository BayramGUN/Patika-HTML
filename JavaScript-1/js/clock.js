
function showTime(locale) {
    var date = new Date().toLocaleString("tr-Tr", { hour12: 'hh:mm:ss' });
    var day = new Date().toLocaleDateString("tr-TR", { weekday: 'long' });
    document.getElementById("myClock").innerHTML = date + " " + day;
}
setInterval(showTime, 1000);
let person = prompt("Please enter your name", "Harry Potter");
let text;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  text =  person;
  document.getElementById("myName").innerHTML = text;
} 