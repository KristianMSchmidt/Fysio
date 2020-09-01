export function tiMeterGang_testSuite(){

    function reset(){
        document.getElementById("tiMeterGang_tid1").value = ""
        document.getElementById("tiMeterGang_tid2").value = ""
        document.getElementById("tiMeterGang_tid3").value = ""
        document.getElementById("tiMeterGang_input1").style.display = "block";
        document.getElementById("tiMeterGang_input2").style.display = "block";
        document.getElementById("tiMeterGang_input3").style.display = "block";
        document.getElementById("tiMeterGangOutput").innerHTML = "";
        document.getElementById("tiMeterGang_error").innerHTML = "";
        document.getElementById("tiMeterGang_error").style.display = "block";
        document.getElementById("tiMeterGangOutput").style.display = "block";
        document.getElementById("generate_email_btn").style.display = "none";
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

        let actual = tiMeterGang_beregner();
        let expected = 2.30;

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
        document.getElementById("tiMeterGang_tid2").value = 1
        document.getElementById("tiMeterGang_input3").style.display = "none";
        
        let actual = tiMeterGang_beregner();
        let expected = 10;

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
        let actual = document.getElementById("tiMeterGang_error").innerHTML;
        let expected = "Tidsforbruget i 2. forsøg skal angives i sekunder";
           
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

        let actual = document.getElementById("tiMeterGang_error").innerHTML;
        let expected = "Du har angivet et urealistisk tidsforbrug i 1. forsøg." 
            
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

        let actual = document.getElementById("tiMeterGang_error").innerHTML;
        let expected = "Du har angivet et urealistisk tidsforbrug i 3. forsøg." 
 
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

        let actual = document.getElementById("tiMeterGang_error").innerHTML;
        let expected = "Du har angivet et urealistisk tidsforbrug i 2. forsøg." 
 
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
        document.getElementById("tiMeterGang_tid3").value = 2

        let before = document.getElementById("generate_email_btn").style.display;
        document.getElementById('tiMeterGang_beregn_knap').click();
        let after =  document.getElementById("generate_email_btn").style.display;

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
    
    // Do this when all tests are run
    reset();
    return report;
}