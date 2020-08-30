function sendEmailBtnHandler(){ 

    function checkEmailForm(){
        let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        
        let userEmailAddress = document.getElementById("userEmailAddress").value; 
        let emailContent = document.getElementById("emailContent").value;
    
        if(userEmailAddress == ""){
         
            return "no email address";
        }
        if (!emailReg.test(userEmailAddress)){
            return "invalid email address";
        }
        if (emailContent == ""){
            return "email address valid, but no content";
        }
        else{
            return "ready to send";
        }
    }

    document.getElementById("emailStatusText").innerHTML = ""; 
    document.getElementById("emailStatusText").style.color = "black";
    document.getElementById("userEmailAddress").style.backgroundColor = "transparent";
    document.getElementById("emailContent").style.backgroundColor = "transparent";


    //after "send email button is pressed" we should remove statustext and reset color
    //when input fiels are changed
    
    document.getElementById("userEmailAddress").addEventListener('input', event => {
        if (checkEmailForm() == "email address valid, but no content" ||
            checkEmailForm() == "ready to send"){
                document.getElementById("userEmailAddress").style.backgroundColor="transparent";
                document.getElementById("emailStatusText").innerHTML="";
            } 
        });

    document.getElementById("emailContent").addEventListener('input', event => {
        if (!document.getElementById("emailContent") == ""){
            document.getElementById("emailContent").style.backgroundColor="transparent";
            document.getElementById("emailStatusText").innerHTML="";
        } 
    }); 

    let userEmailAddress = document.getElementById("userEmailAddress").value; 
    let emailSubject = document.getElementById("emailSubject").value;
    let emailContent = document.getElementById("emailContent").value;
    

    let checkEmailFormResponse = checkEmailForm();
    console.log(checkEmailFormResponse);
    switch (checkEmailFormResponse){

        case "no email address":
            document.getElementById("emailStatusText").innerHTML="Angiv en email adresse";
            document.getElementById("userEmailAddress").style.backgroundColor="rgba(255,145,173,0.3)";
        break;

        case "invalid email address": 
            document.getElementById("emailStatusText").innerHTML="Angiv en gyldig email adresse";
            document.getElementById("userEmailAddress").style.backgroundColor="rgba(255,145,173,0.3)";
        break;

        case "email address valid, but no content": 
            document.getElementById("emailStatusText").innerHTML="Emailen har intet indhold";
            document.getElementById("emailContent").style.backgroundColor="rgba(255,145,173,0.3)";
        break;

        case "ready to send": 
            console.log("about to send...")
            document.getElementById("userEmailAddress").style.backgroundColor="transparent";
            document.getElementById("emailContent").style.backgroundColor="transparent";
            document.getElementById("emailStatusText").innerHTML="Behandler email ...";
            //sendEmail();
            $.ajax({
                url: window.location.href.split("#")[0]+"scripts/email/mail_handler.php",
                type: 'POST',
                dataType: 'text',
                data: {userEmail: userEmailAddress, 
                    emne:    emailSubject,
                    indhold: emailContent
                }
            })
            .done(function(response) {
                //do something with the response
                if (response == "Mail succesfully sent!"){
                    document.getElementById("emailStatusText").style.color="green";
                }
                else {
                    document.getElementById("emailStatusText").style.color="rgba(255,145,173,1)";
                }
        
                document.getElementById("emailStatusText").innerHTML = response;
            })
            .fail(function(){
                console.log("Ajax error. Perhaps you are off-line? ");
                document.getElementById("emailStatusText").innerHTML = "Mail not sent. Perhaps you are offline?";
            })
            .always(function(){
                console.log("complete");
            });
        break;
    }
}
    

      
    