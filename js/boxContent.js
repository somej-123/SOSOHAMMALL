$(document).ready(function(){
    var $box = $('.box_title').children('li');
    var $box_content = $('.se2_box').children('div');
    var now_num = 0;
    var $count;

    $box.click(function(){
        console.log($box_content);
        now_num = $(this).index();
        $box.eq(now_num).addClass('on2').siblings().removeClass('on2');
        $box_content.stop().fadeOut();
        $box_content.eq(now_num).stop().fadeIn();
    });

    function init(){
        $now_num = $('.se2_box>on').index();
    }
    function box_slider(){

        function autoPlay(){
            $count = setInterval(function(){
                go();
            },5000);
        }

        $('.se2_box').mouseenter(function(){
            clearInterval($count);
        });

        $('.se2_box').mouseleave(function(){
            autoPlay();
        })

        function go(){
            if(now_num == 3){
                now_num = 0;
            }else{
                now_num++;
            }
            Play();
        }
        function Play(){
            $box.eq(now_num).addClass('on2').siblings().removeClass('on2');
            $box_content.stop().fadeOut();
            $box_content.eq(now_num).stop().fadeIn();
        }
        autoPlay();
    }
    init();
    box_slider();
});