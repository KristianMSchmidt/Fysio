function test_tiMeterGangTest(){

    function reset(){
        document.getElementById("tiMeterGangTest_tid1").value = ""
        document.getElementById("tiMeterGangTest_tid2").value = ""
        document.getElementById("tiMeterGangTest_tid3").value = ""
        document.getElementById("tiMeterGangTest_input1").style.display = "block";
        document.getElementById("tiMeterGangTest_input2").style.display = "block";
        document.getElementById("tiMeterGangTest_input3").style.display = "block";
        document.getElementById("tiMeterGangTestOutput").innerHTML = "";
        document.getElementById("tiMeterGangTest_error").innerHTML = "";
        document.getElementById("tiMeterGangTest_error").style.display = "block";
        document.getElementById("tiMeterGangTestOutput").style.display = "block";
        document.getElementById("tiMeterGangTest_email_btn").style.display = "none";
    }
    
    let report = {
        "testName" : "10-metergangtest",
        "results" : []
    }
    
    //Test 1
    function test1(){
        reset();
        document.getElementById("tiMeterGangTest_tid1").value = 4.343
        document.getElementById("tiMeterGangTest_tid2").value = 5
        document.getElementById("tiMeterGangTest_tid3").value = 1200

        let actual = tiMeterGangTest_beregner();
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
        document.getElementById("tiMeterGangTest_tid1").value = 20
        document.getElementById("tiMeterGangTest_tid2").value = 20
        document.getElementById("tiMeterGangTest_tid3").value = 20    

        let actual = tiMeterGangTest_beregner();
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
        document.getElementById("tiMeterGangTest_tid1").value = 5
        document.getElementById("tiMeterGangTest_tid2").value = 20.5
        document.getElementById("tiMeterGangTest_tid3").value = 3
    

        let actual = tiMeterGangTest_beregner();
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
        document.getElementById("tiMeterGangTest_tid1").value = 5
        document.getElementById("tiMeterGangTest_tid2").value = 1
        document.getElementById("tiMeterGangTest_input3").style.display = "none";
        
        let actual = tiMeterGangTest_beregner();
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
        document.getElementById("tiMeterGangTest_tid1").value = 7
        tiMeterGangTest_beregner();
        actual = document.getElementById("tiMeterGangTest_error").innerHTML;
        expected = "Tidsforbruget i 2. forsøg skal angives i sekunder";
           
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
        document.getElementById("tiMeterGangTest_tid1").value = -4;
        tiMeterGangTest_beregner();

        actual = document.getElementById("tiMeterGangTest_error").innerHTML;
        expected = "Du har angivet et urealistisk tidsforbrug i 1. forsøg." 
            
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

        document.getElementById("tiMeterGangTest_tid1").value = 10
        document.getElementById("tiMeterGangTest_tid2").value = 5
        document.getElementById("tiMeterGangTest_tid3").value = 2
        document.getElementById("remove_button").click();
        
        actual = tiMeterGangTest_beregner();

        expected = 2;
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

        document.getElementById("tiMeterGangTest_tid1").value = 22
        document.getElementById("tiMeterGangTest_tid2").value = 33
        document.getElementById("tiMeterGangTest_tid3").value = -34

        document.getElementById('tiMeterGangTest_beregn_knap').click();

        actual = document.getElementById("tiMeterGangTest_error").innerHTML;
        expected = "Du har angivet et urealistisk tidsforbrug i 3. forsøg." 
 
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

        document.getElementById("tiMeterGangTest_tid1").value = 22
        document.getElementById("tiMeterGangTest_tid2").value = 0
        document.getElementById("tiMeterGangTest_tid3").value = 3

        document.getElementById('tiMeterGangTest_beregn_knap').click();

        actual = document.getElementById("tiMeterGangTest_error").innerHTML;
        expected = "Du har angivet et urealistisk tidsforbrug i 2. forsøg." 
 
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

        document.getElementById("tiMeterGangTest_tid1").value = 10
        document.getElementById("tiMeterGangTest_tid2").value = 5
        document.getElementById("tiMeterGangTest_tid3").value = 2

        before = document.getElementById("tiMeterGangTest_email_btn").style.display;
        document.getElementById('tiMeterGangTest_beregn_knap').click();
        after =  document.getElementById("tiMeterGangTest_email_btn").style.display;

        expected = ['none', 'block'];
        actual = [before, after];

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

        document.getElementById("tiMeterGangTest_tid1").value = 5
        document.getElementById("tiMeterGangTest_tid2").value = 4
        document.getElementById("tiMeterGangTest_tid3").value = 3
        document.getElementById("remove_button").click();
        document.getElementById("remove_button").click();
        
        actual = tiMeterGangTest_beregner();
        expected = 2;

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

        document.getElementById("tiMeterGangTest_tid1").value = 5
        document.getElementById("tiMeterGangTest_tid2").value = 4
        document.getElementById("tiMeterGangTest_tid3").value = 3
        
        
        document.getElementById('tiMeterGangTest_beregn_knap').click();

        document.getElementById("tiMeterGangTest_tid1").dispatchEvent(new Event('input', { bubbles: true }));
        
        expected = "";
        actual = document.getElementById("tiMeterGangTestOutput").innerHTML;

        report["results"].push(
            {
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test12();

    // Do this when all tests are run
    reset();
    return report;
}



function run_test_suite(suiteName){
    report = suiteName();
    let expected, actual
    let all_passed = true;
    for(let i=0; i<report["results"].length; i++){
        expected = report["results"][i]["expected"];
        actual = report["results"][i]["actual"];

        if(Array.isArray(expected)){
            if(!arraysMatch(expected, actual)){
                all_passed = false;
                console.log(`${report["testName"]} Test #${i + 1} Failed. Expected:${expected} Actual:${actual}`);
            } 
        }
        else if(expected !== actual){
            all_passed = false;
            console.log(`${report["testName"]} Test #${i + 1} Failed. Expected:${expected} Actual:${actual}`);
        }
    }
    if(all_passed){
        console.log(`Ran ${report['results'].length} tests. All passed :=)`)
    }
}

run_test_suite(test_tiMeterGangTest);
