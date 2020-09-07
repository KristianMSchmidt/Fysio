export function recover_data_from_url(url=window.location.href){
   
    (new URL(url)).searchParams.forEach((value, name) => {
        try{
        document.getElementById(name).value = value;
        }
        catch{
            // nødløsning fordi radio-buttons ikke har id på samme måde
            if(name == "seksMinGang_gender"){
                if (value=="mand"){
                    document.seksMinGangForm.seksMinGang_gender[0].checked=true;
                }
                else if (value =="kvinde"){
                    document.seksMinGangForm.seksMinGang_gender[1].checked=true;
                }
                else{
                    throw(`Data with name ${name} and value ${value} lost when recovering data from url`)
                }
                    
            }
            else{
                throw(`Input data with name ${name} and value ${value} lost when recovering data from url`)
            }
        }
    });

    // Press 'beregn button' after recovering data, such that result gets shown
    try{
        let fn_name = url.split('#')[1] + "_beregner";
        eval(fn_name)();
    }
    catch{
        console.log(url.split("#"))
        console.log(url.split('#')[1] + "_beregner");
        console.log(`Warning from recover: The URL ${url} does not countaing a function name after Hash`);
    }
}

  
  


