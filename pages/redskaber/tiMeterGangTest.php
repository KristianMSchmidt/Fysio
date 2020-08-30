<!-- skal der være mulighed for at indtaste antal skridt også??-->
<!-- detaljer: lige nu fjernes ikke-udfyldte felter ikke når side auto-udfyldes via link -->


<!-- 10-meter gangtest -->
<div data-role="page" id="tiMeterGangTest" data-theme ="a">

    <!-- header -->
    <?php include "commons/header_with_back_button.php" ?>

    <!-- content -->
    <div role="main" class="ui-content">

        <h3>10-meter gangtest</h3>
        <p>10-meter gangstest maaler ganghastighed på tvrs af patientkategorier.</p>

        <a href="#tiMeterGangTestAbout" data-role="button" data-icon="arrow-r" data-iconpos="right">Læs om testen</a>
      
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
                <input type="radio" id ="tiMeterGangTest-radio-choice-1" class="tiMeterGangTest input" name="tiMeterGangTest_type" value ="normal" checked="checked">
                <label for="tiMeterGangTest-radio-choice-2">Speed ("gå så hurtigt du kan")</label>
                <input type="radio" id ="tiMeterGangTest-radio-choice-2" class="tiMeterGangTest input" name="tiMeterGangTest_type" value = "speed">
            </fieldset> -->
            <br>
            <div id = "tiMeterGangTest_input1" style="display:block">
                <label for="tiMeterGangTest_tid1">Tidsforbrug i 1. forsøg (sek.):</label>
                <input id="tiMeterGangTest_tid1" class="tiMeterGangTest input" 
                   placeholder = "Angiv tidsforbrug i sek." type = "number" 
                   name= "tiMeterGangTest_tid1"/
            </div>

            <div id = "tiMeterGangTest_input2" style="display:block">
                <label for="tiMeterGangTest_tid2">Tidsforbrug i 2. forsøg (sek.):</label>
                <input id="tiMeterGangTest_tid2" class="tiMeterGangTest input" placeholder = "Angiv tidsforbrug i sek." type = "number" name= "tiMeterGangTest_tid2" value=""/>
            </div>
            
            <div id = "tiMeterGangTest_input3" style="display:block">
                <label for="tiMeterGangTest_tid3">Tidsforbrug i 3. forsøg (sek.):</label>
                <input id="tiMeterGangTest_tid3" class="tiMeterGangTest input" placeholder = "Angiv tidsforbrug i sek." type = "number" name= "tiMeterGangTest_tid3" value=""/>
            </div>

            <div style="text-align:center">
                <button id ="add_button" type = "button" data-inline="true" onclick = "tiMeterGangTest_add()" 
                        style="text-align:center"> +  </button>    
                <button id = "remove_button" type = "button" data-inline="true" onclick = "tiMeterGangTest_remove()" 
                        style="text-align:center"> - </button>    
            </div> 

            <button id="tiMeterGangTest_beregn_knap" type ="button" onclick = "tiMeterGangTest_beregner()">Beregn</button><br>

        </form>

        <!-- dette bruges måske af alle mine test-sider, så kode-stumpen kan evt includes fra common -->
        <!-- fejlmeddelelse -->
        <p id="tiMeterGangTest_error" style="text-align:center; color:red"></p> 
        <!-- Resultat-->
        <p id="tiMeterGangTestOutput"></p>

        <!-- output og email_btn area -->
        <?php include 'commons/generate_email_btn_div.php' ?>

    </div> <!-- end of content -->
</div> <!-- end of page -->

<script src="pages\redskaber\tiMeterGangTest.js"></script>  