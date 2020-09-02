<!-- Amyotrophic Lateral Sclerosis Rating Scale (ALS) - Revised -->

<div data-role="page" id="ALS" data-theme ="a">

    <!-- header -->
    <?php include "commons/header_with_back_button.php" ?>

    <!-- content -->
    <div role="main" class="ui-content">

        <h3>Amyotrophic Lateral Sclerosis Rating Scale (ALS) - Revised</h3>
 

        <a href="#ALSAbout" data-role="button" data-icon="arrow-r" data-iconpos="right">Læs om testen</a>
      
        <!-- dette bruges måske af alle mine test-sider, så kode-stumpen kan evt includes fra common -->
        <!-- fejlmeddelelse -->
        <p id="ALS_error" style="text-align:center; color:red"></p> 
        <!-- Resultat-->
        <p id="ALSOutput"></p>

        <!-- output og email_btn area -->
        <?php include 'commons/generate_email_btn_div.php' ?>

    </div> <!-- end of content -->
</div> <!-- end of page -->

