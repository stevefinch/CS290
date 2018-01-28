var click_main_image = 0; 

window.onload=function(){
    var switch_images = ['MtHoodVillages-07-2000.jpg','beer1.jpg', 'beer2.jpg', 'weed.jpg'];
    var main_image = document.querySelector('.big_picture');    
    main_image.addEventListener('click', function() { 
        main_image.src = switch_images[++click_main_image % 4]; 
      }
    )
    
    var nav = document.querySelector('.nav-menu');
    nav.addEventListener('mouseover', function() { 
        nav.style.background = '#FF4500'; 
        }
    )
}

var el = document.getElementsByClassName("big_picture");
if (el[0]) {
    el[0].addEventListener('click', function() {
        alert('Its a test, ya dick!'); 
    });
} 


function Xclicked(X){  
 X.parentElement.style.display = "none";
}

function adjustDivs(show) {  
    var divs = document.getElementsByClassName("county_div")
    for(var i = 0; i < divs.length; i++){
        divs[i].style.display = (show ? "inline-block" : "none");
    }
}    

