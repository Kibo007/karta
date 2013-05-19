<?php
if ($_GET['randomId'] != "edGk6HED01CdGtgbs_otnQlyRgLJiIBmCWhjDOZywIzVssM3MGYt_ALcVIbUhEnY") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
