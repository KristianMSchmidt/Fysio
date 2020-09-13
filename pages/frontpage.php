<div data-role="page" id="frontpage" data-theme ="a">

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
    </div>  <!-- end of header -->
    
   
    <!-- page content -->   
    <div role="main" class="ui-content">
        <h3>Måleredskaber og test</h3>     
   
            <fieldset data-role="controlgroup">
                <legend></legend> <!-- optional text -->
                <label for="select1">Select A</label>
                <select name="select1" onchange="selectionHandler('overkategori')" id="select1">
                    <option value="Krop&funktion">Krop & Funktion</option>
                    <option value="Specialer">Specialer</option>
                    <option value="Vis alle">Alle måleredskaber</option>
                </select>
            </fieldset>
   
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
   
            <input id ="searchInput" placeholder="Søg i alle målereskaber" value = "" autocomplete = "off"/> 
   
        <!-- LINK TIL SAMTLIGE TEST I ALFABETISK RÆKKEFØLGE -->
        <ul data-role="listview" data-inset="true" date-theme ="a">
        
        <li data-role="list-divider"></li> 

        <li><a href="#tiMeterGang" style="display:none" class="testLink Gang Funktion Geronto HLI-fys Musku Neuro Rehab" id="linkTilTiMeterGang">10-meter gangtest</a></li>
        <li><a href="#seksMinGang" style="display:none" class="testLink Hofte Knæ Gang Funktion Geronto HLI-fys Musku Neuro Rehab" id="linkTilSeksMinGang">6-minuttersgangtest</a></li>
        <li><a href="#upAndGo" style="display:none" class="testLink Balance Gang Funktion Geronto HLI-fys Musku Neuro Rehab" id="linkTilUpAndGo">2,45m up-and-go-test</a></li>

        <li><a href="#ALS" style="display:none" class="testLink Funktion Neuro Rehab">Amyotrophic Lateral Sclerosis Rating Scale (ALS) - Revised</a></li>
        <li><a href="#AIMS" style="display:none" class="testLink Neuro Pædiatri Rehab" id = "linkTilAIMS">Alberta Infant Motor Scale (AIMS)</a></li>
        <li><a href="#y" style="display:none" class="testLink Funktion Neuro Rehab">Action Research Arm Test (ARAT)</a></li>

        <li><a href="#" style="display:none" class="testLink Balance Geronto Musku Neuro Rehab">Balance Evaluation System Test (BESTest)</a></li>
        <li><a href="#" style="display:none" class="testLink Mobilitet Funktion Geronto HLI-fys Neuro Rehab">Barthel Indeks</a></li>
        <li><a href="#" style="display:none" class="testLink Pædiatri Rehab">Bayley-III Motor Scales</a></li>
        <li><a href="#" style="display:none" class="testLink Balance Geronto HLI-fys Musku Neuro Rehab">Berg Balanceskala</a></li>
        <li><a href="#" style="display:none" class="testLink HLI-fys Idræt Musku Rehab Sundhed">Bip-test</a></li>
        <li><a href="#" style="display:none" class="testLink Kondition Geronto Idræt Musku Neuro Rehab Sundhed">Borg-15</a></li>
        <li><a href="#" style="display:none" class="testLink Mobilitet Funktion Smerte HLI-fys Idræt Rehab Sundhed">Borg CR 10</a></li>
        <li><a href="#" style="display:none" class="testLink Funktion Kondition Geronto HLI-fys Idræt Musku Neuro Rehab Sundhed">Borgs Skala for anstrengelse</a></li>
        <li><a href="#" style="display:none" class="testLink Pædiatri Rehab">Bruininks-Oseretsky Test of Motor Proficiency</a></li>
        <li><a href="#" style="display:none" class="testLink Mobilitet Funktion Rehab">Basic Amputee Mobility Score (BAMS)</a></li>

        <li><a href="#" style="display:none" class="testLink Skulder Smerte Idræt Musku">Constant Shoulder Score</a></li>
        <li><a href="#" style="display:none" class="testLink Funktion Livskvalitet HLI-fys Rehab">COPD Assessment Test (CAT)</a></li>
        <li><a href="#" style="display:none" class="testLink HLI-fys Idræt Musku Rehab">Coopers Løbetest</a></li>
        <li><a href="#" style="display:none" class="testLink Musku">Copenhagen Neck Functional Disability Scale(CNFDS)</a></li>
        <li><a href="#" style="display:none" class="testLink Mobilitet Geronto Idræt Musku Rehab">Cumulated Ambutation Score (CAS)</a></li>

        <li><a href="#" style="display:none" class="testLink Urologi">Dansk Prostata Symptom Score</a></li>
        <li><a href="#" style="display:none" class="testLink Balance Gang Mobilitet Funktion Geronto HLI-fys Neuro Rehab">De Morton Mobility Index</a></li>
        <li><a href="#" style="display:none" class="testLink Skulder Livskvalitet">Disabilities of the Arm, Shoulder and Hand</a></li>
        <li><a href="#" style="display:none" class="testLink Geronto Neuro Rehab">Dizzinesss Handicap Inventoy (DHI)</a></li>
        <li><a href="#" style="display:none" class="testLink Balance Gang Geronto Neuro Rehab">Dynamic Gait Index</a></li>

        <li><a href="#" style="display:none" class="testLink Mobilitet Funktion Neuro Rehab">Early Functional Abilities (EFA)</a></li>
        <li><a href="#" style="display:none" class="testLink Mobilitet Funktion Geronto Neuro Rehab">Elderly Mobility Scale (EMS)</a></li>
        <li><a href="#" style="display:none" class="testLink Kondition HLI-fys Idræt Musku Pædiatri Rehab">Et-punktstest</a></li>
        <li><a href="#" style="display:none" class="testLink Livskvalitet Geronto HLI-fys Musku PsPs Rehab Sundhed">European Quality of Life - 5 Dimensions</a></li>
        <li><a href="#" style="display:none" class="testLink Skulder Livskvalitet Musku">Et livskvalitet spørgeskema til patienter med scapula alate (SA-Q)</a></li>
        <!-- skal fjernes fra denne liste -->
        <li><a href="#email" style="display:none" class="testLink ">Email</a></li>

        <li><a href="#" style="display:none" class="testLink Geronto Neuro Rehab Sundhed Geronto Neuro Rehab Sundhed">Falls Efficacy Scale-International (FES-I)</a></li>
        <li><a href="#" style="display:none" class="testLink HLI-fys Neuro Rehab">Fatigue Severity Scale (FSS)</a></li>
        <li><a href="#" style="display:none" class="testLink Nakke/ryg Smerte Musku PsPs">Fear-Avoidance Beliefs Questionnaire (FABQ)</a></li>
        <li><a href="#" style="display:none" class="testLink Neuro Rehab">Fugl-Meyer Assessment Scale</a></li>
        <li><a href="#" style="display:none" class="testLink Skulder Funktion Neuro Rehab">Fugl-Meyer Undersøgelse af Armmotorik (FMA)</a></li>
        <li><a href="#" style="display:none" class="testLink Musku Rehab">Forgotten Joint Score 12 (FJS-12)</a></li>
        <li><a href="#" style="display:none" class="testLink Musku Neuro Rehab">Functional Independence Measure(FIM)</a></li>

        <li><a href="#" style="display:none" class="testLink HLI-fys Idræt Neuro">Glasgow Coma Scale (GCS)</a></li>
        <li><a href="#" style="display:none" class="testLink Neuro">Glasgow Outcome Scale Extended (GOSE)</a></li>
        <li><a href="#" style="display:none" class="testLink Neuro Pædiatri">Gross Motor Funktion Classification system, Expanded and Revised (GMFCS - E&R</a></li>
        <li><a href="#" style="display:none" class="testLink Funktion Neuro Pædriati">Gross Motor Function Measure</a></li>
        <li><a href="#" style="display:none" class="testLink Funktion Neuro Rehab">Grooved Pegboard Test</a></li>

        <li><a href="#" style="display:none" class="testLink HLI-fys Idræt Musku Rehab Sunded">Harvard Steptest</a></li>
        <li><a href="#" style="display:none" class="testLink Balance Mobilitet Funktion Neuro Rehab">High-Level Mobility Assessment Tool (HiMat)</a></li>
        <li><a href="#" style="display:none" class="testLink Hofte Smerte Musku Rehab">Hip disability and Osteoarthritis Outcome Score (HOOS)</a></li>

        <li><a href="#" style="display:none" class="testLink Funktion Urologi">International Consultation on Incontinence Questionnaire - urinary incontinence - Short form</a></li>
        <li><a href="#" style="display:none" class="testLink Livskvalitet Urologi Rehab">Incontinence Impact Questionnaire (IIQ-7)</a></li>

        <li><a href="#" style="display:none" class="testLink Musku">Keitels Funktionstest (KFS)</a></li>
        <li><a href="#" style="display:none" class="testLink Funktion Livskvalitet Musku">Kort Muskoloskeletal Funktions Undersøgelsesskema</a></li>
        <li><a href="#" style="display:none" class="testLink Knæ Funktion Smerte Livskvalitet Idræt Musku Rehab">Knee injury and Osteoarthritis Outcome Score</a></li>
        <li><a href="#" style="display:none" class="testLink Knæ Idræt Musku Rehab">Knee Self-Efficacy Scale (K-ESES)</a></li>

        <li><a href="#" style="display:none" class="testLink Ankel Idræt Musku Pædiatri Rehab">Ledmåling af ankel</a></li>
        <li><a href="#" style="display:none" class="testLink Knæ Idræt Musku Pædiatri Rehab">Ledmåling af knæ</a></li>
        <li><a href="#" style="display:none" class="testLink Knæ Funktion Idræt Musko Rehab>Lysholm Score</a></li>


        <li><a href="#" style="display:none" class="testLink Smerte Musku Rehab">McGill Pain Questionnaire</a></li>
        <li><a href="#" style="display:none" class="testLink Geronto">Mini Mental State Examination (MMSE)</a></li>
        <li><a href="#" style="display:none" class="testLink Balance Geronto Neuro Rehab">Mini-BESTest</a></li>
        <li><a href="#" style="display:none" class="testLink Neuro Rehab">Motor Assessment Scare (MAS)</a></li>
        <li><a href="#" style="display:none" class="testLink Pædiatri">Motorisk-Perceptuel Udviklingstest (MPU)</a></li>
        <li><a href="#" style="display:none" class="testLink Balance Funktion Neuro Rehab">Motion sensitivity test (MST)</a></li>
        <li><a href="#" style="display:none" class="testLink Pædiatri">Movement Assesment Battery for Children 2 (Movement ABC-2)</a></li>
        <li><a href="#" style="display:none" class="testLink HLI-fys Rehab Sundhed">MRC Dyspnøskala</a></li>
        <li><a href="#" style="display:none" class="testLink Geronto HLI-fys Neuro Rehab">Multidimensional Fatigue Invetory (MFI-20)</a></li>


        <li><a href="#" style="display:none" class="testLink Musku">Neck Disability Index (NDI)</a></li>
        <li><a href="#" style="display:none" class="testLink Nakke/ryg Smerte Idræt Musku">Neck Outcome Score (NOOS)</a></li>
        <li><a href="#" style="display:none" class="testLink Hofte Gang Mobilitet Musku">New Mobility Score (NMS)</a></li>
        <li><a href="#" style="display:none" class="testLink Funktion Neuro">Nine-Hole Peg Test</a></li>
        <li><a href="#" style="display:none" class="testLink Rehab">Nottingham Sensory Assesment Scale</a></li>
        <li><a href="#" style="display:none" class="testLink Smerte">Numerisk Rangskala</a></li>

        <li><a href="#" style="display:none" class="testLink Nakke/ryg Funktion Musku">Oswestry Disability Index (ODI)</a></li>
        <li><a href="#" style="display:none" class="testLink Hofte Musku">Oxford Hofte-Score (OHS)</a></li>

        <li><a href="#" style="display:none" class="testLink Musku Sundhed">Patient Specifik Funktionel Skala</a></li>
        <li><a href="#" style="display:none" class="testLink Pædiatri">Peabody Development Motor Scales - 2 (PDMS-2)</a></li>
        <li><a href="#" style="display:none" class="testLink Pædiatri">Pediatric Evaluation of Disability Inventory (PEDI)</a></li>
        <li><a href="#" style="display:none" class="testLink Mobilitet Funktion Rehab Sundhed HLI-fys Rehab">Physical Activity Scale (PAS)</a></li>
        <li><a href="#" style="display:none" class="testLink Funktion Neuro Rehab">Postural Assessment for Stroke (PASS)</a></li>
        <li><a href="#" style="display:none" class="testLink Mobilitet Funktion Neuro Pædiatri Rehab">Posture and Postural Ability scale (PPAS)</a></li>
        <li><a href="#" style="display:none" class="testLink Funktion">Physical Activity Scale 2 (PAS-2</a></li>

        <li><a href="#" style="display:none" class="testLink Geronto HLI-fys Rehab">Rejse-sætte-sig test</a></li>
        <li><a href="#" style="display:none" class="testLink Geronto Idræt Musku Rehab Geronto Idræt Musku Rehab">Repetition maximum test</a></li>
        <li><a href="#" style="display:none" class="testLink">Repetition maximum (RM)</a></li>
        <li><a href="#" style="display:none" class="testLink Mobilitet Funktion Neuro Rehab Sundhed">Rivermead Mobility Index</a></li>
        <li><a href="#" style="display:none" class="testLink Nakke/ryg Funktion Smerte Musku">Roland Morris Questionnaire</a></li>

        <li><a href="#" style="display:none" class="testLink Pædiatri">Segmental Assessment of Trunk Control (SATCo)</a></li>
        <li><a href="#" style="display:none" class="testLink Geronto HLI-fys Musku Rehab Sundhed">Senior Fitness Test</a></li>
        <li><a href="#" style="display:none" class="testLink Neuro PsPs Pædiatri">Sensory Profile</a></li>
        <li><a href="#" style="display:none" class="testLink Livskvalitet Geronto HLI-fys Idræt Musku Neuro PsPs Rehab Sundhed">Short Form 36 (SF-36)</a></li>
        <li><a href="#" style="display:none" class="testLink Gang HLI-fys Rehab Sundhed">Shuttle Walk Test</a></li>
        <li><a href="#" style="display:none" class="testLink Nakke/ryg Musku">STarT Back Screening Tool (SBST)</a></li>
        <li><a href="#" style="display:none" class="testLink Neuro">Stroke Specific Quality of Life Scale (SS-QOL)</a></li>

        <li><a href="#" style="display:none" class="testLink Mobilitet Funktion Neuro Pædiatri Rehab">The Modified Ashworth Scale</a></li>
        <li><a href="#" style="display:none" class="testLink Balance Geronto HLI-fys ">Tandemtest</a></li>
        <li><a href="#" style="display:none" class="testLink Neuro Pædiatri">Tardieu Skala (modificeret)</a></li>
        <li><a href="#" style="display:none" class="testLink Hofte Gang Idræt Musku Rehab">The Copenhagen Hip and Groin Outcome Score (HAGOS)</a></li>
        <li><a href="#" style="display:none" class="testLink Pædiatri">The Test of Infant Motor Performance</a></li>
        <li><a href="#" style="display:none" class="testLink Gang Funktion Geronto HLI-fys Musku Neuro Rehab">Timed Up and Go (TUG)</a></li>
        <li><a href="#" style="display:none" class="testLink Balance Funktion Neuro">Trunk Impairment Scale (TRIS)</a></li>
        <li><a href="#" style="display:none" class="testLink Funktion Rehab Sundhed">The short questionnaire to assess health-enhancing physical activity (SQUASH)</a></li>

        <li><a href="#" style="display:none" class="testLink Smerte HLI-fys Musku Rehab">Verbal Rangskala</a></li>
        <li><a href="#" style="display:none" class="testLink Idræt Musku">Victorian Institute of Sports Assessment - Achilles Questionnaire (VISA-A)</a></li>
        <li><a href="#" style="display:none" class="testLink Idræt Musku">Victorian Insitute of Sports Assesment - Patella Questionnaire (VISA-P)</a></li>
        <li><a href="#" style="display:none" class="testLink Pædiatri">Visual Motor Integration (VMI)</a></li>
        <li><a href="#" style="display:none" class="testLink Smerte HLI-fys Musku Rehab">Visuel Analog Skala</a></li>
        <li><a href="#" style="display:none" class="testLink">Vurdering af MPU</a></li>

        <li><a href="#" style="display:none" class="testLink Kondition HLI-fys Idræt Musku Pædiatri Rehab">Watt-max test</a></li>
        <li><a href="#" style="display:none" class="testLink Idræt Musku">Western Ontario Rorator Cuff Index (WORC)</a></li>
        <li><a href="#" style="display:none" class="testLink Neuro">Wolf Motor Function Test (WMFT)</a></li>
        <li><a href="#" style="display:none" class="testLink Musku">WOMAC</a></li>

        <li><a href="#" style="display:none" class="testLink Nakke/ryg Smerte Musku PsPs">Örebro Muculoskeletal Pain Questionnaire</a></li>
        </ul>        
   
        <p id="debug_info" style="color:red; text-align:center; display:none">Debug mode: </p>
   
    </div><!-- end of page content -->   

    <!-- Menu panel -->
    <div data-role="panel" data-position = "left" id="mypanel">
        <p>Dansk Selskab for Fysioterapi er ansvarlig for vurdering af test og måleredskaber. Siden bliver løbende opdateret med nye måleredskaber og opdatering af de eksisterende måleredskaber.</p>
        <a href="https://kimarokko.000webhostapp.com">Hjemmeside</a>
        <p>Logo </p>
        <p>Kontakt</p>
        <p>Om appen</p>
    </div><!-- Menu panel -->

</div>
