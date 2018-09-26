

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
    var flexWidth = $(".main__content__box-flex").children("a");
    var fullWidth = 0
    for (let item of flexWidth) {
        fullWidth = fullWidth + $(item).innerWidth()
    }
    let counterUp = 0;
//        --------------CLICK EVENT FOR THE SECTIONS----------------
    $(".main__link").on("click", function (e) {
        $(".main__content__build-header").toggleClass("animate")
        var index = $(this).index();
        itemWidth = width*index;
        e.preventDefault()
        $(".content__bottom").toggleClass("active")
        $('.main__content__box-flex').children("a").not(this).each(function () {
            $(this).removeClass('active');
        });
        if ($(this).hasClass("active")) {
            if (Math.abs(counterUp) > fullWidth - $(window).innerWidth()) {
                counterUp = fullWidth - $(window).innerWidth();
                counterUp = -Math.abs(counterUp);
                $(".main__content__box-flex").css("transform", `matrix(1,0,0,1,${counterUp},0)`);
            }
        } else {
            counterUp = itemWidth
            counterUp = -Math.abs(counterUp)
            $(".main__content__box-flex").css("transform", `matrix(1,0,0,1,${counterUp},0)`);
        }
        $(this).toggleClass("active")
    });
//           --------------SCROLLING FUNCTION AND EVENT FOR THE HORISONTAL MAIN DIV-------------
    $(window).on("mousewheel DOMMouseScroll", function (e) {
console.log(width)
        if ($("body,html").outerHeight() -100 > $(window).outerHeight()) {

        } else {
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                if (e.originalEvent.detail > 0) {
                    if (Math.abs(counterUp) < fullWidth - 100) {
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
                    if (Math.abs(counterUp) < fullWidth - 100) {
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




    // $(window).scroll(function(e){
    //     parallaxScroll();
    // });

    // function parallaxScroll(){
    //     var scrolled = $(window).scrollTop();
    //     var winight = $(window).height()
    //     $('#parallax-bg-1').css('translateY',`(${-(scrolled*.25)}px)`);
    //
    //     $('#parallax-bg-3').css('translateY',`(${winight-150-(scrolled*.75)}px)`);
    //
    // }



});