export function recover_data_from_url(){
    let url=window.location.href;
    if (url.includes("?")){
      //recover data from URL
      (new URL(url)).searchParams.forEach((x, y) => {
          try{
          document.getElementById(y).value = x
          }
          catch{
              // nødløsning fordi radio-buttons ikke har id på samme måde
              if(y == "seksMinGang_gender"){
                  if (x=="mand"){
                      document.seksMinGangForm.seksMinGang_gender[0].checked=true;
                  }
                  else if (x =="kvinde"){
                      document.seksMinGangForm.seksMinGang_gender[1].checked=true;
                  }
                  else{
                      throw(`Data with name ${y} and value ${x} lost when recovering data from url`)
                  }
                      
              }
              else{
                  throw(`Input data with name ${y} and value ${x} lost when recovering data from url`)
              }
          }
      });
    }
}
  
  


