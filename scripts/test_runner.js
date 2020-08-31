import {tiMeterGangTest_testSuite} from '../pages/redskaber/tiMeterGangTest_testsuite.js';
import {seksMinGangTest_testSuite} from '../pages/redskaber/seksMinGangTest_testsuite.js';

document.getElementById("debug_info").style.display = "block";

let all_suites = [
    tiMeterGangTest_testSuite, 
    seksMinGangTest_testSuite
]

function run_test_suite(suiteName){
    let report = suiteName();
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
    //if(all_passed){
    //    console.log(`Ran ${report['results'].length} tests. All passed :=)`)
    //}
    return {
        "all_passed": all_passed,
        "num_tests": report["results"].length
    }
}

export function run_all_suites(){
    let num_suites = 0
    let total_test_num = 0;
    let all_suites_passed = true;
    let all_in_current_passed, num_tests_in_current;
    for(let i= 0; i<all_suites.length; i++){
        let feedback = run_test_suite(all_suites[i]);
        all_in_current_passed = feedback['all_passed'];
        num_tests_in_current = feedback['num_tests']; 
        total_test_num += num_tests_in_current;
        num_suites++;
        if (all_in_current_passed == false){
            all_suites_passed = false;
        }
    }
    if(all_suites_passed){
        console.log(`Ran ${num_suites} testsuites with a total of ${total_test_num} tests. All passed :=)`);
        document.getElementById('debug_info').innerHTML += `<br />Ran ${num_suites} testsuites with a total of ${total_test_num} tests. All passed :=)`;
    }
    else{
        document.getElementById('debug_info').innerHTML += " There were errors. Check console";
    }
}

