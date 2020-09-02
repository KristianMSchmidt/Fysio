//Find reference på formlerne - passer de? Herefter skal jeg implementere tests

export function seksMinGang_testSuite(){

    let report = {
        "testName" : "6-metergangtest",
        "results" : []
    }

    function reset(){
        document.getElementById("seksMinGang_alder").value = ""
        document.getElementById("seksMinGang_vægt").value = ""
        document.getElementById("seksMinGang_højde").value = ""
        document.getElementById("seksMinGang_distance").value = ""
        document.getElementById("seksMinGangOutput").innerHTML = "";
        document.getElementById("seksMinGang_error").innerHTML = "";
        document.getElementById("seksMinGang_forventet").innerHTML = "";

        document.getElementById("seksMinGang_error").style.display = "block";
        document.getElementById("seksMinGangOutput").style.display = "block";
        document.getElementById("seksMinGang_generate_email_btn").style.display = "none";
        document.getElementById("seksMinGang_alder_error").style.display ="none";

    }
    
    //Test 1
    function test1(){
        reset();
        document.getElementById("seksMinGang_beregn_knap").click();

        let actual = document.getElementById("seksMinGang_error").innerHTML;
        let expected = "Indtast patientens alder i hele år";

        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test1();

    //Test 2
    function test2(){
        reset();
        document.getElementById("seksMinGang_alder").value = "56"
        document.getElementById("seksMinGang_vægt").value = ""
        document.getElementById("seksMinGang_højde").value = "45"
      
        document.getElementById("seksMinGang_beregn_knap").click();

        let actual = document.getElementById("seksMinGang_error").innerHTML;
        let expected = "Indtast patientens vægt i hele kg";

        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test2();

    //Test 3
    function test3(){
        reset();
        document.getElementById("seksMinGang_alder").value = "56"
        document.getElementById("seksMinGang_vægt").value = "100"
        document.getElementById("seksMinGang_højde").value = "45"
      
        document.getElementById("seksMinGang_beregn_knap").click();

        let actual = document.getElementById("seksMinGang_error").innerHTML;
        let expected = "Er patienten virkelig kun 45 cm høj?";

        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test3();


    //Test 4
    function test4(){
        reset();
        document.getElementById("seksMinGang_alder").value = "56"
        document.getElementById("seksMinGang_vægt").value = "100"
        document.getElementById("seksMinGang_højde").value = "145"
        
        document.getElementById("seksMinGang_beregn_knap").click();

        let actual = document.getElementById("seksMinGang_error").innerHTML;
        let expected = "Indtast gangdistance i hele antal meter";

        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test4();
 
    
    //Test 5
    function test5(){
        //test if email button gets shown when result i shown and hidden again, when new input 
        reset();
        document.getElementById("seksMinGang_alder").value = "56"
        document.getElementById("seksMinGang_vægt").value = "100"
        document.getElementById("seksMinGang_højde").value = "145"
        document.getElementById("seksMinGang_distance").value = "300"

        document.getElementById("seksMinGang_beregn_knap").click();
        
        let actual = [];
        let expected = [];

        actual[0] = document.getElementById("seksMinGang_generate_email_btn").style.display;
        expected[0] = "block";

        document.getElementById("seksMinGang_højde").dispatchEvent(new Event('input', { bubbles: true }));
        actual[1] = document.getElementById("seksMinGang_generate_email_btn").style.display;
        expected[1] = "none";

        document.getElementById("seksMinGang_beregn_knap").click();
        actual[2] = document.getElementById("seksMinGang_generate_email_btn").style.display;
        expected[2] = "block";

        document.getElementById("seksMinGang_distance").dispatchEvent(new Event('input', { bubbles: true }));
        actual[3] = document.getElementById("seksMinGang_generate_email_btn").style.display;
        expected[3] = "none";

        document.getElementById("seksMinGang_beregn_knap").click();
        actual[4] = document.getElementById("seksMinGang_generate_email_btn").style.display;
        expected[4] = "block";

        document.getElementById("seksMinGang_radio1").onchange();
        actual[5] = document.getElementById("seksMinGang_generate_email_btn").style.display;
        expected[5] = "none";

        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test5();

    function test6(){
        
        //test if email button gets shown when result i shown and hidden again, when new input 
        reset();
        document.getElementById("seksMinGang_alder").value = "56"
        document.getElementById("seksMinGang_vægt").value = "100"
        document.getElementById("seksMinGang_højde").value = "145"
        document.getElementById("seksMinGang_distance").value = "300"

        document.getElementById("seksMinGang_beregn_knap").click();
        let actual = document.getElementById("emailSubject").value;
        let expected = "6-minuttersgangtest";    
 
        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        ); 
    }
    test6();
 
    function test7(){        
        reset();
        window.location.href = 'http://localhost/source/Fysio/#seksMinGang';  

        document.getElementById("seksMinGang_alder").value = "56"
        document.getElementById("seksMinGang_vægt").value = "100"
        document.getElementById("seksMinGang_højde").value = "145"
        document.getElementById("seksMinGang_distance").value = "300"

        document.getElementById("seksMinGang_beregn_knap").click();

        let actual = document.getElementById('emailContent').value.split("?")[1];
       
        let expected = "seksMinGang_gender=mand&seksMinGang_alder=56&seksMinGang_v%C3%A6gt=100&seksMinGang_h%C3%B8jde=145&seksMinGang_distance=300#seksMinGang"
        
        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        ); 

        window.location.href = 'http://localhost/source/Fysio';  

    }
    //test7();

    // Do this when all tests are run
    reset();
    return report;
}