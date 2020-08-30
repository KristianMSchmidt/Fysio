<!-- 6-minuttersgangtest -->
<div data-role="page" id="seksMinGangTest" data-theme ="a">

    <!-- header -->
    <?php include "commons/header_with_back_button.php" ?>
    
    <!-- content -->
    <div role="main" class="ui-content">

        <h3>6-minuttersgangtest</h3>
        <p>6-minuttersgangtest, 6MWT, vurderer funktionstilstand hos svage og &#230;ldre med nedsat funktionsevne eller hos personer med kunstig hofte eller kn&#230;.</p>
               
        <a href="#seksMinGangTestAbout" data-role="button" data-icon="arrow-r" data-iconpos="right">Læs om testen</a>

        <form method="post" 
              name="seksmMinGangTestForm" 
              id="seksMinGangTestForm" 
              action="" 
              data-ajax="false">

            <fieldset data-role="controlgroup" data-mini="true">
                <legend>Køn:</legend>
                <label for="seksMinGangTest_radio1">Mand</label>
                <input id = "seksMinGangTest_radio1" type="radio" class="seksMinGangTest input" onchange = "clearResult_seksMinGangTest()" name="seksMinGangTest_gender" value="mand" checked="checked">
                <label for="seksMinGangTest_radio2">Kvinde</label>
                <input id = "seksMinGangTest_radio2" type="radio" class="seksMinGangTest input" onchange = "clearResult_seksMinGangTest()" name="seksMinGangTest_gender" value="kvinde">
            </fieldset>
        
            <label for="seksMinGangTest_alder">Alder:</label>
            <input id="seksMinGangTest_alder" class="seksMinGangTest input" placeholder = "Angiv alder i hele år" type = "number" name="seksMinGangTest_alder" value=""/>
                
      
            <label for="seksMinGangTest_vægt">Vægt (kg):</label>
            <input id="seksMinGangTest_vægt" class="seksMinGangTest input" placeholder = "Angiv vægt i hele kg" type = "number" name="seksMinGangTest_vægt" value=""/>
        
            <label for="seksMinGangTest_højde">Højde (cm):</label>
            <input id="seksMinGangTest_højde" class="seksMinGangTest input" placeholder = "Angiv højde i hele cm" type = "number" name="seksMinGangTest_højde" value=""/>
        

            <label for="seksMinGangTest_distance">Gangdistance (meter):</label>
            <input id="seksMinGangTest_distance" class="seksMinGangTest input" placeholder = "Hvor langt gik patienten?" type = "number" name=seksMinGangTest_distance value=""/>
            
            <!-- default type of button is "submit"-->
            <button id="seksMinGangTest_beregn_knap" type ="button" onclick = "seksMinGangTest_beregner()">Beregn</button><br>
        </form>

        
        <!-- fejlmeddelelse -->
        <p id="seksMinGangTest_error" style="text-align:center; color:red"></p> 

        <!-- Resultat-->
        <p id="seksMinGangTest_forventet"></p>
        <p id="seksMinGangTestOutput"></p>

        <!-- email button -->
        <div id = "seksMinGangTest_generate_email_btn" style="text-align:center; display: none;">
            <a href="#email" data-role="button" data-icon="arrow-r" data-iconpos="right">Send data</a>
        </div>

    </div> <!-- end of content -->

</div> <!-- end of page -->

<script src="pages\redskaber\seksMinGangTest.js"></script>  
