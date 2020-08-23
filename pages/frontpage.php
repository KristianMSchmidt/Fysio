<!-- Frontpage -->
<div data-role="page" id="frontpage" data-theme ="a">

    <!-- Menu panel -->
    <div data-role="panel" data-position = "left" id="mypanel">
        <p>
        Dansk Selskab for Fysioterapi er ansvarlig for vurdering af test og måleredskaber. Siden bliver løbende opdateret med nye måleredskaber og opdatering af de eksisterende måleredskaber.
        </p>
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

        

<!--
<form>
    <fieldset data-role="controlgroup" data-theme="b" data-type="horizontal">
        <legend>Horizontal:</legend>
        <input type="radio" name="radio-choice-t-6" id="radio-choice-t-6a" value="on" checked="checked">
        <label for="radio-choice-t-6a">Alle</label>
        <input type="radio" name="radio-choice-t-6" id="radio-choice-t-6b" value="off">
        <label for="radio-choice-t-6b">Krop & Funktion</label>
<input type="radio" name="radio-choice-t-6" id="radio-choice-t-6c" value="other">
<label for="radio-choice-t-6c">Specialer</label></fieldset>
</form> -->


        <form>
        <fieldset data-role="controlgroup">
            <legend></legend>
            <label for="select1">Select A</label>
            <select name="select1" onchange="selectionHandler('overkategori')" id="select1">
            <option value="Krop&funktion">Krop & Funktion</option>
            <option value="Specialer">Specialer</option>
            <option value="Vis alle">Alle måleredskaber</option>
 
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

        <fieldset data-role="controlgroup" id="Specialer" style="display:none">

            <label for="select2b">Select A</label>
            <select name="select2b" onchange="selectionHandler('underkategori')" id="select2b">

            <option value="Geronto">Geronto-geriatri</option>
            <option value="HLI-fys">Hjerte, lunge og intensiv fysioterapi</option>
            <option value="Idræt">Idræt</option>
            <option value="Musku">Muskuloskeletale lidelser</option>
            <option value="Neuro">Neurologi</option>
            <option value="PsPs">Psykiatri og psykosomatik</option>
            <option value="Pædiatri">Pædiatri</option>
            <option value="Urologi">Urologi</option>
            <option value="Rehab">Rehabilitering</option>
            <option value="Sundhed">Sundhedsfremme og forebyggelser</option>              
            </select>

        </fieldset>

                
        </form style="display:block">
            <input id ="searchInput" placeholder="Søg i alle målereskaber" value = ""/> 
        <form>


        <!-- LINK TIL SAMTLIGE TEST I ALFABETISK RÆKKEFØLGE -->
        <ul data-role="listview" data-inset="true" date-theme ="a">
        
        <li data-role="list-divider"> </li> 

        <li><a href="#tiMGT" style="display:none" class="testLink Gang Funktion Geronto HLI-fys Musku Neuro Rehab" >10-meter gangtest</li></a>
        <li><a href="#" style="display:none" class="testLink Balance Gang Funktion Geronto HLI-fys Musku Neuro Rehab">2,45m up-and-go-test</li></a>
        <li><a href="#" style="display:none" class="testLink Hofte Knæ Gang Funktion Geronto HLI-fys Musku Neuro Rehab">6-minuttersgangtest</li></a>


        <li><a href="#" style="display:none" class="testLink Funktion Neuro Rehab">Amyotrophic Lateral Sclerosis Rating Scale (ALS) -Revised</li></a>
        <li><a href="#" style="display:none" class="testLink Neuro Pædiatri Rehab">Alberta Infant Motor Scale (AIMS)</li></a>
        <li><a href="#" style="display:none" class="testLink Funktion Neuro Rehab">Action Research Arm Test (ARAT)</li></a>

        <li><a href="#" style="display:none" class="testLink Balance Geronto Musku Neuro Rehab">Balance Evaluation System Test (BESTest)</li></a>
        <li><a href="#" style="display:none" class="testLink Mobilitet Funktion Geronto HLI-fys Neuro Rehab">Barthel Indeks</li></a>
        <li><a href="#" style="display:none" class="testLink Pædiatri Rehab">Bayley-III Motor Scales</li></a>
        <li><a href="#" style="display:none" class="testLink Balance Geronto HLI-fys Musku Neuro Rehab">Berg Balanceskala</li></a>
        <li><a href="#" style="display:none" class="testLink HLI-fys Idræt Musku Rehab Sundhed">Bip-test</li></a>
        <li><a href="#" style="display:none" class="testLink Kondition Geronto Idræt Musku Neuro Rehab Sundhed">Borg-15</li></a>
        <li><a href="#" style="display:none" class="testLink Mobilitet Funktion Smerte HLI-fys Idræt Rehab Sundhed">Borg CR 10</li></a>
        <li><a href="#" style="display:none" class="testLink Funktion Kondition Geronto HLI-fys Idræt Musku Neuro Rehab Sundhed">Borgs Skala for anstrengelse</li></a>
        <li><a href="#" style="display:none" class="testLink Pædiatri Rehab">Bruininks-Oseretsky Test of Motor Proficiency</li></a>
        <li><a href="#" style="display:none" class="testLink Mobilitet Funktion Rehab">Basic Amputee Mobility Score (BAMS)</li></a>

        <li><a href="#" style="display:none" class="testLink Skulder Smerte Idræt Musku">Constant Shoulder Score</li></a>
        <li><a href="#" style="display:none" class="testLink Funktion Livskvalitet HLI-fys Rehab">COPD Assessment Test (CAT)</li></a>
        <li><a href="#" style="display:none" class="testLink HLI-fys Idræt Musku Rehab">Coopers Løbetest</li></a>
        <li><a href="#" style="display:none" class="testLink Musku">Copenhagen Neck Functional Disability Scale(CNFDS)</li></a>
        <li><a href="#" style="display:none" class="testLink Mobilitet Geronto Idræt Musku Rehab">Cumulated Ambutation Score (CAS)</li></a>

        <li><a href="#" style="display:none" class="testLink Urologi">Dansk Prostata Symptom Score</li></a>
        <li><a href="#" style="display:none" class="testLink Balance Gang Mobilitet Funktion Geronto HLI-fys Neuro Rehab">De Morton Mobility Index</li></a>
        <li><a href="#" style="display:none" class="testLink Skulder Livskvalitet">Disabilities of the Arm, Shoulder and Hand</li></a>
        <li><a href="#" style="display:none" class="testLink Geronto Neuro Rehab">Dizzinesss Handicap Inventoy (DHI)</li></a>
        <li><a href="#" style="display:none" class="testLink Balance Gang Geronto Neuro Rehab">Dynamic Gait Index</li></a>

        <li><a href="#" style="display:none" class="testLink Mobilitet Funktion Neuro Rehab">Early Functional Abilities (EFA)</li></a>
        <li><a href="#" style="display:none" class="testLink Mobilitet Funktion Geronto Neuro Rehab">Elderly Mobility Scale (EMS)</li></a>
        <li><a href="#" style="display:none" class="testLink Kondition HLI-fys Idræt Musku Pædiatri Rehab">Et-punktstest</li></a>
        <li><a href="#" style="display:none" class="testLink Livskvalitet Geronto HLI-fys Musku PsPs Rehab Sundhed">European Quality of Life - 5 Dimensions</li></a>
        <li><a href="#" style="display:none" class="testLink Skulder Livskvalitet Musku">Et livskvalitet spørgeskema til patienter med scapula alate (SA-Q)</li></a>

        <li><a href="#" style="display:none" class="testLink Geronto Neuro Rehab Sundhed Geronto Neuro Rehab Sundhed">Falls Efficacy Scale-International (FES-I)</li></a>
        <li><a href="#" style="display:none" class="testLink HLI-fys Neuro Rehab">Fatigue Severity Scale (FSS)</li></a>
        <li><a href="#" style="display:none" class="testLink Nakke/ryg Smerte Musku PsPs">Fear-Avoidance Beliefs Questionnaire (FABQ)</li></a>
        <li><a href="#" style="display:none" class="testLink Neuro Rehab">Fugl-Meyer Assessment Scale</li></a>
        <li><a href="#" style="display:none" class="testLink Skulder Funktion Neuro Rehab">Fugl-Meyer Undersøgelse af Armmotorik (FMA)</li></a>
        <li><a href="#" style="display:none" class="testLink Musku Rehab">Forgotten Joint Score 12 (FJS-12)</li></a>
        <li><a href="#" style="display:none" class="testLink Musku Neuro Rehab">Functional Independence Measure(FIM)</li></a>

        <li><a href="#" style="display:none" class="testLink HLI-fys Idræt Neuro">Glasgow Coma Scale (GCS)</li></a>
        <li><a href="#" style="display:none" class="testLink Neuro">Glasgow Outcome Scale Extended (GOSE)</li></a>
        <li><a href="#" style="display:none" class="testLink Neuro Pædiatri">Gross Motor Funktion Classification system, Expanded and Revised (GMFCS - E&R</li></a>
        <li><a href="#" style="display:none" class="testLink Funktion Neuro Pædriati">Gross Motor Function Measure</li></a>
        <li><a href="#" style="display:none" class="testLink Funktion Neuro Rehab">Grooved Pegboard Test</li></a>

        <li><a href="#" style="display:none" class="testLink HLI-fys Idræt Musku Rehab Sunded">Harvard Steptest</li></a>
        <li><a href="#" style="display:none" class="testLink Balance Mobilitet Funktion Neuro Rehab">High-Level Mobility Assessment Tool (HiMat)</li></a>
        <li><a href="#" style="display:none" class="testLink Hofte Smerte Musku Rehab">Hip disability and Osteoarthritis Outcome Score (HOOS)</li></a>

        <li><a href="#" style="display:none" class="testLink Funktion Urologi">International Consultation on Incontinence Questionnaire - urinary incontinence - Short form</li></a>
        <li><a href="#" style="display:none" class="testLink Livskvalitet Urologi Rehab">Incontinence Impact Questionnaire (IIQ-7)</li></a>

        <li><a href="#" style="display:none" class="testLink Musku">Keitels Funktionstest (KFS)</li></a>
        <li><a href="#" style="display:none" class="testLink Funktion Livskvalitet Musku">Kort Muskoloskeletal Funktions Undersøgelsesskema</li></a>
        <li><a href="#" style="display:none" class="testLink Knæ Funktion Smerte Livskvalitet Idræt Musku Rehab">Knee injury and Osteoarthritis Outcome Score</li></a>
        <li><a href="#" style="display:none" class="testLink Knæ Idræt Musku Rehab">Knee Self-Efficacy Scale (K-ESES)</li></a>

        <li><a href="#" style="display:none" class="testLink Ankel Idræt Musku Pædiatri Rehab">Ledmåling af ankel</li></a>
        <li><a href="#" style="display:none" class="testLink Knæ Idræt Musku Pædiatri Rehab">Ledmåling af knæ</li></a>
        <li><a href="#" style="display:none" class="testLink Knæ Funktion Idræt Musko Rehab>Lysholm Score</li></a>


        <li><a href="#" style="display:none" class="testLink Smerte Musku Rehab">McGill Pain Questionnaire</li></a>
        <li><a href="#" style="display:none" class="testLink Geronto">Mini Mental State Examination (MMSE)</li></a>
        <li><a href="#" style="display:none" class="testLink Balance Geronto Neuro Rehab">Mini-BESTest</li></a>
        <li><a href="#" style="display:none" class="testLink Neuro Rehab">Motor Assessment Scare (MAS)</li></a>
        <li><a href="#" style="display:none" class="testLink Pædiatri">Motorisk-Perceptuel Udviklingstest (MPU)</li></a>
        <li><a href="#" style="display:none" class="testLink Balance Funktion Neuro Rehab">Motion sensitivity test (MST)</li></a>
        <li><a href="#" style="display:none" class="testLink Pædiatri">Movement Assesment Battery for Children 2 (Movement ABC-2)</li></a>
        <li><a href="#" style="display:none" class="testLink HLI-fys Rehab Sundhed">MRC Dyspnøskala</li></a>
        <li><a href="#" style="display:none" class="testLink Geronto HLI-fys Neuro Rehab">Multidimensional Fatigue Invetory (MFI-20)</li></a>


        <li><a href="#" style="display:none" class="testLink Musku">Neck Disability Index (NDI)</li></a>
        <li><a href="#" style="display:none" class="testLink Nakke/ryg Smerte Idræt Musku">Neck Outcome Score (NOOS)</li></a>
        <li><a href="#" style="display:none" class="testLink Hofte Gang Mobilitet Musku">New Mobility Score (NMS)</li></a>
        <li><a href="#" style="display:none" class="testLink Funktion Neuro">Nine-Hole Peg Test</li></a>
        <li><a href="#" style="display:none" class="testLink Rehab">Nottingham Sensory Assesment Scale</li></a>
        <li><a href="#" style="display:none" class="testLink Smerte">Numerisk Rangskala</li></a>

        <li><a href="#" style="display:none" class="testLink Nakke/ryg Funktion Musku">Oswestry Disability Index (ODI)</li></a>
        <li><a href="#" style="display:none" class="testLink Hofte Musku">Oxford Hofte-Score (OHS)</li></a>

        <li><a href="#" style="display:none" class="testLink Musku Sundhed">Patient Specifik Funktionel Skala</li></a>
        <li><a href="#" style="display:none" class="testLink Pædiatri">Peabody Development Motor Scales - 2 (PDMS-2)</li></a>
        <li><a href="#" style="display:none" class="testLink Pædiatri">Pediatric Evaluation of Disability Inventory (PEDI)</li></a>
        <li><a href="#" style="display:none" class="testLink Mobilitet Funktion Rehab Sundhed HLI-fys Rehab">Physical Activity Scale (PAS)</li></a>
        <li><a href="#" style="display:none" class="testLink Funktion Neuro Rehab">Postural Assessment for Stroke (PASS)</li></a>
        <li><a href="#" style="display:none" class="testLink Mobilitet Funktion Neuro Pædiatri Rehab">Posture and Postural Ability scale (PPAS)</li></a>
        <li><a href="#" style="display:none" class="testLink Funktion">Physical Activity Scale 2 (PAS-2</li></a>

        <li><a href="#" style="display:none" class="testLink Geronto HLI-fys Rehab">Rejse-sætte-sig test</li></a>
        <li><a href="#" style="display:none" class="testLink Geronto Idræt Musku Rehab Geronto Idræt Musku Rehab">Repetition maximum test</li></a>
        <li><a href="#" style="display:none" class="testLink">Repetition maximum (RM)</li></a>
        <li><a href="#" style="display:none" class="testLink Mobilitet Funktion Neuro Rehab Sundhed">Rivermead Mobility Index</li></a>
        <li><a href="#" style="display:none" class="testLink Nakke/ryg Funktion Smerte Musku">Roland Morris Questionnaire</li></a>

        <li><a href="#" style="display:none" class="testLink Pædiatri">Segmental Assessment of Trunk Control (SATCo)</li></a>
        <li><a href="#" style="display:none" class="testLink Geronto HLI-fys Musku Rehab Sundhed">Senior Fitness Test</li></a>
        <li><a href="#" style="display:none" class="testLink Neuro PsPs Pædiatri">Sensory Profile</li></a>
        <li><a href="#" style="display:none" class="testLink Livskvalitet Geronto HLI-fys Idræt Musku Neuro PsPs Rehab Sundhed">Short Form 36 (SF-36)</li></a>
        <li><a href="#" style="display:none" class="testLink Gang HLI-fys Rehab Sundhed">Shuttle Walk Test</li></a>
        <li><a href="#" style="display:none" class="testLink Nakke/ryg Musku">STarT Back Screening Tool (SBST)</li></a>
        <li><a href="#" style="display:none" class="testLink Neuro">Stroke Specific Quality of Life Scale (SS-QOL)</li></a>

        <li><a href="#" style="display:none" class="testLink Mobilitet Funktion Neuro Pædiatri Rehab">The Modified Ashworth Scale</li></a>
        <li><a href="#" style="display:none" class="testLink Balance Geronto HLI-fys ">Tandemtest</li></a>
        <li><a href="#" style="display:none" class="testLink Neuro Pædiatri">Tardieu Skala (modificeret)</li></a>
        <li><a href="#" style="display:none" class="testLink Hofte Gang Idræt Musku Rehab">The Copenhagen Hip and Groin Outcome Score (HAGOS)</li></a>
        <li><a href="#" style="display:none" class="testLink Pædiatri">The Test of Infant Motor Performance</li></a>
        <li><a href="#" style="display:none" class="testLink Gang Funktion Geronto HLI-fys Musku Neuro Rehab">Timed Up and Go (TUG)</li></a>
        <li><a href="#" style="display:none" class="testLink Balance Funktion Neuro">Trunk Impairment Scale (TRIS)</li></a>
        <li><a href="#" style="display:none" class="testLink Funktion Rehab Sundhed">The short questionnaire to assess health-enhancing physical activity (SQUASH)</li></a>

        <li><a href="#" style="display:none" class="testLink Smerte HLI-fys Musku Rehab">Verbal Rangskala</li></a>
        <li><a href="#" style="display:none" class="testLink Idræt Musku">Victorian Institute of Sports Assessment - Achilles Questionnaire (VISA-A)</li></a>
        <li><a href="#" style="display:none" class="testLink Idræt Musku">Victorian Insitute of Sports Assesment - Patella Questionnaire (VISA-P)</li></a>
        <li><a href="#" style="display:none" class="testLink Pædiatri">Visual Motor Integration (VMI)</li></a>
        <li><a href="#" style="display:none" class="testLink Smerte HLI-fys Musku Rehab">Visuel Analog Skala</li></a>
        <li><a href="#" style="display:none" class="testLink">Vurdering af MPU</li></a>

        <li><a href="#" style="display:none" class="testLink Kondition HLI-fys Idræt Musku Pædiatri Rehab">Watt-max test</li></a>
        <li><a href="#" style="display:none" class="testLink Idræt Musku">Western Ontario Rorator Cuff Index (WORC)</li></a>
        <li><a href="#" style="display:none" class="testLink Neuro">Wolf Motor Function Test (WMFT)</li></a>
        <li><a href="#" style="display:none" class="testLink Musku">WOMAC</li></a>

        <li><a href="#" style="display:none" class="testLink Nakke/ryg Smerte Musku PsPs">Örebro Muculoskeletal Pain Questionnaire</li></a>
        
    </div>
</div>

   




<script>
    function selectionHandler(selector){

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
</script>
     

<script>
    function searchInputHandler(){

        document.getElementById("select1").value = "Vis alle";
        console.log(document.getElementById("select1").value);
        document.getElementById("select1").dispatchEvent(new Event('change'));

        document.getElementById('Krop&funktion').style.display="none";
        document.getElementById('Specialer').style.display = "none";
        //document.getElementById('Vis alle').style.display = "block";                        

        let searchInput = document.getElementById("searchInput").value.toLowerCase();
        //console.log("searchInput", searchInput);

        let alleTestLink = document.getElementsByClassName("testLink");

        for (let i=0; i < alleTestLink.length; i++){
            //console.log(searchInput, alleTestLink[i].innerHTML)
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
        console.log("click!")
        searchInputHandler()
    })
</script>