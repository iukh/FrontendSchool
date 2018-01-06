(function($) {
    $(document).ready(function(){
        $('input#name, input#lastname, input#mail, input#phone, select#level').unbind().blur(function(){
                var id = $(this).attr('id');
                var val = $(this).val();
                switch(id)
                {
                    case 'name':

                    if(val.length > 2)
                    {
                        $(this).removeClass('error').addClass('not_error');
                        $(this).next('.error-box').html('');
                    }
                    else if(val.length=="")
                    {
                        $(this).removeClass('not_error').addClass('error');
                        $(this).next('.error-box').html('поле "Имя" обязательно для заполнения')
                            .css('color','red');
                            }
                    else
                    {
                        $(this).removeClass('not_error').addClass('error');
                        $(this).next('.error-box').html('Длина имени должна составлять не менее 2 символов')
                                                                .css('color','red');

                    }
                    break;

                    case 'lastname':
                    if(val.length > 2)
                    {
                        $(this).removeClass('error').addClass('not_error');
                        $(this).next('.error-box').html('');
                        }
                    else if(val.length=="")
                    {
                        $(this).removeClass('not_error').addClass('error');
                        $(this).next('.error-box').html('поле "Lastname" обязательно для заполнения')
                                                            .css('color','red')
                    }
                    else
                    {
                        $(this).removeClass('not_error').addClass('error');
                        $(this).next('.error-box').html('Длина имени должна составлять не менее 2 символов')
                                                            .css('color','red');
                    }
                    break;

                    case 'mail':
                    var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
                    if(val != '' && rv_email.test(val))
                    {
                        $(this).removeClass('error').addClass('not_error');
                        $(this).next('.error-box').html('');
                    }
                    else
                    {
                        $(this).removeClass('not_error').addClass('error');
                        $(this).next('.error-box').html('неправильный формат адреса электронной почты')
                                .css('color','red')
                    }
                    break;

                    case 'phone':
                    if(val.length > 2)
                    {
                        $(this).removeClass('error').addClass('not_error');
                        $(this).next('.error-box').html('');
                        }
                    else
                    {
                        $(this).removeClass('not_error').addClass('error');
                        $(this).next('.error-box').html('поле "phone" обязательно для заполнения')
                                            .css('color','red');
                     }
                    break;

                    case 'level':
                    if (val!=null)
                    {
                        $(this).removeClass('error').addClass('not_error');
                    }

                }
            });
});
})(jQuery);