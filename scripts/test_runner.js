import {tiMeterGangTest_testSuite} from '../pages/redskaber/tiMeterGangTest_testsuite.js';
import {seksMinGangTest_testSuite} from '../pages/redskaber/seksMinGangTest_testsuite.js';

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
    if(all_passed){
        console.log(`Ran ${report['results'].length} tests. All passed :=)`)
    }
}
run_test_suite(tiMeterGangTest_testSuite);
run_test_suite(seksMinGangTest_testSuite);