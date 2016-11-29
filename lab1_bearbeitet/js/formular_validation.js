// Vermeidet das Javascript vorm DOM laden, ausgeführt wird
window.addEventListener("load", function (event) {


        Array.prototype.random = function () {
            return this[Math.floor((Math.random() * this.length))];
        }


        var arrayCities = ["Berlin", "Moskau", "Istanbul", "London", "123", "berlin", "asdasd", "sadasdasdasdadasdadasdasdasdasdasdasdaeqwdsadasdadaSDASDFSDFSFSDFSDFSDFASESF<WEWRESFRSDAF"];
        var arrayCountries = ["Russland", "Deutschland", "England", "21542", "sdlkjaslkjdaskljdalksjdalsdjalskjdalkjsdasjdakljsdaksjdaklsjdaklsjd"]
        var arrayFromDate = ["2002-12-12", "1955-55-85", "2587-54-564", "sdad-asdsad-asd", "2002-10-10", "2015-13-25", "2002-11-11"];
        var arrayTillDate = ["2002-12-12", "1955-55-85", "2587-54-564", "sdad-asdsad-asd", "2002-10-10", "2015-13-25", "2002-11-11"];
        var arrayEmail = ["sdasdsadas", "test@beuth-hochschule.de", "test2@beuth-hochschule.de", "asdasd@sdsd.dsds", "654rfdgfd", "test@test.de", "test1@test1.ru,11556@4456.25"];


        var inputFromDate = document.getElementById('fromDate'),
            inputTilDate = document.getElementById('tilDate'),
            inputEmail = document.getElementById('email'),
            inputCity = document.getElementById('city'),
            inputCountry = document.getElementById('country');

        inputTilDate.addEventListener("input", tilDateChecking, false);
        inputFromDate.addEventListener("input", FromDateChecking, false);
        inputEmail.addEventListener("input", EmailChecking, false);
        inputCity.addEventListener("input", cityChecking, false);
        inputCountry.addEventListener("input", countryChecking, false);


        function cityChecking() {

            if (inputCity.checkValidity() == false) {
                document.getElementById('cityCheck').innerHTML = "Bitte nur Buchstaben (max.30) eingeben!";
            }
            else {
                document.getElementById('cityCheck').innerHTML = "";

            }
        }

        function countryChecking() {

            if (inputCountry.checkValidity() == false) {
                document.getElementById('countryCheck').innerHTML = "Bitte nur Buchstaben (max.40) eingeben!";
            }
            else {
                document.getElementById('countryCheck').innerHTML = "";

            }
        }


        function FromDateChecking() {

            if (inputFromDate.checkValidity() == false) {
                document.getElementById('fromDateCheck').innerHTML = "Bitte Datum nach Format YYYY-MM-DD eingeben";

            } else if (inputTilDate.value < inputFromDate.value) {
                document.getElementById('fromDateCheck').innerHTML = "Bis Datum ist kleiner als Von Datum";

            } else {
                inputTilDate.setCustomValidity('');
                document.getElementById('tilDateCheck').innerHTML = "";
                document.getElementById('fromDateCheck').innerHTML = "";

            }

        }


        function tilDateChecking() {

            if (inputTilDate.checkValidity() == false) {
                document.getElementById('tilDateCheck').innerHTML = "Bitte Datum nach Format YYYY-MM-DD eingeben";

            } else if (inputTilDate.value < inputFromDate.value) {
                document.getElementById('tilDateCheck').innerHTML = "Bis Datum ist kleiner als Von Datum";


            } else {

                document.getElementById('tilDateCheck').innerHTML = "";
                document.getElementById('fromDateCheck').innerHTML = "";

            }
        }

        function EmailChecking() {

            if (inputEmail.checkValidity() == false) {
                document.getElementById('emailCheck').innerHTML = "Bitte E-Mail Adresse nach Muster xxxx@yyy.zz eingeben";

            } else if (!(inputEmail.value.endsWith("@beuth-hochschule.de"))) {
                document.getElementById('emailCheck').innerHTML = "Email muss mit @beuth-hochschule.de enden";
            }
            else {
                document.getElementById('emailCheck').innerHTML = "";
            }
        }


        fill = function () {

            document.getElementById("city").value = arrayCities.random();
            document.getElementById("country").value = arrayCountries.random();
            document.getElementById("fromDate").value = arrayFromDate.random();
            document.getElementById("tilDate").value = arrayTillDate.random();
            document.getElementById("email").value = arrayEmail.random();



            cityChecking();
            countryChecking();
            FromDateChecking();
            tilDateChecking();
            EmailChecking();
        }
    }
);