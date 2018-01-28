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

    var par = document.getElementById('par-0');
    var txt = document.getElementById('text-0');
    par.addEventListener('dblclick', function() {
        var place_holder = par.value;
        txt.value = place_holder;
        _switch0();
      });

    var par = document.getElementById('par-1');
    var txt = document.getElementById('text-1');
    par.addEventListener('dblclick', function() {
        var place_holder = par.value;
        txt.value = place_holder;
        _switch0();
    });
        
      document.getElementById('par-1').addEventListener('dblclick', function() {
        var place_holder = document.getElementById('par-1').value;
        console.log(place_holder);
        document.getElementById('text-1').value = place_holder;
      
        // console.log(pclick());
        // console.log(place_holder);
        _switch0();
      });
      
      document.getElementById('button-0').addEventListener('click', function() {
          var place_holder = document.getElementById('text-0').innerHTML;
          document.getElementById('par-0').innerHTML = place_holder;
          _switch1();
      });
      
      document.getElementById('button-1').addEventListener('click', function() {
          var place_holder = document.getElementById('text-1').innerHTML;
          document.getElementById('par-1').innerHTML = place_holder;
          _switch1();
      });
}

function pclick(){
	if (document.getElementById('par-0')) {
		return 0;
	}

	else {
		return 1;
	}
}

function _switch0(){
	document.querySelector('p').style.display = 'none';
	document.querySelector('textarea').style.display = 'inline';
	document.querySelector('button').style.display = 'inline'
}

function _switch1(){
	document.querySelector('p').style.display = 'inline';
	document.querySelector('textarea').style.display = 'none';
	document.querySelector('button').style.display = 'none'
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

