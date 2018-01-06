(function($) {
    var Navigation = {
        init: function() {
            this.init();
        },
        SendForm: function()  {
            $("#submit").click(function() {
            $('input#name, input#lastname, input#mail, input#phone, select#level').each(function() {
                var val = $(this).val();
                if (val==null || val=="") {
                    $(this).addClass('error');
                    $(this).next('.error-box').html('Поле обязательно к заполнению')
                                              .css('color','red')
                }
            });
             if($('.not_error').length == 5) {
                 console.log($("#clientForm1").serializeArray());
                 var formData = {};
                 $("#clientForm1").serializeArray().map(function(x){formData[x.name] = x.value;});
                 formData["course"]=$('#selectedCourse').val();
                 $("#content").html(formData['name']);
                 $.ajax({
                    url: "/addStudent",
                    dataType: "json",
                    type: "post",
                    data: JSON.stringify(formData),
                    contentType: "application/json",
                    success: function(responseData) {
                        $("#content").html("Уважаемая "+responseData.name+
                        ", ваша заявка принята.<br> Вся информация о курсе отправлена на почту "+responseData.email+
                        ". <br> Мы свяжемся с вами по телефону: "+responseData.phone+"<br>");
                        $("#content").append('<input class="button" id="submit" type="button" value="Оттправить еще одну заявку">');
                        $("#content").append('<input class="button" id="delete" type="button" value="Удалить заявку">');
                        $("#content").append('<script src="javascript/removeForm.js"></script>');
                        console.log("Success");
                        window.name=responseData.name;
                        window.email=responseData.email;
                        },
                    error: function() {
                        alert("Not OK");
                        }
                  });
              }
              else
              {
                console.log("Not all fields filled")
                return false;
              }
              });
        }
    };
$(document).ready(function(){
    Navigation.SendForm();
});
})(jQuery);