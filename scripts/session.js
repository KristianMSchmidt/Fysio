import {run_all_suites} from "./test_runner.js"

class Session{
    constructor(){
        this.run_test_suites();
        this.recoverDataFromUrl(); 
    }

    recoverDataFromUrl(){
        let url = window.location.href;    
        if (url.includes("?")){
           (new URL(url)).searchParams.forEach((x, y) => {
             document.getElementById(y).value = x
            });
        }
    }
    run_test_suites(){
        run_all_suites();
    }
}

new Session();
