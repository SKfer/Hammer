// 下载APP移入事件
$('document').ready(function(){
    $('.down-APP').on('mouseenter',function(){
        $('.app').css('display','block')
    });
    $('.down-APP').on('mouseout',function(){
        $('.app').css('display','none')
    });
})
// 导航栏点击
$(".nav-div a").on("click",function(){
    $(".nav-div a").removeClass("fat");
    $(this).addClass("fat");	
})
//搜索框添加事件
$('document').ready(function(){
    $('.inp-ss').on('focus',function(){
        $('.blue').css('display','none');
        $('.green').css('display','none');
        $('.inp-ss').attr('placeholder','请输入搜索的商品')
    });
    $('.inp-ss').on('blur',function(){
        $('.blue').css('display','block');
        $('.green').css('display','block');
        $('.inp-ss').attr('placeholder','')
    })
})
//导航栏内容切换
$(function(){
    $(".tabbox .tab a").mouseover(function(){
        $(this).addClass('on').siblings().removeClass('on');
        var index = $(this).index();
        number = index;
        $('.tabbox .content li').hide();
        $('.tabbox .content li:eq('+index+')').show();
    });
    
    var auto = 1;  //等于1则自动切换，其他任意数字则不自动切换
    if(auto ==1){
        var number = 0;
        var maxNumber = $('.tabbox .tab a').length;
        function autotab(){
            number++;
            number == maxNumber? number = 0 : number;
            $('.tabbox .tab a:eq('+number+')').addClass('on').siblings().removeClass('on');
            $('.tabbox .content ul li:eq('+number+')').show().siblings().hide();
        }
    }
});
// 导航栏伸缩
$(document).ready(function(e){
    $('.nav-content').hide();
    $(".nav-div>a").mouseenter(function(){
        $(".nav-content").stop();
        $(".nav-content").toggle(1000);
    })
    $(".nav-div>a").mouseout(function(){
        $(".nav-content").stop();
        $(".nav-content").toggle(1000);
    })
});
//------------------------------------------------
// 小轮播图js



