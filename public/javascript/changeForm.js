$("#form1").click(function() {
    history.pushState('', '', '/StudentRegistration');
    $.ajax({
        url: "/blocks/form1.html",
        dataType: "html",
        success: function(data) {
            $("#content").html(data);
        },
        error: function() {
            alert("Not OK");
        }
     });
 });
$("#form2").click(function() {
    history.pushState('', '', '/TeacherRegistration');
    $.ajax({
        url: "/blocks/form2.html",
        dataType: "html",
        success: function(data) {
            $("#content").html(data);
        },
        error: function() {
            alert("Not OK");
        }
    });
});