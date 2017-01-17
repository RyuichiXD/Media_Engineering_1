<?php

include("dbConnect.php");

if (isset($_POST['done'])) {
    $city = mysqli_real_escape_string($conn, $_POST['citynameInput']);
    $username = mysqli_real_escape_string($conn, $_POST['usernameInput']);
    $country = mysqli_real_escape_string($conn, $_POST['countrynameInput']);
    $tildate = mysqli_real_escape_string($conn, $_POST['tilDateInput']);
    $fromdate = mysqli_real_escape_string($conn, $_POST['fromDateInput']);
    $email = mysqli_real_escape_string($conn, $_POST['emailInput']);
    $notes = mysqli_real_escape_string($conn, $_POST['userNotesInput']);

    $sql = "INSERT INTO mme1data (country, city,username, from_date, till_date, usermail, notes)
VALUES ('$country','$city','$username','$fromdate','$tildate','$email','$notes')";
}

if (isset($_POST['display'])) {

    $sql = "SELECT * FROM mme1data";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {

        $row_cnt = mysqli_num_rows($result);

        for ($i = 1; $i <= $row_cnt; $i++) {
            $row = mysqli_fetch_assoc($result)
            ?>

            <div class="row">
                <div class="col-lg-2 centered user">

                    <p class="username"><?php echo $row['username']; ?></p>
                    <img class="img img-circle" src="http://stalwartvalue.com/wp-content/uploads/2015/12/user.png"
                         height="60px"
                         width="60px" alt="">
                    <p>Selfinfo short about user</p>
                    <img height="17px" width="17px" src="assets/img/flags/32/RU.png"/>
                    Russia
                </div>
                <div class="col-lg-2 centered flag">
                    <p class="c-flag">
                        <img src="assets/img/flags/64/DE.png"></br><?php echo $row['country']; ?>
                    </p>
                    <p class="c-date"><?php echo $row['from_date']; ?> </br>-</br><?php echo $row['till_date']; ?></p>
                </div>

                <div class="col-lg-7 centered map_s">
                    <p id="map<?php echo $i; ?>" class="map"></p>
                    <label id="cityId<?php echo $i; ?>"> <?php echo $row['city']; ?></label>
                </div>

                <div class="col-lg-1 centered buttons">
                    <br><br><br>
                    <button id="<?php echo $row['id']; ?>" onclick="" class="deleteBtn"></button>
                    <p></p>
                    <!--<button onclick="" class="editBtn"></button>-->

                    <button id="<?php echo $row['id']; ?>" class="editBtn" data-toggle="modal"
                            data-target="#editModal"></button>


                    <?php
                    echo '<div>';
                    echo '<script>';
                    echo 'initCities(' . json_encode($row_cnt) . ');';
                    echo '</script>';
                    echo '</div>';
                    ?>


                </div>
            </div>
            <hr>
            <?php
        }
    }
}

if (isset($_POST['donedelete'])) {
    $userid = mysqli_real_escape_string($conn, $_POST['userid']);
    $sql = "DELETE FROM mme1data WHERE id=$userid";
    $delete = mysqli_query($conn, $sql);
}

if (isset($_POST['citate'])) {

    /*$sql = "SELECT citate FROM citate ";*/
    $sql = $query = 'SELECT * FROM citate ORDER BY RAND() LIMIT 1';
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result)
    ?>
    <p><?php echo $row['citate']; ?></p>
    <?php
}

if (isset($_POST['doneedit'])) {
    $userid = mysqli_real_escape_string($conn, $_POST['userid']);
    $sql = "SELECT * FROM mme1data WHERE id=$userid";
    $update = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($update);

    echo '<script>';
    echo 'var namefromphp = ' . json_encode($row['username']) . ';';
    echo 'var cityfromphp = ' . json_encode($row['city']) . ';';
    echo 'var countryfromphp = ' . json_encode($row['country']) . ';';
    echo 'var fromdatefromphp = ' . json_encode($row['from_date']) . ';';
    echo 'var tilldatefromphp = ' . json_encode($row['till_date']) . ';';
    echo 'var emailfromphp = ' . json_encode($row['usermail']) . ';';
    echo 'var notesfromphp = ' . json_encode($row['notes']) . ';';
    echo '</script>';
}

if (isset($_POST['toedit'])) {

    $useridedit = mysqli_real_escape_string($conn, $_POST['idEdit']);
    $usernameedit = mysqli_real_escape_string($conn, $_POST['usernameEdit']);
    $cityedit = mysqli_real_escape_string($conn, $_POST['citynameEdit']);
    $countryedit = mysqli_real_escape_string($conn, $_POST['countrynameEdit']);
    $tildateedit = mysqli_real_escape_string($conn, $_POST['tilDateEdit']);
    $fromdateedit = mysqli_real_escape_string($conn, $_POST['fromDateEdit']);
    $emailedit = mysqli_real_escape_string($conn, $_POST['emailEdit']);
    $notesedit = mysqli_real_escape_string($conn, $_POST['userNotesEdit']);

    $sql = "UPDATE mme1data SET username = '$usernameedit', country = '$countryedit', city = '$cityedit', from_date= '$fromdateedit', till_date='$tildateedit', usermail='$email', notes='$notesedit'
    WHERE id=$useridedit";
}

if (mysqli_query($conn, $sql)) {
}

mysqli_close($conn);
?>