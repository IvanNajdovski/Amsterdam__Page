// function scrollWindow(){
//
//     var newScrollTop = $( window ).scrollTop();
//     var height = $( window ).height();
//     console.log(newScrollTop);
//     if( currentScrollTop > newScrollTop ){
//         var newPosition = currentScrollTop - height;
//
//         //Remove our scroll event during animation
//         $(window).off();
//
//         $( "html, body" ).animate({ scrollTop: newPosition }, 500, function(){
//             currentScrollTop = $( window ).scrollTop();
//
//             //Rebind event after animation complete
//             $( window ).on("scroll", scrollWindow );
//
//         });
//     }
//     else if( currentScrollTop < newScrollTop ){
//
//         //Remove our scroll event during animation
//         $(window).off();
//
//         var newPosition = currentScrollTop + height;
//         $( "html, body" ).animate({ scrollTop: newPosition }, 500, function(){
//             currentScrollTop = $( window ).scrollTop();
//
//             //Rebind event after animation complete
//             $( window ).on("scroll", scrollWindow );
//
//         });
//     }
//
//     //Update scrollTop
//     currentScrollTop = newScrollTop();
//
// }


$(document).ready(function () {

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
    var width = $(".main__content__box-flex").children("a").outerWidth()

    var counterUp = 0;

    // $(window).on("mousewheel DOMMouseScroll", function (e) {
    //     if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
    //         if (e.originalEvent.detail > 0) {
    //             if (Math.abs(counterUp) < (width * 10) - 100) {
    //                 counterUp = counterUp - 100;
    //                 $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,${counterUp}, 0)`);
    //             }
    //             else {
    //                 counterUp = -width * 10
    //                 $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,${counterUp}, 0)`);
    //             }
    //
    //
    //         }
    //         else {
    //             if (counterUp < 0) {
    //                 counterUp = counterUp + 100;
    //                 $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,${counterUp}, 0)`);
    //             } else {
    //                 counterUp = 0
    //                 $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,0, 0)`);
    //             }
    //
    //         }
    //     } else {
    //         if (e.originalEvent.wheelDelta < 0) {
    //             if (Math.abs(counterUp) < (width * 10) - 100) {
    //                 counterUp = counterUp - 100;
    //                 $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,${counterUp}, 0)`);
    //             }
    //             else {
    //                 counterUp = -width * 10
    //                 $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,${counterUp}, 0)`);
    //             }
    //         } else {
    //             if (counterUp < 0) {
    //                 counterUp = counterUp + 100;
    //                 $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,${counterUp}, 0)`);
    //             } else {
    //                 counterUp = 0
    //                 $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,0, 0)`);
    //             }
    //         }
    //     }
    // });

    $(window).on("mousewheel DOMMouseScroll", function (e) {
        console.log($("body,html").outerHeight())
        console.log($(window).outerHeight())

        if ($("body,html").outerHeight() -100 > $(window).outerHeight()) {

        } else {
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                if (e.originalEvent.detail > 0) {
                    if (Math.abs(counterUp) < (width * 10) - 100) {
                        counterUp = counterUp - 100;
                        $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,${counterUp}, 0)`);
                    }
                    else {
                        counterUp = -width * 10
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
                    if (Math.abs(counterUp) < (width * 10) - 100) {
                        counterUp = counterUp - 100;
                        $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,${counterUp}, 0)`);
                    }
                    else {
                        counterUp = -width * 10
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




    $(".arrow__right").on("click", function () {
        if (Math.abs(counterUp) < (width * 10) - $(window).width()) {
            counterUp = counterUp - $(window).width();
            $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,${counterUp}, 0)`);
        } else {
            counterUp = -width * 10
            $(".main__content__box-flex").css("transform", `matrix(1, 0, 0, 1,${counterUp}, 0)`);
        }
    });
    $(".arrow__left").on("click", function () {
        if (counterUp < -$(window).width()) {
            counterUp = counterUp + $(window).width();
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

    var flexWidth = $(".main__content__box-flex").children("a");
    var fullWidth = 0
    for (let item of flexWidth) {

        fullWidth = fullWidth + $(item).outerWidth()
    }

    $("a").on("click", function (e) {

        itemWidth = 0;
        e.preventDefault()
        $(".content__bottom").toggleClass("active")
        var index = $(this).index()
        for (var i = 0; i < index; i++) {
            itemWidth = itemWidth + $(this).outerWidth()

        }
        $('.main__content__box-flex').children("a").not(this).each(function () {
            $(this).removeClass('active');

        });

        if ($(this).hasClass("active")) {
            if (Math.abs(counterUp) > fullWidth - $(window).width()) {
                counterUp = -fullWidth + $(window).width()
                $(".main__content__box-flex").css("transform", `matrix(1,0,0,1,${counterUp},0)`);
            }

        } else {
            counterUp = -itemWidth
            $(".main__content__box-flex").css("transform", `matrix(1,0,0,1,${counterUp},0)`);
        }
        $(this).toggleClass("active")
    })
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