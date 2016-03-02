javascript:(function(){
	
	var charMap = [
		[' be ', ' ᗺ '],
		['"Be ', ' "ᗺ '],
		[' and ', ' & '],
		[' at ', ' @ '],
		[' the ', ' Ћ '],
		[' or ', ' || '],
		[' to ', ' ↦ '],
		[' (s|S)tar ', ' ☆ ']
	];


	var paragraphs = document.getElementsByTagName("p");

	for (var i=0; i < paragraphs.length; i++) {

	  for (var j=0; j < charMap.length; j++) {

	  	var re = new RegExp(charMap[j][0],"g");

	  	paragraphs[i].innerHTML = paragraphs[i].innerHTML.replace(re, charMap[j][1]);

	  }


	}

})();
