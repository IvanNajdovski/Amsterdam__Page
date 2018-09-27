$(document).ready(function () {
    //             -------------------STYLING THE POPUP SCREEN
    $(".menu__popup__item").on("mouseleave", function () {

        $(this).children("div").children("div").children("p").removeClass("active");
        $(this).children("div").children("div").children("button").removeClass("active");
    })
    $(".menu__popup__item").on("mouseover", function () {

        $(this).children("div").children("div").children("p").addClass("active");
        $(this).children("div").children("div").children("button").addClass("active");
    });


    $(".main__content__menu-btn").on("click", function () {
        $(".main__content__menu-btn-style").toggleClass("active");
        $(".main__content__menu-btn").toggleClass("active");
        $(".menu__popup__item-box").toggleClass("active");
        $(".menu__popup").toggleClass("active");
        $(".menu__popup__item").toggleClass("reverse")
        $(".menu__popup__item-box-sudo").toggleClass("active");
        if ($(".main__content__menu-text-header").text() === "Menu") {
            $(".main__content__menu-text-header").text("Close");
        } else {
            $(".main__content__menu-text-header").text("Menu");
        }

    });

    var width = $(".main__link").innerWidth();
    console.log(width)
    var flexWidth = $(".main__content__box-flex").children("a");
    var fullWidth = 0
    for (let item of flexWidth) {
        fullWidth = fullWidth + $(item).innerWidth()
    }
    let counterUp = 0;
//        --------------CLICK EVENT FOR THE SECTIONS----------------
    $(".main__link").on("click", function (e) {
        $(".main__content__build-header").removeClass("animate")
        var index = $(this).index();
        itemWidth = width * index;
        e.preventDefault()
        $('.main__content__box-flex').children("a").not(this).each(function () {
            $(this).removeClass('active');
            //$(".content__bottom").empty()
        });


        if ($(this).hasClass("active")) {
            $(".content__bottom").removeClass("active")
            $(".content__bottom").empty()
            if (Math.abs(counterUp) > fullWidth - $(window).innerWidth()) {
                counterUp = fullWidth - $(window).innerWidth();
                counterUp = -Math.abs(counterUp);
                $(".main__content__box-flex").css("transform", `matrix(1,0,0,1,${counterUp},0)`);
                $(".content__bottom").empty()
            }
        } else {
            counterUp = itemWidth
            counterUp = -Math.abs(counterUp)
            $(".main__content__box-flex").css("transform", `matrix(1,0,0,1,${counterUp},0)`);
            $(".content__bottom").addClass("active")
        }
        $(this).toggleClass("active")
        $('.main__content__box-flex').children("a").each(function () {
            if($(this).hasClass('active')){
                $(this).children("div").children().addClass("active");
            }else{
                $(this).children("div").children().removeClass("active");
                $(this).children("div").children("h1").removeAttr("style");

            }

        });


    });
//           --------------SCROLLING FUNCTION AND EVENT FOR THE HORISONTAL MAIN DIV-------------

    $(window).on("mousewheel DOMMouseScroll", function (e) {

        if ($("body,html").outerHeight() - 100 > $(window).outerHeight()) {

        }else {
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                if (e.originalEvent.detail > 0) {
                    if (Math.abs(counterUp) < fullWidth -$(window).width()- 100) {
                        counterUp = counterUp - 100;
                        $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,${counterUp}, 0)`);
                    }
                    else {
                        counterUp = fullWidth - $(window).width();
                        counterUp = -Math.abs(counterUp)
                        $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,${counterUp}, 0)`);
                    }


                }
                else {
                    if (counterUp < 0) {
                        counterUp = counterUp + 100;
                        $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,${counterUp}, 0)`);
                    } else {
                        counterUp = 0
                        $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,0, 0)`);
                    }

                }
            }
            else {
                if (e.originalEvent.wheelDelta < 0) {
                    if (Math.abs(counterUp) < fullWidth -$(window).width()- 100) {
                        counterUp = counterUp - 100;
                        $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,${counterUp}, 0)`);
                    }
                    else {
                        counterUp = fullWidth - $(window).width();
                        counterUp = -Math.abs(counterUp)
                        $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,${counterUp}, 0)`);
                    }
                } else {
                    if (counterUp < 0) {
                        counterUp = counterUp + 100;
                        $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,${counterUp}, 0)`);
                    } else {
                        counterUp = 0
                        $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,0, 0)`);
                    }
                }
            }
        }
    });
    //              -------------------CLICK EVENT FOR THE ARROWS IN THE BOTTOM--------------------
    $(".arrow__right").on("click", function () {
        if (Math.abs(counterUp) < (width * 10) - $(window).outerWidth()) {
            counterUp = counterUp - $(window).outerWidth();
            $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,${counterUp}, 0)`);
        } else {
            counterUp = -width * 10
            $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,${counterUp}, 0)`);
        }
    });
    $(".arrow__left").on("click", function () {
        if (counterUp < -$(window).outerWidth()) {
            counterUp = counterUp + $(window).outerWidth();
            $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,${counterUp}, 0)`);
        } else {
            counterUp = 0
            $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,0, 0)`);
        }
    });


    setTimeout(function () {
        $(".animation").addClass("hover")

    }, 1000);
    setTimeout(function () {
        $(".animation__banner-box").addClass("active")

    }, 3700);
    setTimeout(function () {
        $(".animation").remove()

    }, 5000);
    setTimeout(function () {
        $("span").addClass("active")

    }, 3500);
    setTimeout(function () {
        $(".main__content__build-header").addClass("active")

    }, 4000);

