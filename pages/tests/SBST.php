<!-- Start of Nakke -->
<div data-role="page" id="SBST" data-theme ="a">

    
    <!-- header -->
    <div  data-role="header" 
        data-postition="fixed"
        data-tap-toggle="false">
        
        <a data-direction = "reverse" id="pageHeader"
        class="ui-btn ui-corner-all ui-btn-icon-notext ui-icon-back" data-rel="back"></a>   
        
        <h1 id="headerTitle">SBST</h1>
        
        <img src = "images/dfys-logo4.gif" id = "logo" class = "ui-btn  ui-corner-all 
        ui-btn-icon-notext ui-btn-right"> 
    </div>  

    <div role="main" class="ui-content">
        <h3>STarT Back Screening Tool (SBST)</h3>
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