const pagesAndNames = {
  // Alle sider og de rigtige test-navne. 
  // testId: real_name
  "tiMeterGang": "10-meter gangtest",
  "tiMeterGangAbout": "",
  "seksMinGang": "6-minuttersgangtest",
  "seksMinGangAbout": "",
  "upAndGo": "2,45m up-and-go-test",
  "upAndGoAbout": "",
  "ALS": "Amyotrophic Lateral Sclerosis Rating Scale (ALS) - Revised",
  "ALSAbout": "",
  
  "email": "",
  "frontpage": ""
}
// list with all pageid's
pageList = Object.keys(pagesAndNames);

function showElement(id){
  $(function(){     
    $('html, body').animate({
      scrollTop: $(`#${id}`).offset().top
    });
  });
}


function arraysMatch(arr1, arr2) {

	// Check if the arrays are the same length
	if (arr1.length !== arr2.length) return false;

	// Check if all items exist and are in the same order
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}

	// Otherwise, return true
	return true;

};

function isNumeric(n){
    return !isNaN(parseFloat(n)) &&isFinite(n);
}

function roundToTwo(num) {    
  return +(Math.round(num + "e+2")  + "e-2");
}

  
  