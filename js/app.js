/*everything is loaded on page load (inside the document ready)*/
$(document).ready(function () {


    // on page load -> display the default state --> show ryu-still (& hide everything else)*/
    $('.ryu-action').hide(); //(this line means hide all 4 divs)
    /* is replacing ...
        $('.ryu-still').hide();
        $('.ryu-ready').hide();
        $('.ryu-throwing').hide();
        $('.ryu-cool').hide();
    */
    $('.ryu-still').show();



    /* on mouseover
            --> mouseenter-> display ryu-ready (and hide everything esle)*/
    $('.ryu').mouseenter(function () {
        $('.ryu-action').hide(); //(this line means hide all 4 divs)
        $('.ryu-ready').show();
    });

    /*   -> mouseleave -> display the default state --> ryu-still (hide everything else) */
    $('.ryu').mouseleave(function () {
        $('.ryu-action').hide(); //(this line means hide all 4 divs)
        $('.ryu-still').show();
    });




    /* on click
             -> mousedown -> display ryu-throwing (and hide everything else) */
    $('.ryu').mousedown(function () {
        playHadouken();
        $('.ryu-action').hide(); //(this line means hide all 4 divs)
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate({
                //ending point for animation
                'left': '300px'
            },
            //speed of the animation in milliseconds (500ms = .5 sec)
            500,
            function () {
                $(this).stop();
                $(this).hide();
                //this is start point for animation
                $(this).css('left', '-186px'); //starting point
            }
        );
    });

    /*  -> mouseup -> display the default state --> ryu.still (and hide everything else)*/
    $('.ryu').mouseup(function () {
        $('.ryu-action').hide(); //(this line means hide all 4 divs)
        $('.ryu-still').show();
    });



    /* on press "x"
                -> keydown -> display ryu-cool (and hide everything else) */
    $(document).keydown(function (key) {
        //keyCode == 88 is the x key
        if (key.keyCode == 88) {
            $('.ryu-action').hide(); //(this line means all 4 divs)
            $('.ryu-cool').show();
            playCool()
        }
    });

    /*  --> kdyup -> display the default state --> ryu-still (and hide everything else) */
    $(document).keyup(function (key) {
        if (key.keyCode == 88) {
            $('.ryu-action').hide(); //(this line means hide all 4 divs)
            $('.ryu-still').show();
            $('#cool')[0].pause();
        }
    });


    //close document ready
});

/*how to play a sound */
var hadoukenSound = false;

function playHadouken() {
    //if the sound was playing before make sure it is stopped before starting a new one
    hadoukenSound = !hadoukenSound;
    if (hadoukenSound) {
        $('#hadouken-sound')[0].volume = 0.5; //set the volume (0=> 0% and 1 => 100%; so 0.5 is 50%)
        $('#hadouken-sound')[0].load(); //load the sound into the memory
        $('#hadouken-sound')[0].play(); //play it
    }
}

var coolSound = false;

function playCool() {
    //if the sounds was playing before make sure it is stopped before starting a new one
    coolSound = !coolSound;
    if (coolSound) {
        $('#cool')[0].play();
    }
}


// Page loads, Ryu is standing still
// mouse hover over Ryu and he shifts to ready pose
// stop hovering and Ryu goes back to still
// click on Ryu and he leans forward and throws a Hadouken
// Ryu remains in forward pose until release click and returns to ready pose
// hit "x" for "looking cool pose", release click to return to ready pose
// .hide() and .show()
// listen for mouseenter and mouseleave events
// listent for click events and initiate Hadouken sequence. mouseup and mouse down
// listen for "x" for keydown and keyup and respond with looking cool
