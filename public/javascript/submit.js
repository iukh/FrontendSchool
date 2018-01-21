(function($) {
    var Navigation = {
        init: function() {
            this.init();
        },
        SendStudentForm: function()  {
            $("#submit").click(function() {
            $('input#name, input#lastname, input#mail, input#phone, select#level').each(function() {
                var val = $(this).val();
                if (val==null || val=="") {
                    $(this).addClass('error');
                    $(this).next('.error-box').html('Поле обязательно к заполнению')
                                              .css('color','red')
                                              .css('font','14px Helvetica')
                }
            });
             if($('.not_error').length == 5) {
                 console.log($("#clientForm1").serializeArray());
                 var formData = {};
                 $("#clientForm1").serializeArray().map(function(x){formData[x.name] = x.value;});
                 formData["course"]=$('#selectedCourse').html();
                 $("#content").html(formData['name']);
                 $.ajax({
                    url: "/addStudent",
                    dataType: "json",
                    type: "post",
                    data: JSON.stringify(formData),
                    contentType: "application/json",
                    success: function(responseData) {
                        $("#content").html("<br><br>Уважаемый(-ая) "+responseData.name+
                        ", ваша заявка принята.<br> Вся информация о курсе отправлена на почту "+responseData.email+
                        ". <br> Мы свяжемся с вами по телефону: "+responseData.phone+"<br>");
                        $("#content").append('<input class="button" id="submitAgain" type="button" value="Оттправить еще одну заявку">');
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
        },
        SendTeacherForm: function()  {
                $("#submitTeacherForm").click(function() {
                $('input#name, input#lastname, input#mail, input#phone').each(function() {
                    var val = $(this).val();
                    if (val==null || val=="") {
                        $(this).addClass('error');
                        $(this).next('.error-box').html('Поле обязательно к заполнению')
                                                  .css('color','red')
                                                  .css('font','14px Helvetica')
                    }
                });
                 if($('.not_error').length == 4) {
                     console.log($("#clientForm2").serializeArray());
                     var formData = {};
                     $("#clientForm2").serializeArray().map(function(x){formData[x.name] = x.value;});
                     formData["course"]=$('#selectedCourse').html();
                     $("#content").html(formData['name']);
                     $.ajax({
                        url: "/addTeacher",
                        dataType: "json",
                        type: "post",
                        data: JSON.stringify(formData),
                        contentType: "application/json",
                        success: function(responseData) {
                            $("#content").html("Уважаемый(-ая) "+responseData.name+
                            ", ваша заявка принята.<br> Подробная информации отправлена на почту: "+responseData.email+
                            ". <br> Мы обязательно свяжемся с вами в ближацше время по телефону: "+responseData.phone+"<br>");
                            $("#content").append('<input class="button" id="deleteTeacher" type="button" value="Отменить заявку">');
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
    Navigation.SendStudentForm();
    Navigation.SendTeacherForm();
});
})(jQuery);