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
    var height =$(".main__link").innerHeight();
    // console.log(width)
    var flexWidth = $(".main__content__box-flex").children("a");
    var fullWidth = 0
    var fullHeight = 0;
    for (let item of flexWidth) {
        fullWidth = fullWidth + $(item).innerWidth()
        fullHeight = fullHeight + $(item).outerHeight()
    }
    let counterUp = 0;
//        --------------CLICK EVENT FOR THE SECTIONS----------------
    $(".main__link").on("click", function (e) {

        $(".main__content__build-header").removeClass("animate")
        var index = $(this).index();
        itemHight = height * index;
        itemWidth = width * index;
        e.preventDefault()
        $('.main__content__box-flex').children("a").not(this).each(function () {
            $(this).removeClass('active');
            //$(".content__bottom").empty()
        });

        if($(window).outerWidth()>600){
            if ($(this).hasClass("active")) {
                $(".content__bottom").removeClass("active")
                $(".content__bottom").empty()
                if (Math.abs(counterUp) > fullWidth - $(window).innerWidth()) {
                    counterUp = -(fullWidth - $(window).outerWidth());

                    $(".main__content__box-flex").css("transform", `matrix(1,0,0,1,${counterUp},0)`);
                    $(".content__bottom").empty()
                }
            } else {
                counterUp = itemWidth
                counterUp = -Math.abs(counterUp)
                $(".main__content__box-flex").css("transform", `matrix(1,0,0,1,${counterUp},0)`);
                $(".content__bottom").addClass("active")
            }
        }else{
            if ($(this).hasClass("active")) {
                $(".content__bottom").removeClass("active")
                $(".content__bottom").empty()
                if (Math.abs(counterUp) > fullHeight - $(window).innerHeight()) {
                    counterUp = fullHeight - $(window).innerHeight();
                    counterUp = -Math.abs(counterUp);
                    $(".main__content__box-flex").css("transform", `matrix(1,0,0,1,0,${counterUp})`);
                    $(".content__bottom").empty()
                }
            } else {
                counterUp = itemHight
                counterUp = -Math.abs(counterUp)
                $(".main__content__box-flex").css("transform", `matrix(1,0,0,1,0,${counterUp})`);
                $(".content__bottom").addClass("active")
            }
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

    $(window).on("mousewheel DOMMouseScroll touchmove", function (e) {
        // console.log(fullHeight)
        // console.log("window height is",$(window).innerHeight())
        // console.log(counterUp)
        if($(window).scrollTop() > 600){
            $(".arrow__middle").removeClass("active");
        }else{
            $(".arrow__middle").addClass("active");
        }
        if($(window).outerWidth()>600){
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

        }else{
            if ($("body,html").outerHeight() - 100 > $(window).outerHeight()) {

            }else {
                if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                    if (e.originalEvent.detail > 0) {
                        if (Math.abs(counterUp) < fullHeight -$(window).outerHeight()- 100) {
                            counterUp = counterUp - 100;
                            $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1, 0 ,${counterUp})`);
                        }
                        else {
                            counterUp = fullHeight - $(window).outerHeight();
                            counterUp = -Math.abs(counterUp)
                            $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1, 0,${counterUp})`);
                        }


                    }
                    else {
                        if (counterUp < 0) {
                            counterUp = counterUp + 100;
                            $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1, 0,${counterUp})`);
                        } else {
                            counterUp = 0
                            $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,0, 0)`);
                        }

                    }
                }
                else {
                    if (e.originalEvent.wheelDelta < 0) {
                        if (Math.abs(counterUp) < fullHeight -$(window).innerHeight()- 100) {
                            counterUp = counterUp - 100;
                            $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1, 0,${counterUp})`);
                        }
                        else {
                            counterUp = fullHeight - $(window).height();
                            counterUp = -Math.abs(counterUp)
                            $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1, 0,${counterUp})`);
                        }
                    } else {
                        if (counterUp < 0) {
                            counterUp = counterUp + 100;
                            $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1, 0,${counterUp})`);
                        } else {
                            counterUp = 0
                            $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,0, 0)`);
                        }
                    }
                }
            }
        }

    });
    //              -------------------CLICK EVENT FOR THE ARROWS IN THE BOTTOM--------------------
    $(".arrow__right").on("click", function () {
        if($(window).innerWidth() > 600){
            if (Math.abs(counterUp) < (width * 10) - $(window).outerWidth()) {
                counterUp = counterUp - $(window).outerWidth();
                $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,${counterUp}, 0)`);
            } else {
                counterUp = -(fullWidth - $(window).outerWidth())
                $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,${counterUp}, 0)`);
            }
        }else{
            if (Math.abs(counterUp) < fullHeight - $(window).innerHeight() -100) {
                counterUp = counterUp - $(window).outerHeight();
                $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1, 0,${counterUp})`);
            } else {
                counterUp = -(fullHeight - $(window).outerHeight())
                $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1, 0,${counterUp})`);
            }
        }

    });
    // console.log( "window inner height is", $(window).innerHeight())
    // console.log( "window outer height is", $(window).outerHeight())
    // console.log( "window inner wight is", $(window).innerWidth())
    // console.log( "window outer width is", $(window).outerWidth())
    // console.log("full Height", fullHeight)
    // console.log("full width", fullWidth)
    // console.log($(window).innerWidth())
    $(".arrow__left").on("click", function () {
        if($(window).innerWidth() > 600){
            if (counterUp < -$(window).outerWidth()) {
                counterUp = counterUp + $(window).outerWidth();
                $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,${counterUp}, 0)`);
            } else {
                counterUp = 0
                $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,0, 0)`);
            }
        }else{
            if (counterUp < -$(window).innerHeight()) {
                counterUp = counterUp + $(window).innerHeight();
                $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1, 0,${counterUp})`);
            } else {
                counterUp = 0
                $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,0, 0)`);
            }
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
   $(".span-arrow").on("click", function() {
       $('.main__content__box-flex').children("a").each(function () {
           if ($(this).hasClass('active')) {
               $(this).children("div").children().removeClass("active");
               $(this).children("div").children("h1").removeAttr("style");
               $(this).removeClass("active");
           } else {
           }
           $(".content__bottom").removeClass("active").empty();
           $(".main__content__build-header").removeClass("animate")
       });
           //       -------------------NOT GOING OUTSITDE OF CONTENT---------------------
           if ($(window).outerWidth() > 600) {
               if (Math.abs(counterUp) + $(window).outerWidth() > fullWidth - 100) {
                   counterUp = fullWidth - $(window).outerWidth();
                   $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,${-counterUp}, 0)`);
               }

           } else {
               if (Math.abs(counterUp) + $(window).outerHeight() > fullHeight - 100) {
                   counterUp = fullHeight - $(window).outerHeight();
                   $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1, 0,${-counterUp})`);
               }

           }

       });
       $(".arrow__middle").on("click", function () {

           $('html, body').animate({
               scrollTop: 0
           }, 1000, function () {

           });
           setTimeout(function () {
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
               if ($(window).outerWidth() > 600) {
                   if (Math.abs(counterUp) + $(window).outerWidth() > fullWidth - 100) {
                       counterUp = fullWidth - $(window).outerWidth();
                       $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,${-counterUp}, 0)`);

                   }
               } else {
                   if (Math.abs(counterUp) + $(window).outerHeight() > fullHeight - 100) {
                       counterUp = fullHeight - $(window).outerHeight();
                       $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1, 0,${-counterUp})`);
                   }

               }
           }, 1000);



       });
       $(window).on("scroll", function () {
           var scrollVal = $(this).scrollTop();
           $(".main__content__box-item-header.active").css("transform", `translate(0px,-${scrollVal / 30}%)`)

       })
   })