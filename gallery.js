//this use for change the background color
function backgroundchange(el) {
  document.body.style.backgroundColor = el.value;
}

//add an event listener that calls changeColor() when the menu selection changes
//this is the same as adding onchange="changeColor()" in HTML
document.getElementById('font').addEventListener('change', changefont);

function changefont() {
    //store the menu's value (which is the value of the chosen option)
    var color = document.getElementById('font').value;

    //store the list of all <p> elements
    var list = document.getElementsByTagName('p');

    //loop through the list and apply the color to each <p> element        
    for (var i=0; i<list.length; i++) {
        list[i].style.color = color;
    }
}