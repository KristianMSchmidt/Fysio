import {recover_data_from_url} from '../../scripts/recover_data_from_url.js';

export function tiMeterGang_testSuite(){

    function reset(){
        document.getElementById("tiMeterGang_tid1").value = ""
        document.getElementById("tiMeterGang_tid2").value = ""
        document.getElementById("tiMeterGang_tid3").value = ""
        document.getElementById("tiMeterGang_input1").style.display = "block";
        document.getElementById("tiMeterGang_input2").style.display = "block";
        document.getElementById("tiMeterGang_input3").style.display = "block";
        document.getElementById("tiMeterGangOutput").innerHTML = "";
        document.getElementById("tiMeterGang_tid1_error").style.display = "none";
        document.getElementById("tiMeterGang_tid2_error").style.display = "none";
        document.getElementById("tiMeterGang_tid3_error").style.display = "none";
        document.getElementById("tiMeterGang_generate_email_btn").style.display = "none";
    }
    
    let report = {
        "testName" : "10-metergangtest",
        "results" : []
    }
    
    //Test 1
    function test1(){
        reset();
        document.getElementById("tiMeterGang_tid1").value = 4.343
        document.getElementById("tiMeterGang_tid2").value = 5
        document.getElementById("tiMeterGang_tid3").value = 1200

        document.getElementById("tiMeterGang_beregn_knap").click();

        let actual = document.getElementById("tiMeterGangOutput").innerHTML;
        let expected = `Bedste tid er 4.34 sek., svarende til en ganghastighed på 2.3 m/s.`;

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
        document.getElementById("tiMeterGang_tid1").value = 20
        document.getElementById("tiMeterGang_tid2").value = 20
        document.getElementById("tiMeterGang_tid3").value = 20    

        let actual = tiMeterGang_beregner();
        let expected = 0.5;

        report["results"].push(
            {
            "expected" : expected,
            "actual" : actual
             }
        );
    }
    test2();

    function test3(){
        reset();
        document.getElementById("tiMeterGang_tid1").value = 5
        document.getElementById("tiMeterGang_tid2").value = 20.5
        document.getElementById("tiMeterGang_tid3").value = 3
    

        let actual = tiMeterGang_beregner();
        let expected = 3.33;

        report["results"].push(
            {
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test3();


    //Test 4
    function test4(){
        reset();
        document.getElementById("tiMeterGang_tid1").value = 5
        document.getElementById("tiMeterGang_tid2").value = 3
        document.getElementById("tiMeterGang_input3").style.display = "none";
        
        let actual = tiMeterGang_beregner();
        let expected = 3.33;

        report["results"].push(
            {
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test4();

    //Test 5
    function test5(){
        reset();
        document.getElementById("tiMeterGang_tid1").value = 7
        tiMeterGang_beregner();
        let actual = document.getElementById("tiMeterGang_tid2_error").innerHTML;
        let expected = "Tidsforbruget skal angives i sekunder";
           
        report["results"].push(
            {
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test5();

    
    //Test 6
    function test6(){
        reset();
        document.getElementById("tiMeterGang_tid1").value = -4;
        tiMeterGang_beregner();

        let actual = document.getElementById("tiMeterGang_tid1_error").innerHTML;
        let expected = "Tidsforbruget kan ikke være -4 sek." 
            
        report["results"].push(
            {
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test6();
    
    //Test 7
    function test7(){
        reset();

        document.getElementById("tiMeterGang_tid1").value = 10
        document.getElementById("tiMeterGang_tid2").value = 5
        document.getElementById("tiMeterGang_tid3").value = 2
        document.getElementById("remove_button").click();
        
        let actual = tiMeterGang_beregner();
        let expected = 2;
        
        report["results"].push(
            {
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test7();

    //Test 8
    function test8(){
        reset();

        document.getElementById("tiMeterGang_tid1").value = 22
        document.getElementById("tiMeterGang_tid2").value = 33
        document.getElementById("tiMeterGang_tid3").value = -34

        document.getElementById('tiMeterGang_beregn_knap').click();

        let actual = document.getElementById("tiMeterGang_tid3_error").innerHTML;
        let expected = "Tidsforbruget kan ikke være -34 sek." 
 
        report["results"].push(
            {
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test8();

    //Test 9
    function test9(){
        reset();

        document.getElementById("tiMeterGang_tid1").value = 22
        document.getElementById("tiMeterGang_tid2").value = 0
        document.getElementById("tiMeterGang_tid3").value = 3

        document.getElementById('tiMeterGang_beregn_knap').click();

        let actual = document.getElementById("tiMeterGang_tid2_error").innerHTML;
        let expected = "Tidsforbruget kan ikke være 0 sek." 
  
        report["results"].push(
            {
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test9();

    //Test 10
    function test10(){
        reset();

        document.getElementById("tiMeterGang_tid1").value = 10
        document.getElementById("tiMeterGang_tid2").value = 5
        document.getElementById("tiMeterGang_tid3").value = 20

        let before = document.getElementById("tiMeterGang_generate_email_btn").style.display;
        document.getElementById('tiMeterGang_beregn_knap').click();
        let after =  document.getElementById("tiMeterGang_generate_email_btn").style.display;

        let expected = ['none', 'block'];
        let actual = [before, after];

        report["results"].push(
            {
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test10();

    //Test 11
    function test11(){
        reset();

        document.getElementById("tiMeterGang_tid1").value = 5
        document.getElementById("tiMeterGang_tid2").value = 4
        document.getElementById("tiMeterGang_tid3").value = 3
        document.getElementById("remove_button").click();
        document.getElementById("remove_button").click();
        
        let actual = tiMeterGang_beregner();
        let expected = 2;

        report["results"].push(
            {
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test11();

    //Test 12
    function test12(){
        // Tester at resultatet ryddes, når der ændres i inputfelt
        reset();

        document.getElementById("tiMeterGang_tid1").value = 5
        document.getElementById("tiMeterGang_tid2").value = 4
        document.getElementById("tiMeterGang_tid3").value = 3
    
        document.getElementById('tiMeterGang_beregn_knap').click();

        document.getElementById("tiMeterGang_tid1").dispatchEvent(new Event('input', { bubbles: true }));
        
        let expected = "";
        let actual = document.getElementById("tiMeterGangOutput").innerHTML;

        report["results"].push(
            {
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test12();

    function test13(){        
        reset();
        document.getElementById("tiMeterGang_tid1").value = 5
        document.getElementById("tiMeterGang_tid2").value = 4
        document.getElementById("tiMeterGang_tid3").value = 3
        document.getElementById("tiMeterGang_beregn_knap").click();

        let actual = document.getElementById("emailSubject").value;
        let expected = "10-meter gangtest";    
 
        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        ); 
    }
    test13();

    function test14(){        
        reset();
        document.getElementById("tiMeterGang_tid1").value = 33
        document.getElementById("tiMeterGang_tid2").value = 445
        document.getElementById("tiMeterGang_tid3").value = 55
        document.getElementById("tiMeterGang_beregn_knap").click();

        let actual = document.getElementById('emailContent').value.split("?")[1];
        let expected = generate_url("tiMeterGang").split("?")[1];

        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        ); 
    }
    test14();

    function test15(){        
        reset();
        let actual = [];
        let expected = []

        document.getElementById("tiMeterGang_tid1").value = 45;

        actual[0] = document.getElementById("tiMeterGang_tid2_error").style.display;
        expected[0] = "none"

        document.getElementById("tiMeterGang_beregn_knap").click();

        //no 2nd input, so an error should be shown for second input value
        actual[1] = document.getElementById("tiMeterGang_tid1_error").style.display;
        expected[1] = "none"
       
        actual[2] = document.getElementById("tiMeterGang_tid2_error").style.display;
        expected[2] = "block"

        actual[3] = document.getElementById("tiMeterGang_tid3_error").style.display;
        expected[3] = "none"

        actual[4] = document.getElementById("tiMeterGang_generate_email_btn").style.display;
        expected[4] = "none";

        document.getElementById("remove_button").click()
        document.getElementById("remove_button").click()
        document.getElementById("tiMeterGang_beregn_knap").click();

        actual[5] = document.getElementById("tiMeterGang_tid1_error").style.display;
        expected[5] = "none"
       
        actual[6] = document.getElementById("tiMeterGang_tid2_error").style.display;
        expected[6] = "none"

        actual[7] = document.getElementById("tiMeterGang_tid3_error").style.display;
        expected[7] = "none"
        
        actual[8] = document.getElementById("tiMeterGang_generate_email_btn").style.display;
        expected[8] = "block";

        actual[9] = document.getElementById("tiMeterGangOutput").innerHTML;
        expected[9] = "Bedste tid er 45 sek., svarende til en ganghastighed på 0.22 m/s.";
        
        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        ); 
    }
    test15();
 
    function test16(){        
        reset();
        let actual = [];
        let expected = []

        document.getElementById("tiMeterGang_beregn_knap").click();

        actual[0] = document.getElementById("tiMeterGang_tid1_error").style.display;
        expected[0] = "block"

        //simulate input event
        let event = new Event('input', { 'bubbles': true, 'cancelable': true });
        document.getElementById("tiMeterGang_tid1").dispatchEvent(event);

        actual[1] = document.getElementById("tiMeterGang_tid1_error").style.display;
        expected[1] = "none"


        document.getElementById("tiMeterGang_beregn_knap").click();

        actual[2] = document.getElementById("tiMeterGang_tid1_error").style.display;
        expected[2] = "block"

        //simulate input event input 2 (should not change errormessage in input 1)
        let event2 = new Event('input', { 'bubbles': true, 'cancelable': true });
        var el = document.getElementById("tiMeterGang_tid2");
        el.dispatchEvent(event2);

        actual[3] = document.getElementById("tiMeterGang_tid1_error").style.display;
        expected[3] = "block"

        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        ); 
    }
    test16();

    function test17(){        
        //Her testes generate url
        reset();

        document.getElementById("tiMeterGang_tid1").value = 33;
        document.getElementById("tiMeterGang_tid2").value = 445;
        document.getElementById("tiMeterGang_tid3").value = 55;

        document.getElementById("tiMeterGang_beregn_knap").click();
        window.location.hash = "tiMeterGang";
        let actual = generate_url("tiMeterGang").split('fysio/?')[1];     
        let expected = "tiMeterGang_tid1=33&tiMeterGang_tid2=445&tiMeterGang_tid3=55#tiMeterGang";

        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        ); 
    }
    test17();

    function test18(){       
        //Her testes generate_url og at mail-adressen indsættes i mailen 
        reset();

        document.getElementById("tiMeterGang_tid1").value = 2;
        document.getElementById("tiMeterGang_tid2").value = 445;
        document.getElementById("tiMeterGang_tid3").value = 55;

        document.getElementById("tiMeterGang_beregn_knap").click();

        window.location.hash = "tiMeterGang";
        let actual = document.getElementById('emailContent').value.split("?")[1]; 
        let expected = "tiMeterGang_tid1=2&tiMeterGang_tid2=445&tiMeterGang_tid3=55#tiMeterGang"

        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        ); 
    }
    test18();

    function test19(){        
        //Her forsøger jeg at teste funktionen recover_data_from_url 
        reset();      
        let url = window.location.href.split("fysio/")[0] + "fysio/?tiMeterGang_tid1=2&tiMeterGang_tid2=445&tiMeterGang_tid3=55#tiMeterGang";

        recover_data_from_url(url);

        let actual = [];
        let expected = [];

        actual[0] = document.getElementById("tiMeterGang_tid1").value;
        expected[0] = "2";

        actual[1] = document.getElementById("tiMeterGang_tid2").value;
        expected[1] = "445"
 
        actual[2] = document.getElementById("tiMeterGang_tid3").value;
        expected[2] = "55";

        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        ); 
    }
    test19();



 
    // Do this when all tests are run
    reset();
    return report;
}