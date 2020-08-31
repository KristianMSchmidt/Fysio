<!DOCTYPE html>
<html>
<head>
    <?php include "htmlhead.php" ?>
</head>

<body>
     <!-- frontpage -->
     <?php include "pages/frontpage.php" ?>

    <!-- subpages & their scripts  -->
    <?php include "pages/email.php"?>

    <?php include "pages/redskaber/seksMinGangTestAbout.php"?>
    <?php include "pages/redskaber/seksMinGangTest.php"?>

    <?php include "pages/redskaber/tiMeterGangTestAbout.php"?> 
    <?php include "pages/redskaber/tiMeterGangTest.php"?>

    <!-- load general scripts -->
    <script src="scripts/utils.js"></script> 
    <script src= "scripts/email/email.js"></script>
    
    <!-- start session (incl. tests) -->
    <script src="scripts/session.js" type="module"></script> 
    
</body>
</html>

