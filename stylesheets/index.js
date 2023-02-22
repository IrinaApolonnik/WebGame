$(document).ready(function(){
	$(".knopka1").click(function(){
		$("body").css("background-color", "#FFF3E8" );
	});
	$(".knopka1").click(function(){
		$(".knop1").css("animation-play-state", "running" );
	});
	$(".knopka2").click(function(){
		$("body").css("background-color", "#FFDCE9" );
	});
	$(".knopka2").click(function(){
		$(".knop2").css("animation-play-state", "running" );
	});
	$(".knopka3").click(function(){
		$("body").css("background-color", "#E9FFE3" );
	});
	$(".knopka3").click(function(){
		$(".knop3").css("animation-play-state", "running" );
	});
	$(".knopka1, .knopka2, .knopka3").click(function(){
		$(".runningstroke p").css("color", "#FF7596" );
		$(this).css("z-index","2");
		$(".zero").css("animation-play-state", "running" );
		setTimeout(function(){
			$(".zero").addClass("hide");
		}, 1200);

	});
	// $(".knopka2").click(function(){
	// 	$(".knop2").css("animation-play-state", "running" );
	// });
	// $(".knopka1, .knopka2, .knopka3").click(function(){
	//       		setTimeout(function(){
	//             $(".zero").addClass("hide");
	//           }, 1100);
	//       	});
	// $(".knopka1, .knopka2, .knopka3").click(function(){
	// 	$(".zero").addClass("hide");
	// });
	// $(".knopka1").click(function(){
	// 	$("section:nth-of-type(2)").removeClass("hide");
	// });
  // $(".back").click(function(){
	// 	$("section:nth-of-type(2)").addClass("hide");
	// });
  // $(".knopka2").click(function(){
  //   $("section:nth-of-type(3)").removeClass("hide");
  // });
  // $(".back").click(function(){
  //   $("section:nth-of-type(3)").addClass("hide");
  // });
  // $(".knopka3").click(function(){
  //   $("section:nth-of-type(4)").removeClass("hide");
  // });
  // $(".back").click(function(){
  //   $("section:nth-of-type(4)").addClass("hide");
  // });
  // $(".cat").click(function(){
  //   $(".cat").addClass("hide");
  //   $(".cat2").removeClass("hide");
  // });
  // $(".cat2").click(function(){
  //   $(".cat2").addClass("hide");
  //   $(".cat").removeClass("hide");
  // });
});
