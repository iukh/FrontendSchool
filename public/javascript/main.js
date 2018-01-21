(function($) {
    var Navigation = {
            init: function() {
        },
        getPageByResource: function() {
            var resource=document.location.pathname.slice(1);
            $("."+resource).addClass('current').siblings().removeClass('current')
                      .parents('#book_marksbox').find('.book_markbox').hide().eq($("."+resource).index()).fadeIn(500);
        },
        GetUsers: function() {
                $("#request").click(function() {
                    var Data = {};
                    Data["course"]= $('#course').val();
                    Data["level"]=$('#courseLevel').val();
                    var amount;
                    if ($('#courseLevel').val() == "Все уровни") {
                    amount=25;
                    }
                    else if ($('#courseLevel').val() == "Beginner") amount=10;
                    else amount=5;
                    console.log(Data);
                    var Level = {
                        1: "Beginner",
                        2: "Elementary",
                        3: "Middle",
                        4: "Advanced"
                    };
                    $.ajax({
                        url: "/getStudents",
                        dataType: "json",
                        type: "post",
                        contentType: "application/json",
                        async: false,
                        data: JSON.stringify(Data),
                        success: function(responseData) {
                           console.log(responseData);
                           $("#courseStatistic").html("<p><span>Зарегистрировано </span>"+responseData.length+"<span>/</span>"+amount+"<span> участников</span></p>");
                           if (responseData.length>amount) {
                           $("#courseStatistic").append("<p>Отбор студентов будет проводиться по итогам очного собеседования.<br> О датах собеседования будет сообщено лично каждому студенту по указанным телефонам</p>")
                           }
                           $("#students").html("<th>Имя</th><th>Фамилия</th><th>Уровень</th><th>Email</th>");
                           for (var i=0; i<responseData.length;i++) {
                               $("#students").append("<tr><td>"+responseData[i].name+"</td><td>" +
                                responseData[i].lastname+"</td><td>"+
                                Level[responseData[i].level]+"</td><td>"+
                                responseData[i].email+"</td></tr>"
                               );
                            }
                        },
                        error: function(xhr) {
                            alert(xhr.responseText);
                        }
                    });
                });
        },

        GetForm: {
            GetTeachersForm: function() {
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
             },
        GetStudentsForm: function() {
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
        }
    },
        ClickContinueButton: function() {
            $("#continue").click(function() {

                $(".next").addClass('current').siblings().removeClass('current')
                    .parents('#book_marksbox').find('.book_markbox').hide().eq($(".next").index()).fadeIn(500);
                var SelectedItem = $(".default").attr('id');
                console.log(SelectedItem);
                $("#selectedCourse").html(SelectedItem);
                var redirect = '/registration';
                history.pushState('', '', redirect);
            });
        },

        SelectItem: function() {
            $("#items").delegate('.item', 'click', function() {
               $(".default").removeClass("default");
               $(this).toggleClass("default");
               console.log($(this).find($(".itemName")));
               $(this).find($(".itemName")).addClass("default");
               $(".info").text($(this).text());
               $('#continue').removeAttr("disabled");
               var SelectedItem = $(".default").attr('id');
               $("#сourseName").html(SelectedItem);
            });
        },
        SelectTab: function() {
            $('#book_marks').delegate('#book_mark:not(.current)', 'click', function(){
                $(this).addClass('current').siblings().removeClass('current')
                .parents('#book_marksbox').find('.book_markbox').hide().eq($(this).index()).fadeIn(500);
                history.pushState('', '', $(this).attr('name'));
            });
        },
        SendNextForm: function()  {
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
        }
    };
    $(document).ready(function(){
        if (""==document.cookie) {
            $('.overlay').fadeIn(400, function() {
            $('#advertisingPopup').css('display','block');
            $('.close, .overlay').click( function() {
                $('#advertisingPopup').css('display','none');
                $('.overlay').fadeOut(400);
            });
            document.cookie = "user=Recognized";
        });
        };
        $('.item').hover(function(){
            $('span',this).slideToggle('slow');
            $('.detailJava').click(function(event){
                    event.preventDefault();
                    $('.overlay').fadeIn(400, function() {
                        $('#JavaPopup').css('display','block');
                    });
                });
            $('.close, .overlay').click( function() {
                $('#JavaPopup').css('display','none');
                $('.overlay').fadeOut(400);
            });
            $('.noDetails').click(function(event){
                                event.preventDefault();
                                $('.overlay').fadeIn(400, function() {
                                    $('#NoDetailsPopUp').css('display','block');
                                });
                            });
            $('.close, .overlay').click( function() {
                $('#NoDetailsPopUp').css('display','none');
                $('.overlay').fadeOut(400);
             });
            }
        );

        Navigation.SelectTab();
        Navigation.SelectItem();
        Navigation.ClickContinueButton();

        Navigation.GetForm.GetStudentsForm();
        Navigation.GetForm.GetTeachersForm();
        Navigation.GetUsers();
        Navigation.SendNextForm();
        Navigation.getPageByResource();
    });
})(jQuery);