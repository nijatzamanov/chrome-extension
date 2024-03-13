console.log("My extension")

var dom = document.getElementById("rso");
var links = dom.getElementsByClassName("r");

for (let i = 0; i < links.length; i++) {
    let title = links[i].text;
    console.log("Link is", title);
}