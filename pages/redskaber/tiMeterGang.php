<!-- skal der være mulighed for at indtaste antal skridt også??-->
<!-- detaljer: lige nu fjernes ikke-udfyldte felter ikke når side auto-udfyldes via link -->

<!-- 10-meter gangtest -->
<div data-role="page" id="tiMeterGang" data-theme ="a">
    
    <!-- header -->
    <?php include "commons/header_with_back_button.php" ?>

    <!-- content -->
    <div role="main" class="ui-content">

        <h3>10-meter gangtest</h3>
        <p>10-meter gangstest måler ganghastighed på tværs af patientkategorier.</p>

        <a href="#tiMeterGangAbout" data-role="button" data-icon="arrow-r" data-iconpos="right">Læs om testen</a>
    
        <form method="post" 
            name="tiMeterGangForm"
            id="tiMeterGangForm""
            action = ""
            data-ajax="false"> <!-- I don't use ajax, because form is not submittet-->
            <!-- https://demos.jquerymobile.com/1.2.1/docs/forms/forms-sample.html -->

            <br>
            <!--
            <fieldset data-role="controlgroup" data-mini="true">
                <legend>Type:</legend> 
                <label for="tiMeterGang-radio-choice-1">Normal ("gå i dit normale gangtempo")</label>
                <input type="radio" id ="tiMeterGang-radio-choice-1" class="tiMeterGang input" name="tiMeterGang_type" value ="normal" checked="checked">
                <label for="tiMeterGang-radio-choice-2">Speed ("gå så hurtigt du kan")</label>
                <input type="radio" id ="tiMeterGang-radio-choice-2" class="tiMeterGang input" name="tiMeterGang_type" value = "speed">
            </fieldset> -->
            <br>
            <div id = "tiMeterGang_input1" style="display:block">
                <label for="tiMeterGang_tid1">Tidsforbrug i 1. forsøg (sek.):</label>
                <input id="tiMeterGang_tid1" class="tiMeterGang input" 
                   placeholder = "Angiv tidsforbrug i sek." type = "number" 
                   name= "tiMeterGang_tid1"/>
            </div>
            
            <div id = "tiMeterGang_input2" style="display:block">
                <label for="tiMeterGang_tid2">Tidsforbrug i 2. forsøg (sek.):</label>
                <input id="tiMeterGang_tid2" class="tiMeterGang input" 
                placeholder = "Angiv tidsforbrug i sek." type = "number" 
                name= "tiMeterGang_tid2" value=""/>
            </div>
            
            <div id = "tiMeterGang_input3" style="display:block">
                <label for="tiMeterGang_tid3">Tidsforbrug i 3. forsøg (sek.):</label>
                <input id="tiMeterGang_tid3" class="tiMeterGang input" 
                       placeholder = "Angiv tidsforbrug i sek." 
                       type = "number" name= "tiMeterGang_tid3" value=""/>
            </div>

            <div style="text-align:center">
                <button id ="add_button" type = "button" data-inline="true" onclick = "tiMeterGang_add()" 
                        style="text-align:center"> +  </button>    
                <button id = "remove_button" type = "button" data-inline="true" onclick = "tiMeterGang_remove()" 
                        style="text-align:center"> - </button>    
            </div> 

            <button id="tiMeterGang_beregn_knap" type ="button" onclick = "tiMeterGang_beregner()">Beregn</button><br>

        </form>

        <!-- dette bruges måske af alle mine test-sider, så kode-stumpen kan evt includes fra common -->
        <!-- fejlmeddelelse -->
        <p id="tiMeterGang_error" style="text-align:center; color:red"></p> 
        <!-- Resultat-->
        <p id="tiMeterGangOutput"></p>

        <!-- output og email_btn area -->
        <?php include 'commons/generate_email_btn_div.php' ?>

    </div> <!-- end of content -->

</div> <!-- end of page -->


