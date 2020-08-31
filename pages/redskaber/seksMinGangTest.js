// Jeg skal finde reference på formlerne og tjkke dem. 
// Jeg skal undersøge, hvilke inputværdier, som giver mening ift rimelig forventet distance
// Jeg skal implementere flere tests
function clearResult_seksMinGangTest(){
    document.getElementById("seksMinGangTestOutput").innerHTML = "";
    document.getElementById("seksMinGangTest_forventet").innerHTML = "";      
    document.getElementById("seksMinGangTest_error").innerHTML = "";
    document.getElementById("seksMinGangTest_generate_email_btn").style.display="none";

}

function seksMinGangTest_beregner(){
    document.getElementById("seksMinGangTest_error").style.display = "block";
    document.getElementById("seksMinGangTest_forventet").innerHTML = "";
    document.getElementById("seksMinGangTestOutput").innerHTML = "";

    let gender = document.querySelector('input[name="seksMinGangTest_gender"]:checked').value;

    // Handle age input
    let age = parseInt(document.getElementById('seksMinGangTest_alder').value);

    if (!isNumeric(age)){
        document.getElementById("seksMinGangTest_error").innerHTML ="Indtast patientens alder i hele år";
        //document.getElementById("seksMinGangTest_alder").value="";
        //document.getElementById("seksMinGangTest_alder").style.backgroundColor="rgba(255,145,173,0.3)";
        //document.getElementById("seksMinGangTest_alder").focus();
        return;
    }
    else {

        if (age < 0){
            document.getElementById("seksMinGangTest_error").innerHTML = "Patientens alder kan ikke være negativ";
            return
        }
     
        else if (age < 3){
            document.getElementById("seksMinGangTest_error").innerHTML = "Er patienten virkelig kun " + age + " år gammel?";
            //document.getElementById("seksMinGangTest_alder").style.backgroundColor="rgba(255,145,173,0.3)";
            //document.getElementById("seksMinGangTest_alder").value ="";;

            return;
        }
        else if (age > 130){
            document.getElementById("seksMinGangTest_error").innerHTML = "Er patienten virkelig " + age + " år gammel?";
            //document.getElementById("seksMinGangTest_alder").style.backgroundColor="rgba(255,145,173,0.3)";
            //document.getElementById("seksMinGangTest_alder").value ="";

            //$("#age").focus();
            return;
        }
        //document.getElementById("seksMinGangTest_alder").style.backgroundColor="transparent";
    }

    // Handle weight input
    let weight = parseInt(document.getElementById('seksMinGangTest_vægt').value);
    if (!isNumeric(weight)){
        document.getElementById("seksMinGangTest_error").innerHTML = "Indtast patientens vægt i hele kg";
        //document.getElementById("seksMinGangTest_vægt").value="";
        //document.getElementById("seksMinGangTest_vægt").style.backgroundColor="rgba(255,145,173,0.3)";
        document.getElementById("seksMinGangTest_vægt").focus();
        return
    }
    else{
        if (weight < 0){
            document.getElementById("seksMinGangTest_error").innerHTML = "Patientens vægt kan ikke være negativ";
            return
        }

        else if (weight < 20){
            //document.getElementById("seksMinGangTest_vægt").style.backgroundColor="rgba(255,145,173,0.3)";
            document.getElementById("seksMinGangTest_error").innerHTML = "Vejer patienten virkelig kun " + weight + " kg?";
            //document.getElementById("seksMinGangTest_vægt").value="";

            //$("#weight").focus();
            return;
        }
        else if (weight > 350){
            //document.getElementById("seksMinGangTest_vægt").style.backgroundColor="rgba(255,145,173,0.3)";
            document.getElementById("seksMinGangTest_error").innerHTML = "Vejer patienten virkelig " + weight + " kg?";
            //document.getElementById("seksMinGangTest_vægt").value="";

            //$("#weight").focus();
            return;
        }
        //document.getElementById("seksMinGangTest_vægt").style.backgroundColor="transparent";
    }
    // Handle height input
    let height = parseInt(document.getElementById('seksMinGangTest_højde').value);
    if (!isNumeric(height)){
        document.getElementById("seksMinGangTest_error").innerHTML = "Indtast patientens højde i hele cm";
        //document.getElementById("seksMinGangTest_højde").value="";
        //document.getElementById("seksMinGangTest_højde").style.backgroundColor="rgba(255,145,173,0.3)";
        //document.getElementById("seksMinGangTest_højde").focus();
        return
    }
    else{

        if (height < 0){
            document.getElementById("seksMinGangTest_error").innerHTML = "Patientens højde kan ikke være negativ";
            return
        }
        else if (height < 100){
            document.getElementById("seksMinGangTest_error").innerHTML = "Er patienten virkelig kun " + height + " cm høj?";
            //document.getElementById("seksMinGangTest_højde").style.backgroundColor="rgba(255,145,173,0.3)";
            //document.getElementById("seksMinGangTest_højde").value="";

            //$("#weight").focus();
            return;
        }
        else if (height > 270){
            document.getElementById("seksMinGangTest_error").innerHTML = "Er patienten virkelig " + height + " cm høj?";
            //document.getElementById("seksMinGangTest_højde").style.backgroundColor="rgba(255,145,173,0.3)";
           // document.getElementById("seksMinGangTest_højde").value="";

            //$("#weight").focus();
            return;
        }
        //document.getElementById("seksMinGangTest_højde").style.backgroundColor="transparent";

    }

    let expected;
    //check disse formler igen.... forventet bliver fx negativ nogle gange... må den ikke. 
    // for hvilke værdier af alder, vægt også giver formlerne overhovedet mening??
    if (gender == "mand"){
        expected = Math.max(0, Math.round((7.57 * height) - (5.02 * age) - (1.76 * weight) - 309));
    }
    else{ 
        //kvinder
        //hvorfor round her?? 
        expected = Math.round((2.11 * height) - (2.29 * weight) - (5.78 * age) + 667);
        expected = Math.max(0, expected);

    }
    document.getElementById("seksMinGangTest_forventet").innerHTML = "Forventet gangdistance for raske:   " + expected + " m.";



    let distance = parseInt(document.getElementById("seksMinGangTest_distance").value);

    if(!isNumeric(distance)){
        document.getElementById("seksMinGangTest_error").innerHTML = "Indtast gangdistance i hele antal meter";
        return
    }

    else if (distance<0) {
        document.getElementById("seksMinGangTest_error").innerHTML = "Gangdistancen kan ikke være negativ";
        return
    }

    let expectedpct
    if (expected == 0){
        expectedpct  = 0
    }
    else{
        expectedpct =  Math.round(distance / expected * 100)
    } 
    document.getElementById("seksMinGangTestOutput").innerHTML = "Procent af forventet gangdistance:  " + expectedpct + "%.";
    document.getElementById("seksMinGangTest_error").style.display = "none";
    document.getElementById("seksMinGangTest_generate_email_btn").style.display = "block";
    prepareEmail("seksMinGangTest");

}

// Make sure that result gets deleted when input value is changed. 
document.querySelectorAll('.'+ "seksMinGangTest" +'.input').forEach(item => {
      item.addEventListener('input', event => {      
          clearResult_seksMinGangTest();
          document.getElementById("seksMinGangTestOutput").innerHTML = ""; 
          document.getElementById("seksMinGangTest_generate_email_btn").style.display = "none";
        });
    });

