$(function()
	{
		//$("a#signIn").colorbox({href:"login",title:"login",width:"360px",height:"185px"});
		//$("a#signIn").colorbox();
		//$("a#lastStep").colorbox({inline:true,href:"#messageContainer"});

		var i = 0;
		$("button.next").click(function()
			{
				i++;
				$(this).parents("div.page").toggle();
				$($("div.page")[i]).toggle();
			});
		
	});