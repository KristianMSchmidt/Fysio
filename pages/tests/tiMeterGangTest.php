<!--required kan vist slettes fra class-navn -->
<!-- skal der være mulighed for at indtaste antal skridt også??-->
<!-- detaljer: lige nu fjernes ikke-udfyldte felter ikke når side auto-udfyldes via link -->

<!-- 10-meter gangtest -->
<div data-role="page" id="tiMeterGangTest" data-theme ="a">

    <!-- header -->
    <?php include 'header_with_back_button.php' ?>

    <!-- content -->
    <div role="main" class="ui-content">

        <h3>10-meter gangtest</h3>
        <p>10-meter gangstest måler ganghastighed på tværs af patientkategorier.</p>
        
        <a href=#tiMeterGangTest_about data-role="button" data-icon="arrow-r" data-iconpos="right">Læs om testen</a>
      
        <form method="post" 
            name="tiMeterGangTestForm"
            id="tiMeterGangTestForm""
            action = ""
            data-ajax="false"> <!-- I don't use ajax, because form is not submittet-->
            <!-- https://demos.jquerymobile.com/1.2.1/docs/forms/forms-sample.html -->

            <br>
            <!--
            <fieldset data-role="controlgroup" data-mini="true">
                <legend>Type:</legend> 
                <label for="tiMeterGangTest-radio-choice-1">Normal ("gå i dit normale gangtempo")</label>
                <input type="radio" id ="tiMeterGangTest-radio-choice-1" class="tiMeterGangTest input required" name="tiMeterGangTest_type" value ="normal" checked="checked">
                <label for="tiMeterGangTest-radio-choice-2">Speed ("gå så hurtigt du kan")</label>
                <input type="radio" id ="tiMeterGangTest-radio-choice-2" class="tiMeterGangTest input required" name="tiMeterGangTest_type" value = "speed">
            </fieldset> -->
            <br>
            <div id = "tiMeterGangTest_input1" style="display:block">
                <label for="tiMeterGangTest_tid1">Tidsforbrug i 1. forsøg (sek.):</label>
                <input id="tiMeterGangTest_tid1" class="tiMeterGangTest input required" 
                   placeholder = "Angiv tidsforbrug i sek." type = "number" 
                   name= "tiMeterGangTest_tid1"/>
            </div>


            <div id = "tiMeterGangTest_input2" style="display:block">
                <label for="tiMeterGangTest_tid2">Tidsforbrug i 2. forsøg (sek.):</label>
                <input id="tiMeterGangTest_tid2" class="tiMeterGangTest input required" placeholder = "Angiv tidsforbrug i sek." type = "number" name= "tiMeterGangTest_tid2" value=""/>
            </div>
            
            <div id = "tiMeterGangTest_input3" style="display:block">
                <label for="tiMeterGangTest_tid3">Tidsforbrug i 3. forsøg (sek.):</label>
                <input id="tiMeterGangTest_tid3" class="tiMeterGangTest input required" placeholder = "Angiv tidsforbrug i sek." type = "number" name= "tiMeterGangTest_tid3" value=""/>
            </div>

            <div style="text-align:center">
                <button type = "button" data-inline="true" onclick = "tiMeterGangTest_add()" style="text-align:center"> +  </button>    
                <button type = "button" data-inline="true" onclick = "tiMeterGangTest_remove()" style="text-align:center"> - </button>    
            </div> 

            <button type ="button" onclick = "tiMeterGangTest_beregner()">Beregn</button><br>

        </form>


        <!-- dette bruges måske af alle mine test-sider, så kode-stumpen kan evt includes fra common -->
        <!-- fejlmeddelelse -->
        <p id="tiMeterGangTest_error" style="text-align:center; color:red"></p> 
        <!-- Resultat-->
        <p id="tiMeterGangTestOutput"></p>
        <!-- email button -->
        <div id = "tiMeterGangTest_email_btn" style="text-align:center; display: none">
            <a href=#email data-role="button" data-icon="arrow-r" data-iconpos="right">Send data</a>
        </div>

    </div> <!-- end of content -->
</div> <!-- end of page -->


<script src = "scripts/utils.js"></script>

<script>
function tiMeterGangTest_add(){
    let has_added = false;
    let current_element;
    for(i=2; i<4; i++){
        current_element = document.getElementById("tiMeterGangTest_input" + i);
        if ((current_element.style.display == "none") && (has_added == false)){
            current_element.style.display = "block";
            has_added = true
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
            document.getElementById("tiMeterGangTest_error").innerHTML=" Tidsforbruget i " + (i+1) + ". forsøg skal angives i sekunder";
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

        document.getElementById("tiMeterGangTest_email_btn").style.display = "block";
        prepareEmail("tiMeterGangTest");
    }
  
}


//Make sure that result gets deleted when input value is changed. 
// Bruges nok af alle mine tests, så den kan evt hentes ind fra utils og så kaldes med testId som argument
document.querySelectorAll('.'+ "tiMeterGangTest" +'.input').forEach(item => {
      item.addEventListener('input', event => {      
          clearResult_tiMeterGangTest();
        });
    }); 
    
</script>