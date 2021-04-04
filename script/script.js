$(function(){
	/* 팝업 이미지 */
	$(".close").click(function(){
		$("#popUp").hide();	
	});
	
	$("#Logo").click(function(){
		$("#popUp").show();
	});

	/* 이미지 슬라이드 */
	$("#slider img").each(function(imgIndexNum){
		$(this).css("left", imgIndexNum*1200);
	});
	
	setInterval(function(){
		$("#slider img").each(function(){
			var nowLeft = parseInt($(this).css("left"));	
			var moveLeft = nowLeft-1200;
			$(this).animate({left:moveLeft},1000, function(){
				if(moveLeft<=-2400){  
					$(this).css("left","1200px"); 
				}
			});			
		});
	},3000);
	
	/* room view detail arrow */
	$(".view").mouseenter(function(){
			$(".view img").animate({right:"20px"},1000);
	});
	
	$(".view").mouseleave(function(){
		$(".view img").animate({right:"40px"},1000);
	});	


}); // $(function(){ 끝