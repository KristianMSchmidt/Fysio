<!-- On writing HTML in mail....
fx making link active.... https://www.webhostingtalk.com/showthread.php?t=416467 -->



<!-- Start of email-page -->
<div data-role="page" id="email" data-theme ="a"> 

    <!-- header -->
    <?php include 'redskaber/commons/header_with_back_button.php' ?>    
  
    <!-- content -->
    <div role="main" class="ui-content">
        <h3>Email</h3>
                
        <!-- Input -->
        <form id="email_form">

            <label for="emailAddress">Tilføj/rediger email-adresse</label>   
            <input id="emailAddress" type="text" class = "email input" name="emailAddress" value="" size=""/>
            <p id="emailAddress_error" class = "errorMgs"></p>
          
            <!-- name= hidden and autoconplete = false to prevent autocompletion with email-adress-->
            <label for="emailSubject">Tilføj/rediger emne</label>          
            <input id="emailSubject" type="text" class = "email input" autocomplete="false" name="hidden"/>
            <p id="emailSubject_error" class = "errorMgs"></p> <!-- not used, but needed in loop -->
            
            <label for="emailContent">Tilføj/rediger indhold af email</label>          
            <textarea rows ="5" cols="50" id="emailContent" class = "email input" name="emailContent"></textarea>
            <p id="emailContent_error" class = "errorMgs"></p>

        </form>
 
        <!-- Knap -->
        <button id ="sendEmailBtn" type="button" onclick ="sendEmailBtnHandler()" >Send</button> 
        
        <!-- Paragraph: Mail status -->
        <p id="emailStatusText" style="text-align:center; font-style: italic;"></p>  

    </div><!-- /content -->
</div><!-- /page -->

