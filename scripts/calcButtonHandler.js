const testNames = {
  tiMGT: "10-meter gangtest"
}

function calcButtonHandler(testId){
  console.log(testId);
  result = window[testId + "Formula"]();
  console.log("result", result)

  if(isNaN(result)){
      document.getElementById(testId +'Output').innerHTML = 
          "Resultatet er ikke beregnet.<br>Kontrollér at alle felter er udfyldt korrekt";
  }

  else{
      document.getElementById(testId +'Output').innerHTML = "Resultat: " + result;
      let urlWithParams = generate_url(testId);
      document.getElementById('datalink').href = urlWithParams;
      document.getElementById('emailSubject').value = testNames[testId]; //testId
      document.getElementById('emailContent').value = "Her kan du genfinde de indtastede data: " + urlWithParams;  
      document.getElementById("emailStatusText").innerHTML = "";
      document.getElementById("emailStatusText").style.color="black";
      document.getElementById("userEmailAddress").style.backgroundColor="transparent";
      document.getElementById("emailContent").style.backgroundColor="transparent";
      document.getElementById('showlink_div').style.display = "block";

  } 
  
  showIfFielsAreInvalid(testId);

  // Når der ændres i et input-felt, så nulstilles de beregnede resultater og linkes fjernes.
  // Dette er vigtigt, da //resultaterne skal genberegnes, hvis der ændres i input. Men disse
  //eventlisteners skal først initieres, når der er trykket på beregn-knappen.
  document.querySelectorAll('.'+ testId+'.input').forEach(item => {
      item.addEventListener('input', event => {      
          resetCalculations(testId);
          showIfFielsAreInvalid(testId);     
      });
  });
}  


function resetCalculations(testId){
  console.log("Hej fra resetcalc i utils", testId);
    document.getElementById(testId+'Output').innerHTML ="";
    document.getElementById("datalink").href = "";
    document.getElementById('showlink_div').style.display = "none";
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
  //  let targetForm = $('#' + testId + 'Form');
  let inputs = document.getElementsByClassName(testId +' input');
  for (let i = 0; i < inputs.length; i++ ) {
   // inputs[i].style.rder = "red";
    if(inputs[i].value == ''){
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

