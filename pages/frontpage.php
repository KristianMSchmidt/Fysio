<!-- Frontpage -->
<div data-role="page" id="frontpage" data-theme ="a">

    <!-- Menu panel -->
    <div data-role="panel" data-position = "left" id="mypanel">
        <a href="https://kimarokko.000webhostapp.com">Hjemmeside</a>
        <p>Logo </p>
        <p>Kontakt</p>
        <p>Om appen</p>
    </div><!-- Menu panel -->

    <!-- header -->
    <div  data-role="header" 
        data-postition="fixed"
        data-tap-toggle="false">
        
        <a 
           data-direction = "reverse" 
           id="pageHeader"
           class="ui-btn ui-corner-all ui-btn-icon-notext ui-icon-bars" 
           href= "#mypanel">
        </a>   
        
        <h1 id="headerTitle"></h1>
        
        <img src = "images/dfys-logo4.gif" id = "logo" class = "ui-btn  ui-corner-all 
        ui-btn-icon-notext ui-btn-right"> 
    </div>  
    

    <!-- page content -->

   
    <div role="main" class="ui-content">
        <h3>Måleredskaber og test</h3>     

        <form>
        <fieldset data-role="controlgroup">
            <legend></legend>
            <label for="select1">Select A</label>
            <select name="select1" onchange="selectionHandler('overkategori')" id="select1">
            <option value="Krop&funktion">Krop & Funktion</option>
            <option value="Specialer">Specialer</option>
            <option value="Vis alle">Alle måleredskaber (alfabetisk)</option>
            </select>
        </fieldset>
        </form>

        <form>
        <fieldset data-role="controlgroup" id="Krop&funktion">
            <label for="select2a">Select A</label>
            <select name="select2a" onchange="selectionHandler('underkategori')" id="select2a">
            <option value="Nakke/ryg">Nakke/ryg</option>
            <option value="Skulder">Skulder</option>
            <option value="Hofte">Hofte</option>
            <option value="Knæ">Knæ</option>
            <option value="Ankel">Ankel</option>
            <option value="Balance">Balance</option>
            <option value="Gang">Gang</option>
            <option value="Mobilitet">Mobilitet</option>
            <option value="Funktion">Funktion(niveau/motorisk)</option>
            <option value="Smerte">Smerte</option>     
            <option value="Kondition">Kondition</option>
            <option value="Livskvalitet">Livskvalitet</option>           
            </select>
        </fieldset>
        </form>

        <form>
        <fieldset data-role="controlgroup" id="Specialer" style="display:none">
            <label for="select2b">Select A</label>
            <select name="select2b" onchange="selectionHandler('underkategori')" id="select2b">
            <option value="Geronto-geriatri">Geronto-geriatri</option>
            <option value="HLI-fys">Hjerte, lunge og intensiv fysioterapi</option>
            <option value="Idræt">Idræt</option>
            <option value="Musku">Muskuloskeletale lidelser</option>
            <option value="Neurologi">Neurologi</option>
            <option value="Ps&Ps">Psykiatri og psykosomatik</option>
            <option value="Pædiatri">Pædiatri</option>
            <option value="Urologit">Urologi</option>
            <option value="Rehabilitering">Rehabilitering</option>
            <option value="Sundhedsfremme">Sundhedsfremme og forebyggelser</option>              
            </select>
        </fieldset>
        </form>

        <p id="hvadVises">Måleredskaber i den valgte kategori:</p>


        <!-- LINK TIL SAMTLIGE TEST -->
        <ul data-role="listview" data-inset="true" date-theme ="a">
        <!--       <li data-role="list-divider">Her alle alle måleredskaber i den valgte kategori</li> -->
        <li><a href="#" class="TestLink Gang Funktion" style="font-weight:normal; display:none">10-meter gangtest</li></a>
        <li><a href="#" class="TestLink Balance Gang Funktion" style="font-weight:normal; display:none   ">2,45m up-and-go-test</li></a>
        <li><a href="#" class="TestLink Hofte Knæ Gang Funktion" style="display:none">6-minuttersgangtest</li></a>
        <li><a href="#" style="display:none">Amotrophic Lateral Sclerosis Rating Scale (ALS) -Revised</li></a>
        <li><a href="#" style="display:none">Alberta Infant Motor Scale (AIMS)</li></a>
        <li><a href="#" style="display:none">Action Research Arm Test (ARAT)</li></a>

        <li><a href="#" style="display:none">Balance Evaluation System Test (BESTest)</li></a>
        <li><a href="#" style="display:none">Barthel Indeks</li></a>
        <li><a href="#" style="display:none">Bayley-III Motor Scales</li></a>
        <li><a href="#" style="display:none">Berg Balanceskala</li></a>
        <li><a href="#" style="display:none">Bip-test</li></a>
        <li><a href="#" style="display:none">Borg-15</li></a>
        <li><a href="#" style="display:none">Borg CR 10</li></a>
        <li><a href="#" style="display:none">Borgs Skala for anstrengelse</li></a>
        <li><a href="#" style="display:none">Bruininks-Oseretsky Test of Motor Proficiency</li></a>
        <li><a href="#" style="display:none">Basic Amputee Mobility Score (BAMS)</li></a>

        <li><a href="#" class="Nakke/ryg Funktion Smerte" style="display:none">Roland Morris Questionnaire</li></a>

        
    </div>
</div>

   




<script>
        function selectionHandler(selector){

            let selection1 = document.getElementById("select1").value;

            console.log("Selection", selection1);
           
            switch(selection1){
                case "Krop&funktion":   
                    console.log(selection1);  
                    let selection2a = document.getElementById("select2a").value;
                    console.log("selection", selection2a)
                    document.getElementById('Krop&funktion').style.display="block";
                    document.getElementById('Specialer').style.display = "none";
                   // document.getElementById('ABC').style.display = "none";
                   document.getElementById("hvadVises").innerHTML = "Måleredskaber i den valgte kategori:"

                   //document.getElementsByClassName(selection2a)[0].style.display="block"
                   let x=document.getElementsByClassName(selection2a);
                    for (let i=0; i < x.length; i++){

                        document.getElementsByClassName(selection2a)[i].style["display"]="block";;
                    }
                  // let x=document.getElementsByClassName(selection2a);
                   //x.prototype.forEach(e => e.style.display="block")

                   //console.log("Alle i klassen",document.getElementsByClassName(selection2a)[0])

                break;
        
                case "Specialer":  
                    console.log("case Specialer");    
                    let selection2b = document.getElementById("select2b").value;
                    console.log("selection", selection2b)

                    document.getElementById('Krop&funktion').style.display= "none";
                    document.getElementById('Specialer').style.display = "block";
                    //document.getElementById('Vis alle').style.display = "none";
                    document.getElementById("hvadVises").innerHTML = "Her er alle måleredskaber i den valgte kategori:"

                    document.getElementsByClassName(selection2b).style="block";
                    console.log("Alle i klassen",document.getElementsByClassName(selection2b))
                break;
                
                case "Vis alle":    
                    console.log("Viser alle")
                    document.getElementById('Krop&funktion').style.display="none";
                    document.getElementById('Specialer').style.display = "none";
                   // document.getElementById('ABC').style.display = "block";
                   document.getElementById("hvadVises").innerHTML = "Alle måleredskaber:"
                break;

            }

            console.log(document.getElementById('Krop&funktion').style.display)
            console.log(document.getElementById('Specialer').style.display)
           // console.log(document.getElementById('ABC').style.display)
        }
        selectionHandler("overkategori");
        </script>
     

        