function tiMeterGang_add(){
    let has_added = false;
    let current_element;
    for(i=2; i<4; i++){
        current_element = document.getElementById("tiMeterGang_input" + i);
        if ((current_element.style.display == "none") && (has_added == false)){
            current_element.style.display = "block";
            has_added = true
            document.getElementById("tiMeterGangOutput").innerHTML = ""; 
            document.getElementById("generate_email_btn").style.display = "none";
        }
    }
};

function tiMeterGang_remove(){  
    let has_removed = false;
    let current_element;
    for(i=3; i>1; i--){
        current_element = document.getElementById("tiMeterGang_input" + i);
        if ((current_element.style.display == "block") && (has_removed == false)){
            current_element.style.display = "none";
            has_removed = true;
            document.getElementById("tiMeterGangOutput").innerHTML = "";
            document.getElementById("generate_email_btn").style.display = "none";
        }
    }
};

function clearResult_tiMeterGang(){
    //alternativ clearResult("tiMeterGang())
    document.getElementById("tiMeterGangOutput").innerHTML = "";
    document.getElementById("tiMeterGang_error").innerHTML = "";
}

function tiMeterGang_beregner(){
 
    document.getElementById("tiMeterGang_error").style.display = "block";
    document.getElementById("tiMeterGangOutput").innerHTML = "";

    let tider = [];
    let tid

    for(i=0; i<3; i++){

        tid = parseFloat(document.getElementById('tiMeterGang_tid' + (i+1)).value);
        if (document.getElementById('tiMeterGang_input'+(i+1)).style.display == "none"){
            break;
        }
        if (!isNumeric(tid)){
            document.getElementById("tiMeterGang_error").innerHTML="Tidsforbruget i " + (i+1) + ". forsøg skal angives i sekunder";
            return
            
        }
        if (tid <= 0){
            document.getElementById("tiMeterGang_error").innerHTML= "Du har angivet et urealistisk tidsforbrug i " + (i+1) + ". forsøg." 
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
        
        document.getElementById("tiMeterGangOutput").innerHTML = "Bedste tid er " + korteste_tid + " sek., svarende til en ganghastighed på " +
        result + " m/s.";
        document.getElementById("tiMeterGang_error").style.display = "none";

        document.getElementById("generate_email_btn").style.display = "block";
        prepareEmail("tiMeterGang");
        
        //Return for testing purposes
        return result
    }
}


//Make sure that result gets deleted when input value is changed. 
// Bruges nok af alle mine tests, så den kan evt hentes ind fra utils og så kaldes med testId som argument
//eller jeg kunne lave oninput = funktion() i alle inputfelterne i HTML-filen

document.querySelectorAll('.'+ "tiMeterGang" +'.input').forEach(item => {
      item.addEventListener('input', event => {      
          clearResult_tiMeterGang();
          document.getElementById("generate_email_btn").style.display = "none";
        });
    }); 
    

