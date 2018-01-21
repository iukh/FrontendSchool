$("#delete").click(function() {
    console.log("Начинаем удалять");
    var Data = {};
    Data["course"]= $('#selectedCourse').html();
    console.log($('#selectedCourse').val());
    Data["name"]=window.name;
    Data["mail"]=window.email;
    console.log(Data);
        $.ajax({
            url: "/deleteStudent",
            dataType: "json",
            type: "post",
            contentType: "application/json",
            data: JSON.stringify(Data),
            success: function(responseData) {
                $("#content").html("<br>Уважаемый(-ая) "+responseData.name+", ваша заявка удалена");
                $("#content").append('<br><input class="button" id="submitAgain" type="button" value="Оттправить еще одну заявку">');
            },
            error: function(xhr) {
                alert(xhr.responseText);
            }
        });
});
$("#deleteTeacher").click(function() {
    console.log("Начинаем удалять");
    var Data = {};
    Data["course"]= $('#selectedCourse').val();
    console.log($('#selectedCourse').html());
    Data["name"]=window.name;
    Data["mail"]=window.email;
    console.log(Data);
        $.ajax({
            url: "/deleteTeacher",
            dataType: "json",
            type: "post",
            contentType: "application/json",
            data: JSON.stringify(Data),
            success: function(responseData) {
                $("#content").html("Уважаемый(-ая) "+responseData.name+", ваша заявка удалена");
                $("#content").append('<br><input class="button" id="submitAgain" type="button" value="Оттправить еще одну заявку">');
            },
            error: function(xhr) {
                alert(xhr.responseText);
            }
        });
});
$("#submitAgain").click(function() {
             $.ajax({
                url: "/",
                dataType: "html",
                type: "post",
                success: function(data) {
                    $("#content").html(data);
                },
                error: function() {
                    alert("Not OK");
                }
              });
          });