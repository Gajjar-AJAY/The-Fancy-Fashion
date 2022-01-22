var header = document.getElementById("size");
	var btns = header.getElementsByClassName("size_btn");
	for (var i = 0; i < btns.length; i++) {
	  btns[i].addEventListener("click", function() {
	  var current = document.getElementsByClassName("actives");
	  if (current.length > 0) { 
	    current[0].className = current[0].className.replace(" actives", "");
	  }
	  this.className += " actives";
	  });
	}