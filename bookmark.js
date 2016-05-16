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
		[' star ', ' ☆ '],
		[' percent ', ' % '],
		[' one ', ' 1 '],
		[' two ', ' 2 '],
		[' three ', ' 3 '],
		[' four ', ' 4 '],
		[' five ', ' 5 '],
		[' six ', ' 6 '],
		[' seven ', ' 7 '],
		[' eight ', ' 8 '],
		[' nine ', ' 9 '],
		[' ten ', ' 10 '],
		[' eleven ', ' 11 '],
	];


	var paragraphs = document.getElementsByTagName("p");

	for (var i=0; i < paragraphs.length; i++) {

	  for (var j=0; j < charMap.length; j++) {

	  	var re = new RegExp(charMap[j][0],"g");

	  	paragraphs[i].innerHTML = paragraphs[i].innerHTML.replace(re, charMap[j][1]);

	  }


	}

})();
