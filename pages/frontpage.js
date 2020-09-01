function selectionHandler(){

    let selection1 = document.getElementById("select1").value;

    let alleTestLink = document.getElementsByClassName("testLink");

    switch(selection1){
        case "Krop&funktion":   
            
            document.getElementById('Krop&funktion').style.display="block";
            document.getElementById('Specialer').style.display = "none";
            //document.getElementById('searchInput').style.display = "none";

            let selection2a = document.getElementById("select2a").value;

            for (let i=0; i < alleTestLink.length; i++){
                if(!alleTestLink[i].classList.contains(selection2a)){
                alleTestLink[i].style["display"] = "none";                           
                }
                else{
                    alleTestLink[i].style["display"]="block";
                }
            }
            "Måleredskaber i den valgte kategori"
        break;

        case "Specialer":  
            document.getElementById('Krop&funktion').style.display= "none";
            document.getElementById('Specialer').style.display = "block";
            //document.getElementById('searchInput').style.display = "none";

            let selection2b = document.getElementById("select2b").value;

            for (let i=0; i < alleTestLink.length; i++){
                if(!alleTestLink[i].classList.contains(selection2b)){
                alleTestLink[i].style["display"] = "none";                           
                }
                else{
                alleTestLink[i].style["display"]="block";
                }
            }
        break;
        
        case "Vis alle":    
            document.getElementById('Krop&funktion').style.display="none";
            document.getElementById('Specialer').style.display = "none";
            //document.getElementById('searchInput').style.display = "block";

            for (let i=0; i < alleTestLink.length; i++){
                alleTestLink[i].style["display"]="block";
            }
        break;
    }
}
selectionHandler("overkategori");

function searchInputHandler(){

    document.getElementById("select1").value = "Vis alle";
    document.getElementById("select1").dispatchEvent(new Event('change'));

    document.getElementById('Krop&funktion').style.display="none";
    document.getElementById('Specialer').style.display = "none";
    //document.getElementById('Vis alle').style.display = "block";                        

    let searchInput = document.getElementById("searchInput").value.toLowerCase();

    let alleTestLink = document.getElementsByClassName("testLink");

    for (let i=0; i < alleTestLink.length; i++){
        if(
            alleTestLink[i].innerHTML.toLowerCase().startsWith(searchInput)
            ||  // lige nu kan første kriterie slettes, da includes inkluderer dette...
            alleTestLink[i].innerHTML.toLowerCase().includes(searchInput)
        )
        {
            alleTestLink[i].style.display = "block";
        }
        else{
            alleTestLink[i].style.display = "none";
        }
    }
}

document.getElementById("searchInput").addEventListener('input', event => {
    searchInputHandler()
})
document.getElementById("searchInput").addEventListener('click', event => {
    searchInputHandler()
})
