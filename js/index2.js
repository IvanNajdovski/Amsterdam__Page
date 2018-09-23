(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('main__content__box').scrollLeft -= (delta*40); // Multiplied by 40
        e.preventDefault();
    }
    if (document.getElementById('main__content__box').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('main__content__box').addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        document.getElementById('main__content__box').addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById('main__content__box').attachEvent("onmousewheel", scrollHorizontally);
    }
})();