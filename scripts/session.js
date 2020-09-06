import {recover_data_from_url} from './recover_data_from_url.js';
import {run_all_suites} from './test_runner.js';

let DEBUG = true;

if (DEBUG){
    //console.log("Debug Mode");
    run_all_suites();
}

else{
    console.log("No Debugging")
}

if (window.location.href.includes('?')){
    recover_data_from_url();
}





/*
import {run_all_suites} from './test_runner.js'
import {recover_data_from_url} from './recover_data_from_url.js'


function debug(){
    let hash = window.location.hash;
    run_all_suites();
    window.location.hash = hash;   // I have do to this, as debug tests interferes with hash 
}
debug();

recover_data_from_url();
  */  
// jeg kunne selfølgelig også gøre det sådan, at hvis url indeholde ? så debugges der ikke. 







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