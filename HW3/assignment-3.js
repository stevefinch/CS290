function Xclicked(X){  
 X.parentElement.style.display = "none";
}

function adjustDivs(show) {  
    var divs = document.getElementsByClassName("county_div")
    for(var i = 0; i < divs.length; i++){
        divs[i].style.display = (show ? "inline-block" : "none");
    }
}    

