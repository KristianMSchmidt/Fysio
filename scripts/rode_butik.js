function toggle_link(){
    let description = document.getElementById('datalink').innerHTML;
    if (description.includes("http")){
        let new_descrip = "Link til indtastet data";}
    else {
        let new_descrip = generate_url();}   

        document.getElementById('datalink').innerHTML=new_descrip;
}


// Når der trykkes i nakke-siden, så tjekkes igennem, om nogle inputfelter, som er markeret invalid, 
//skal afmarkeres igen
//Denn funktion kan generaliseres til alle pages, ved at loope gennem alle sider med passende klasse(r).

//document.getElementById("nakke").addEventListener("click", function(){
 //   console.log("click i nakke");
  //  remove_invalid_mark();
//});



// Når der trykkes på et input-felt, så nulstilles de beregnede resultater. Dette er vigtigt, da
//resultaterne skal genberegnes, hvis der ændres i input
document.querySelectorAll('.nakketest_input').forEach(item => {
    console.log("tryk på et input felt i nakke");
    //click bør nok her udskiftes med keydown
    item.addEventListener('click', event => {      
        document.getElementById('nakke_result').innerHTML ="";
        document.getElementById('datalink').href = "";
        document.getElementById('nakke_result_div').style.display = "none";

    });
});





function generate_url(){
    // Generates url to datalink

    let targetForm = $('#nakkeForm');

    //let params = targetForm.attr('action') + "?" + targetForm.serialize();
    let params = targetForm.serialize(); 
    
    url = window.location.href;
    after_hash = url.split("#")[1]; 

    if (url.includes("?")){
        first_part = url.split("?")[0];
    } 
    else{
        first_part = url.split("#")[0]; 
    }
    let urlWithParams = first_part + '?' + params + '#' + after_hash;  
    return(urlWithParams);
}



//Hver gang, der clikkes med musen (touch på mobilen), så fjernes markering af invalid input markering 
//Bemærk, at denne eventlistener gælder for hele dokumentet - altså alle sider! 
//Der er MANGE slags events jqm - touch, etc. is clik the right one?
//document.addEventListener("click", function(){

    //Sådan her laver man en global click-eventlistener, som kan aflure, HVOR eventet blev tricket
        //  document.addEventListener('click', event => {
        //console.log("CLICK")
        //  console.log(event.target); });
    
        function show_invalid_input(){
            let form_input = document.getElementsByClassName("nakketest_input");
        
            for (let i = 0; i < form_input.length; i++ ) {
                form_input[i].style.border = "none";
            }
        
            for(let i = 0; i < form_input.length; i++){
                console.log("id :"+ form_input[i].id) // + ". value :" + form_input[i].value)
                if(form_input[i].value == ''){
                    //In this case field is empty or not valid number
                    //document.getElementById(form_input[i].id).style.border="2px solid #ff91ad";
                    
                    // Det her ser ikke 100% godt ud: noget af css'en fra jqm (skygger på knappen)
                    // sættes ud af spillet, når baggrundsfarven ikke er transparent, og
                    //den sorte tekst med hvis skygge ser mærkelig ud på rød baggrund 
                    //document.getElementById(form_input[i].id).style.backgroundColor="#ff91ad";
                    //document.getElementById(form_input[i].id).style.backgroundColor="#ff91ad";
        
                    //This is better! Last number is transparency. 1=not transparet. Witho some transparency,
                    //I keep tthe styling of jquery mobile (shadow etx) & and black numbers look better. 
                    document.getElementById(form_input[i].id).style.backgroundColor="rgba(255,145,173,0.3)";
        
                    //document.getElementById(form_input[i].id).style.color="#cc0033";
        
                // Hvis det kun er det første invalide felt, som skal markeres, så tilføj her "break"
                // break;  
                    
                //}   
                //else {
                //document.getElementById(form_input[i].id).style.border="none"; 
                //document.getElementById(form_input[i].id).style.backgroundColor="transparent";
                //document.getElementById(form_input[i].id).style.color="black";
        
        
        
                }         
            }
        }


//Hvis url'en indeholder et spørgsmålstegn, så er der tale om et link med data, og felterne skal fyleds ud.
//Dette skal over  



// add eventlisteners too all tests: 
//let allPageIds = ["nakke", "hals"];
//for(let i = 0; i < allPageIds.length; i++){ 
//    console.log(allPageIds[i]);
//    document.getElementById(allPageIds[i]).addEventListener("click", function(){
//        console.log("click i" +allPageIds[i]);
//        remove_invalid_mark(allPageIds[i]);
//    });
//}

/*
document.addEventListener("keyup", event => {    
        let activePageId = $.mobile.activePage.attr( "id" );
        console.log("Click on page: ", activePageId);
    remove_invalid_mark(activePageId);
});

function remove_invalid_mark(){
    let form_input = document.getElementsByClassName("nakketest_input");

    for (let i = 0; i < form_input.length; i++ ) {
        form_input[i].style.border = "none";
    }

    for(let i = 0; i < form_input.length; i++){
        if(!form_input[i].value == ''){
            document.getElementById(form_input[i].id).style.backgroundColor="transparent";
            //document.getElementById(form_input[i].id).style.border="none";
            //document.getElementById(form_input[i].id).style.color="none";
        }         
    }
    
}



// 
//document.addEventListener("input", myScript);
*/
