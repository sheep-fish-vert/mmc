function butter(){
    $('.sendwich-icon').click(function() {
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $('#menu').stop().slideDown();
        }else{
            $('#menu').stop().slideUp();
        }
    });
}
function inputCheck() {
    $('.contact-form').on('keyup', 'input', function () {

        if($(this).attr('aria-invalid') == 'false'){
            console.log($(this).attr('aria-invalid'));
            $(this).parent().addClass('show');
        }else{
            console.log($(this).attr('aria-invalid'));
            $(this).parent().removeClass('show');
        }
    });
}


function googleMap(mapWrap){
    function initialize() {
        var myLatlng = new google.maps.LatLng(cordX,cordY);
        var myOptions = {
            zoom: 16,
            center: myLatlng,
            disableDefaultUI: true,
            


            mapTypeId: google.maps.MapTypeId.ROADMAP

        };
        var map = new google.maps.Map(document.getElementById(mapWrap), myOptions);



        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            animation: google.maps.Animation.DROP

        });


        marker.addListener('click', toggleBounce);
        function toggleBounce() {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        }



    }
    initialize();
}

$(document).ready(function(){
    butter();
    googleMap('map');
    inputCheck();
});

$(window).load(function(){

});

$(window).resize(function(){
    if($('.sendwich-icon').css('display') == 'none'){
        $('#menu').removeAttr('style');
        $('.sendwich-icon').removeClass('active');
    }
});