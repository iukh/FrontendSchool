$("#form1").click(function() {
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