// Måske kan jeg  have alle formlerne samlet i ét dokument, så der ikke er så mange små filer. 
// Denne fil kan så kaldes fra index. 

function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}

function nakkeTestFormula(){
    console.log("Nu bruges nakkeTest Formlen")
    const testId = "nakkeTest";
    let uger = parseFloat(document.getElementById('antalUger').value);
    let laengde = parseFloat(document.getElementById('laengde').value);
    let foedselsaar = parseFloat(document.getElementById('foedselsaar').value);
    let result = uger + laengde + foedselsaar;
    return result
}

function isNumeric(n){
    return !isNaN(parseFloat(n)) & isFinite(n);
}
function tiMGTFormula(){
    //10-meter-gangtest
    console.log("Nu bruges tiMGT Formlen!")
    const testId = "tiMGT";
    let tider = [];
    let tid1 = parseFloat(document.getElementById('tiMGT_tid1').value);
    console.log(tid1)
    if(isNumeric(tid1)){
       tider.push(tid1) 
    }
    console.log("TIder", tider)
    let tid2 = parseFloat(document.getElementById('tiMGT_tid2').value);
    if(isNumeric(tid2)){
        tider.push(tid2) 
     }
 
    let tid3 = parseFloat(document.getElementById('tiMGT_tid3').value);
    if(isNumeric(tid3)){
        tider.push(tid3) 
     }
     console.log("TIder", tider)

    let bedsteTid = Math.min(...tider);

    console.log("BEDSTE",bedsteTid)
    let result = {number: roundToTwo(10/bedsteTid),
                  unit: "m/s"};
    console.log(result)
    return result
}




