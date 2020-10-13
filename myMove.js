function MyMove() {
	alert("function called")
  var elem = document.getElementById("inner");   
  var pos = 0;
  var top = 240;
  var r=111;
  var g=222;
  var b=44;
  var radius=0;
  var id = setInterval(setBoxPosition, 5); // makes a variable which calls the function setBoxPosition
  function setBoxPosition() {
	    
	  if (pos < 450){   
      elem.style.left = pos + 'px'; 
      elem.style.top = top + 'px';
      pos+=2;
      top=top+0.9;
      r=r+5;
      g=g+4;
      b=b+1;
      radius=radius+0.43;
      elem.style.background = 'rgb('+r+','+g+','+b+')';
      elem.style.borderRadius = radius+ '%';
	  }
	  else {
      id.clearInterval(setBoxPosition);
    }
      
  }
}