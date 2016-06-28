function styleSelect(){

    $('.register-time').styler();

    $('select.register-time').change(function(){

        $('.form-chossen-value span').text($(this).val());

    });

    $('.register-document').styler({
        selectPlaceholder:"Выберите документ"
    });

}


$(document).ready(function(){

    styleSelect();

});

$(window).load(function(){

});

$(window).resize(function(){

});