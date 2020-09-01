// This test is not really working --> concludes even if there is problem with pages
// But if i look at the page changes, I can see problems with blank pages
export function DOM_testSuite(){
    let all_pages =[
        "tiMeterGang", 
        "tiMeterGangAbout", 
        "seksMinGang", 
        "seksMinGangAbout", 
        "upAndGo", 
        "upAndGoAbout",
        "email", 
        "frontpage"];

    
    let report = {
        "testName" : "DOM",
        "results" : []
    }
    
    //Test 1    
    function test1(){
        let actual = [];
        let expected = all_pages;

        for(let i=0; i<all_pages.length; i++){ 
            try{         
                actual[i] = document.getElementById(expected[i]).id;
            }
            catch{
                console.log(`Page with id "${expected[i]}" not in DOM`)
            }
        }
    
        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test1();

    //Test 2
    function test2(){
        let expected = [];
        let actual = [];

        for(let i=0; i<all_pages.length; i++){ 
            try{        
                actual[i] = document.querySelectorAll(`#${all_pages[i]} div`)[1].className;  
                expected[i] = "ui-content";
            }
            catch{
                actual[i] = "non-existent";  
                expected[i] = "ui-content";
                console.log(`Page with id "${all_pages[i]}" does not have ui-content as second div`)
            }
        }
        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test2();

    //Test 2
    function test3(){
        let expected = [];
        let actual = [];

        for(let i=0; i<all_pages.length; i++){ 
            try{        
                actual[i] = document.querySelectorAll(`#${all_pages[i]} div`)[0].getAttribute('data-role');  
                expected[i] = "header";
            }
            catch{
                console.log(`Page with id "${all_pages[i]}" does not have "header" as first div`)
            }
        }
     
        report["results"].push({
            "expected" : expected,
            "actual" : actual
            }
        );
    }
    test3();
    
    return report;
}


/*
    let k = 0;
    let l= ["#tiMeterGang", 
            "#tiMeterGangAbout", 
            "#seksMinGang", 
            "#seksMinGangAbout", 
            "#upAndGo", 
            "#upAndGoAbout",
            "#email", 
            "#frontpage"];
    
    $(document).on('pagecreate', function(){
        try{
        console.log(document.getElementById("tiMeterrGang"));
        }
        catch{
            console.log("catch")
        }
    })
  */      
            /*    
    $(document).on('pagecreate', function(){
        console.log("Hej")
        if(k<l.length){
            console.log("Trying to load page"  + l[k])
            $(":mobile-pagecontainer").pagecontainer( "change", $(l[k]), {transition: "none"});
        }
        k++;
    })

    $(document).on("pagecontainerbeforechange", function(event, ui){
        if(ui.toPage[0].id){
            //console.log(ui.toPage[0].childNodes)
            //console.log(ui.toPage[0].id)
        }
    })

}*/