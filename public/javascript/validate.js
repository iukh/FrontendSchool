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
                            $(this).next('.error-box').html('Поле "Имя" обязательно для заполнения')
                                .css('color','red')
                                .css('font','14px Helvetica');
                                }
                        else
                        {
                            $(this).removeClass('not_error').addClass('error');
                            $(this).next('.error-box').html('Длина имени должна составлять не менее 2 символов')
                                                                    .css('color','red')
                                                                    .css('font','14px Helvetica');

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
                            $(this).next('.error-box').html('Поле "Фамилия" обязательно для заполнения')
                                                                .css('color','red')
                                                                .css('font','14px Helvetica');
                        }
                        else
                        {
                            $(this).removeClass('not_error').addClass('error');
                            $(this).next('.error-box').html('Длина фамилии должна составлять не менее 2 символов')
                                                                .css('color','red')
                                                                .css('font','14px Helvetica');
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
                            $(this).next('.error-box').html('Неправильный формат адреса электронной почты')
                                    .css('color','red')
                                    .css('font','14px Helvetica')
                        }
                        break;

                    case 'phone':
                        if(val.length == 11)
                        {
                            $(this).removeClass('error').addClass('not_error');
                            $(this).next('.error-box').html('');
                            }
                        else if(val.length == "")
                        {
                            $(this).removeClass('not_error').addClass('error');
                            $(this).next('.error-box').html('Поле "Контактный телефон" обязательно для заполнения')
                                                .css('color','red')
                                                .css('font','14px Helvetica');
                         }
                        else {
                            $(this).removeClass('not_error').addClass('error');
                            $(this).next('.error-box').html('Контактный телефон должен состоять из 11 цифр')
                                              .css('color','red')
                                              .css('font','14px Helvetica');
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