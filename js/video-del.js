/*
* @Author: hp
* @Date:   2019-08-28 19:59:43
* @Last Modified by:   hp
* @Last Modified time: 2019-08-30 12:55:57
*/

'use strict';
$(function(){
	// nav left
	$(".rg-box span").hover(function() {
		$(".nav .box-bottom").slideDown(200);
        $(this).children('.icon-2').show();
        $(this).children('.icon-1').hide();
	}, function() {
		$(".nav .box-bottom").slideUp(200);
         $(this).children('.icon-1').show();
          $(this).children('.icon-2').hide();
	});

	// nav fight
	$(".nav .right .li1").mouseenter(function(){
        $(this).children(".down").show();
    });

    $(window).scroll(function(event) {
        if($(this).scrollTop()>800){
            $(".nav").css({
                'position':'fixed',
                "z-index": "20",
            });
        }else{
            $(".nav").css({
                'position':'relative',
            });
        }
    });
  
    function tt(a,b){
    	return a||b;
    }

   tt($(".nav .right .li1").mouseleave(function(){
        $(this).children(".down").hide();
    }),$(".down ul li").click(function(event) {
    	$(".down").hide();
    }))
	
    // nav form
    $(".nav form input").focus(function(event) {
    	$(".slip").show();
    });
    $(".nav form input").blur(function(event) {
    	$(".slip").hide();
    });

    $(".set li .v-no1").show();
    $(".set li").click(function(event) {
        $(this).children('.r-video').show().parent().siblings('li').children('.r-video').hide();
        $(this).css('color', '#00c000').siblings('li').css('color', '#fff');;
    });
        
    var timer5;
    $(".movie-box ul li").mouseenter(function(){
        clearTimeout(timer5);
        timer5 = setTimeout(()=>{
            $(this).children('.m-box2').show();
        },800)
        
    });
    $(".movie-box li").mouseleave(function(){
        clearTimeout(timer5);
        $(this).children('.m-box2').hide();
    })

    $(".m-p2 .p5 i").hover(function() {
        var t = $(this).index();
        console.log(t)
        $(".m-p2 .p5 span:nth-of-type(1)").html((t+1)*2+"分");
        $(".m-p2 .p5 span:nth-of-type(1)").css('color', '#ff3000');
        $(this). css('color', '#ff3000');
        
    }, function() {
        $(".m-p2 .p5 span:nth-of-type(1)").html("未评分");
        $(".m-p2 .p5 span:nth-of-type(1)").css('color', '#999');
        $(this). css('color', '#999');
    });
  
    $(".dianzan .dz-left i").click(function(event) {
        var mun = $(".dianzan .dz-left span").html();
        var t = parseInt(mun);
        $(".dianzan .dz-left span").html(t+1);
    });
    $(".dianzan .dz-right i").click(function(event) {
        var mun = $(".dianzan .dz-right span").html();
        var t = parseInt(mun);
        $(".dianzan .dz-right span").html(t-1);
    });

    /*video*/
    $(window).scroll(function(event) {
        if($(this).scrollTop()>800){
            $(".video-close").show();
            $(".no-video").show();
            $("video").addClass("no-video");
        }else{
            $(".video-close").hide();
            $("video").removeClass("no-video");
        }

    });
    $(".video-close").click(function(){
        $(".no-video").hide();
        $(".video-close").hide();
    })
});