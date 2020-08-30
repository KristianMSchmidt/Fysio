<!-- Start of email-page -->
<!-- On writing HTML in mail....
fx making link active.... https://www.webhostingtalk.com/showthread.php?t=416467 -->


<div data-role="page" id="email" data-theme ="a"> 

    <!-- header -->
    <div  data-role="header" 
        data-postition="fixed"
        data-tap-toggle="false">
        
        <a data-direction = "reverse" id="pageHeader"
        class="ui-btn ui-corner-all ui-btn-icon-notext ui-icon-back" data-rel="back"></a>   
        
        <h1 id="headerTitle">Email</h1>
        
        <img src = "images/dfys-logo4.gif" id = "logo" class = "ui-btn  ui-corner-all 
        ui-btn-icon-notext ui-btn-right"> 
    </div>  
    
  
    <!-- content -->
    <div role="main" class="ui-content">
        <h3>
        email</h3>
                
        <!-- Input -->
        <form id="email_form">

            <label for="userEmailAddress">Tilføj/rediger email-adresse</label>   
            <input id="userEmailAddress" type="text" class = "email input" name="userEmail" value="" size="">
            
            <!-- name= hidden and autoconplete = false to prevent autocompletion with email-adress-->
            <label for="emailSubject">Tilføj/rediger emne</label>          
            <input id="emailSubject" type="text" class = "email input" autocomplete="false" name="hidden">
            
            <label for="emailContent">Tilføj/rediger indhold af email</label>          
            <textarea rows ="5" cols="50" id="emailContent" class = "email input" name="emailContent"></textarea>
        </form>
 
        <!-- Knap -->
        <button id ="sendEmailBtn" type="button" onclick ="sendEmailBtnHandler()" >Send</button> 
        
        <!-- Paragraph: Mail status -->
        <p id="emailStatusText" style = "text-align:center; font-style: italic;"></p>  

    </div><!-- /content -->
    <!--
    <script src = "js/email.js">console.log("loader email")</script>
        -->
</div><!-- /page -->

