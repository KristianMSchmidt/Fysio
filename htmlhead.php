<title>Fysio App</title>

  <meta charset="utf-8" />
  
  <link rel="manifest" href="manifest.json">

  <!-- vigtigt -->
  <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1,
  width=device-width, height=device-height" />

  <!-- logo til bogmærkelinjen -->
  <link rel="shortcut icon" type="image/x-icon" href="images/dfys-logo4.gif" />

    <!-- fjernes browserfunktionerne og gør appen full-screnn som en rigtig app -->
    <meta name="apple-mobile-web-app-capable" content="yes">
   
    <!-- Allow web app to be run in full-screen mode - Android. -->
    <meta name="mobile-web-app-capable" content="yes">
   
    <!--gør statusbarn gennemsigtig, næsten usynlig på Apple-devices, men ikke Android-->
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

    <!-- this seems to be necessary - atleat on iphone -->
    <link rel="apple-touch-icon" href="images/fysio_icon.png">

  
  <link rel="stylesheet" href="styles/my_theme.css" />
  <link rel="stylesheet" href="styles/jquery.mobile.icons.min.css" />
  
  <link rel="stylesheet" href="//code.jquery.com/mobile/1.4.5/jquery.mobile.structure-1.4.5.min.css" />

  <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
  
  <!-- This litte script has to come before jquery.mobile is loaded in , as event comes from here -->
 
 <script>
     $(document).on('mobileinit', function(){
        $.mobile.defaultPageTransition="slide";
    });

  </script>
  

  <script src="//code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>      

   <!-- min egen custom css, som kan override noget af css'en fra jquery mobile -->
   <link rel="stylesheet" href="styles/fysio_style.css"> 
   