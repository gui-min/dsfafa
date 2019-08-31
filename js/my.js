/*
* @Author: hp
* @Date:   2019-08-13 19:11:18
* @Last Modified by:   hp
* @Last Modified time: 2019-08-30 14:28:00
*/

'use strict';
$(function(){
	
	// nav fight
	$(".nav .right .li1").mouseenter(function(){
        $(this).children(".down").show();
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

     $(window).scroll(function(event) {
        if($(this).scrollTop()>590){
            $(".nav").css({
                'position':'fixed',
               	"z-index": "20"
            });
        }else{
            $(".nav").css({
                'position':'relative',
            });
          
        }
    });



	// banner
	var n = 0;
	var timer;

	function gogo(){
		clearInterval(timer);
		timer = setInterval(function(){
			n++;
			
			if(n > 10){
				n = 0;
			}
			
			$(".box-img img").eq(n).css('z-index', '1').siblings('img').css('z-index', '0');
			$(".box-aside ul li").eq(n).addClass('no-li').siblings().removeClass("no-li");

		},5000)
	}
	gogo();

	$(".box-aside ul li").mouseenter(function(event) {
		n = $(this).index();
		$(".box-img img").eq(n).css('z-index', '1').siblings('img').css('z-index', '0');
		$(this).addClass('no-li').siblings().removeClass("no-li");

		
	});

	$(".banner").hover(function() {
		clearInterval(timer);
	}, function() {
		gogo();
	});

	//content -新闻焦点
	var x = 0;
	$(".content .right .left-btn").click(function(event) {
		x++;
		if(x > 3){
			x = 3;
		}
		$(".content .right .r-span").html(x+1);

		$(".content .con .xinwen1").animate({"margin-left":-100*x + "%"}, 500);
	});

	$(".content .right .right-btn").click(function(event) {
		x--;
		if(x < 0){
			x = 0;
		}
		$(".content .right .r-span").html(x+1);
		$(".content .con .xinwen1").animate({"margin-left":-100*x + "%"}, 500);
	});

	
	var y = 0;
	var t1,t2,t3 ;
	function go(a,b){
		// clearInterval(t1);
		return setInterval(function(){
			y++;
			if(y > 1){
				y = 0;
			}
			$(a +" img").eq(y).css('z-index', '1').siblings('img').css('z-index', '0');
		},1000);
	}

	t1 = go(".lunbo");
	t2 = go(".lunbo1");
	t3 = go(".lunbo2");

	function jin(a,b){
		$(a).mouseenter(function(event) {
			if(b==1){
				clearInterval(t1);
			}else if(b==2){
				clearInterval(t2);
			}else{
				clearInterval(t3);
			}
		});
	}
	jin(".lunbo",1);
	jin(".lunbo1",2);
	jin(".lunbo2",3);

	function chu(a,b){
		$(a).mouseleave(function(event) {
			if(b==1){
				t1 = go(".lunbo");
			}else if(b==2){
				t2=  go(".lunbo1")
			}else{
				t3= go(".lunbo2")
			}
		});
	}
	chu(".lunbo",1);
	chu(".lunbo1",2);
	chu(".lunbo2",3);

	function dianji1(a,b){
		$(".con .c-left " + b).click(function(event) {
	
			y++;
			if(y > 1){
				y = 0;
			}
			$(a+" img").eq(y).css('z-index', '1').siblings('img').css('z-index', '0');
		});
	}

	dianji1(".lunbo", ".tit-left1");
	dianji1(".lunbo1", ".tit-left2");
	dianji1(".lunbo2", ".tit-left3");

	function dianji2(a,b){
		$(".con .c-left " + b).click(function(event) {
			y--;
			if(y < 0){
				y = 1;
			}
			$(a+" img").eq(y).css('z-index', '1').siblings('img').css('z-index', '0');
		});
	}
	dianji2(".lunbo", ".tit-right1");
	dianji2(".lunbo1", ".tit-right2");
	dianji2(".lunbo2", ".tit-right3");

	var te;
	/* 广告推送 */
	$(".adv-box .first").hover(function() {
		clearTimeout(te);
       te = setTimeout(function(){
   		 $(this).find(".img2").css({
        	"width":"855px",
        	"margin-left": "5px"
        });
       },100)
	}, function() {
		clearTimeout(te);
        $(this).find(".img2").css("width","0px");
	});

	$(".adv-box ul li").hover(function() {
		var t = $(this).index();
		if(t == 5){
		}else{
			$(".adv-box ul").stop().animate({"margin-left": -t*215+'px'}, 400);
			$(this).find(".img2").css({
        	"width":"855px",
        	"margin-left": "5px"
    		});
		}
	}, function() {
		$(this).find(".img2").css("width","0px");
     	$(".adv-box ul").animate({"margin-left":'0px'}, 400);
	});

	 $(".adv-box .end").hover(function() {
        $(".adv-box ul").animate({"margin-left":'-860px'}, 400);
		 $(this).find(".img2").css({
        	"width":"855px",
        	"margin-left": "5px"
        });
    }, function() {
        $(this).find(".img2").css("width","0px");
         $(".adv-box ul").animate({"margin-left":'0px'}, 500);
    });
	 var i = 0;
	 $(".adv-left").click(function(event) {
	 	i++;
	 	if(i > 4){
	 		i = 0;
	 	}
	 	$(".adv-box ul").eq(i).show().siblings("ul").hide();
	 });

	$(".adv-right").click(function(event) {
	 	i--;
	 	if(i < 0){
	 		i = 4;
	 	}
	 	$(".adv-box ul").eq(i).show().siblings("ul").hide();
	});

	/*电影*/
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

    $(window).scroll(function(){
    	if($(this).scrollTop() > 650){
    		$("aside").show();
    	}else{
    		$("aside").hide();
    	}
    })
    $("aside li").hover(function() {
    	$(this).children(".aside-span").show().parent().siblings().children('.aside-span').hide();
    	$(this).children('i').addClass('aside-no');
    }, function() {
    	$(this).children('i').removeClass('aside-no');
    	$(this).children(".aside-span").hide()
    });

    $(".go-top").click(function(event) {
    	$("body,html").animate({"scrollTop":"0"}, 500);
    });


});