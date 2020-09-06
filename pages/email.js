function email_clear_input_errors(){
    document.getElementById("emailAddress_error").innerHTML = "";
    document.getElementById("emailAddress_error").style.display = "none"
    
    document.getElementById("emailSubject_error").innerHTML = "";
    document.getElementById("emailSubject_error").style.display = "none"

    document.getElementById("emailContent_error").innerHTML = "";
    document.getElementById("emailContent_error").style.display = "none"
}      


function email_clear_status_text(){
    document.getElementById("emailStatusText").innerHTML = "";
    document.getElementById("emailStatusText").style.color="black";
}

function prepareEmail(testId){   
    email_clear_input_errors();
    email_clear_status_text();  
    let urlWithParams = generate_url(testId);
    document.getElementById('emailSubject').value = pagesAndNames[testId]; 
    document.getElementById('emailContent').value = "Her kan du genfinde de indtastede data: " + urlWithParams;      
}
  
function generate_url(testId){
    // Generates url for user to retreive data 

    const targetForm = $('#' + testId + 'Form');
    const params = targetForm.serialize(); 

    const url = window.location.href;

    if (url.includes("?")){
    var first_part = url.split("?")[0];
    } 
    else{
    var first_part = url.split("#")[0]; 
    }
    const urlWithParams = first_part + '?' + params + window.location.hash;     
    
    return(urlWithParams);
}

function sendEmailBtnHandler(){ 
    email_clear_input_errors();
    email_clear_status_text();;


    function checkEmailForm(){
        let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        
        let emailAddress = document.getElementById("emailAddress").value; 
        let emailContent = document.getElementById("emailContent").value;

        if(emailAddress == ""){
            
            return "no email address";
        }
        if (!emailReg.test(emailAddress)){
            return "invalid email address";
        }
        if (emailContent == ""){
            return "email address valid, but no content";
        }
        else{
            return "ready to send";
        }
    }

    let emailAddress = document.getElementById("emailAddress").value; 
    let emailSubject = document.getElementById("emailSubject").value;
    let emailContent = document.getElementById("emailContent").value;


    let checkEmailFormResponse = checkEmailForm();
    console.log(checkEmailFormResponse);
    switch (checkEmailFormResponse){

    case "no email address":
        document.getElementById("emailAddress_error").innerHTML="Angiv en email adresse";
        document.getElementById("emailAddress_error").style.display = "block";
    break;

    case "invalid email address": 
        document.getElementById("emailAddress_error").innerHTML="Angiv en gyldig email adresse";
        document.getElementById("emailAddress_error").style.display = "block";
    break;

    case "email address valid, but no content": 
        document.getElementById("emailContent_error").innerHTML="Emailen har intet indhold";
        document.getElementById("emailContent_error").style.display = "block";
    break;

    case "ready to send": 
        console.log("about to send...")
        document.getElementById("emailStatusText").innerHTML="Behandler email ...";
        $.ajax({
            url: window.location.href.split("#")[0]+"pages/email_handler.php",
            type: 'POST',
            dataType: 'text',
            data: {userEmail: emailAddress, 
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
                document.getElementById("emailStatusText").style.color="red";
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

document.querySelectorAll('.'+ "email" +'.input').forEach(item => {
    item.addEventListener('input', event => {
        document.getElementById(`${item.id}_error`).innerHTML = "";
        document.getElementById(`${item.id}_error`).style.display = "none";
      });
}); 


    
