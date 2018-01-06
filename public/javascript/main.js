(function($) {
    var Navigation = {
    GetUsers: function() {
            $("#request").click(function() {
                var Data = {};
                Data["course"]= $('#course').val();
                console.log(Data);
                var Level = {
                    1: "Elementary",
                    2: "Middle",
                    3: "Advanced"
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
                    var SelectedItem = $(".default").attr('id');
                    console.log(SelectedItem);
                    $(".next").addClass('current').siblings().removeClass('current')
                        .parents('#book_marksbox').find('.book_markbox').hide().eq($(".next").index()).fadeIn(500);
                    $("#selectedCourse").val(SelectedItem);
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
                           });
    },
    SelectTab: function() {
        $('#book_marks').delegate('#book_mark:not(.current)', 'click', function(){
                    $(this).addClass('current').siblings().removeClass('current')
                    .parents('#book_marksbox').find('.book_markbox').hide().eq($(this).index()).fadeIn(500);
                    });
    }
    };
    $(document).ready(function(){
        if (""==document.cookie) {
        //setCookie(1);
        alert("Добро пожаловать на наш сайт")
        };
        $('.item').hover(function(){
            $('span',this).slideToggle('slow');
            $('.detail').click(function(event){
                    event.preventDefault();
                    $('.overlay').fadeIn(400, function() {
                        $('#JavaPopup').css('display','block');
                    });
                });
            $('.close, .overlay').click( function() {
                $('#JavaPopup').css('display','none');
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
    });
})(jQuery);