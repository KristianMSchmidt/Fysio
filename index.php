<!DOCTYPE html>
<html>
<head>
    <?php include "htmlhead.php" ?>
</head>

<body>
    <!-- frontpage -->
    <?php include "pages/frontpage.php" ?>

    <?php include "pages/redskaber/tiMeterGang.php"?>
    <?php include "pages/redskaber/tiMeterGangAbout.php"?> 
 
    <?php include "pages/redskaber/seksMinGang.php"?>
    <?php include "pages/redskaber/seksMinGangAbout.php"?>
 
    <?php include "pages/redskaber/upAndGo.php"?>
    <?php include "pages/redskaber/upAndGoAbout.php"?> 
  

 
    <!-- subpages & their scripts  -->
    <?php include "pages/email.php"?>


    <!-- load general scripts -->
    <script src="scripts/utils.js"></script> 
    <script src= "scripts/email/email.js"></script>
    
    <script src="pages/frontpage.js"></script>
    <script src="pages/redskaber/ALS.js"></script>  
    <script src="pages/redskaber/upAndGo.js"></script>  
    <script src="pages/redskaber/tiMeterGang.js"></script>  
    <script src="pages/redskaber/seksMinGang.js"></script>  

    <!-- start session (incl. tests) -->
    <script src="scripts/session.js" type="module"></script> 
</body>
</html>

