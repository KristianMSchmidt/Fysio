function isNumeric(n){
    return !isNaN(parseFloat(n)) &&isFinite(n);
}

function prepareEmail(testId){
    const testNames = {
        "tiMeterGangTest": "10-meter gangtest",
        "seksMinGangTest": "6-minuttersgangtest"
    }
    let urlWithParams = generate_url(testId);
    document.getElementById('emailSubject').value = testNames[testId]; 
    console.log("testId: ",testId )
    console.log(testNames[testId])
    document.getElementById('emailContent').value = "Her kan du genfinde de indtastede data: " + urlWithParams;  
    document.getElementById("emailStatusText").innerHTML = "";
    document.getElementById("emailStatusText").style.color="black";
    document.getElementById("userEmailAddress").style.backgroundColor="transparent";
    document.getElementById("emailContent").style.backgroundColor="transparent";
}


function generate_url(testId){
    // Generates url to datalink
  
    const targetForm = $('#' + testId + 'Form');
    const params = targetForm.serialize(); 
    const url = window.location.href;
    const after_hash = url.split("#")[1]; 
  
    if (url.includes("?")){
      var first_part = url.split("?")[0];
    } 
    else{
      var first_part = url.split("#")[0]; 
    }
    const urlWithParams = first_part + '?' + params + '#' + after_hash;  
    console.log(urlWithParams);
  
    return(urlWithParams);
  }

  

function showIfFielsAreInvalid(testId){
    //Denne funktion bruger jeg ikke i øjeblikket
    console.log("HEj fra showFildsAreInvalid")
    //  let targetForm = $('#' + testId + 'Form');
    let inputs = document.getElementsByClassName(testId +' input');
    for (let i = 0; i < inputs.length; i++ ) {
     // inputs[i].style.rder = "red";
     console.log(inputs[i].classList)
      if(inputs[i].value == '' && inputs[i].classList.contains("required")){
        //In this case field is empty or not valid number
        //Last number is transparency. 1=not transparet. Witho some transparency,
        //I keep tthe styling of jquery mobile (shadow etx) & and black numbers look better. 
        //document.getElementById(inputs[i].id).style.backgroundColor="rgba(255,145,173,0.3)";
        inputs[i].style.backgroundColor="rgba(255,145,173,0.3)";
      } else{
        inputs[i].style.backgroundColor="transparent";
      }   
    }
  }
  
  