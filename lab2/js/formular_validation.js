// Vermeidet das Javascript vorm DOM laden, ausgeführt wird

var globalstate_city = false;
var globalstate_country = false;
var globalstate_from = false;
var globalstate_til = false;
var globalstate_email = false;

window.addEventListener("load", function (event) {


        Array.prototype.random = function () {
            return this[Math.floor((Math.random() * this.length))];
        }


        var arrayCities = ["Berlin", "Moskau", "", "123", "132"];
        var arrayCountries = ["Russland", "Deutschland", "England", "21542", "sdlkjaslkjdaskljdalksjdalsdjalskjdalkjsdasjdakljsdaksjdaklsjdaklsjd"]
        var arrayFromDate = ["2002-12-12", "1955-55-85", "2587-54-564", "sdad-asdsad-asd", "2002-10-10", "2015-13-25", "2002-11-11"];
        var arrayTillDate = ["2002-12-12", "1955-55-85", "2587-54-564", "sdad-asdsad-asd", "2002-10-10", "2015-13-25", "2002-11-11"];
        var arrayEmail = ["sdasdsadas", "test@beuth-hochschule.de", "test2@beuth-hochschule.de", "asdasd@sdsd.dsds", "654rfdgfd", "test@test.de", "test1@test1.ru,11556@4456.25"];


        var inputFromDate = document.getElementById('fromDate'),
            inputTilDate = document.getElementById('tilDate'),
            inputEmail = document.getElementById('email'),
            inputCity = document.getElementById('city'),
            inputCountry = document.getElementById('country');

        var cityRegex = /^[a-zA-Z]{1,30}/;
        var countryRegex = /^[a-zA-Z]{1,40}/;
        var dateRegex = /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/;
        var emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;


        inputTilDate.addEventListener("input", tilDateChecking, false);
        inputFromDate.addEventListener("input", fromDateChecking, false);
        inputEmail.addEventListener("input", emailChecking, false);
        inputCity.addEventListener("input", cityChecking, false);
        inputCountry.addEventListener("input", countryChecking, false);


        function cityChecking() {

            if (inputCity.value.match(cityRegex)) {
                document.getElementById('cityCheck').innerHTML = "";//посмотреть что будет если только if без else
                globalstate_city = true;
            } else {
                document.getElementById('cityCheck').innerHTML = "city Reg not ok";
                globalstate_city = false;
            }
            if (inputCity.value == "") {
                document.getElementById('cityCheck').innerHTML = "Bitte etwas eingeben";
                globalstate_city = false;

            }
        }

        function countryChecking() {

            if (inputCountry.value.match(countryRegex)) {
                document.getElementById('countryCheck').innerHTML = "";
                globalstate_country = true;
            } else {
                document.getElementById('countryCheck').innerHTML = "city Reg not ok";
                globalstate_country = false;
            }
            if (inputCountry.value == "") {
                document.getElementById('countryCheck').innerHTML = "Bitte etwas eingeben";
                globalstate_country = false;
            }
        }


        function fromDateChecking() {

            if (inputFromDate.value.match(dateRegex)) {
                document.getElementById('fromDateCheck').innerHTML = "";
                globalstate_from = true;
            } else if (inputTilDate.value < inputFromDate.value) {
                document.getElementById('fromDateCheck').innerHTML = "Bis Datum ist kleiner als Von Datum";
                globalstate_from = false;
            } else {
                document.getElementById('fromDateCheck').innerHTML = "Bitte Datum nach Format YYYY-MM-DD eingeben";
                globalstate_from = false;
            }
            if (inputFromDate.value == "") {
                document.getElementById('fromDateCheck').innerHTML = "Bitte etwas eingeben";
                globalstate_from = false;
            }
        }


        function tilDateChecking() {

            if (inputTilDate.value.match(dateRegex)) {
                document.getElementById('tilDateCheck').innerHTML = "";
                globalstate_til = true;
            } else if (inputTilDate.value < inputFromDate.value) {
                document.getElementById('tilDateCheck').innerHTML = "Bis Datum ist kleiner als Von Datum";
                globalstate_til = false;
            } else {
                document.getElementById('tilDateCheck').innerHTML = "Bitte Datum nach Format YYYY-MM-DD eingeben";
                globalstate_til = false;
            }
            if (inputTilDate.value == "") {
                document.getElementById('tilDateCheck').innerHTML = "Bitte etwas eingeben";
                globalstate_til = false;
            }
        }

        function emailChecking() {


            if (inputEmail.value.match(emailRegex)) {
                document.getElementById('emailCheck').innerHTML = "";
                globalstate_email = true;
            }
            if (!(inputEmail.value.endsWith("@beuth-hochschule.de"))) {
                document.getElementById('emailCheck').innerHTML = "Email muss mit @beuth-hochschule.de enden";
                globalstate_email = false;
            } else if (!(inputEmail.value.endsWith("@beuth-hochschule.de"))) {
                document.getElementById('emailCheck').innerHTML = "Bitte E-Mail Adresse nach Muster xxxx@yyy.zz eingeben";
                globalstate_email = false;
            }
            if (inputEmail.value == "") {
                document.getElementById('emailCheck').innerHTML = "Bitte etwas eingeben";
                globalstate_email = false;
            }

        }

        /*(function () {
         cityChecking();
         countryChecking();
         fromDateChecking();
         tilDateChecking();
         emailChecking();
         })();*/


        fill = function () {

            document.getElementById("city").value = arrayCities.random();
            document.getElementById("country").value = arrayCountries.random();
            document.getElementById("fromDate").value = arrayFromDate.random();
            document.getElementById("tilDate").value = arrayTillDate.random();
            document.getElementById("email").value = arrayEmail.random();


            cityChecking();
            countryChecking();
            fromDateChecking();
            tilDateChecking();
            emailChecking();
        }
    }
);

function validate(form) {


    var city = form.city.value;
    var country = form.country.value;
    var from = form.fromDate.value;
    var til = form.tilDate.value;
    var email = form.email.value;
    var x = (globalstate_country && globalstate_city && globalstate_email && globalstate_from && globalstate_til);

    if (country == "") {
        document.getElementById('countryCheck').innerHTML = "Bitte etwas eingeben";
        return false;
    }
    if (city == "") {
        document.getElementById('cityCheck').innerHTML = "Bitte etwas eingeben";
        return false;
    }
    if (from == "") {
        document.getElementById('fromDateCheck').innerHTML = "Bitte etwas eingeben";
        return false;
    }
    if (til == "") {
        document.getElementById('tilDateCheck').innerHTML = "Bitte etwas eingeben";
        return false;
    }
    if (email == "") {
        document.getElementById('emailCheck').innerHTML = "Bitte etwas eingeben";
        return false;
    }
    return x;
}
