<!--required kan vist slettes fra class-navn -->
<!-- skal der være mulighed for at indtaste antal skridt også??-->
<!-- detaljer: lige nu fjernes ikke-udfyldte felter ikke når side auto-udfyldes via link -->

<!-- 10-meter gangtest -->
<div data-role="page" id="toMUGT" data-theme ="a">

    <!-- header -->
    <?php include 'header_with_back_button.php' ?>

    <!-- content -->
    <div role="main" class="ui-content">

        <h3>2,45m up-and-go-test</h3>
        <p>Testen er udviklet til at bestemme basismobiliteten hos ældre.</p>
        
        <a href=#toMUGT_about data-role="button" data-icon="arrow-r" data-iconpos="right">Læs om testen</a>
      
        <form method="post" 
            name="toMUGTForm"
            id="toMUGTForm""
            action = ""
            data-ajax="false"> <!-- I don't use ajax, because form is not submittet-->
            <!-- https://demos.jquerymobile.com/1.2.1/docs/forms/forms-sample.html -->

            <br>
            <div id = "toMUGT_input1" style="display:block">
                <label for="toMUGT_tid1">Tidsforbrug i 1. forsøg (sek.):</label>
                <input id="toMUGT_tid1" class="toMUGT input required" 
                   placeholder = "Angiv tidsforbrug i sek." type = "number" 
                   name= "toMUGT_tid1"/>
            </div>


            <div id = "toMUGT_input2" style="display:block">
                <label for="toMUGT_tid2">Tidsforbrug i 2. forsøg (sek.):</label>
                <input id="toMUGT_tid2" class="toMUGT input required" placeholder = "Angiv tidsforbrug i sek." type = "number" name= "toMUGT_tid2" value=""/>
            </div>
            
            <div id = "toMUGT_input3" style="display:block">
                <label for="toMUGT_tid3">Tidsforbrug i 3. forsøg (sek.):</label>
                <input id="toMUGT_tid3" class="toMUGT input required" placeholder = "Angiv tidsforbrug i sek." type = "number" name= "toMUGT_tid3" value=""/>
            </div>

            <div style="text-align:center">
                <button type = "button" data-inline="true" onclick = "toMUGT_add()" style="text-align:center"> +  </button>    
                <button type = "button" data-inline="true" onclick = "toMUGT_remove()" style="text-align:center"> - </button>    
            </div> 

            <button type ="button" onclick = "toMUGT_beregner()">Beregn</button><br>

        </form>


        <!-- dette bruges måske af alle mine test-sider, så kode-stumpen kan evt includes fra common -->
        <!-- fejlmeddelelse -->
        <p id="toMUGT_error" style="text-align:center; color:red"></p> 
        <!-- Resultat-->
        <p id="toMUGTOutput"></p>
        <!-- email button -->
        <div id = "toMUGT_email_btn" style="text-align:center; display: none">
            <a href=#email data-role="button" data-icon="arrow-r" data-iconpos="right">Send data</a>
        </div>

    </div> <!-- end of content -->
</div> <!-- end of page -->


<script>

function clearResult_toMUGT(){
    //alternativ clearResult("toMUGT())
    document.getElementById("toMUGTOutput").innerHTML = "";
    document.getElementById("toMUGT_error").innerHTML = "";
}


function beregner_toMUGT(){
    document.getElementById("toMUGT_error").style.display = "block";
    document.getElementById("toMUGTOutput").innerHTML = "";

    let tider = [];
    let tid

    for(i=0; i<3; i++){
        tid = parseFloat(document.getElementById('toMUGT_tid' + (i+1)).value);
        if (document.getElementById('toMUGT_input'+(i+1)).style.display == "none"){
            break;
        }
        if (!isNumeric(tid)){
            document.getElementById("toMUGT_error").innerHTML=" Tidsforbruget i " + (i+1) + ". forsøg skal angives i sekunder";
            return
            
        }
        if (tid <= 0){
            document.getElementById("toMUGT_error").innerHTML= "Du har angivet et urealistisk tidsforbrug i " + (i+1) + ". forsøg." 
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
        
        document.getElementById("toMUGTOutput").innerHTML = "Bedste tid er " + korteste_tid + " sek., svarende til en ganghastighed på " +
        result + " m/s.";
        document.getElementById("toMUGT_error").style.display = "none";

        document.getElementById("toMUGT_email_btn").style.display = "block";
        prepareEmail("toMUGT");
    }
  
}



//Make sure that result gets deleted when input value is changed. 
// Bruges nok af alle mine tests, så den kan evt hentes ind fra utils og så kaldes med testId som argument
document.querySelectorAll('.'+ "toMUGT" +'.input').forEach(item => {
      item.addEventListener('input', event => {      
          clearResult_toMUGT();
        });
    }); 
    
</script> 