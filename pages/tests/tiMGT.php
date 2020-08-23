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
        <form method="post" 
            id="tiMGTForm""
            action = ""
            data-ajax="false"> <!-- I don't use ajax, because form is not submittet-->
            <!-- https://demos.jquerymobile.com/1.2.1/docs/forms/forms-sample.html -->

            <!-- input value 1 -->
            <label for="tiMGT_tid1">1. forsøg:</label>
            <input id="tiMGT_tid1" class="tiMGT input" type = "number" name= "tiMGT_tid1" value=""/>
            <!-- input value 2 -->

            <!-- input value 2 -->
            <label for="tiMGT_tid2">2. forsøg:</label>
            <input id="tiMGT_tid2" class="tiMGT input" type = "number" name= "tiMGT_tid2" value=""/>
            <!-- input value 2 -->

            <!-- input value 3 -->
            <label for="tiMGT_tid3">3.forsøg:</label>
            <input id="tiMGT_tid3" class="tiMGT input" type = "number" name= "tiMGT_tid3" value=""/>
            
           
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