<!DOCTYPE html>
<html>
<head>
    <?php include "htmlhead.php" ?>
</head>

<body>
     <!-- frontpage -->
     <?php include "pages/frontpage.php" ?>

    <!-- subpages  -->
    <?php include "pages/email.php"?>

    <?php include "pages/redskaber/seksMinGangTestAbout.php"?>
    <?php include "pages/redskaber/seksMinGangTest.php"?>

    <?php include "pages/redskaber/tiMeterGangTestAbout.php"?> 
    <?php include "pages/redskaber/tiMeterGangTest.php"?>
    
    

    <!-- load scripts and modules -->    
    
    <script src="scripts/session.js" type="module"></script> 
    <script src="scripts/utils.js"></script> 
    <script src= "scripts/email/email.js"></script>
    
    <!-- test suites -->
    <script src = "scripts/test_runner.js" type="module"></script> 
    
</body>
</html>

