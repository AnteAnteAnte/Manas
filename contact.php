<?php include "sendmail.php"?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="shortcut icon" href="assets/images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="assets/css/kontakt.css">
    <script src="https://kit.fontawesome.com/d1bbe2042f.js" crossorigin="anonymous"></script>
    <title>Kontakt</title>
</head>
<body>
    <!--alert messages start-->
    <?php echo $alert;?>
     <!--alert messages 

    <div class="alert-success">
      <span>Poruka Poslana! Hvala Vam na kontaktiranju.</span>
    </div>
    <div class="alert-error">
      <span>Nešto je pošlo po krivu! Molimo pokušajte ponovno.</span>
    </div>
    -->
    
    <!--alert messages end-->
    <button onclick="topFunction()" id="mybtn"><i class="fas fa-arrow-up"></i></button>
    <header class="kontakt-header">
        <div class="main-nav">
            <nav>
                <a class="logo" href="index.html">
                    <img class="logi" src="assets/images/logo.svg" alt="Logo">
                </a>
                <div class="hamburger" onclick="animateIcon()">
                    <div id="nav-icon2">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </div>
        <div class="overlay">
            <ul class="links">
                <li><a class="active" href="index.html">Home</a></li>
                <li><a href="projekti.html">Projekti</a></li>
                <div class="accordion">
                    <div class="accordion__item">
                        <div class="accordion__title">Kman</div>
                        <div class="accordion__body">
                            <div class="accordion__content">
                                <ul class="switch_links">
                                    <li><a style="color: #b23838;" href="kmanA.html">Zgrada A</a></li>
                                    <li><a href="kmanB.html">Zgrada B</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <li><a href="mertojak.html">Mertojak</a></li>
                <li><a href="contact.php">Kontaktirajte nas</a></li>
            </ul>
        </div>
    </header>
    <section class="contact--all-content">
        <div class="left-contact-form">
            <h1 class="send-contact">Kontaktirajte nas</h1>
            <form action="" method="post">
                <input type="text" name="name" value="" placeholder="Ime i Prezime">
                <input type="email" name="email" value="" placeholder="Email">
                <textarea name="message" type="text" placeholder="Poruka" id="textarea" cols="30" rows="10"></textarea>
                <button type="submit" name="submit">Pošalji</button>
            </form>
        </div>
        <div class="right-contacts-map">
            <h1 class="find-us">Pronađite nas</h1>
            <div class="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1446.4777162514124!2d16.474340348655517!3d43.5241220891927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355e45c4b87fed%3A0xa8447eafceaa54d4!2sSarajevska%20ul.%2046e%2C%2021000%2C%20Split!5e0!3m2!1shr!2shr!4v1626696574438!5m2!1shr!2shr"
                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div class="phone-mail-location">
                <div class="phone">
                    <h3>Telefon</h3>
                    <a href="tel:098-323-233" style="color: white">+ 385 98 323 233</a>
                </div>
                <div class="email">
                    <h3>Email</h3>
                    <a href="mailto:manas@gmail.com" style="color: white">manas@gmail.com</a>
                </div>
                <div class="location">
                    <h3>Lokacija</h3>
                    <a href="https://goo.gl/maps/YGu6cPaXhAhFNRVEA" style="color: white">Sarajevska 46E, 21000 Split</a>
                </div>
            </div>
        </div>
    </section>
    <section class="tenten">
        <section class="button123">
            <div class="container123">
                <div class="card123">
                    <div class="face face1">
                        <div class="content">
                            <img class="nigs"
                                src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true">
                            <h3 class="nigs">Stanovi</h3>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <p></p>
                            <a href="#">Projekti</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>

    <section class="sixth">
        <div class="container6">
            <div class="livo">
                <div class="row1">
                    <img class="logoFooter" src="assets/images/logo.svg" alt="">
                    <p class="pFooter">Copyright 2021 Handcrafter by AIV</p>
                </div>
                <div class="row4">
                    <img class="linked" src="assets/images/linkedin.svg" alt="">
                </div>
                <div class="row11">
                    <a class="pFooter1">Copyright 2021 Handcrafter by <a class="aiv" href="#">AIV</a> </a>
                </div>
            </div>
            <div class="row2">
                <ul class="ulFooter">
                    <li class="monkey"><a class="monkey" href="index.html">Naslovnica</a></li>
                    <li class="monkey"><a class="monkey" href="projekti.html">Projekti</a></li>
                    <li class="monkey"><a class="monkey" href="kmanA.html">Kman A</a></li>
                    <li class="monkey"><a class="monkey" href="kmanB.html">Kman B</a></li>
                    <li class="monkey"><a class="monkey" href="mertojak.html">Mertojak</a></li>
                    <li class="monkey"><a class="monkey" href="contact.php">Kontaktirajte nas</a></li>
                </ul>
            </div>
            <div class="ela">
                <div class="test"></div>
            </div>
            <div class="row3">
                <ul class="ulFooter1">
                    <li class="mailFooter"><a class="mailFooter" href="mailto:manas@gmail.com">manas@gmail.com</a></li>
                    <li class="brojFooter"><a class="brojFooter" href="tel:098323233">098 323 233</a></li>
                    <li class="footertekstp"><a class="footertekstp">Sarajevska 46E</a></li>
                    <li class="footertekstp"><a class="footertekstp">21000 Split</a></li>
                </ul>
            </div>
            <div class="livo">
                <div class="row5">
                    <a class="pFooter1">Copyright 2021 Handcrafter by <a class="aiv" href="#">AIV</a> </a>
                </div>
            </div>
        </div>
    </section>

    <section class="twobuttons">
        <div class="container10">
            <div class="kontakt10">
                <div class="kontakt11">
                    <a href="#" class="kontakt13">
                        <img src="assets/images/pismo.svg" alt="" class="kontakt69">
                    </a>
                </div>
                <div class="kontakt12">
                    <a href="#" class="kontakt14">Kontakt</a>
                </div>
            </div>
            <div class="projekti10">
                <div class="projekti11">
                    <a href="#" class="kontakt13">
                        <img src="assets/images/crane.svg" alt="" class="kontakt15">
                    </a>
                </div>
                <div class="projekti12">
                    <a href="#" class="kontakt14">Projekti</a>
                </div>
            </div>
        </div>
    </section>
    <footer>
    </footer>
    <script type="text/javascript">
        if(window.history.replaceState){
            window.history.replaceState(null, null, window.location.href);
        }
    </script>
    <script src="assets/js/main.js"></script>
</body>
</html>