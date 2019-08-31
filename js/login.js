/*
* @Author: hp
* @Date:   2019-08-24 13:48:52
* @Last Modified by:   hp
* @Last Modified time: 2019-08-26 15:05:34
*/

$(function(){
	/*二维码失效*/
	var timer;
	clearInterval(timer);
	timer = setInterval(function(){
		$(".shixiao").show();
		$(".erweima").css('opacity', '0.04');

	},30000)

	$(".shuaxin").click(function(event) {
		$(".shixiao").hide();
		$(".erweima").css('opacity', '1');
	});


	$(".forget-mima").mouseenter(function(event) {
		$(".mima-xuanze").show();
	});

	function tt(a,b){
		return a||b;
	}
	tt($(".forget-mima").mouseleave(function(event) {
		$(".mima-xuanze").hide();
	}),
	$(".mima-xuanze li").click(function(event) {
		$(".mima-xuanze").hide();
	}))


	$(".re-zhuc").click(function(event) {
		$(".registers").show();
	});

	$(".registers .zhanhao").click(function(event) {
		$(".logins").show();
		$(".registers").hide();
		console.log(1)
	});

	$(".registers .other").click(function(event) {
		$(".content2").show();
		$(".registers").hide();
		console.log(1)
	});

	$(".zhanhao").click(function(event) {
		if($(this).html()=="账号密码登陆"){
			$(".content1").show().siblings('.con').hide();
			$(this).html("手机扫码登陆");
			$(".tit-green").html("登陆")
		}else{
			$(".content").show().siblings('.con').hide();
			$(this).html("账号密码登陆");
			$(".tit-green").html("手机扫码登陆")
		}	
	});

	$(".other").click(function(event) {
		$(".content2").show().siblings('.con').hide();
		$(".tit-green").html("登陆")
	});

	$(".jiantou").click(function(event) {
		$(".jiantou1").css('display', 'inline-block');
		$(".jiantou1").show().siblings('.jiantou').hide();
		$(".user .down-login").show();
	});
	$(".jiantou1").click(function(event) {
		$(".jiantou").show().siblings('.jiantou1').hide();
		$(".user .down-login").hide();
	});

	$(".user .down-login li").click(function(event) {
		$(".text span").html($(this).children('.span1').html());
		$(".jiantou").show().siblings('.jiantou1').hide();
		$(".user .down-login").hide();
		$(".error span").css('opacity', "1");;
		$(".error").css('margin-top', '-20px;');
		$(".inp").attr('placeholder',"");
		$(".inp").focus();
		
	});
	$("input").focus(function(event) {
			$(this).attr('placeholder',"");
			$(this).parent().siblings('.er').children('span').css('opacity', '1');
			
	});
	$("input").blur(function(event) {
			$(this).attr('placeholder',"请输入密码");
			$(this).parent().siblings('.er').children('span').css('opacity', '0');
			
	});
	$(".inp").focus(function(event) {
			$(this).attr('placeholder',"");
			$(this).parent().parent().siblings('.er').children('span').css('opacity', '1');
			
	});
	$(".inp").blur(function(event) {
			$(this).attr('placeholder',"请输入手机号或者邮箱");
			$(this).parent().parent().siblings('.er').children('span').css('opacity', '0');
			
	});

	$(".login-index").click(function(event) {
		$(".bg-color").show();
		$(".logins").show();
	});

	$(".register-index").click(function(event) {
		$(".bg-color").show();
		$(".registers").show();
	});

	$(".register-close").click(function(event) {
		$(".registers").hide();
		$(".logins").hide();
		$(".bg-color").hide();
	});
});