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



function googleMap(mapWrap){
    function initialize() {
        var myLatlng = new google.maps.LatLng(cordX,cordY);
        var myOptions = {
            zoom: 16,
            center: myLatlng,
            disableDefaultUI: true,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: false,
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
});

$(window).load(function(){

});

$(window).resize(function(){
    if($('.sendwich-icon').css('display') == 'none'){
        $('#menu').removeAttr('style');
        $('.sendwich-icon').removeClass('active');
    }
});