function checkEmailForm(userEmailAddress, emailContent){
    let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    if(userEmailAddress == ""){
        console.log("hej")
        return "no email address";
    }
    console.log("hej igen   ")
    if (!emailReg.test(userEmailAddress)){
        return "invalid email adress";
    }
    if (emailContent == ""){
        return "email adress valid, but no content";
    }
    else{
        return "ready to send";
    }
}

export function sendEmailBtnHandler(){  
    //Overvej at lave HTML-beked i mailen, så linket bliver aktivt ect. Det er mere tjekket.
    console.log("clikket på sendmail");
    document.getElementById("emailStatusText").style.color="#black";

    // after "send email button is pressed" we should remove statustext and reset color
    //when input fiels are changed
    document.querySelectorAll('.email.input').forEach(item => {
        item.addEventListener('input', event => {      
            document.getElementById("emailStatusText").innerHTML = "";
            document.getElementById("emailStatusText").style.color="black";
        });
    });
  
    let userEmailAddress = document.getElementById("userEmailAddress").value; 
    let emailSubject = document.getElementById("emailSubject").value;
    let emailContent = document.getElementById("emailContent").value;
    
    let checkEmailFormResponse = checkEmailForm(userEmailAddress, emailContent);
    console.log("slet", checkEmailFormResponse);
    switch (checkEmailFormResponse){

        case "no email address":
            console.log("Er vi her??s")
            document.getElementById("emailStatusText").style.color="rgba(255,145,173,1)";
            ;
            document.getElementById("emailStatusText").innerHTML="Angiv en email adresse";
        break;

        case "invalid email adress": 
            console.log("Næppe her?s")

            document.getElementById("emailStatusText").style.color="rgba(255,145,173,1)";
            ;
            document.getElementById("emailStatusText").innerHTML="Angiv en gyldig email adresse";
        break;

        case "email adress valid, but no content": 
            document.getElementById("emailStatusText").style.color="rgba(255,145,173,1)";
            document.getElementById("emailStatusText").innerHTML="Emailen har intet indhold";
        break;

        case "ready to send":  
            document.getElementById("emailStatusText").innerHTML="Behandler email ...";

            $.ajax({
                url: window.location.href.split("#")[0]+"pages/email/mail_handler.php",
                type: 'POST',
                dataType: 'text',
                data: {userEmail: userEmailAddress, 
                    emne:    emailSubject,
                    indhold: emailContent
                }
            })
            .done(function(response) {
                //do something with the response
                console.log("This is the response: ", response);
                if (response == "Mail succesfully sent!"){
                    document.getElementById("emailStatusText").style.color="green";}
                else  {document.getElementById("emailStatusText").style.color="rgba(255,145,173,1)";}

                document.getElementById("emailStatusText").innerHTML = response;
            })
            .fail(function() {
                console.log("Ajax error... in trying to find the php-file sending post. Check url?");
                document.getElementById("emailStatusText").innerHTML = "Mail not sent. Ajax error.";
            })
            .always(function(){
                console.log("complete");
            });
        break;
    }
}

    
    
      
    