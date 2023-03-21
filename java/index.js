$(document).ready(function(){
	$("body").scroll(function() {
		$("knopka1").css("top", "50%");
	});
	$("body").mousemove(function(event) {
		let eye = $(".eye");
		let x = (eye.offset().left) + (eye.width() / 2);
		let y = (eye.offset().top) + (eye.height() / 2);
		let rad = Math.atan2(event.pageX - x, event.pageY - y);
		let rot = (rad * (180 / Math.PI) * -1) + 180;
		eye.css({
			'-webkit-transform': 'rotate(' + rot + 'deg)',
			'-moz-transform': 'rotate(' + rot + 'deg)',
			'-ms-transform': 'rotate(' + rot + 'deg)',
			'transform': 'rotate(' + rot + 'deg)'
		});
	});
	$(".knopka1").click(function(){
		$("body").css("background-color", "#FFF3E8" );
		$(".knop1").toggleClass("knop");
		$(".first").toggleClass("show");
		$(".first").toggleClass("hide");
		setTimeout(function(){
			$(".knop1").toggleClass("knop");
		}, 1200);
	});

	$(".knopka2").click(function(){
		$("body").css("background-color", "#FFDCE9" );
		$(".knop2").toggleClass("knop");
		$(".second").toggleClass("show");
		$(".second").toggleClass("hide");
		setTimeout(function(){
			$(".knop2").toggleClass("knop");
		}, 1200);
	});

	$(".knopka3").click(function(){
		$("body").css("background-color", "#E9FFE3" );
		$(".knop3").toggleClass("knop");
		$(".third").toggleClass("show");
		$(".third").toggleClass("hide");
		setTimeout(function(){
			$(".knop3").toggleClass("knop");
		}, 1200);
	});

	$(".knopka1, .knopka2, .knopka3").click(function(){
		$(".runningstroke p").css("color", "#FF7596" );
		$(this).css("z-index","2");
		$(".zero").toggleClass("show");
		$(".zero").toggleClass("opac");
		setTimeout(function(){
			$(".zero").toggleClass("opac");
			$(".zero").toggleClass("hide");
			$(this).css("z-index","0");
		}, 1200);
		});

	$(".back1").click(function(){
		$(this).css("z-index","2");
		$(".backy1").toggleClass("backy");
		$(".first").toggleClass("show");
		$(".first").toggleClass("opac");
		$(".runningstroke p").css("color", "#DEFFFF" );
		$("body").css("background-color", "#FF7596" );
		setTimeout(function(){
			$(".backy1").toggleClass("backy");
			$(".first").toggleClass("hide");
			$(".first").toggleClass("opac");
			$(this).css("z-index","0");
		}, 1200);
		$(".zero").toggleClass("hide");
		$(".zero").toggleClass("show");
	});

	$(".back2").click(function(){
		$(this).css("z-index","2");
		$(".backy2").toggleClass("backy");
		$(".second").toggleClass("show");
		$(".second").toggleClass("opac");
		$(".runningstroke p").css("color", "#DEFFFF" );
		$("body").css("background-color", "#FF7596" );
		setTimeout(function(){
			$(".backy2").toggleClass("backy");
			$(".second").toggleClass("hide");
			$(".second").toggleClass("opac");
			$(this).css("z-index","0");
		}, 1200);
		$(".zero").toggleClass("hide");
		$(".zero").toggleClass("show");
	});

	$(".back3").click(function(){
		$(this).css("z-index","2");
		$(".backy3").toggleClass("backy");
		$(".third").toggleClass("show");
		$(".third").toggleClass("opac");
		$(".runningstroke p").css("color", "#DEFFFF" );
		$("body").css("background-color", "#FF7596" );
		setTimeout(function(){
			$(".backy3").toggleClass("backy");
			$(".third").toggleClass("hide");
			$(".third").toggleClass("opac");
			$(this).css("z-index","0");
		}, 1200);
		$(".zero").toggleClass("hide");
		$(".zero").toggleClass("show");
	});

	$(".help2, .help1, .help3").click(function(){
		$(".tablet").toggleClass("show-tablet");
		$(".tablet").toggleClass("hide");
		setTimeout(function(){
			$(".tablet").toggleClass("show-tablet");
		}, 1200);
	});

	$(".tablet3").click(function(){
		$(".tablet").toggleClass("opac");
		setTimeout(function(){
			$(".tablet").toggleClass("hide");
			$(".tablet").toggleClass("opac");
		}, 1200);
	});

 // взаимодействие с кошкой удачи
	$(".nekocat").click(function(){
		let myArray = [
  	"10%",
  	"20%",
  	"30%",
		"40%",
		"50%",
		"60%",
		"70%",
		"80%"
		];
		let randomItem = myArray[Math.floor(Math.random()*myArray.length)];

		// $(".coinx").css("animation-play-state", "paused" );
		$(".yen").css("left", randomItem );
		$(".yen").toggleClass("coiny" );
		$(".nekocat img:nth-of-type(2)").css("display", "none" );
		$(".nekocat img:nth-of-type(3)").css("display", "block" );
		setTimeout(function(){
			$(".nekocat img:nth-of-type(3)").css("display", "none" );
			$(".nekocat img:nth-of-type(2)").css("display", "block" );
			// $(".coinx").css("animation-play-state", "running");
			$(".yen").toggleClass("coiny" );
		}, 1200);
	});

	// взаимодействие с котиком на главной страничке
  $(".cat").click(function(){
    $(".cat").addClass("hide");
    $(".cat2").removeClass("hide");

  });

	// появление румяных щечек
  $(".cat2").click(function(){
		$("#blush").css({
			opacity: function(index, value) {
				if (value < 1) {
					return parseFloat (value) +0.1;
				}
				else {
					$(".cat2").addClass("hide");
			    $(".cat3").removeClass("hide");
				}
			}
		});
  });
	// падающие цветы сакуры
	$(".sakura img").click(function(){
		$(this).addClass("fall");
	});

	$(function(){
		let count = 0;
        $(".sakura img:nth-of-type(1), .sakura img:nth-of-type(4), .sakura img:nth-of-type(7), .sakura img:nth-of-type(21)").click(function () {
          count += 1;
          if (count == 1) {
            $('#count_sak').html("1/4");
          }
					else if (count == 2) {
						$('#count_sak').html("2/4");
					}
					else if (count == 3) {
						$('#count_sak').html("3/4");
					}
					else {
						$('#count_sak').html("4/4");
					}
        });
	});
});