//  ------------------GOING BACK AND RESETING CLASESS---------------------
   $(".span-arrow").on("click", function(){
       $('.main__content__box-flex').children("a").each(function () {
           if ($(this).hasClass('active')) {
               $(this).children("div").children().removeClass("active");
               $(this).children("div").children("h1").removeAttr("style");
               $(this).removeClass("active");
           } else {
           }
           $(".content__bottom").removeClass("active").empty();
           $(".main__content__build-header").removeClass("animate")
           //       -------------------NOT GOING OUTSITDE OF CONTENT---------------------
           if (Math.abs(counterUp) +$(window).width() > fullWidth - 100) {
               counterUp = fullWidth -$(window).width();
               $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,${-counterUp}, 0)`);
           }
       });

   });
    $(".arrow__middle").on("click", function(){

            $('html, body').animate({
                scrollTop: 0
            },1000,function(){

            });
            setTimeout(function() {
                $('.main__content__box-flex').children("a").each(function () {
                    if ($(this).hasClass('active')) {
                        $(this).children("div").children().removeClass("active");
                        $(this).children("div").children("h1").removeAttr("style");
                        $(this).removeClass("active");
                    } else {
                    }
                });
                $(".content__bottom").removeClass("active").empty();
                $(".main__content__build-header").removeClass("animate");
                $(".arrow__middle").addClass("active");
                //       -------------------NOT GOING OUTSITDE OF CONTENT---------------------
                if (Math.abs(counterUp) +$(window).width() > fullWidth - 100) {
                    counterUp = fullWidth -$(window).width();
                    $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,${-counterUp}, 0)`);
                }
            },1000);
        });


   $(window).on("mousewheel",function(){
       if($(window).scrollTop() > 600){
           $(".arrow__middle").removeClass("active");
       }else{
           $(".arrow__middle").addClass("active");
       }
   });
   $(window).on("scroll", function(){
       var scrollVal = $(this).scrollTop();

       $(".main__content__box-item-header.active").css("transform",`translate(0px,-${scrollVal/30}%)`)
       //$("#logo").animate({"transform": `translate(0px,-${scrollVal/40}%)`},500);
   })


});