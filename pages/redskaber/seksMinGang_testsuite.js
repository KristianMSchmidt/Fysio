//Find reference på formlerne - passer de? Herefter skal jeg implementere tests for resultaterne + undgå meningsløse svar som 0%.
import {recover_data_from_url} from '../../scripts/recover_data_from_url.js';

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
        document.getElementById("seksMinGang_forventet").innerHTML = "";

        let allErrorMgs = document.getElementById("seksMinGang").getElementsByClassName("errorMgs");
        for(let i = 0; i<allErrorMgs.length; i++){
            allErrorMgs[i].innerHTML = "";
            allErrorMgs[i].style.display = "none";
        }
        document.getElementById("seksMinGangOutput").style.display = "block";
        document.getElementById("seksMinGang_generate_email_btn").style.display = "none";
        document.seksMinGangForm.seksMinGang_gender[0].checked=true; //mand
    }
    
    function test1(){
        reset();
        document.getElementById("seksMinGang_beregn_knap").click();

        let actual = []
        let expected = []

        actual[0] = document.getElementById("seksMinGang_alder_error").innerHTML;
        expected[0] = "Indtast patientens alder i hele år";

        actual[1] = document.getElementById("seksMinGang_alder_error").style.display;
        expected[1] = "block";

        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test1();

    function test2(){
        reset();
        document.getElementById("seksMinGang_alder").value = "-3";

        document.getElementById("seksMinGang_beregn_knap").click();

        let actual = document.getElementById("seksMinGang_alder_error").innerHTML;
        let expected = "Patientens alder kan ikke være negativ"

        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test2();

    function test3(){
        reset();
        document.getElementById("seksMinGang_alder").value = "1";

        document.getElementById("seksMinGang_beregn_knap").click();

        let actual = document.getElementById("seksMinGang_alder_error").innerHTML;
        let expected = "Er patienten virkelig kun 1 år gammel?"

        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test3();

    
    function test4(){
        reset();
        document.getElementById("seksMinGang_alder").value = "150";

        document.getElementById("seksMinGang_beregn_knap").click();

        let actual = document.getElementById("seksMinGang_alder_error").innerHTML;
        let expected = "Er patienten virkelig 150 år gammel?"

        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test4();

   
    function test5(){
        reset();
        document.getElementById("seksMinGang_alder").value = "56"
        document.getElementById("seksMinGang_vægt").value = ""
        document.getElementById("seksMinGang_højde").value = "45"
      
        document.getElementById("seksMinGang_beregn_knap").click();
        let actual=[]
        let expected =[]

        actual[0] = document.getElementById("seksMinGang_vægt_error").innerHTML;
        expected[0] = "Indtast patientens vægt i hele kg";

        actual[1] = document.getElementById("seksMinGang_vægt_error").style.display;
        expected[1] = "block";

        actual[2] = document.getElementById("seksMinGang_alder_error").style.display;
        expected[2] = "none";

        actual[3] = document.getElementById("seksMinGang_højde_error").style.display;
        expected[3] = "none";

        actual[4] = document.getElementById("seksMinGang_distance_error").style.display;
        expected[4] = "none";

        actual[4] = document.getElementById("seksMinGang_generate_email_btn").style.display;
        expected[4] = "none";
        
        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test5();

  
    function test6(){
        reset();
        document.getElementById("seksMinGang_alder").value = "56"
        document.getElementById("seksMinGang_vægt").value = "-3"
        document.getElementById("seksMinGang_højde").value = "45"
        
        document.getElementById("seksMinGang_beregn_knap").click();

        let actual=[]
        let expected =[]

        actual[0] = document.getElementById("seksMinGang_vægt_error").innerHTML;
        expected[0] = "Patientens vægt kan ikke være negativ";

        document.getElementById("seksMinGang_vægt").value = "19"
        document.getElementById("seksMinGang_beregn_knap").click();

        actual[1] = document.getElementById("seksMinGang_vægt_error").innerHTML; 
        expected[1] = "Vejer patienten virkelig kun 19 kg?";

        document.getElementById("seksMinGang_vægt").value = "400"
        document.getElementById("seksMinGang_beregn_knap").click();

        actual[2] = document.getElementById("seksMinGang_vægt_error").innerHTML;
        expected[2] = "Vejer patienten virkelig 400 kg?";

        actual[3] = document.getElementById("seksMinGang_vægt_error").style.display;
        expected[3] = "block";
        
        document.getElementById("seksMinGang_vægt").value = "67";
        document.getElementById("seksMinGang_beregn_knap").click();

        actual[4] = document.getElementById("seksMinGang_vægt_error").innerHTML = "";
        expected[4] = "";

        actual[5] = document.getElementById("seksMinGang_vægt_error").style.display;
        expected[5] = "none";

        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test6();

    function test7(){
        reset();
        document.getElementById("seksMinGang_alder").value = "56"
        document.getElementById("seksMinGang_vægt").value = "100"
        document.getElementById("seksMinGang_højde").value = "30"

        document.getElementById("seksMinGang_beregn_knap").click();

        let expected = "Er patienten virkelig kun 30 cm høj?";
        let actual = document.getElementById("seksMinGang_højde_error").innerHTML;

        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test7();

    function test8(){
        reset();
        document.getElementById("seksMinGang_alder").value = "56"
        document.getElementById("seksMinGang_vægt").value = "100"
        document.getElementById("seksMinGang_højde").value = "445"
      
        document.getElementById("seksMinGang_beregn_knap").click();

        let expected = "Er patienten virkelig 445 cm høj?";
        let actual = document.getElementById("seksMinGang_højde_error").innerHTML;


        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test8();

    function test9(){
        reset();
        document.getElementById("seksMinGang_alder").value = "56"
        document.getElementById("seksMinGang_vægt").value = "100"
      
        document.getElementById("seksMinGang_beregn_knap").click();

        let expected = "Indtast patientens højde i hele cm";
        let actual = document.getElementById("seksMinGang_højde_error").innerHTML;

        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test9();


    function test10(){
        reset();
        document.getElementById("seksMinGang_alder").value = "56"
        document.getElementById("seksMinGang_vægt").value = "100"
        document.getElementById("seksMinGang_højde").value = "145"
        
        document.getElementById("seksMinGang_beregn_knap").click();

        let actual = document.getElementById("seksMinGang_distance_error").innerHTML;
        let expected = "Indtast gangdistance i hele antal meter";

        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test10();
 
    function test11(){
    reset();
    document.getElementById("seksMinGang_alder").value = "56"
    document.getElementById("seksMinGang_vægt").value = "100"
    document.getElementById("seksMinGang_højde").value = "145"
    document.getElementById("seksMinGang_distance").value = ""

    document.getElementById("seksMinGang_beregn_knap").click();

    let actual = document.getElementById("seksMinGang_distance_error").innerHTML;
    let expected = "Indtast gangdistance i hele antal meter";

    report["results"].push({
        "expected" : expected,
        "actual" : actual
        });
    }
    test11();

    function test12(){
        reset();
        document.getElementById("seksMinGang_alder").value = "56"
        document.getElementById("seksMinGang_vægt").value = "100"
        document.getElementById("seksMinGang_højde").value = "145"
        document.getElementById("seksMinGang_distance").value = "-4"
    
        document.getElementById("seksMinGang_beregn_knap").click();
    
        let actual = document.getElementById("seksMinGang_distance_error").innerHTML;
        let expected = "Gangdistancen kan ikke være negativ";
    
        report["results"].push({
            "expected" : expected,
            "actual" : actual
            });
    }
    test12();
    

    function test13(){
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
    test13();

    function test14(){
        
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
    test14();
 
    function test15(){       
         // her tester jeg generate url (gender=mand) og at adressen indsættes i emailen        
 
        reset();
        document.getElementById("seksMinGang_alder").value = "57"
        document.getElementById("seksMinGang_vægt").value = "100"
        document.getElementById("seksMinGang_højde").value = "145"
        document.getElementById("seksMinGang_distance").value = "300"
    
        document.location.hash = 'seksMinGang';

        document.getElementById("seksMinGang_beregn_knap").click();
        let actual = document.getElementById('emailContent').value.split("?")[1];      
        let expected = "seksMinGang_gender=mand&seksMinGang_alder=57&seksMinGang_v%C3%A6gt=100&seksMinGang_h%C3%B8jde=145&seksMinGang_distance=300#seksMinGang"
        
        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        ); 

    }
    test15();

    function test16(){
        // her tester jeg generate url (gender=kvinde) og at adressen indsættes i emailen        
        reset();

        document.seksMinGangForm.seksMinGang_gender[1].checked=true; //kvinde
        document.getElementById("seksMinGang_alder").value = "56"
        document.getElementById("seksMinGang_vægt").value = "100"
        document.getElementById("seksMinGang_højde").value = "145"
        document.getElementById("seksMinGang_distance").value = "300"

        document.location.hash = 'seksMinGang';
        document.getElementById("seksMinGang_beregn_knap").click();

        let actual = document.getElementById('emailContent').value.split("fysio/?")[1];      
        let expected = "seksMinGang_gender=kvinde&seksMinGang_alder=56&seksMinGang_v%C3%A6gt=100&seksMinGang_h%C3%B8jde=145&seksMinGang_distance=300#seksMinGang"
        
        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        ); 

    }
    test16();


    function test17(){        
        //Her forsøger jeg at teste funktionen recover_data_from_url 
        reset();      
        let url = window.location.href.split("fysio/")[0] + "fysio/?seksMinGang_gender=kvinde&seksMinGang_alder=56&seksMinGang_v%C3%A6gt=100&seksMinGang_h%C3%B8jde=145&seksMinGang_distance=300#seksMinGang";
        recover_data_from_url(url);

        let actual = [];
        let expected = [];

        actual[0] = document.querySelector('input[name="seksMinGang_gender"]:checked').value;
        expected[0] = "kvinde";

        actual[1] = document.getElementById("seksMinGang_alder").value;
        expected[1] = "56"; 
 
        actual[2] = document.getElementById("seksMinGang_vægt").value;
        expected[2] = "100";

        actual[1] = document.getElementById("seksMinGang_højde").value;
        expected[1] = "145";

        actual[1] = document.getElementById("seksMinGang_distance").value;
        expected[1] = "300"; 

        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        ); 

    }
    test17();

    // Do this when all tests are run
    reset();
    return report;
}

