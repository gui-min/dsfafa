$(function(){
    $(".no-sanjiao").click(function(){
        $(".c-down").show();
        $(this).hide();
        $(".no-sanjiao1").show();
    });

    $(".no-sanjiao1").click(function(){
        $(".c-down").hide();
        $(this).hide();
        $(".no-sanjiao").show();
    });
    /*翻页*/
    var n = 0;
    var len = $(".fanye span");
    var t = 0;
    $(".fanye span:not('.n')").click(function() {
       t = $(this).index();
        if(t > 0 && t < 6){
            $(".img-box-cat"+t).show().siblings(".no-img-box").hide();
            $(this).addClass('no-border').siblings().removeClass('no-border');
            $(".shang").css('color', '#333');
        }
        if( t == 5){
            $(".xia").css('color', '#999');
        }else{
            $(".xia").css('color', '#333');
        }
    });
   
    $(".shang").click(function() {
        t--;
        if(t<1){
            t=1;
        }
        $(".img-box-cat"+t).show().siblings(".no-img-box").hide();
        $(".fanye span").eq(t).addClass('no-border').siblings().removeClass('no-border');

    });
     $(".xia").click(function() {
        t++;
        if(t > 5){
            t = 5;
        }
        $(".img-box-cat"+t).show().siblings(".no-img-box").hide();
        $(".fanye span").eq(t).addClass('no-border').siblings().removeClass('no-border'); 
    });

    $(".ar-tit-ul li").hover(function() {
        var a = $(this).index();
        $(this).addClass('under-x').siblings().removeClass('under-x');
        $(".ul1").eq(a).show().siblings(".ul1").hide();
    }, function(){
    });

    $(".c-bo-imgbox").hover(function() {
        $(this).children(".bg-image").show();
    }, function() {
        $(this).children(".bg-image").hide();
    });

    $(window).scroll(function(event) {
        if($(this).scrollTop()>100){
            $(".banner").css({
                'position': 'fixed',
                "background":"#fff",
                "width":"100%",
                "z-index":"5",
                "border": "1px solid #eee",
                "margin-top": "-30px"

            });
            $(".bar").removeClass('my-container');
        }else{
            $(".banner").css({
                'position': 'relative',
                 "border": "none",
                 "z-index":"0",
                  "margin-top": "0px"
            });
             $(".bar").addClass('my-container');
        }
    });

    $(window).scroll(function(event) {
        if($(this).scrollTop()>700){
            $(".under-right").css({
                'position':'fixed',
                "top":"50px",
                "width": "320px"
            });
        }else{
            $(".under-right").css({
                'position':'relative',
                "width": "320px"
            });
        }
    });

    $(".right li").click(function(event) {
        var a = $(this).index();   
        $(".down"+a).toggle();
        console.log(a)
        $(".i"+a).toggle();
        $(".i_"+a).toggle();
    });
    
});
