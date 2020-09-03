<!DOCTYPE html>
<html>
<head>
    <?php include "htmlhead.php" ?>
</head>

<body>
    <!-- frontpage -->
    <?php include "pages/frontpage.php" ?>
    <script src="pages/frontpage.js"></script>
    
    <!-- 10-meter gangtest -->
    <?php include "pages/redskaber/tiMeterGang.php"?>
    <?php include "pages/redskaber/tiMeterGangAbout.php"?> 
    <script src="pages/redskaber/tiMeterGang.js"></script>  
    
    <!-- 6-minuttersgangtest -->
    <?php include "pages/redskaber/seksMinGang.php"?>
    <?php include "pages/redskaber/seksMinGangAbout.php"?>
    <script src="pages/redskaber/seksMinGang.js"></script>  

    <!-- 2,45m up-and-go-test -->
    <?php include "pages/redskaber/upAndGo.php"?>
    <?php include "pages/redskaber/upAndGoAbout.php"?> 
    <script src="pages/redskaber/upAndGo.js"></script>  

    <!-- ALS  -->
    <?php include "pages/redskaber/ALS.php"?>
    <?php include "pages/redskaber/ALSAbout.php"?> 
    <script src="pages/redskaber/ALS.js"></script>  
 
    <!-- email page & their scripts  -->
    <?php include "pages/email.php"?>
    <script src= "pages/email.js"></script>


    <!-- load general scripts -->
    <script src="scripts/utils.js"></script> 
    
    <script src="pages/redskaber/ALS.js"></script>  

    <!-- start session (incl. tests) -->
    <script src="scripts/session.js" type="module"></script> 
</body>
</html>

