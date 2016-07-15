$(document).ready(function(){
    addUpdateDataButtonClickListener();
    hideVideoUntilModalOpened();
    hideVideoWhenModalClosed();
});

var audio = new Audio('./assets/sound/Power-down-sound-effect.mp3');

function addUpdateDataButtonClickListener() {
    $('[data-target="#videoModal"]').click(function() {
        playPowerDownEffect();
        $('.sec-padding').removeClass('sec-padding');
        $('section').addClass('animate-effect');
    });
}

function playPowerDownEffect() {
    audio.volume = 0.5;
    audio.play();
}

function hideVideoUntilModalOpened() {
    var url = $('#video-hack').attr('src');
    $('#video-hack').attr('src', '');
    $('#videoModal').on('shown.bs.modal', function() {
        $('#video-hack').attr('src', url);
    });
}

function hideVideoWhenModalClosed() { 
    $('#videoModal').on('hide.bs.modal', function(){
        $('#video-hack').attr('src', '');
    });
}
