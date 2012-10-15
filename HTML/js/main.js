$(function()
	{
		//$("a#signIn").colorbox({href:"login",title:"login",width:"360px",height:"185px"});
		$("a#signIn").colorbox();
		$("a.lastStepForgot").colorbox({inline:true,href:"#forgotMessageContainer"});
		$("a.lastStepSignUp").colorbox({inline:true,href:"#signUpMessageContainer"});

		console.log($("div.page"));
		$("a.button")
		var i = 0;
		$("div#signUpContent button.next").click(function()
			{
				console.log("Hola");
				i++;
				$(this).parents("div.page").toggle();
				$($("div#signUpContent div.page")[i]).toggle();
			});
		
	});