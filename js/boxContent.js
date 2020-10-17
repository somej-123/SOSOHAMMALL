$(document).ready(function(){
    var $box = $('.box_title').children('li');
    var $box_content = $('.se2_box').children('div');
    var now_num = 0;

    $box.click(function(){
        console.log($box_content);
        now_num = $(this).index();
        $box.eq(now_num).addClass('on2').siblings().removeClass('on2');
        $box_content.fadeOut();
        $box_content.eq(now_num).fadeIn();
    });
});