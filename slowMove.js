function myMove() {
	alert("function called")
  var elem = document.getElementById("inner");   
  var pos = 0;
 
  var id = setInterval(setBoxPosition, 5); // makes a variable which calls the function setBoxPosition
  function setBoxPosition() {
	    
	  if (pos < 600){   
	  elem.style.left = pos + 'px'; 
	  pos+=2;	
	  }
	  else {
		  id.clearInterval(setBoxPosition);
	  }
