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
    <?php include "pages/tests/tiMGT.php" ?>    
    <?php include "pages/tests/tiMGT_about.php" ?>    
    
    <?php include "pages/tests/nakke.php" ?>    



    <!-- load scripts and modules -->
    
    <!-- Jeg venter med at gå videre med service worker og add to homescreen 
    til jeg har lavet noget reelt indhold.
    <script src="scripts/sw/service_worker.js" type="module"></script> -->
    
    <script src="scripts/session.js" type="module"></script> 

    <script src="scripts/calcButtonHandler.js"></script> 
    <script src= "scripts/formulas.js"></script>
    <script src= "scripts/email/email.js"></script>


</body>

</html>

