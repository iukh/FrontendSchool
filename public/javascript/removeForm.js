$("#delete").click(function() {
    console.log("Начинаем удалять");
    var Data = {};
    Data["course"]= $('#course').val();
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
                $("#content").html("Уважаемая "+responseData.name+", ваша заявка удалена");
                $("#content").append('<br><input class="button" id="submit" type="button" value="Оттправить еще одну заявку">');
            },
            error: function(xhr) {
                alert(xhr.responseText);
            }
        });
});