function tiMeterGangTest_add(){
    let has_added = false;
    let current_element;
    for(i=2; i<4; i++){
        current_element = document.getElementById("tiMeterGangTest_input" + i);
        if ((current_element.style.display == "none") && (has_added == false)){
            current_element.style.display = "block";
            has_added = true
            document.getElementById("tiMeterGangTestOutput").innerHTML = ""; 
            document.getElementById("generate_email_btn").style.display = "none";
        }
    }
};

function tiMeterGangTest_remove(){  
    let has_removed = false;
    let current_element;
    for(i=3; i>1; i--){
        current_element = document.getElementById("tiMeterGangTest_input" + i);
        if ((current_element.style.display == "block") && (has_removed == false)){
            current_element.style.display = "none";
            has_removed = true;
            document.getElementById("tiMeterGangTestOutput").innerHTML = "";
            document.getElementById("generate_email_btn").style.display = "none";
        }
    }
};

function clearResult_tiMeterGangTest(){
    //alternativ clearResult("tiMeterGangTest())
    document.getElementById("tiMeterGangTestOutput").innerHTML = "";
    document.getElementById("tiMeterGangTest_error").innerHTML = "";
}

function tiMeterGangTest_beregner(){
 
    document.getElementById("tiMeterGangTest_error").style.display = "block";
    document.getElementById("tiMeterGangTestOutput").innerHTML = "";

    let tider = [];
    let tid

    for(i=0; i<3; i++){

        tid = parseFloat(document.getElementById('tiMeterGangTest_tid' + (i+1)).value);
        if (document.getElementById('tiMeterGangTest_input'+(i+1)).style.display == "none"){
            break;
        }
        if (!isNumeric(tid)){
            document.getElementById("tiMeterGangTest_error").innerHTML="Tidsforbruget i " + (i+1) + ". forsøg skal angives i sekunder";
            return
            
        }
        if (tid <= 0){
            document.getElementById("tiMeterGangTest_error").innerHTML= "Du har angivet et urealistisk tidsforbrug i " + (i+1) + ". forsøg." 
            break;
        }
        
        tider.push(tid)
    }
    if (tider.length == 0){
        return
    }
    else{

        let korteste_tid = Math.min(...tider);
        
        let result = roundToTwo(10/korteste_tid);
        
        document.getElementById("tiMeterGangTestOutput").innerHTML = "Bedste tid er " + korteste_tid + " sek., svarende til en ganghastighed på " +
        result + " m/s.";
        document.getElementById("tiMeterGangTest_error").style.display = "none";

        document.getElementById("generate_email_btn").style.display = "block";
        prepareEmail("tiMeterGangTest");
        
        //Return for testing purposes
        return result
    }
}


//Make sure that result gets deleted when input value is changed. 
// Bruges nok af alle mine tests, så den kan evt hentes ind fra utils og så kaldes med testId som argument
//eller jeg kunne lave oninput = funktion() i alle inputfelterne i HTML-filen

document.querySelectorAll('.'+ "tiMeterGangTest" +'.input').forEach(item => {
      item.addEventListener('input', event => {      
          clearResult_tiMeterGangTest();
          document.getElementById("generate_email_btn").style.display = "none";
        });
    }); 
    

