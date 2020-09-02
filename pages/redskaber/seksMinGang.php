<!-- 6-minuttersgangtest -->
<div data-role="page" id="seksMinGang">

    <!-- header -->
    <?php include "commons/header_with_back_button.php" ?>
    
    <!-- content -->
    <div role="main" class="ui-content">

        <h3>6-minuttersgangtest</h3>
        <p>6-minuttersgangtest, 6MWT, vurderer funktionstilstand hos svage og &#230;ldre med nedsat funktionsevne eller hos personer med kunstig hofte eller kn&#230;.</p>
       
        <a href="#seksMinGangAbout" data-role="button" data-icon="arrow-r" data-iconpos="right">Læs om testen</a>
       
        <form method="post" 
              name="seksmMinGangTestForm" 
              id="seksMinGangForm" 
              action="" 
              data-ajax="false">

            <fieldset data-role="controlgroup" data-mini="true">
                <legend>Køn:</legend>
                <label for="seksMinGang_radio1">Mand</label>
                <input id = "seksMinGang_radio1" type="radio" class="seksMinGang input" onchange = "clearResult_seksMinGang()" name="seksMinGang_gender" value="mand" checked="checked">
                <label for="seksMinGang_radio2">Kvinde</label>
                <input id = "seksMinGang_radio2" type="radio" class="seksMinGang input" onchange = "clearResult_seksMinGang()" name="seksMinGang_gender" value="kvinde">
            </fieldset>
        
            <label for="seksMinGang_alder">Alder:</label>
            <input id="seksMinGang_alder" class="seksMinGang input" placeholder = "Angiv alder i hele år" type = "number" name="seksMinGang_alder" value=""/>
            <p id="seksMinGang_alder_error" style = "display:none; color: red"></p>

            <label for="seksMinGang_vægt">Vægt (kg):</label>
            <input id="seksMinGang_vægt" class="seksMinGang input" placeholder = "Angiv vægt i hele kg" type = "number" name="seksMinGang_vægt" value=""/>
        
            <label for="seksMinGang_højde">Højde (cm):</label>
            <input id="seksMinGang_højde" class="seksMinGang input" placeholder = "Angiv højde i hele cm" type = "number" name="seksMinGang_højde" value=""/>
        

            <label for="seksMinGang_distance">Gangdistance (meter):</label>
            <input id="seksMinGang_distance" class="seksMinGang input" placeholder = "Hvor langt gik patienten?" type = "number" name=seksMinGang_distance value=""/>
            
            <!-- default type of button is "submit"-->
            <button id="seksMinGang_beregn_knap" type ="button" onclick = "seksMinGang_beregner()">Beregn</button><br>
        </form>
        
        <!-- fejlmeddelelse -->
        <p id="seksMinGang_error" style="text-align:center; color:red"></p> 

        <!-- Resultat-->
        <p id="seksMinGang_forventet"></p>
        <p id="seksMinGangOutput"></p>
        
        <!-- email button -->
        <div id = "seksMinGang_generate_email_btn" style="text-align:center; display: none;">
            <a href="#email" data-role="button" data-icon="arrow-r" data-iconpos="right">Send data</a>
        </div>

        <!-- om testen -->

    </div> <!-- end of content -->  

</div> <!-- end of page -->

