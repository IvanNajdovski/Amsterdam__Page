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

    $(window).on("mousewheel DOMMouseScroll", function (e) {
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
        } else {
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


});