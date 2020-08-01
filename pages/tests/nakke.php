<!-- I denne fil forsøger jeg at lave den sådan, at linket genereres, når man trykker beregn -->

<!--https://html.form.guide/php-form/php-form-action-self/ -->
<!-- JQM Submitting forms https://demos.jquerymobile.com/1.3.1/docs/forms/forms-sample.html -->
<!-- JQM forms : https://demos.jquerymobile.com/1.4.3/forms/#&ui-state=dialog -->
<!-- data-role and action. https://stackoverflow.com/questions/8851733/data-url-jquery-mobile-confusing
<div data-role="page" data-url="/linkePHP"  id="linkPHP" data-theme ="a">   -->
<!--https://html.form.guide/php-form/php-form-action-self/-->
<!-- Linje skift i text-area
https://stackoverflow.com/questions/863779/how-to-add-line-breaks-to-an-html-textarea?rq=1 -->

<!-- Automatisk form-control style.... https://stackoverflow.com/questions/39540302/how-to-change-the-background-color-of-an-input-field-when-text-is-entered
-->

<!-- overvejelse: JEg kunne måske bruge php form-POST... er det alligevel smartere? Så skulle jeg blot sætte 
default slide ud af kraft -->

<!-- Start of Nakke -->
<div data-role="page" id="nakke" data-theme ="a">

    
    <!-- header -->
    <div  data-role="header" 
        data-postition="fixed"
        data-tap-toggle="false">
        
        <a data-direction = "reverse" id="pageHeader"
        class="ui-btn ui-corner-all ui-btn-icon-notext ui-icon-back" data-rel="back"></a>   
        
        <h1 id="headerTitle">Nakke</h1>
        
        <img src = "images/dfys-logo4.gif" id = "logo" class = "ui-btn  ui-corner-all 
        ui-btn-icon-notext ui-btn-right"> 
    </div>  

    <div role="main" class="ui-content">
        <h3>Nakketest</h3>
        <form method="post" 
            id="nakkeTestForm"
            action = ""
            data-ajax="false"> <!-- I don't use ajax, because form is not submittet-->
            <!-- https://demos.jquerymobile.com/1.2.1/docs/forms/forms-sample.html -->

            <!-- input value 1 -->
            <label for="antalUger">Antal uger med smerter:</label>
            <input id="antalUger" class="nakkeTest input" type = "number" name= "antalUger" value=""/>
            <!-- input value 2 -->
            
            <label for="laengde">Længden af din nakke (cm):</label>
            <input id="laengde" class="nakkeTest input" type = "number" name="laengde" value = ""/>
            <!-- input value 3 -->
            
            <label for="foedselsaar">Fødselsår:</label>
            <input id= "foedselsaar" class="nakkeTest input" type = "number" name="foedselsaar" value=""/>
           
            <!-- Beregn -- default type of button is "submit"-->
            <button type ="button" onclick = "calcButtonHandler('nakkeTest')",
                     id ='calculateNakkeBtn'>Beregn</button><br> <!-- tænk over button style i jqm-->
            
        </form>

        <p id="nakkeTestOutput" style = "text-align:center; font-style: italic;"></p>


        <!-- dette bruges måske af alle mine test-sider, så data-stumpen kan evt includes fra common -->
        <div id = "showlink_div" style="text-align:center; display: none">

        <a id ="datalink">Link til data</a>
        <a href=#email data-role="button" data-icon="arrow-r"
             data-iconpos="right">Send link til mail</a>
        </div>

    </div> <!-- end of content -->


</div>