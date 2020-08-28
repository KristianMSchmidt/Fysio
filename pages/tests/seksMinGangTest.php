<!-- 
Find reference på formlerne
Tilføj eventlisternes på alle input feltere (også køn), som ved ændring af værdi
sætter resultatfelterne til "".
-->


<!-- 6-minuttersgangtest -->
<div data-role="page" id="seksMinGangTest" data-theme ="a">

    <!-- header -->
    <?php include 'header_with_back_button.php' ?>

    <!-- content -->
    <div role="main" class="ui-content">

        <h3>6-minuttersgangtest</h3>
        <p>6-minuttersgangtest, 6MWT, vurderer funktionstilstand hos svage og &#230;ldre med nedsat funktionsevne eller hos personer med kunstig hofte eller kn&#230;.</p>
               
        <a href=#seksMinGangTest_about data-role="button" data-icon="arrow-r" data-iconpos="right">Læs om testen</a>

        <form method="post" 
              name="seksmMinGangTestForm" 
              id="seksMinGangTestForm" 
              action="" 
              data-ajax="false">

            <fieldset data-role="controlgroup" data-mini="true">
                <legend>Køn:</legend>
                <label for="seksMinGangTest-radio-choice-1">Mand</label>
                <input type="radio" class="seksMinGangTest input required" onchange = "clearResult_seksMinGangTest()" name="seksMinGangTest_gender" id="seksMinGangTest-radio-choice-1" value="mand" checked="checked">
                <label for="seksMinGangTest-radio-choice-2">Kvinde</label>
                <input type="radio" class="seksMinGangTest input required" onchange = "clearResult_seksMinGangTest()" name="seksMinGangTest_gender" id="seksMinGangTest-radio-choice-2" value="kvinde">
            </fieldset>
        
            <label for="seksMinGangTest_alder">Alder:</label>
            <input id="seksMinGangTest_alder" class="seksMinGangTest input required" placeholder = "Angiv alder i hele år" type = "number" name="seksMinGangTest_alder" value=""/>
                
      
            <label for="seksMinGangTest_vægt">Vægt (kg):</label>
            <input id="seksMinGangTest_vægt" class="seksMinGangTest input required" placeholder = "Angiv vægt i hele kg" type = "number" name="seksMinGangTest_vægt" value=""/>
        
            <label for="seksMinGangTest_vægt">Højde (cm):</label>
            <input id="seksMinGangTest_højde" class="seksMinGangTest input required" placeholder = "Angiv højde i hele cm" type = "number" name="seksMinGangTest_højde" value=""/>
        

            <label for="seksMinGangTest_distance">Gangdistance (meter):</label>
            <input id="seksMinGangTest_distance" class="seksMinGangTest input required" placeholder = "Hvor langt gik patienten?" type = "number" name=seksMinGangTest_distance value=""/>
            
            <!-- default type of button is "submit"-->
            <button type ="button" onclick = "seksMinGangTest_beregner()">Beregn</button><br>
        </form>

        
        <!-- fejlmeddelelse -->
        <p id="seksMinGangTest_error" style="text-align:center; color:red"></p> 

        <!-- Resultat-->
        <p id="seksMinGangTest_forventet"></p>
        <p id="seksMinGangTestOutput"></p>

        <!-- dette bruges måske af alle mine test-sider, så data-stumpen kan evt includes fra common -->
        <div id = "seksMinGangTest_email_btn" style="text-align:center; display: none">
            <a href=#email data-role="button" data-icon="arrow-r"
                data-iconpos="right">Send data</a>
        </div>

    </div> <!-- end of content -->
</div> <!-- end of page -->

<script>

function clearResult_seksMinGangTest(){
    document.getElementById("seksMinGangTestOutput").innerHTML = "";
    document.getElementById("seksMinGangTest_forventet").innerHTML = "";      
    document.getElementById("seksMinGangTest_error").innerHTML = "";
}

function seksMinGangTest_beregner(){
    document.getElementById("seksMinGangTest_error").style.display = "block";
    document.getElementById("seksMinGangTest_forventet").innerHTML = "";
    document.getElementById("seksMinGangTestOutput").innerHTML = "";

    let gender = document.querySelector('input[name="seksMinGangTest_gender"]:checked').value;
    console.log(gender)

    // Handle age input
    let age = parseInt(document.getElementById('seksMinGangTest_alder').value);
    console.log(age);
    if (!isNumeric(age)){
        document.getElementById("seksMinGangTest_error").innerHTML ="Indtast patientens alder i hele antal år";
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
        console.log("exp mand", expected)
    }
    else{ 
        //kvinder
        //hvorfor round her?? 
        expected = Math.round((2.11 * height) - (2.29 * weight) - (5.78 * age) + 667);
        expected = Math.max(0, expected);
        console.log("exp kvinde", expected)

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
    
    document.getElementById("seksMinGangTest_email_btn").style.display = "block";
    prepareEmail("seksMinGangTest");
}

// Make sure that result gets deleted when input value is changed. 
document.querySelectorAll('.'+ "seksMinGangTest" +'.input').forEach(item => {
      item.addEventListener('input', event => {      
          clearResult_seksMinGangTest();
        });
    });

</script>