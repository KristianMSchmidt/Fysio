<!-- 10-meter gangtest -->

<div data-role="page" id="tiMGT" data-theme ="a">

    <!-- header -->
    <div  data-role="header" 
        data-postition="fixed"
        data-tap-toggle="false">
        
        <a data-direction = "reverse" id="pageHeader"
        class="ui-btn ui-corner-all ui-btn-icon-notext ui-icon-back" data-rel="back"></a>   
        
        <h1 id="headerTitle"></h1>
        
        <img src = "images/dfys-logo4.gif" id = "logo" class = "ui-btn  ui-corner-all 
        ui-btn-icon-notext ui-btn-right"> 
    </div>  <!-- end of header -->



    <div role="main" class="ui-content">
        <h3>10-meter gangtest</h3>
        <p>En testsession skal så vidt muligt bestå af tre forsøg med ca. 20 sekunder mellem hvert forsøg.
        Alternativt udfører personen testen en eller to gange.<p>

        
        <a href=#tiMGT_about data-role="button" data-icon="arrow-r"
             data-iconpos="right">Læs mere om testen</a>
      
        <form method="post" 
            id="tiMGTForm""
            action = ""
            data-ajax="false"> <!-- I don't use ajax, because form is not submittet-->
            <!-- https://demos.jquerymobile.com/1.2.1/docs/forms/forms-sample.html -->

            <br>
            <!-- input value 1 -->
            <label for="tiMGT_tid1" style="text-align:center">1. forsøg:</label>
            Tid:
            <input id="tiMGT_tid1" class="tiMGT input required" placeholder = "Tid i sekunder med 2 decimaler" type = "number" name= "tiMGT_tid1" value=""/>
            Antal skridt: 
            <input id="tiMGT_antalSkridt1" class="tiMGT input" placeholder = "Antal skridt (valgfri)" type = "number" min="0" step="1" name= "tiMGT_tid1" value=""/>
           
            <div class="text-center">
                <button type="button">Tilføj forsøg</button>
            </div>
            
            <br>
            <!-- input value 2 -->
            <label for="tiMGT_tid1" style="text-align:center">2. forsøg:</label>

            Tid: 
            <input id="tiMGT_tid2" class="tiMGT input"  placeholder = "Tid i sekunder med 2 decimaler" type = "number" name= "tiMGT_tid2" value=""/>

            Antal skridt:
            <input id="tiMGT_antalSkridt2" class="tiMGT input" placeholder = "Antal skridt (valgfri)" type = "number" min="0" step="1" name= "tiMGT_tid1" value=""/>
           
            <!-- input value 2 -->
            <br>
            <!-- input value 3 -->
            <label for="tiMGT_tid3" style="text-align:center">3.forsøg:</label>
            Tid:
            <input id="tiMGT_tid3" class="tiMGT input"  placeholder = "Tid i sekunder med 2 decimaler" type = "number" name= "tiMGT_tid3" value=""/>
            Antal skridt:
            <input id="tiMGT_antalSkridt3" class="tiMGT input" placeholder = "Antal skridt (valgfri)" type = "number" min="0" step="1" name= "tiMGT_tid1" value=""/>
           
           I denne test er det kun det allerøverste input felt som er obligatorisk. 
           Så der skal tilføjes et "mandatory" markat til de obligatoriske felter. 

            <!-- Beregn -- default type of button is "submit"-->
            <button type ="button" onclick = "calcButtonHandler('tiMGT')",
                    id ='tiMGT_calcBtn'>Beregn</button><br> <!-- tænk over button style i jqm-->
            
        </form>

        <p id="tiMGTOutput" style = "text-align:center; font-style: italic;"></p>


        <!-- dette bruges måske af alle mine test-sider, så data-stumpen kan evt includes fra common -->
        <div id = "showlink_div" style="text-align:center; display: none">

        <a id ="datalink">Link til data</a>
        <a href=#email data-role="button" data-icon="arrow-r"
             data-iconpos="right">Send link til mail</a>
        </div>

    </div> <!-- end of content -->


</div>