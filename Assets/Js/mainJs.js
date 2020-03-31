
var settime_a = null;
var settime_b = null;

var settime_d = null;
var settime_e = null;
function aaaa() {
    var mySwiper = new Swiper('.swiper-container', {
        mode: 'vertical',
        loop:true,
        onSwiperCreated: function (swiper) {

            $(".linelight").addClass("linelight_move");
            settime_a=setTimeout(function () {
                $(".sanlight").addClass("sanlight_move");
            }, 1000);
            settime_b=setTimeout(function () {
                $(".xingxing").addClass("xingxing_move");
            }, 2000);
          
                $(".xueleft").addClass("xueleft_move");
                $(".xueright").addClass("xueright_move");
       
            
            
            $(".scene-a").show();

        },
        onSlideChangeEnd: function (swiper) {
            clearclass();
            activeLoopIndex = swiper.activeIndex;
            switch (swiper.activeLoopIndex) {
                case 0:

                    $(".scene-a").show();
                    $(".linelight").addClass("linelight_move");
                    settime_a=setTimeout(function () {
                        $(".sanlight").addClass("sanlight_move");
                    }, 1000);
                    settime_b=setTimeout(function () {
                        $(".xingxing").addClass("xingxing_move");
                    }, 2000);

                        $(".xueleft").addClass("xueleft_move");
                        $(".xueright").addClass("xueright_move");

                    

                    break;
                case 1:
 
                    $(".scene-b").show();
                    $(".b_word").addClass("b_wordmove");
                    $(".b_light").addClass("b_light_move");
                    $(".b_guang").addClass("b_guang_move");
                    settime_d = setTimeout(function () {
                        $(".b_word").removeClass("b_wordmove");
                        $(".b_word").addClass("b_wordmovetwo");
                    }, 1100);
                    settime_e = setTimeout(function () {
                      
                        $(".b_word").removeClass("b_wordmovetwo");
                        $(".b_word").show();
                    }, 3000);
                    $(".icon").addClass("iconAnimation");
                    break;
                case 2:

                    $(".scene-c").show();
                    $(".c_line").addClass("c_line_move");
                    $(".c_img").addClass("c_img_move");
                    $(".c_word").addClass("c_word_move");
                    $(".icon").addClass("iconAnimation");
                    break;
                case 3:
                    $(".scene-d").show();
                    $(".d_line").addClass("d_line_move");
                    $(".d_word").addClass("d_wordmove");
                    $(".d_word_1").addClass("d_word_1_move");
                    $(".d_word_2").addClass("d_word_2_move");
                    $(".d_word_3").addClass("d_word_3_move");
                    $(".d_word_4").addClass("d_word_4_move");
                    $(".icon").addClass("iconAnimation");
                    break;

                case 4:
                    $(".scene-e").show();
                    $(".e_line").addClass("e_line_move");
                    $(".e_word").addClass("e_word_move");
                    $(".e_img").addClass("e_img_move");
                    $(".icon").addClass("iconAnimation");
                    break;
                case 5:

                    $(".scene-f").show();
                    $(".f_img_1").addClass("f_img_1_move");
                    $(".f_img_2").addClass("f_img_2_move");
                    $(".f_img_3").addClass("f_img_3_move");
                    $(".f_img_4").addClass("f_img_4_move");
                    $(".f_line").addClass("f_line_move");
                    $(".icon").addClass("iconAnimation");

                    break;
                case 6:

                    $(".scene-g").show();
                    $(".xingxinglast").addClass("xingxinglast_move");
                    $(".g_word").addClass("g_word_move");
                    $(".g_light").addClass("g_light_move");
                    $(".g_er").addClass("g_er_move");
                    break;





            }
        }
    });
}

function clearclass() {

    $(".icon").removeClass("iconAnimation");

    $(".g_er").removeClass("g_er_move");

    $(".linelight").removeClass("linelight_move");
    $(".sanlight").removeClass("sanlight_move");
    $(".xingxing").removeClass("xingxing_move");
    $(".xueleft").removeClass("xueleft_move");
    $(".xueright").removeClass("xueright_move");
    clearTimeout(settime_a);
    clearTimeout(settime_b);




    
    $(".b_word").removeClass("b_wordmove");
    $(".b_light").removeClass("b_light_move");
    $(".b_guang").removeClass("b_guang_move");
    clearTimeout(settime_d);
    clearTimeout(settime_e);


    $(".c_line").removeClass("c_line_move");
    $(".c_img").removeClass("c_img_move");
    $(".c_word").removeClass("c_word_move");



    $(".d_line").removeClass("d_line_move");
    $(".d_word").removeClass("d_wordmove");
    $(".d_word_1").removeClass("d_word_1_move");
    $(".d_word_2").removeClass("d_word_2_move");
    $(".d_word_3").removeClass("d_word_3_move");
    $(".d_word_4").removeClass("d_word_4_move");



    $(".e_line").removeClass("e_line_move");
    $(".e_word").removeClass("e_word_move");
    $(".e_img").removeClass("e_img_move");

    $(".f_img_1").removeClass("f_img_1_move");
    $(".f_img_2").removeClass("f_img_2_move");
    $(".f_img_3").removeClass("f_img_3_move");
    $(".f_img_4").removeClass("f_img_4_move");
    $(".f_line").removeClass("f_line_move");



    $(".xingxinglast").removeClass("xingxinglast_move");
    $(".g_word").removeClass("g_word_move");
    $(".g_light").removeClass("g_light_move");


   
}

$(".globalAudio").bind("click", function () {
    var media = $(this).find("audio")[0];
    if (media.paused) {
        media.play();
        audioPaused = true;
        $(this).addClass("play");
    } else {
        media.pause();
        audioPaused = false;
        $(this).removeClass("play");
    }
});





addEventListener("load", init, false);
function init(event) {
    $(".loader").fadeOut();
    $(".swiper-container").addClass("disn");

    $('#redux').eraser({
        completeRatio: .5,
        completeFunction: showResetButton
    });
}
function showResetButton() {
    $(".eraser").addClass("disn");
    $(".swiper-container").removeClass("disn");
    $(".swiper-container").addClass("disy");

    aaaa();


}
function remove(event) {
    $("#redux").eraser('clear');
    event.preventDefault();
}

function reset(event) {

}

function grow(event) {
    $("#redux").eraser("size", 200);
    event.preventDefault();
}




























