<!DOCTYPE html>
<html>
<head>
    <?php include "htmlhead.php" ?>

</head>


<body>
     <!-- frontpage -->
     <?php include "pages/frontpage.php" ?>

    <!-- subpages  -->
    <?php include "pages/email.php" ?>


    <!-- test pages -->
    <?php include "pages/tests/tiMeterGangTest.php" ?>    
    <?php include "pages/tests/tiMeterGangTest_about.php" ?>   

    <?php include "pages/tests/seksMinGangTest.php" ?>    
    <?php include "pages/tests/seksMinGangTest_about.php" ?>    

    <?php include "pages/tests/toMeterUGT.php" ?>
    <?php include "pages/tests/toMeterUGT_about.php" ?>
    
    <?php include "pages/tests/nakke.php" ?>    



    <!-- load scripts and modules -->
    
    <!-- Jeg venter med at gå videre med service worker og add to homescreen 
    til jeg har lavet noget reelt indhold.
    <script src="scripts/sw/service_worker.js" type="module"></script> -->
    
    <script src="scripts/session.js" type="module"></script> 
    <script src="scripts/utils.js"></script> 
    <script src= "scripts/email/email.js"></script>

    <script src = "scripts/test.js"></script>


</body>

</html>

