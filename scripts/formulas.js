
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



