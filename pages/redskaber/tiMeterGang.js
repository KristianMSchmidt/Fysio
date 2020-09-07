function tiMeterGangclearAllInputError(){
    let allErrorMgs = document.getElementById("tiMeterGang").getElementsByClassName("errorMgs");
    for(let i = 0; i<allErrorMgs.length; i++){
        allErrorMgs[i].innerHTML = "";
        allErrorMgs[i].style.display = "none";
    }
}

function tiMeterGangClearResultAndGenerateEmailBtn(){
    document.getElementById("tiMeterGangOutput").innerHTML = "";
    document.getElementById("tiMeterGang_generate_email_btn").style.display="none";
}

function tiMeterGang_add(){
    let has_added = false;
    let current_element;
    for(i=2; i<4; i++){
        current_element = document.getElementById("tiMeterGang_input" + i);
        if ((current_element.style.display == "none") && (has_added == false)){
            current_element.style.display = "block";
            has_added = true
            tiMeterGangClearResultAndGenerateEmailBtn();
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
            tiMeterGangClearResultAndGenerateEmailBtn();
        }
    }
};


function tiMeterGang_beregner(){
   tiMeterGangClearResultAndGenerateEmailBtn();
   tiMeterGangclearAllInputError();

    let tider = [];
    let tid

    for(i=0; i<3; i++){

        tid = parseFloat(document.getElementById('tiMeterGang_tid' + (i+1)).value);
        if (document.getElementById('tiMeterGang_input'+(i+1)).style.display == "none"){
            break;
        }
        if (!isNumeric(tid)){
            document.getElementById(`tiMeterGang_tid${i+1}_error`).innerHTML="Tidsforbruget skal angives i sekunder";
            document.getElementById(`tiMeterGang_tid${i+1}_error`).style.display = "block";
            return
            
        }
        if ( 0 < tid && tid <= 1){
            document.getElementById(`tiMeterGang_tid${i+1}_error`).innerHTML= `Har patienten virkelig gået 10 meter på ${tid} sek.?` 
            document.getElementById(`tiMeterGang_tid${i+1}_error`).style.display = "block";
            return

        }
        if (tid <= 0){
            document.getElementById(`tiMeterGang_tid${i+1}_error`).innerHTML= `Tidsforbruget kan ikke være ${tid} sek.` 
            document.getElementById(`tiMeterGang_tid${i+1}_error`).style.display = "block";
            return;
        }
        
        tider.push(tid)
    }
    if (tider.length == 0){
        return
    }
    else{
        let korteste_tid = Math.min(...tider);
        
        let result = roundToTwo(10/korteste_tid);
        
        document.getElementById("tiMeterGangOutput").innerHTML = `Bedste tid er ${roundToTwo(korteste_tid)} sek., svarende til en ganghastighed på ${result} m/s.`;
        showElement('tiMeterGangOutput');
        document.getElementById("tiMeterGang_generate_email_btn").style.display = "block";
        prepareEmail("tiMeterGang");
        
        //Return for testing purposes
        return result
    }
}

//bruges muligvis af næsten alle mine testredskaber, så kan måske definres som funktion i utils. 
document.querySelectorAll('.'+ "tiMeterGang" +'.input').forEach(item => {
    item.addEventListener('input', event => {   
        document.getElementById(`${item.id}_error`).innerHTML = "";
        document.getElementById(`${item.id}_error`).style.display = "none";
        document.getElementById("tiMeterGangOutput").innerHTML = "";
        document.getElementById("tiMeterGang_generate_email_btn").style.display="none";
    });
}); 