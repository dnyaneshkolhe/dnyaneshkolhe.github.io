/* Octelmark Technology | Copyright 2022 v1.0 */
/*--------------------------------------------------------------
# General
--------------------------------------------------------------*/
body {
  font-family: "Open Sans", sans-serif;
  color: #444;
}

a {
  text-decoration: none;
  /* color: #4f92af; */
}

a:hover {
  /* color: #5eb8df; */
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6, .font-primary {
  font-family: "Raleway", sans-serif;
}

/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
#header {
  height: 80px;
  padding: 20px 0;
  position: relative;
  z-index: 10;
  margin-left: 30px;
}
#header .logo h1 {
  font-size: 20px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 600;
  letter-spacing: 3px;
}
#header .logo h1 a, #header .logo h1 a:hover {
  color: rgb(0, 0, 0);
  text-decoration: none;
}
#header .logo img {
  padding: 0;
  margin: 0;
  max-height: 40px;
}
#header .contact-link a {
  color: rgb(0, 0, 0);
  padding-right: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  margin-right: 10px;
  text-transform: uppercase;
}
#header .contact-link a:hover {
  text-decoration: underline;
}
@media (max-width: 768px) {
  #header .logo h1 {
    font-size: 28px;
    padding: 8px 0;
  }
}

/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
#hero {
  width: 100%;
  height: 100vh;
  background: url("../img/img.jpg") top center;
  /* background-color: rgb(78, 175, 175); */
  background-size: cover;
  position: relative;
  margin-top: -80px;
  z-index: 9;
  /* countdown */
}
#hero .hero-container {
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 0 15px;
}
#hero h1 {
  margin: 0 0 10px 0;
  font-size: 20px;
  font-weight: 700;
  line-height: 56px;
  /* text-transform: uppercase; */
  color: rgb(97, 79, 79);
}
#hero h2 {
  color: rgb(0, 0, 0);
  margin-bottom: 30px;
  font-size: 24px;
}
#hero .countdown {
  font-size: 48px;
  font-weight: 300;
  color: #fff;
  line-height: 56px;
  margin: 30px 0 60px 0;
}
#hero .php-email-form .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}
#hero .php-email-form .sent-message {
  display: none;
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}
#hero .php-email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
}
#hero .php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  -webkit-animation: animate-loading-notify 1s linear infinite;
  animation: animate-loading-notify 1s linear infinite;
}
@-webkit-keyframes animate-loading-notify {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes animate-loading-notify {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (min-width: 1024px) {
  #hero {
    background-attachment: fixed;
  }
}
@media (max-width: 768px) {
  #hero h1 {
    font-size: 28px;
    line-height: 36px;
  }
  #hero h2 {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 30px;
  }
  #hero .php-email-form input {
    margin: 0 auto;
  }
}
@media (max-width: 575px) {
  #hero .countdown {
    font-size: 32px;
    line-height: 38px;
  }
}

/*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
section {
  padding: 60px 0;
}

.section-bg {
  background-color: #f7fafc;
}

.section-title {
  text-align: center;
  padding-bottom: 30px;
}
.section-title h2 {
  font-size: 32px;
  font-weight: 300;
  margin-bottom: 20px;
  padding-bottom: 0;
}
.section-title p {
  margin-bottom: 0;
}

/*--------------------------------------------------------------
# Contact Us
--------------------------------------------------------------*/
.contact .contact-info {
  margin-bottom: 20px;
  text-align: center;
}
.contact .contact-info i {
  font-size: 48px;
  display: inline-block;
  margin-bottom: 10px;
  /* color: #4f92af; */
}
.contact .contact-info address, .contact .contact-info p {
  margin-bottom: 0;
  color: #444;
}
.contact .contact-info h3 {
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 300;
  color: #999;
}
.contact .contact-info a {
  color: #000;
}
.contact .contact-info a:hover {
  color: #4f92af;
}
.contact .contact-address, .contact .contact-phone, .contact .contact-email {
  margin-bottom: 20px;
}
.contact .php-email-form .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  font-weight: 600;
}
.contact .php-email-form .error-message br + br {
  margin-top: 25px;
}
.contact .php-email-form .sent-message {
  display: none;
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}
.contact .php-email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
}
.contact .php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  /* border: 3px solid #18d26e; */
  border-top-color: #eee;
  -webkit-animation: animate-loading 1s linear infinite;
  animation: animate-loading 1s linear infinite;
}
.contact .php-email-form input, .contact .php-email-form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
}
.contact .php-email-form input:focus, .contact .php-email-form textarea:focus {
  border-color: #4f92af;
}
.contact .php-email-form button[type=submit] {
  background: #4f92af;
  border: 0;
  padding: 10px 24px;
  color: #fff;
  transition: 0.4s;
}
.contact .php-email-form button[type=submit]:hover {
  background: #72a8bf;
}
@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@media (min-width: 768px) {
  .contact .contact-phone {
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
  }
  .contact .contact-address, .contact .contact-phone, .contact .contact-email {
    padding: 20px 0;
  }
}

/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
#footer {
  /* background: #0d182d; */
  background-color: rgb(15, 15, 15);
  padding: 25px 0;
  color: #fff;
  font-size: 14px;
}
#footer .copyright {
  text-align: center;
}
#footer .credits {
  padding-top: 10px;
  text-align: center;
  font-size: 13px;
  color: #fff;
}
#footer .credits a {
  color: #575353;
}

strong a{
  color: #f5ad7e;
}

strong a:hover{
  color: #ffc8a3;
}
/* dropdown */
.dropbtn {
  /* background-color: darkslategray; */
  background-color: #000;
  color: rgb(255, 255, 255);
  padding-right: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;
  margin-right: 10px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  /* background-color: darkslategray; */
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(235, 235, 235, 0.2);
  z-index: 1;
}

.dropdown-content a {
  /* color: rgb(196, 196, 196); */
  padding: 8px 5px;
  align-content: center;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #000;;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: #000;; text-decoration: underline;}
