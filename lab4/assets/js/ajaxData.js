$(document).ready(function () {

    displayFromDatabase();

    $("#submitform").click(function () {

        var city = $("#city").val();
        var username = $("#username").val();
        var country = $("#country").val();
        var tilDate = $("#tilDate").val();
        var fromDate = $("#fromDate").val();
        var email = $("#email").val();
        var userNotes = $("#userNotes").val();

        $.ajax({
            url: "./dbOperations.php",
            type: "POST",
            async: false,

            data: {
                "done": 1,
                "usernameInput": username,
                "citynameInput": city,
                "countrynameInput": country,
                "tilDateInput": tilDate,
                "fromDateInput": fromDate,
                "emailInput": email,
                "userNotesInput": userNotes
            },

            success: function (data) {
                displayFromDatabase();

            }
        });
    });
});

$(function () {
    $("#citatebtn").ready(function () {

        $.ajax({
            url: "./dbOperations.php",
            type: "POST",
            async: false,

            data: {
                "citate": 1,

            },
            success: function (data) {
                $("#citate").html(data);
            }
        });
    });
});

$(function () {

    $(".deleteBtn").click(function () {
        var elements = $(this);
        var userid = elements.attr("id");
        var info = 'id=' + userid;
        alert(info);
        if (confirm("Are you sure?")) {

            $.ajax({
                url: "./dbOperations.php",
                type: "POST",
                async: false,

                data: {
                    "donedelete": 1,
                    "userid": userid
                },
                success: function () {
                }

            });
            $(this).parent().parent().fadeOut(300, function () {

                $(this).remove();
            });
        }
        return false;
    });
});


$(function () {
    $(".editBtn").click(function () {
        var elements = $(this);
        var userid = elements.attr("id");

        $.ajax({
            url: "./dbOperations.php",
            type: "POST",
            async: false,

            data: {
                "doneedit": 1,
                "userid": userid
            },

            success: function (d) {

                $("#test1").html(d);

                $('#editModal').on('show.bs.modal', function () {
                    $("#usernameedit").val(namefromphp);
                    $("#cityedit").val(cityfromphp);
                    $("#countryedit").val(countryfromphp);
                    $("#fromDateedit").val(fromdatefromphp);
                    $("#tilDateedit").val(tilldatefromphp);
                    $("#emailedit").val(emailfromphp);
                    $("#userNotesedit").val(notesfromphp);

                    $("#editform").click(function () {

                        updateDataSet(userid);

                    });
                });
            }
        });
    });
});


function updateDataSet(userid) {

    var city = $("#cityedit").val();
    var username = $("#usernameedit").val();
    var country = $("#countryedit").val();
    var tilDate = $("#tilDateedit").val();
    var fromDate = $("#fromDateedit").val();
    var email = $("#emailedit").val();
    var userNotes = $("#userNotesedit").val();

    $.ajax({
        url: "./dbOperations.php",
        type: "POST",
        async: false,
        data: {
            "toedit": 1,
            "idEdit": userid,
            "usernameEdit": username,
            "citynameEdit": city,
            "countrynameEdit": country,
            "tilDateEdit": tilDate,
            "fromDateEdit": fromDate,
            "emailEdit": email,
            "userNotesEdit": userNotes
        },

        success: function (data) {
            displayFromDatabase();
        }
    });
}


function displayFromDatabase() {

    $.ajax({
        url: "./dbOperations.php",
        type: "POST",
        async: false,

        data: {
            "display": 1
        },

        success: function (d) {
            $("#test").html(d);
        }
    });
}