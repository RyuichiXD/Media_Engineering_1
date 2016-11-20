// Vermeidet das Javascript vorm DOM laden, ausgeführt wird
window.addEventListener("load", function (event) {


    var inputFromDate = document.getElementById('fromDate');
    var inputTilDate = document.getElementById('tilDate'),
        inputEmail = document.getElementById('email');

    inputTilDate.addEventListener("change", tilDateCheck, false);

    inputFromDate.addEventListener("change", FromDateCheck, false);

    function tilDateCheck() {
        if (inputTilDate.value < inputFromDate.value) {
            document.getElementById('tilDateCheck').innerHTML = "Bis Datum ist kleiner als Von Datum";
        }
        else {
            document.getElementById('tilDateCheck').innerHTML = "";
            document.getElementById('fromDateCheck').innerHTML = "";
        }
    }

    function FromDateCheck() {
        if (inputFromDate.value > inputTilDate.value) {
            document.getElementById('fromDateCheck').innerHTML = "Von Datum ist größer als Bis Datum";
        }
        else {
            document.getElementById('tilDateCheck').innerHTML = "";
            document.getElementById('fromDateCheck').innerHTML = "";
        }
    }

    inputEmail.onchange = function () {
        if (inputEmail.value.endsWith("@beuth-hochschule.de")) {
            document.getElementById('emailCheck').innerHTML = "";
        }
        else {
            document.getElementById('emailCheck').innerHTML = "Email muss mit @beuth-hochschule.de enden";
        }
    };

    Array.prototype.random = function () {
        return this[Math.floor((Math.random() * this.length))];
    }


    var arrayCities = ["Berlin", "Moskau", "Istambul", "London", "123", "berlin", "asdasd", "sadasdasdasdadasdadasdasdasdasdasdasdaeqwdsadasdadaSDASDFSDFSFSDFSDFSDFASESF<WEWRESFRSDAF"];
    var arrayCountries = ["Russland", "Deutschland", "Türkei", "21542", "sdlkjaslkjdaskljdalksjdalsdjalskjdalkjsdasjdakljsdaksjdaklsjdaklsjd"]
    var arrayFromDate = ["2002-12-12", "1955-55-85", "2587-54-564", "sdad-asdsad-asd", "2002-10-10", "2015-13-25", "2002-11-11"];
    var arrayTillDate = ["2002-12-12", "1955-55-85", "2587-54-564", "sdad-asdsad-asd", "2002-10-10", "2015-13-25", "2002-11-11"];
    var arrayEmail = ["sdasdsadas", "asdasd@sdsd.dsds", "654rfdgfd", "test@test.de", "test1@test1.ru,11556@4456.25"];

    console.log(arrayCities.random());


    fill = function () {

        document.getElementById("city").value = arrayCities.random();
        document.getElementById("country").value = arrayCountries.random();
        document.getElementById("fromDate").value= arrayFromDate.random();
        document.getElementById("fromDate").value = "2002-12-12";
        document.getElementById("tilDate").value = arrayTillDate.random();
        document.getElementById("email").value = arrayEmail.random();
    }






});