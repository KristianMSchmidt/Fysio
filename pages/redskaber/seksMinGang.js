// Jeg skal finde reference på formlerne og tjkke dem. 
// Jeg skal undersøge, hvilke inputværdier, som giver mening ift rimelig forventet distance
// Jeg skal implementere flere tests

function clearResult_seksMinGang(){

    let allErrorMgs = document.getElementById("seksMinGang").getElementsByClassName("errorMgs");
    for(let i = 0; i<allErrorMgs.length; i++){
        allErrorMgs[i].innerHTML = "";
        allErrorMgs[i].style.display = "none";
    }
    document.getElementById("seksMinGangOutput").innerHTML = "";
    document.getElementById("seksMinGang_forventet").innerHTML = "";  
    document.getElementById("seksMinGang_generate_email_btn").style.display="none";
}

function seksMinGang_beregner(){
    clearResult_seksMinGang();

    let gender = document.querySelector('input[name="seksMinGang_gender"]:checked').value;

    // Handle age input
    let age = parseInt(document.getElementById('seksMinGang_alder').value);

    if (!isNumeric(age)){
        document.getElementById("seksMinGang_alder_error").innerHTML="Indtast patientens alder i hele år";
        document.getElementById("seksMinGang_alder_error").style.display = "block";
        return
    }
    else {
        if (age < 0){
            document.getElementById("seksMinGang_alder_error").innerHTML="Patientens alder kan ikke være negativ";
            document.getElementById("seksMinGang_alder_error").style.display = "block"; 
            return
        }
        else if (age < 3){
            document.getElementById("seksMinGang_alder_error").innerHTML=`Er patienten virkelig kun ${age} år gammel?`;
            document.getElementById("seksMinGang_alder_error").style.display = "block";
            return;
        }
        else if (age > 130){
            document.getElementById("seksMinGang_alder_error").innerHTML=`Er patienten virkelig ${age} år gammel?`;
            document.getElementById("seksMinGang_alder_error").style.display = "block";
            return

        }
    }

    // Handle weight input
    let weight = parseInt(document.getElementById('seksMinGang_vægt').value);
    if (!isNumeric(weight)){
        document.getElementById("seksMinGang_vægt_error").innerHTML = "Indtast patientens vægt i hele kg";
        document.getElementById("seksMinGang_vægt_error").style.display = "block";
        return
    }
    else{
        if (weight < 0){
            document.getElementById("seksMinGang_vægt_error").innerHTML = "Patientens vægt kan ikke være negativ";
            document.getElementById("seksMinGang_vægt_error").style.display = "block";
            return
        }
        else if (weight < 20){
            document.getElementById("seksMinGang_vægt_error").innerHTML = "Vejer patienten virkelig kun " + weight + " kg?";
            document.getElementById("seksMinGang_vægt_error").style.display = "block";
            return;
        }
        else if (weight > 350){
            document.getElementById("seksMinGang_vægt_error").innerHTML = "Vejer patienten virkelig " + weight + " kg?";
            document.getElementById("seksMinGang_vægt_error").style.display = "block";
            return;
        }
    }
    // Handle height input
    let height = parseInt(document.getElementById('seksMinGang_højde').value);
    if (!isNumeric(height)){
        document.getElementById("seksMinGang_højde_error").innerHTML = "Indtast patientens højde i hele cm";
        document.getElementById("seksMinGang_højde_error").style.display = "block";
        return
    }
    else{
        if (height < 0){
            document.getElementById("seksMinGang_højde_error").innerHTML = "Patientens højde kan ikke være negativ";
            document.getElementById("seksMinGang_højde_error").style.display = "block";
            return
        }
        else if (height < 100){
            document.getElementById("seksMinGang_højde_error").innerHTML = "Er patienten virkelig kun " + height + " cm høj?";
            document.getElementById("seksMinGang_højde_error").style.display = "block";
            return;
        }
        else if (height > 270){
            document.getElementById("seksMinGang_højde_error").innerHTML = "Er patienten virkelig " + height + " cm høj?";
            document.getElementById("seksMinGang_højde_error").style.display = "block";
            return;
        }
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
    if (gender == "mand"){
        document.getElementById("seksMinGang_forventet").innerHTML = `Forventet gangdistance for raske mænd: ${expected} m.`;
    }
    else{
        //patienten er en kvinde       
        document.getElementById("seksMinGang_forventet").innerHTML = `Forventet gangdistance for raske kvinder: ${expected} m.`;
    } 
    

    let distance = parseInt(document.getElementById("seksMinGang_distance").value);

    if(!isNumeric(distance)){
        document.getElementById("seksMinGang_distance_error").innerHTML = "Indtast gangdistance i hele antal meter";
        document.getElementById("seksMinGang_distance_error").style.display = "block";
        return
    }

    else if (distance<0) {
        document.getElementById("seksMinGang_distance_error").innerHTML = "Gangdistancen kan ikke være negativ";
        document.getElementById("seksMinGang_distance_error").style.display = "block";
        return
    }

    let expectedpct
    if (expected == 0){
        expectedpct  = 0
    }
    else{
        expectedpct =  Math.round(distance / expected * 100)
    } 
    document.getElementById("seksMinGangOutput").innerHTML = `Patienten har gået ${expectedpct}% af den forventede distance.`;
    showElement('seksMinGangOutput');
    document.getElementById("seksMinGang_generate_email_btn").style.display = "block";
    prepareEmail("seksMinGang");
}

//bruges muligvis af næsten alle mine testredskaber, så kan måske definres som funktion i utils. 
document.querySelectorAll('.'+ "seksMinGang" +'.input').forEach(item => {
    item.addEventListener('input', event => {   
        document.getElementById(`${item.id}_error`).innerHTML = "";
        document.getElementById(`${item.id}_error`).style.display = "none";
        document.getElementById("seksMinGang_forventet").innerHTML = "";  
        document.getElementById("seksMinGangOutput").innerHTML = "";
        document.getElementById("seksMinGang_generate_email_btn").style.display="none";
    });
}); 

