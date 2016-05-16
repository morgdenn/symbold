javascript:(function(){
	
	var charMap = [
		/* contractions - https://en.wikipedia.org/wiki/Wikipedia:List_of_English_contractions */
		[' it is ', ' ’tis '],
		[' it was ', ' ’twas '],
		
		/* made up. */
		[' be ', ' ᗺ '],
		[' are ', ' Я '],
		[' and ', ' & '],
		[' at ', ' @ '],
		[' the ', ' Ћ '],
		[' there ', ' Ħ '], 
		[' their ', ' Ħ '],
		[' this ', ' ʦ '],
		[' or ', ' ‖ '],
		[' to ', ' ⇥ '],
		[' from ', ' ↦ '],
		[' with ', ' W/ '],
		[' without ', ' W/O '],
		[' star ', ' ☆ '],
		[' percent ', ' % '],
		
		/* numbers */
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
		[' eleven ', ' 11 ']
	];


	var paragraphs = document.getElementsByTagName("p");

	for (var i=0; i < paragraphs.length; i++) {

	  for (var j=0; j < charMap.length; j++) {

	  	var re = new RegExp(charMap[j][0],"g");

	  	paragraphs[i].innerHTML = paragraphs[i].innerHTML.replace(re, charMap[j][1]);

	  }


	}

})();
