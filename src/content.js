function filterPrograms(value) {
    var ul = document.getElementById("actualPrograms");
    if (ul === null) {
        return false;
    }

    var lis = ul.getElementsByTagName("li");    
    for (var i = 0; i < lis.length; i++) {
        // li -> a -> img[alt]
        var alt = lis[i].childNodes[1].childNodes[1].alt;                
        if (value === "" || alt.toLowerCase().includes(value)) {
            lis[i].style.display = "";
        } else {
            lis[i].style.display = "none";
        }
    }
    return true;
}

// Search input
var searchBoxInput = document.createElement("input");
searchBoxInput.setAttribute("id", "searchInput");
searchBoxInput.setAttribute("type", "text");
searchBoxInput.style.cssText = "height: 100% !important; padding: 5px;";

// Overwrite existing LI
var searchBoxContainer = document.createElement("li");
searchBoxContainer.appendChild(searchBoxInput);

var ul = document.getElementById("menuTop");
// Append empty LI
ul.appendChild(document.createElement("li"));

var lis = document.getElementsByTagName("li");
lis[2].innerHTML = searchBoxContainer.innerHTML;

document.getElementById("searchInput").addEventListener("keyup", function() {
    if (filterPrograms(this.value.toLowerCase())) {
        return;
    }
}, false);

