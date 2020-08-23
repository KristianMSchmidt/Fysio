// Måske kan jeg  have alle formlerne samlet i ét dokument, så der ikke er så mange små filer. 
// Denne fil kan så kaldes fra index. 

function nakkeTestFormula(){
    console.log("Nu bruges nakkeTest Formlen")
    const testId = "nakkeTest";
    let uger = parseFloat(document.getElementById('antalUger').value);
    let laengde = parseFloat(document.getElementById('laengde').value);
    let foedselsaar = parseFloat(document.getElementById('foedselsaar').value);
    let result = uger + laengde + foedselsaar;
    return result
}

function tiMGTFormula(){
    console.log("Nu bruges tiMGT Formlen")
    const testId = "tiMGT";
    let tid1 = parseFloat(document.getElementById('tiMGT_tid1').value);
    let tid2 = parseFloat(document.getElementById('tiMGT_tid2').value);
    let tid3 = parseFloat(document.getElementById('tiMGT_tid3').value);
    let bedsteTid = Math.min(tid1, tid2, tid3);
    let result = 10/bedsteTid;
    return result
}




