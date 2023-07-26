

$(document).ready(function(){


// ----------------- Nav Active On Scroll ------------ 

  $(window).scroll(function() {
		var windscroll = $(window).scrollTop();
		if (windscroll >= 100) {
			$('section').each(function(i) {
        // The number at the end of the next line is how pany pixels you from the top you want it to activate.
				if ($(this).position().top <= windscroll - 0) {
					$('nav li.active').removeClass('active');
					$('nav li').eq(i).addClass('active');
				}
			});

		} else {

			$('nav li.active').removeClass('active');
			$('nav li:first').addClass('active');
		}

		}).scroll();


    


              /*----------scroll to top------------*/

    $(window).scroll(function(){
        var onscroll=$(window).scrollTop();
            if (onscroll > 10){
                $("#myBtn").css("display" , "block");
            }
            else{
                 $("#myBtn").css("display" , "none");
            }
    }) 

  
    // --------------------Active Nav ------------------
  
  //   $("#navmenu").on('click','li',function(){
  //     $("#navmenu li.active").removeClass("active"); 
  //     $(this).addClass("active"); 
  // });


// ------------------- Services hover--------------
    $(".hex1").hover(function () {
      $(".hex1_bbl").removeClass("hide");
    },function () {
      $(".hex1_bbl").addClass("hide");
    }
    );

    $(".hex2").hover(function () {
      $(".hex2_bbl").removeClass("hide");
    },function () {
      $(".hex2_bbl").addClass("hide");
    }
    );

    $(".hex3").hover(function () {
      $(".hex3_bbl").removeClass("hide");
    },function () {
      $(".hex3_bbl").addClass("hide");
    }
    );

    $(".hex4").hover(function () {
      $(".hex4_bbl").removeClass("hide");
    },function () {
      $(".hex4_bbl").addClass("hide");
    }
    );


// -------------------------------------------------


// ----------------------- team hover------------
    $(".team1").hover(function () {
        $(".team1_bubl").removeClass("hide");
        $(".team1_hex").css({"background": "#f72985"})
      },function () {
        $(".team1_bubl").addClass("hide");
        $(".team1_hex").css({"background": "linear-gradient(0deg,#8972ea,#516ced 80%) no-repeat"})
      }
    );

    $(".team2").hover(function () {
      $(".team2_bubl").removeClass("hide");
      $(".team2_hex").css({"background": "#f72985"})
    },function () {
      $(".team2_bubl").addClass("hide");
      $(".team2_hex").css({"background": "linear-gradient(0deg,#8972ea,#516ced 80%) no-repeat"})
    }
    );

    $(".team3").hover(function () {
      $(".team3_bubl").removeClass("hide");
      $(".team3_hex").css({"background": "#f72985"})
    },function () {
      $(".team3_bubl").addClass("hide");
      $(".team3_hex").css({"background": "linear-gradient(0deg,#8972ea,#516ced 80%) no-repeat"})
    }
    );

    $(".team4").hover(function () {
      $(".team4_bubl").removeClass("hide");
      $(".team4_hex").css({"background": "#f72985"})
    },function () {
      $(".team4_bubl").addClass("hide");
      $(".team4_hex").css({"background": "linear-gradient(0deg,#8972ea,#516ced 80%) no-repeat"})
    }
    );

  // ----------------------------------------------



AOS.init();

})


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  