javascript:(function(){
	
	var charMap = [
		[' be ', ' ᗺ '],
		[' are ', ' Я '],
		[' and ', ' & '],
		[' at ', ' @ '],
		[' the ', ' Ћ '],
		[' there ', ' Ђ '],
		[' or ', ' ‖ '],
		[' to ', ' ⇥ '],
		[' from ', ' ↦ '],
		[' with ', ' W/ '],
		[' without ', ' W/O '],
		[' (s|S)tar ', ' ☆ '],
		[' percent ', ' % ']
	];


	var paragraphs = document.getElementsByTagName("p");

	for (var i=0; i < paragraphs.length; i++) {

	  for (var j=0; j < charMap.length; j++) {

	  	var re = new RegExp(charMap[j][0],"g");

	  	paragraphs[i].innerHTML = paragraphs[i].innerHTML.replace(re, charMap[j][1]);

	  }


	}

})();
