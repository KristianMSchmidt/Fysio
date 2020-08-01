<!DOCTYPE html>
<html>
<head>
    <?php include "htmlhead.php" ?>
</head>


<body>
     <!-- frontpage -->
     <?php include "pages/frontpage.php" ?>

    <!-- subpages  -->
    <?php include "pages/tests/nakke.php" ?>    
    <?php include "pages/email.php" ?>


    <!-- load scripts and modules -->
    <script src="scripts/sw/service_worker.js" type="module"></script> 
    <script src="scripts/session.js" type="module"></script> 

    <script src="scripts/calcButtonHandler.js"></script> 
    <script src= "scripts/formulas.js"></script>
    <script src= "scripts/email/email.js"></script>

    <!-- dette er et forsg, som forklaret her: https://stackoverflow.com/questions/16375557/fixed-header-scrolls-drags-in-jquery-mobile -->
    <script type="text/javascript">
        $("body").fixedtoolbar({ tapToggle: false });
    </script>



</body>

</html>

