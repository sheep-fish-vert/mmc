function styleSelect(){

    $('.form-style-select').styler();

    $('select.register-time').change(function(){

        console.log('s');

        $('.form-chossen-value span').text($(this).val());

    });

}


$(document).ready(function(){

    styleSelect();

});

$(window).load(function(){

});

$(window).resize(function(){

});