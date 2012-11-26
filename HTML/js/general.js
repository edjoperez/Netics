var app = Sammy("#content",function()
{
	this.get('#/timeline',function()
		{
			
			this.partial("/internal/timeline");
			//this.$element().html("hola");
		});
	
	this.get('#/inbox',function()
		{
			
			this.partial("/internal/inbox");
			//this.$element().html("hola");
		});
	this.get("#/inbox/message",function()
		{
			this.partial("/internal/message");
		});

	this.get("",function()
	{
		this.redirect("#/timeline");
	});
});


$(function(){
	app.run();
	$("div#nav div#divitions li").click(function()
		{
			$("div#nav div#divitions li").removeClass("selected");
			$(this).addClass("selected");
		});
});