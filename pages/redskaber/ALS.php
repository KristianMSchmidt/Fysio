<!-- Amyotrophic Lateral Sclerosis Rating Scale (ALS) - Revised -->


<div data-role="page" id="ALS" data-theme ="a">

    <!-- header -->
    <?php include "commons/header_with_back_button.php" ?>

    <!-- content -->
    <div role="main" class="ui-content">

        <h3>Amyotrophic Lateral Sclerosis Rating Scale (ALS) - Revised</h3>
        <p>Testen er udviklet til at bestemme basismobiliteten hos ældre</p>

        <a href="#" data-role="button" data-icon="arrow-r" data-iconpos="right">Læs om testen</a>
      
        <form method="post" 
            name="ALSForm"
            id="ALSForm""
            action = ""
            data-ajax="false"> <!-- I don't use ajax, because form is not submittet-->
            <!-- https://demos.jquerymobile.com/1.2.1/docs/forms/forms-sample.html -->

            <br>
            <!--
            <fieldset data-role="controlgroup" data-mini="true">
                <legend>Type:</legend> 
                <label for="ALS-radio-choice-1">Normal ("gå i dit normale gangtempo")</label>
                <input type="radio" id ="ALS-radio-choice-1" class="ALS input" name="ALS_type" value ="normal" checked="checked">
                <label for="ALS-radio-choice-2">Speed ("gå så hurtigt du kan")</label>
                <input type="radio" id ="ALS-radio-choice-2" class="ALS input" name="ALS_type" value = "speed">
            </fieldset> -->
            <br>
            <div id = "ALS_input1" style="display:block">
                <label for="ALS_tid1">Tidsforbrug i 1. forsøg (sek.):</label>
                <input id="ALS_tid1" class="ALS input" 
                   placeholder = "Angiv tidsforbrug i sek." type = "number" 
                   name= "ALS_tid1"/
            </div>

            <div id = "ALS_input2" style="display:block">
                <label for="ALS_tid2">Tidsforbrug i 2. forsøg (sek.):</label>
                <input id="ALS_tid2" class="ALS input" placeholder = "Angiv tidsforbrug i sek." type = "number" name= "ALS_tid2" value=""/>
            </div>
            
            <div id = "ALS_input3" style="display:block">
                <label for="ALS_tid3">Tidsforbrug i 3. forsøg (sek.):</label>
                <input id="ALS_tid3" class="ALS input" placeholder = "Angiv tidsforbrug i sek." type = "number" name= "ALS_tid3" value=""/>
            </div>
            <button id="ALS_beregn_knap" type ="button" onclick = "ALS_beregner()">Beregn</button><br>

        </form>

        <!-- dette bruges måske af alle mine test-sider, så kode-stumpen kan evt includes fra common -->
        <!-- fejlmeddelelse -->
        <p id="ALS_error" style="text-align:center; color:red"></p> 
        <!-- Resultat-->
        <p id="ALSOutput"></p>

        <!-- output og email_btn area -->
        <?php include 'commons/generate_email_btn_div.php' ?>

    </div> <!-- end of content -->
</div> <!-- end of page -->

