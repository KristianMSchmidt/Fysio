import {run_all_suites} from "./test_runner.js"

//run all other tests
run_all_suites();

// recover data from url
let url=window.location.href;
if (url.includes("?")){
    console.log("recovering data from url...");
    //recover data from URL
    (new URL(url)).searchParams.forEach((x, y) => {
      document.getElementById(y).value = x
     });
}


 /*
 let pageList = [];

 $(document).on("pagecontainerbeforechange", function(event, ui){
     if(ui.toPage[0].id && !pageList.includes(ui.toPage[0].id)){
           pageList.push(ui.toPage[0].id)
        }
 });

 let k = 0;
 let l= ["#tiMeterGang", "#tiMeterGangAbout", "#seksMinGang", "#seksMinGangAbout", "#upAndGo", "#upAndGoAbout", "#frontpage"];

$(document).on('pagecreate', function(){
    if(k<l.length){
        $(":mobile-pagecontainer").pagecontainer( "change", $(l[k]));
        console.log(pageList)
    }
    k++;
});


 $(document).on('pagecreate', function(){
    $(':mobile-pagecontainer').on('pagecontainerbeforeshow', function(event, ui){
        console.log('pagecontainerbeforeshow triggered', ui.prevPage.selector);
    });
    $( ":mobile-pagecontainer" ).on( "pagecontainerhide", function( event, ui ) {
        console.log("This page was just shown: " + ui.nextPage.selector);
      });

      $(":mobile-pagecontainer").pagecontainer( "change", $("#tiMeterGang" ));
});

$( document ).on( "pageloadfailed", function( event, data ) {
 
    // Let the framework know we're going to handle things.
   
    event.preventDefault();
   
    // ... attempt to load some other page ...
    // at some point, if the load fails, either in this
    // callback, or through some other async means, call
    // reject like this:
   
    data.deferred.reject( data.absUrl, data.options );
})
*/