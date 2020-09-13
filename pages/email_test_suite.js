//Jeg tester ikke på responsen fra ajax og de mulige fejl- og succesmeddelses ifm dette. 

export function email_test_suite(){

    function reset(){
        document.getElementById("emailAddress").value = "";
        document.getElementById("emailSubject").value = "";
        document.getElementById("emailContent").value = "";
        
        document.getElementById("emailAddress_error").innerHTML = "";
        document.getElementById("emailAddress_error").style.display = "none"
        
        document.getElementById("emailSubject_error").innerHTML = "";
        document.getElementById("emailSubject_error").style.display = "none"

        document.getElementById("emailContent_error").innerHTML = "";
        document.getElementById("emailContent_error").style.display = "none"
        
        document.getElementById("emailStatusText").innerHTML = "";
        document.getElementById("emailStatusText").style.color="black";
    }
    
    let report = {
        "testName" : "Email_page",
        "results" : []
    }
    


    function test2(){
        reset();
        let actual = []
        let expected = []
        
        // try to send email with invalid email address
        document.getElementById("emailAddress").value = "perHansen";
        document.getElementById("sendEmailBtn").click(); 
        actual[0] = document.getElementById("emailAddress_error").innerHTML;
        expected[0] = "Angiv en gyldig emailadresse";
        actual[1] = document.getElementById("emailAddress_error").style.display;
        expected[1]="block";
        actual[2] = document.getElementById("emailContent_error").style.display;
        expected[2]="none";
        
        //type something email addres input => error gets hidden 
        let event = new Event('input', { 'bubbles': true, 'cancelable': true });
        document.getElementById("emailAddress").dispatchEvent(event);
        
        actual[3] = document.getElementById("emailAddress_error").style.display;
        expected[3] = "none";


        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test2();

    function test3(){
        reset();
        let actual = []
        let expected = []
        
        // try to send email with invalid email address
        document.getElementById("emailAddress").value = "perHansen@maildk";
        document.getElementById("sendEmailBtn").click(); 
        actual[0] = document.getElementById("emailAddress_error").innerHTML;
        expected[0] = "Angiv en gyldig emailadresse";
        actual[1] = document.getElementById("emailAddress_error").style.display;
        expected[1]="block";
        actual[2] = document.getElementById("emailContent_error").style.display;
        expected[2]="none";
        
        //type something email addres input => error gets hidden 
        let event = new Event('input', { 'bubbles': true, 'cancelable': true });
        document.getElementById("emailAddress").dispatchEvent(event);
        
        actual[3] = document.getElementById("emailAddress_error").style.display;
        expected[3] = "none";


        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test3();


    function test4(){
        reset();
        let actual = []
        let expected = []
        
        // try to send email with invalid email address
        document.getElementById("emailAddress").value = "MåGerneIndeholdeÆØÅ@hotmail.com";
        document.getElementById("sendEmailBtn").click(); 

        actual[0] = document.getElementById("emailAddress_error").style.display;
        expected[0] = "none";

        actual[1] = document.getElementById("emailContent_error").style.display;
        expected[1]="block";

        actual[2] = document.getElementById("emailContent_error").innerHTML;
        expected[2]="Emailen har intet indhold";
        
        //type something in email content input field => error gets hidden 
        let event = new Event('input', { 'bubbles': true, 'cancelable': true });
        document.getElementById("emailContent").dispatchEvent(event);
        
        actual[3] = document.getElementById("emailContent_error").style.display;
        expected[3] = "none";


        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test4();

    function test5(){
        reset();
        let actual = []
        let expected = []
        
        // try to send email with invalid email address
        document.getElementById("emailAddress").value = "gyldigadresse@okok.dk";
        document.getElementById("emailContent").value = "Ikke tom";
        
        document.getElementById("sendEmailBtn").click(); 

        actual[0] = document.getElementById("emailAddress_error").style.display;
        expected[0] = "none";

        actual[1] = document.getElementById("emailContent_error").style.display;
        expected[1]="none";

        actual[2] = document.getElementById("emailStatusText").innerHTML;
        expected[2]="Behandler email...";
        
        //type something in email content input field => error gets hidden 
        let event = new Event('input', { 'bubbles': true, 'cancelable': true });
        document.getElementById("emailContent").dispatchEvent(event);
        
        actual[3] = document.getElementById("emailContent_error").style.display;
        expected[3] = "none";
        
        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test5();









    // Do this when all tests are run
    reset();
    return report;
}