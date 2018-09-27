$(document).ready(function(){
    $(".main__link").on("click", function (e) {
        console.log($(this).children("div").attr("id"))
      if ($(this).children("div").attr("id") === "museum") {
                $(".content__bottom").html("<div class=\"awards\">\n" +
                    "            <div class=\"awards__content\">\n" +
                    "                <h1 class=\"awards__content-header\">Frans Hals Musseum and KesselsKramer commissioned us to create a\n" +
                    "                    platform that reflects the contemporary and classic duality of the museum.</h1>\n" +
                    "            </div>\n" +
                    "            <div class=\"awards__list\">\n" +
                    "                <h1>Awards & Recognition</h1>\n" +
                    "                <p>Awwwwwards Site of the Day, FWA site of the day, CSS Design Award</p>\n" +
                    "                <h1>Deliverables</h1>\n" +
                    "                <p>Design, development</p>\n" +
                    "                <h1>Visit site</h1>\n" +
                    "                <p><a href=\"http://www.franshalsmuseum.nl\">www.franshalsmuseum.nl</a></p>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"info\">\n" +
                    "            <div class=\"info__content\">\n" +
                    "                <div class=\"info__top\">\n" +
                    "                    <img src=\"img/frans hals museum/Franshals_Slideshow.gif\" alt=\"\">\n" +
                    "                </div>\n" +
                    "                <div class=\"info__bottom\">\n" +
                    "                    <h1>One museum two locations</h1>\n" +
                    "                    <p>On 29 March 2018, the Frans Hals Museum, with its outstanding collection of Old Masters,\"marries\"\n" +
                    "                        De Hallen Haarlem, the museum for contemporary and morden art in Haarlem</p>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"info__img\">\n" +
                    "                <img src=\"img/frans hals museum/frans hals museum.jpg\" alt=\"\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"main__concept\">\n" +
                    "            <div class=\"main__concept__left\">\n" +
                    "                <h1>Main Concept</h1>\n" +
                    "                <p>KesselsKramer main concept was to combine the old with the new in a mirror. This concept is the main theme that we used throughout the website</p>\n" +
                    "            </div>\n" +
                    "            <div class=\"main__concept__right\">\n" +
                    "                <div class=\"main__concept__right-box\">\n" +
                    "                    <img src=\"img/frans hals museum/frans hals museum-pic.jpg\" alt=\"\">\n" +
                    "                </div>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/frans%20hals%20museum/frans%20hals%20museum-banner.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"mobile\">\n" +
                    "            <div class=\"mobile__box-left\">\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"mobile__box-right\">\n" +
                    "\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/frans%20hals%20museum/frans%20hals%20museum-banner_2.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>" +
                    "<div class=\"footer\">\n" +
                    "        <div class=\"footer__box\">Copyright@2018</div>\n" +
                    "        <div class=\"footer__links\">\n" +
                    "            <a href=\"http://www.facebook.com/ivan.najdovski.7\"><i class=\"fab fa-facebook-square\"></i></a>\n" +
                    "            <a href=\"http://www.linkedin.com/in/ivan-najdovski-4985a3167/\"><i class=\"fab fa-linkedin\"></i></a>\n" +
                    "            <a href=\"http://www.instagram.com/ivannajdovski/?hl=en\"><i class=\"fab fa-instagram\"></i></a>\n" +
                    "\n" +
                    "        </div>\n" +
                    "        <div class=\"footer__content\"><h1>Ivan Najdovski</h1></div>\n" +
                    "    </div>")
          $(".main__content__build-header").addClass("animate")
            } else if ($(this).children("div").attr("id") === "protest") {
                $(".content__bottom").html("<div class=\"awards\">\n" +
                    "            <div class=\"awards__content\">\n" +
                    "                <h1 class=\"awards__content-header\">Protest asked us to create a site that would bridge the gap between story and store. They wanted to combine an immersive brand experience with an incredible e-commerce platform</h1>\n" +
                    "            </div>\n" +
                    "            <div class=\"awards__list\" style='background-color: #D9E0E2'>\n" +
                    "                <h1>Awards & Recognition</h1>\n" +
                    "                <p>Site of the Year on Awwwards, Mindsparcle, Site Inspire, Css Design Awards</p>\n" +
                    "                <h1>Deliverables</h1>\n" +
                    "                <p>Branding, design and developmentt</p>\n" +
                    "                <h1>Visit site</h1>\n" +
                    "                <p><a href=\"http://www.protest.eu\">www.protest.eu</a></p>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"info\">\n" +
                    "            <div class=\"info__content\">\n" +
                    "                <div class=\"info__top\">\n" +
                    "                    <img src=\"img/protest/protest__small.jpg\" alt=\"\">\n" +
                    "                </div>\n" +
                    "                <div class=\"info__bottom\" style=\"background-color: #fff;color: #000;\">\n" +
                    "                    <h1>Identity</h1>\n" +
                    "                    <p>The colors of Protest are inspired by the seasons and their collection</p>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"info__img\">\n" +
                    "                <img src=\"img/protest/protest__logo.jpg\" alt=\"\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/protest/protest__banner.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +

                    "        <div class=\"mobile\">\n" +
                    "            <div class=\"mobile__box-left\" style=\"background-image: url(img/protest/protest__mobile__left.jpg)\">\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"mobile__box-right\" style=\"background-image: url(img/protest/protest__mobile__right.jpg)\">\n" +
                    "\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "<div class=\"footer\">\n" +
                    "        <div class=\"footer__box\">Copyright@2018</div>\n" +
                    "        <div class=\"footer__links\">\n" +
                    "            <a href=\"http://www.facebook.com/ivan.najdovski.7\"><i class=\"fab fa-facebook-square\"></i></a>\n" +
                    "            <a href=\"http://www.linkedin.com/in/ivan-najdovski-4985a3167/\"><i class=\"fab fa-linkedin\"></i></a>\n" +
                    "            <a href=\"http://www.instagram.com/ivannajdovski/?hl=en\"><i class=\"fab fa-instagram\"></i></a>\n" +
                    "\n" +
                    "        </div>\n" +
                    "        <div class=\"footer__content\"><h1>Ivan Najdovski</h1></div>\n" +
                    "    </div>");
          $(".main__content__build-header").addClass("animate")
            } else if ($(this).children("div").attr("id") === "art") {
                $(".content__bottom").html("<div class=\"awards\">\n" +
                    "            <div class=\"awards__content\">\n" +
                    "                <h1 class=\"awards__content-header\">Cantor fine art brifed us the following:\"I want to be the best damn client you have ever had. I want to be a front runner in how art is displayed online. And I want you guys to use me to win awwwards, webbys, cyber lions...You down?\"</h1>\n" +
                    "            </div>\n" +
                    "            <div class=\"awards__list\" style='background-color: #CAC7BA'>\n" +
                    "                <h1>Awards & Recognition</h1>\n" +
                    "                <p>Awwwards, CSS Design</p>\n" +
                    "                <h1>Deliverables</h1>\n" +
                    "                <p>Design and developmentt</p>\n" +
                    "                <h1>Visit site</h1>\n" +
                    "                <p><a href=\"http://www.cantorfineart.com\">www.cantorfineart.com</a></p>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"info\">\n" +
                    "            <div class=\"info__content\">\n" +
                    "                <div class=\"info__top\">\n" +
                    "                    <img src=\"img/art/art__small.jpg\" alt=\"\">\n" +
                    "                </div>\n" +
                    "                <div class=\"info__bottom\" style=\"background-color: #fff;color: #000;\">\n" +
                    "                    <h1>Identity</h1>\n" +
                    "                    <p>This opportinity was presented to us as a chance to shape the way the world views art online. The look & feel of the identity is calm and toned down so the art pieces are higlighted as heroes</p>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"info__img\" style='background-color: black'>\n" +
                    "                <img src=\"img/art/art__logo.png\" alt=\"\" style='width: 15rem;height: 1.5rem'>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/art/art__banner.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +

                    "        <div class=\"mobile\">\n" +
                    "            <div class=\"mobile__box-left\" style=\"background-image: url(img/art/art__mobile__left.jpg)\">\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"mobile__box-right\" style=\"background-image: url(img/art/art__mobile__right.jpg)\">\n" +
                    "\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/art/art__banner_2.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"info\">\n" +
                    "            <div class=\"info__content\">\n" +
                    "                <div class=\"info__top\">\n" +
                    "                    <img src=\"img/art/art__top.jpg\" alt=\"\">\n" +
                    "                </div>\n" +
                    "                <div class=\"info__bottom\" style=\"background-color: #fff;color: #000;\">\n" +
                    "                    <h1>Photography</h1>\n" +
                    "                    <p>The art pieces must feel like they are hanging on your wall. we archived that feel by using pastel colours and no flashing lights.</p>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"info__img\">\n" +
                    "                <img src=\"img/art/art__medium.jpg\" alt=\"\" >\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/art/art__banner_3.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/art/art__banner_4.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "<div class=\"footer\">\n" +
                    "        <div class=\"footer__box\">Copyright@2018</div>\n" +
                    "        <div class=\"footer__links\">\n" +
                    "            <a href=\"http://www.facebook.com/ivan.najdovski.7\"><i class=\"fab fa-facebook-square\"></i></a>\n" +
                    "            <a href=\"http://www.linkedin.com/in/ivan-najdovski-4985a3167/\"><i class=\"fab fa-linkedin\"></i></a>\n" +
                    "            <a href=\"http://www.instagram.com/ivannajdovski/?hl=en\"><i class=\"fab fa-instagram\"></i></a>\n" +
                    "\n" +
                    "        </div>\n" +
                    "        <div class=\"footer__content\"><h1>Ivan Najdovski</h1></div>\n" +
                    "    </div>");
          $(".main__content__build-header").addClass("animate")
            } else if ($(this).children("div").attr("id") === "cold") {
                $(".content__bottom").html("<div class=\"awards\">\n" +
                    "            <div class=\"awards__content\">\n" +
                    "                <h1 class=\"awards__content-header\">The Cold Pressed Juicery was founded with a spirited heart and an ambition goal - to offer the purest, cold pressed juices, delicious superfood smoothies and nutritious food</h1>\n" +
                    "            </div>\n" +
                    "            <div class=\"awards__list\" style='background-color: #D9E0E2'>\n" +
                    "                <h1>Awards & Recognition</h1>\n" +
                    "                <p>TBA</p>\n" +
                    "                <h1>Deliverables</h1>\n" +
                    "                <p>Strategy, design, packaging and technology</p>\n" +
                    "                <h1>Visit site</h1>\n" +
                    "                <p><a href=\"http://www.thecoldpressedjuicery.com\">www.thecoldpressedjuicery.com</a></p>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"info\">\n" +
                    "            <div class=\"info__content\">\n" +
                    "                <div class=\"info__top\">\n" +
                    "                    <img src=\"img/cold/cold__small.jpg\" alt=\"\">\n" +
                    "                </div>\n" +
                    "                <div class=\"info__bottom\" style=\"background-color: #fff;color: #000;\">\n" +
                    "                    <h1>Identity</h1>\n" +
                    "                    <p>The Cold Pressed Juicery was first Cold Press Juice store to open in the Netherlands. thats why we came up with this name, it shows authority</p>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"info__img\" style='background-color: black'>\n" +
                    "                <img src=\"img/cold/cold__logo.png\" alt=\"\" style='width: 50%;height: auto'>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/cold/cold__banner.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/cold/cold__banner_2.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"info\">\n" +
                    "            <div class=\"info__content\">\n" +
                    "                <div class=\"info__bottom\" style=\"background-color: #fff;color: #000;\">\n" +
                    "                    <h1>Stationary</h1>\n" +
                    "                    <p>The pattern is based on fruit that sliced through the middle</p>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"info__img\" style='background-color: black'>\n" +
                    "                <img src=\"img/cold/cold__medium.jpg\" alt=\"\" >\n" +
                    "            </div>\n" +
                    "        </div>\n" +


                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/cold/cold__banner_3.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +

                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/cold/cold__banner_4.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +

                    "<div class=\"footer\">\n" +
                    "        <div class=\"footer__box\">Copyright@2018</div>\n" +
                    "        <div class=\"footer__links\">\n" +
                    "            <a href=\"http://www.facebook.com/ivan.najdovski.7\"><i class=\"fab fa-facebook-square\"></i></a>\n" +
                    "            <a href=\"http://www.linkedin.com/in/ivan-najdovski-4985a3167/\"><i class=\"fab fa-linkedin\"></i></a>\n" +
                    "            <a href=\"http://www.instagram.com/ivannajdovski/?hl=en\"><i class=\"fab fa-instagram\"></i></a>\n" +
                    "\n" +
                    "        </div>\n" +
                    "        <div class=\"footer__content\"><h1>Ivan Najdovski</h1></div>\n" +
                    "    </div>");
          $(".main__content__build-header").addClass("animate")
            } else if ($(this).children("div").attr("id") === "gym") {
                $(".content__bottom").html("<div class=\"awards\">\n" +
                    "            <div class=\"awards__content\">\n" +
                    "                <h1 class=\"awards__content-header\">HiGH STUDIOS workouts are based on High Intensity Interval Training, wihich is the ost effective annd moust scientifically proven training methid. For this ambitious, fast growing company we created the name, visual identity and e-commerce platform.</h1>\n" +
                    "            </div>\n" +
                    "            <div class=\"awards__list\" style='background-color: #D9E0E2'>\n" +
                    "                <h1>Awards & Recognition</h1>\n" +
                    "                <p>Hypershoot</p>\n" +
                    "                <h1>Deliverables</h1>\n" +
                    "                <p>Branding,design & Development</p>\n" +
                    "                <h1>Visit site</h1>\n" +
                    "                <p><a href=\"http://www.highstudios.nl\">www.highstudios.nl</a></p>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"info\">\n" +
                    "            <div class=\"info__content\">\n" +
                    "                <div class=\"info__top\">\n" +
                    "                    <img src=\"img/studio/studio__small.jpg\" alt=\"\">\n" +
                    "                </div>\n" +
                    "                <div class=\"info__bottom\" style=\"background-color: #fff;color: #000;\">\n" +
                    "                    <h1>Identity</h1>\n" +
                    "                    <p>We designed an edgy logo and a brand mark inspired by the intensity and effectivness of the HIGH STUDIOS classes.</p>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"info__img\" style='background-color: black'>\n" +
                    "                <img src=\"img/studio/studio__logo.jpg\" alt=\"\" >\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"info\">\n" +
                    "            <div class=\"info__content\">\n" +
                    "                <div class=\"info__top\">\n" +
                    "                    <img src=\"img/studio/studio__small_2.jpg\" alt=\"\">\n" +
                    "                </div>\n" +
                    "                <div class=\"info__bottom\" style=\"background-color: #fff;color: #000;\">\n" +
                    "                    <h1>Visual element</h1>\n" +
                    "                    <p>The single open curve representing the 45 minutes is easy to understand and recognize. It is used in the studi and on merchandising products.</p>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"info__img\" style='background-color: black'>\n" +
                    "                <img src=\"img/studio/studio__medium.jpg\" alt=\"\" >\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/studio/studio__banner.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/studio/studio__banner_2.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"info\">\n" +
                    "            <div class=\"info__content\">\n" +

                    "                <div class=\"info__bottom\" style=\"background-color: #fff;color: #000;\">\n" +
                    "                    <h1>Photography</h1>\n" +
                    "                    <p>We wanted the photography to look dynamic with a sense of movment. The curve is adding motion to each snamshot.</p>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"info__img\" style='background-color: black'>\n" +
                    "                <img src=\"img/studio/studio__medium_2.jpg\" alt=\"\" >\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/studio/studio__banner_3.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"info\">\n" +
                    "            <div class=\"info__content\">\n" +
                    "                <div class=\"info__bottom\" style=\"background-color: #000;color: #fff;\">\n" +
                    "                    <h1>Layout</h1>\n" +
                    "                    <p>HIGH STUDIOS is all about speed and effectiveness, we use bold headlines to quickly cconvey the message</p>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"info__img\" style='background-color: black'>\n" +
                    "                <img src=\"img/studio/studio__medium_4.jpg\" alt=\"\" >\n" +
                    "            </div>\n" +
                    "        </div>\n" +


                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/studio/studio__banner_4.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"mobile\">\n" +
                    "            <div class=\"mobile__box-left\" style=\"background-image: url(img/studio/studio__mobile__left.jpg)\">\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"mobile__box-right\" style=\"background-image: url(img/studio/studio__mobile__right.jpg)\">\n" +
                    "\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"info\">\n" +
                    "            <div class=\"info__content\">\n" +
                    "                <div class=\"info__bottom\" style=\"background-color: #fff;color: #000;\">\n" +
                    "                    <h1>Instagram</h1>\n" +
                    "                    <p>We build a layout system for visuals to use on socials like Instagram and Facebook</p>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"info__img\" style='background-color: black'>\n" +
                    "                <img src=\"img/studio/studio__medium_3.jpg\" alt=\"\" >\n" +
                    "            </div>\n" +
                    "        </div>\n" +


                    "<div class=\"footer\">\n" +
                    "        <div class=\"footer__box\">Copyright@2018</div>\n" +
                    "        <div class=\"footer__links\">\n" +
                    "            <a href=\"http://www.facebook.com/ivan.najdovski.7\"><i class=\"fab fa-facebook-square\"></i></a>\n" +
                    "            <a href=\"http://www.linkedin.com/in/ivan-najdovski-4985a3167/\"><i class=\"fab fa-linkedin\"></i></a>\n" +
                    "            <a href=\"http://www.instagram.com/ivannajdovski/?hl=en\"><i class=\"fab fa-instagram\"></i></a>\n" +
                    "\n" +
                    "        </div>\n" +
                    "        <div class=\"footer__content\"><h1>Ivan Najdovski</h1></div>\n" +
                    "    </div>");
          $(".main__content__build-header").addClass("animate")
            } else if ($(this).children("div").attr("id") === "mendo") {
                $(".content__bottom").html("<div class=\"awards\">\n" +
                    "            <div class=\"awards__content\">\n" +
                    "                <h1 class=\"awards__content-header\">Mendo is a candy store for book aficionados with a flagship store situatedin one of Amsterda's most inspirational neighbours called THe 9 Streets (DE ( Straatjes). The store is fully dedicated to sharing the love for beautiful books.</h1>\n" +
                    "            </div>\n" +
                    "            <div class=\"awards__list\" style='background-color: #CABE9F'>\n" +
                    "                <h1>Awards & Recognition</h1>\n" +
                    "                <p>Awward E-commerce Site of the Year 2017, FWA Award, CSS Design Award</p>\n" +
                    "                <h1>Deliverables</h1>\n" +
                    "                <p>E-commerce platform</p>\n" +
                    "                <h1>Visit site</h1>\n" +
                    "                <p><a href=\"http://www.mendo.nl\">www.mendo.nl</a></p>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"info\">\n" +
                    "            <div class=\"info__content\">\n" +
                    "                <div class=\"info__top\">\n" +
                    "                    <img src=\"img/mendo/mendo__small.gif\" alt=\"\">\n" +
                    "                </div>\n" +
                    "                <div class=\"info__bottom\" style=\"background-color: #fff;color: #000;\">\n" +
                    "                    <h1>Translation</h1>\n" +
                    "                    <p>We translated the world of Mendo in an e-commerce experience where the visitor can see, read and almost feel the book without touching it..</p>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"info__img\" style='background-color: black'>\n" +
                    "                <img src=\"img/mendo/mundo__logo.png\" alt=\"\" style='width:28rem;height:5rem'>\n" +
                    "            </div>\n" +
                    "        </div>\n" +

                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/mendo/mundo__banner.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"mobile\">\n" +
                    "            <div class=\"mobile__box-left\" style=\"background-image: url(img/mendo/mundo__mobile__left.jpg)\">\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"mobile__box-right\" style=\"background-image: url(img/mendo/mundo__mobile__right.jpg)\">\n" +
                    "\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/mendo/mundo__banner__2.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"info\">\n" +
                    "            <div class=\"info__content\">\n" +
                    "                <div class=\"info__top\">\n" +
                    "                    <img src=\"img/mendo/mundo__small__2.gif\" alt=\"\">\n" +
                    "                </div>\n" +
                    "                <div class=\"info__bottom\" style=\"background-color: #fff;color: #000;\">\n" +
                    "                    <h1>Photography</h1>\n" +
                    "                    <p>We've directed a photography style where Mendo can showcase their book catalog in a minimalistic way,</p>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"info__img\" style='background-color: black'>\n" +
                    "                <img src=\"img/mendo/mundo__pic__left.jpg\" alt=\"\" >\n" +
                    "            </div>\n" +
                    "        </div>\n" +


                    "<div class=\"footer\">\n" +
                    "        <div class=\"footer__box\">Copyright@2018</div>\n" +
                    "        <div class=\"footer__links\">\n" +
                    "            <a href=\"http://www.facebook.com/ivan.najdovski.7\"><i class=\"fab fa-facebook-square\"></i></a>\n" +
                    "            <a href=\"http://www.linkedin.com/in/ivan-najdovski-4985a3167/\"><i class=\"fab fa-linkedin\"></i></a>\n" +
                    "            <a href=\"http://www.instagram.com/ivannajdovski/?hl=en\"><i class=\"fab fa-instagram\"></i></a>\n" +
                    "\n" +
                    "        </div>\n" +
                    "        <div class=\"footer__content\"><h1>Ivan Najdovski</h1></div>\n" +
                    "    </div>");
          $(".main__content__build-header").addClass("animate")
            } else if ($(this).children("div").attr("id") === "wear") {
                $(".content__bottom").html("<div class=\"awards\">\n" +
                    "            <div class=\"awards__content\">\n" +
                    "                <h1 class=\"awards__content-header\">Open Wear is a brand build by- and for - passionate poer riders. They're out to set a new transparent standard within the outerwear industry..</h1>\n" +
                    "            </div>\n" +
                    "            <div class=\"awards__list\" style='background-color: #CABE9F'>\n" +
                    "                <h1>Awards & Recognition</h1>\n" +
                    "                <p>E-commerce site of the year nominee & Site of the Day on Awwards, MindSparkle, Maxi Best-of The Gallery Siiimple</p>\n" +
                    "                <h1>Deliverables</h1>\n" +
                    "                <p>Branding, design & development</p>\n" +
                    "                <h1>Visit site</h1>\n" +
                    "                <p><a href=\"http://www.open-wear.com\">www.open-wear.com</a></p>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"info\">\n" +
                    "            <div class=\"info__content\">\n" +
                    "                <div class=\"info__top\">\n" +
                    "                    <img src=\"img/wear/wear__top.gif\" alt=\"\">\n" +
                    "                </div>\n" +
                    "                <div class=\"info__bottom\" style=\"background-color: #fff;color: #000;\">\n" +
                    "                    <h1>The Brand</h1>\n" +
                    "                    <p>Started as a kickstarter Open Wear evolved into a real frout runner. We devised a new brand voice - from an updated logo to new online platform</p>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"info__img\" style='background-color: black'>\n" +
                    "                <img src=\"img/wear/wear__logo.jpg\" alt=\"\" >\n" +
                    "            </div>\n" +
                    "        </div>\n" +

                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/wear/wear__banner.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/wear/wear__banner_2.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"mobile\">\n" +
                    "            <div class=\"mobile__box-left\" style=\"background-image: url(img/wear/wear__mobile__left.jpg)\">\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"mobile__box-right\" style=\"background-image: url(img/wear/wear__mobile__right.jpg)\">\n" +
                    "\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/wear/wear__banner_3.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"info\">\n" +
                    "            <div class=\"info__content\">\n" +
                    "                <div class=\"info__top\">\n" +
                    "                    <img src=\"img/wear/top.jpg\" alt=\"\">\n" +
                    "                </div>\n" +
                    "                <div class=\"info__bottom\" style=\"background-color: #fff;color: #000;\">\n" +
                    "                    <h1>Identity</h1>\n" +
                    "                    <p>Every visualaspect of the website is build upon a strong brand identity that respects all teh brands values. Weve sharpened the logo to expredd the high quality standards of the brand even better</p>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"info__img\" style='background-color: black'>\n" +
                    "                <img src=\"img/wear/wear__pic__left.jpg\" alt=\"\" >\n" +
                    "            </div>\n" +
                    "        </div>\n" +


                    "<div class=\"footer\">\n" +
                    "        <div class=\"footer__box\">Copyright@2018</div>\n" +
                    "        <div class=\"footer__links\">\n" +
                    "            <a href=\"http://www.facebook.com/ivan.najdovski.7\"><i class=\"fab fa-facebook-square\"></i></a>\n" +
                    "            <a href=\"http://www.linkedin.com/in/ivan-najdovski-4985a3167/\"><i class=\"fab fa-linkedin\"></i></a>\n" +
                    "            <a href=\"http://www.instagram.com/ivannajdovski/?hl=en\"><i class=\"fab fa-instagram\"></i></a>\n" +
                    "\n" +
                    "        </div>\n" +
                    "        <div class=\"footer__content\"><h1>Ivan Najdovski</h1></div>\n" +
                    "    </div>");
          $(".main__content__build-header").addClass("animate")
            } else if ($(this).children("div").attr("id") === "etq") {
                $(".content__bottom").html("<div class=\"awards\">\n" +
                    "            <div class=\"awards__content\">\n" +
                    "                <h1 class=\"awards__content-header\">ETQ is all about minimalism. We conveyed this into every single touchpoint, both on and offline</h1>\n" +
                    "            </div>\n" +
                    "            <div class=\"awards__list\" style='background-color: #CABE9F'>\n" +
                    "                <h1>Awards & Recognition</h1>\n" +
                    "                <p>Awwards, CSS Design, SiteInspire</p>\n" +
                    "                <h1>Deliverables</h1>\n" +
                    "                <p>Branding, design & development</p>\n" +
                    "                <h1>Visit site</h1>\n" +
                    "                <p><a href=\"http://www.etq-amsterdam.com\">www.etq-amsterdam.com</a></p>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/etq/etq__banner.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"info\">\n" +
                    "            <div class=\"info__content\">\n" +
                    "                <div class=\"info__top\">\n" +
                    "                    <img src=\"img/etq/etq__top__small.jpg\" alt=\"\">\n" +
                    "                </div>\n" +
                    "                <div class=\"info__bottom\" style=\"background-color: #fff;color: #000;\">\n" +
                    "                    <h1>Identity</h1>\n" +
                    "                    <p>We combined minimalism and unruliness to create an identity that complements the high-quality, refined products made by ETQ</p>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"info__img\" style='background-color: black'>\n" +
                    "                <img src=\"img/etq/etq__logo.png\" alt=\"\" >\n" +
                    "            </div>\n" +
                    "        </div>\n" +

                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/etq/etq__banner_2.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"info\">\n" +
                    "            <div class=\"info__content\">\n" +
                    "                <div class=\"info__top\">\n" +
                    "                    <img src=\"img/etq/etq__small.jpg\" alt=\"\">\n" +
                    "                </div>\n" +
                    "                <div class=\"info__bottom\" style=\"background-color: #fff;color: #000;\">\n" +
                    "                    <h1>Branding</h1>\n" +
                    "                    <p>Every single piece of printed communication is crafted to convey the qualitative and parring-down ethos of ETQ</p>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"info__img\" style='background-color: black'>\n" +
                    "                <img src=\"img/etq/etq__pic__medium.jpg\" alt=\"\" >\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/etq/etq__banner_4.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"mobile\">\n" +
                    "            <div class=\"mobile__box-left\" style=\"background-image: url(img/etq/etq__mobile__left.jpg)\">\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"mobile__box-right\" style=\"background-image: url(img/etq/etq__mobile__right.jpg)\">\n" +
                    "\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/etq/etq__banner_3.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +


                    "<div class=\"footer\">\n" +
                    "        <div class=\"footer__box\">Copyright@2018</div>\n" +
                    "        <div class=\"footer__links\">\n" +
                    "            <a href=\"http://www.facebook.com/ivan.najdovski.7\"><i class=\"fab fa-facebook-square\"></i></a>\n" +
                    "            <a href=\"http://www.linkedin.com/in/ivan-najdovski-4985a3167/\"><i class=\"fab fa-linkedin\"></i></a>\n" +
                    "            <a href=\"http://www.instagram.com/ivannajdovski/?hl=en\"><i class=\"fab fa-instagram\"></i></a>\n" +
                    "\n" +
                    "        </div>\n" +
                    "        <div class=\"footer__content\"><h1>Ivan Najdovski</h1></div>\n" +
                    "    </div>");
          $(".main__content__build-header").addClass("animate")
            } else if ($(this).children("div").attr("id") === "abel") {
                $(".content__bottom").html("<div class=\"awards\">\n" +
                    "            <div class=\"awards__content\">\n" +
                    "                <h1 class=\"awards__content-header\">We created an e-commerce platform for Abel fragrances that sparks all senses, except smell.<h1>\n" +
                    "            </div>\n" +
                    "            <div class=\"awards__list\" style='background-color: #CABE9F'>\n" +
                    "                <h1>Awards & Recognition</h1>\n" +
                    "                <p>Awwards Site of the Day, CSS Design, SiteInspire</p>\n" +
                    "                <h1>Deliverables</h1>\n" +
                    "                <p>Design & technology</p>\n" +
                    "                <h1>Visit site</h1>\n" +
                    "                <p><a href=\"http://www.abelodor.com\">www.abelodor.com</a></p>\n" +
                    "            </div>\n" +
                    "        </div>\n" +

                    "        <div class=\"info\">\n" +
                    "            <div class=\"info__content\">\n" +
                    "                <div class=\"info__top\">\n" +
                    "                    <img src=\"img/abel/abel__top.jpg\" alt=\"\">\n" +
                    "                </div>\n" +
                    "                <div class=\"info__bottom\" style=\"background-color: #fff;color: #000;\">\n" +
                    "                    <h1>Identity</h1>\n" +
                    "                    <p>We adapted the new identity created by Atelier Joachim Baan to an online use</p>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"info__img\" style='background-color: #0D364C'>\n" +
                    "                <img src=\"img/abel/Abel_logo.png\" alt=\"\" style='width: 20rem; height: auto'>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/abel/abel__banner.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"mobile\">\n" +
                    "            <div class=\"mobile__box-left\" style=\"background-image: url(img/abel/abel__mobile__left.jpg)\">\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"mobile__box-right\" style=\"background-image: url(img/abel/abel__mobile__right.jpg)\">\n" +
                    "\n" +
                    "            </div>\n" +
                    "        </div>\n" +

                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/abel/abel__banner_2.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"info\">\n" +
                    "            <div class=\"info__content\">\n" +

                    "                <div class=\"info__bottom\" style=\"background-color: #fff;color: #000;\">\n" +
                    "                    <h1>Photography</h1>\n" +
                    "                    <p>We inovite potential customers to dive into the ambiance of each fragrance by combining products and inspirational images.</p>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"info__img\" style='background-color: black'>\n" +
                    "                <img src=\"img/abel/abel__pic__medium.jpg\" alt=\"\" >\n" +
                    "            </div>\n" +
                    "        </div>\n" +


                    "<div class=\"footer\">\n" +
                    "        <div class=\"footer__box\">Copyright@2018</div>\n" +
                    "        <div class=\"footer__links\">\n" +
                    "            <a href=\"http://www.facebook.com/ivan.najdovski.7\"><i class=\"fab fa-facebook-square\"></i></a>\n" +
                    "            <a href=\"http://www.linkedin.com/in/ivan-najdovski-4985a3167/\"><i class=\"fab fa-linkedin\"></i></a>\n" +
                    "            <a href=\"http://www.instagram.com/ivannajdovski/?hl=en\"><i class=\"fab fa-instagram\"></i></a>\n" +
                    "\n" +
                    "        </div>\n" +
                    "        <div class=\"footer__content\"><h1>Ivan Najdovski</h1></div>\n" +
                    "    </div>");
          $(".main__content__build-header").addClass("animate")
            } else if ($(this).children("div").attr("id") === "sbf") {
                $(".content__bottom").html("<div class=\"awards\">\n" +
                    "            <div class=\"awards__content\">\n" +
                    "                <h1 class=\"awards__content-header\">Amsterdam Schiphol Airport is one of the best airports in the world and needed an airside shoppng experience in tune with this reputation. We rebranded the vidual identity for See Buy Fly and translated this into brand guide.<h1>\n" +
                    "            </div>\n" +
                    "            <div class=\"awards__list\" style='background-color: #FFCC00'>\n" +
                    "                <h1>Awards & Recognition</h1>\n" +
                    "                <p>Coming soon...</p>\n" +
                    "                <h1>Deliverables</h1>\n" +
                    "                <p>Brand identity, prior, photograpgy art derection, design and development</p>\n" +
                    "                <h1>Visit site</h1>\n" +
                    "                <p><a href=\"http://www.seebuyflyhappyhour.nl\">www.seebuyflyhappyhour.nl</a></p>\n" +
                    "            </div>\n" +
                    "        </div>\n" +

                    "        <div class=\"info\">\n" +
                    "            <div class=\"info__content\">\n" +

                    "                <div class=\"info__bottom\" style=\"background-color: #002C7B;color: #fff;\">\n" +
                    "                    <h1>Logo</h1>\n" +
                    "                    <p>We refreshed the SBF logo with brighter color and a new flat look, already recognized via the famous bag.</p>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"info__img\" style='background-color: #fff'>\n" +
                    "                <img src=\"img/sbf/sbf__logo.jpg\" alt=\"\" style='width: 20rem; height: auto'>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/sbf/sbf__banner.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"info\">\n" +
                    "            <div class=\"info__content\">\n" +

                    "                <div class=\"info__bottom\" style=\"background-color: #fff;color: #000;\">\n" +
                    "                    <h1>Photography</h1>\n" +
                    "                    <p>We wanted the photography to have a lively open feel. The airside shopping must look accessible and inviting.</p>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"info__img\" style='background-color: #fff'>\n" +
                    "                <img src=\"img/sbf/sbf__medium__2.jpg\" alt=\"\" >\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/sbf/sbf__banner_2.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/sbf/sbf__banner_3.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"mobile\">\n" +
                    "            <div class=\"mobile__box-left\" style=\"background-image: url(img/sbf/sbf__mobile__left.jpg)\">\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"mobile__box-right\" style=\"background-image: url(img/sbf/sbf__mobile__right.jpg)\">\n" +
                    "\n" +
                    "            </div>\n" +
                    "        </div>\n" +

                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/sbf/sbf__banner_4.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"info\">\n" +
                    "            <div class=\"info__content\">\n" +
                    "                <div class=\"info__top\">\n" +
                    "                    <img src=\"img/sbf/sbf__top.jpg\" alt=\"\">\n" +
                    "                </div>\n" +
                    "                <div class=\"info__bottom\" style=\"background-color: #FFCC00;color: #000;\">\n" +
                    "                    <h1>Products</h1>\n" +
                    "                    <p>We introduced a systematic way to showcase products. By using a color as a background along with the gray, a horizon is created allowing the items to be highlighted.</p>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"info__img\" style='background-color: black'>\n" +
                    "                <img src=\"img/sbf/sbf__medium.jpg\" alt=\"\" >\n" +
                    "            </div>\n" +
                    "        </div>\n" +


                    "<div class=\"footer\">\n" +
                    "        <div class=\"footer__box\">Copyright@2018</div>\n" +
                    "        <div class=\"footer__links\">\n" +
                    "            <a href=\"http://www.facebook.com/ivan.najdovski.7\"><i class=\"fab fa-facebook-square\"></i></a>\n" +
                    "            <a href=\"http://www.linkedin.com/in/ivan-najdovski-4985a3167/\"><i class=\"fab fa-linkedin\"></i></a>\n" +
                    "            <a href=\"http://www.instagram.com/ivannajdovski/?hl=en\"><i class=\"fab fa-instagram\"></i></a>\n" +
                    "\n" +
                    "        </div>\n" +
                    "        <div class=\"footer__content\"><h1>Ivan Najdovski</h1></div>\n" +
                    "    </div>");
          $(".main__content__build-header").addClass("animate")
            } else if ($(this).children("div").attr("id") === "a-dam") {
                $(".content__bottom").html("<div class=\"awards\">\n" +
                    "            <div class=\"awards__content\">\n" +
                    "                <h1 class=\"awards__content-header\">Dive into the extraordinary world of A-dam Underwear and discover how we translated their unique brand story into a playful combination of branding and e-commerce.<h1>\n" +
                    "            </div>\n" +
                    "            <div class=\"awards__list\" style='background-color: #F5EAAF'>\n" +
                    "                <h1>Awards & Recognition</h1>\n" +
                    "                <p>E-commerce site of the year nominee Awwards, Mindsparkle, Maxi Best-of The Gallery, Siiimple</p>\n" +
                    "                <h1>Deliverables</h1>\n" +
                    "                <p>Branding, Design & Development</p>\n" +
                    "                <h1>Visit site</h1>\n" +
                    "                <p><a href=\"http://www.adamunderwear.com\">www.adamunderwear.com</a></p>\n" +
                    "            </div>\n" +
                    "        </div>\n" +

                    "        <div class=\"info\">\n" +
                    "            <div class=\"info__content\">\n" +
                    "                <div class=\"info__top\">\n" +
                    "                    <img src=\"img/a-dam/a-dam__top.jpg\" alt=\"\">\n" +
                    "                </div>\n" +
                    "                <div class=\"info__bottom\" style=\"background-color: #fff;color: #000;\">\n" +
                    "                    <h1>The Brand</h1>\n" +
                    "                    <p>We enriched their black and white brand identity with a colourful extra layer, fresh icons, and new typo, to create a new, richer identity for both online and offline.</p>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"info__img\" style='background-color: #EF5862'>\n" +
                    "                <img src=\"img/a-dam/a-dam__logo.png\" alt=\"\" style='width: 15rem; height: auto'>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/a-dam/a-dam__banner.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"mobile\">\n" +
                    "            <div class=\"mobile__box-left\" style=\"background-image: url(img/a-dam/a-dam__mobile__left.jpg)\">\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"mobile__box-right\" style=\"background-image: url(img/a-dam/a-dam__mobile__right.jpg)\">\n" +
                    "\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/a-dam/a-dam__banner_2.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"info\">\n" +
                    "            <div class=\"info__content\">\n" +
                    "            <div class=\"info__top\">\n" +
                    "                <img src=\"img/a-dam/a-dam__small.gif\" alt=\"some pic\">\n" +
                    "            </div>\n" +

                    "                <div class=\"info__bottom\" style=\"background-color: #fff;color: #000;\">\n" +
                    "                    <h1>More then online</h1>\n" +
                    "                    <p>We helped A-dam out with packaging and retail ideas.</p>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"info__img\" style='background-color: #fff'>\n" +
                    "                <img src=\"img/a-dam/a-dam__medium.jpg\" alt=\"\" >\n" +
                    "            </div>\n" +
                    "        </div>\n" +


                    "<div class=\"footer\">\n" +
                    "        <div class=\"footer__box\">Copyright@2018</div>\n" +
                    "        <div class=\"footer__links\">\n" +
                    "            <a href=\"http://www.facebook.com/ivan.najdovski.7\"><i class=\"fab fa-facebook-square\"></i></a>\n" +
                    "            <a href=\"http://www.linkedin.com/in/ivan-najdovski-4985a3167/\"><i class=\"fab fa-linkedin\"></i></a>\n" +
                    "            <a href=\"http://www.instagram.com/ivannajdovski/?hl=en\"><i class=\"fab fa-instagram\"></i></a>\n" +
                    "\n" +
                    "        </div>\n" +
                    "        <div class=\"footer__content\"><h1>Ivan Najdovski</h1></div>\n" +
                    "    </div>");
          $(".main__content__build-header").addClass("animate")
            } else if ($(this).children("div").attr("id") === "trifecta") {
                $(".content__bottom").html("<div class=\"awards\">\n" +
                    "            <div class=\"awards__content\">\n" +
                    "                <h1 class=\"awards__content-header\">Within this e-commerce platform we've seta  new online standard in the mobility sector. Combining beautiful product display with a truly seamless configuration module.<h1>\n" +
                    "            </div>\n" +
                    "            <div class=\"awards__list\" style='background-color: #F5EAAF'>\n" +
                    "                <h1>Awards & Recognition</h1>\n" +
                    "                <p>Awwwards, Css Design, Siteinspire</p>\n" +
                    "                <h1>Deliverables</h1>\n" +
                    "                <p>Branding, Design & Technology</p>\n" +
                    "                <h1>Visit site</h1>\n" +
                    "                <p><a href=\"http://www.trifectamobility.com\">www.trifectamobility.com</a></p>\n" +
                    "            </div>\n" +
                    "        </div>\n" +

                    "        <div class=\"info\">\n" +
                    "            <div class=\"info__content\">\n" +
                    "                <div class=\"info__top\">\n" +
                    "                    <img src=\"img/trifecta/trifecta__small.jpg\" alt=\"\">\n" +
                    "                </div>\n" +
                    "                <div class=\"info__bottom\" style=\"background-color: #fff;color: #000;\">\n" +
                    "                    <h1>Identity</h1>\n" +
                    "                    <p>We optimazed the existing Trefecta brand identity for use in an online enviroment.</p>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"info__img\" style='background-color: #1E1E1E'>\n" +
                    "                <img src=\"img/trifecta/trifecta__logo.jpg\" alt=\"\" style='width: 100%; height: auto'>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/trifecta/trifecta__banner.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"mobile\">\n" +
                    "            <div class=\"mobile__box-left\" style=\"background-image: url(img/trifecta/trifecta__mobile__left.jpg)\">\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"mobile__box-right\" style=\"background-image: url(img/trifecta/trifecta__mobile__right.jpg)\">\n" +
                    "\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/trifecta/trifecta__banner_2.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"info\">\n" +
                    "            <div class=\"info__content\">\n" +


                    "                <div class=\"info__bottom\" style=\"background-color: #fff;color: #000;\">\n" +
                    "                    <h1>Photography</h1>\n" +
                    "                    <p>The look and feel of the photography is deseturated for a serious and qualitetive touch.</p>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"info__img\" style='background-color: #fff'>\n" +
                    "                <img src=\"img/trifecta/trifecta__medium.jpg\" alt=\"\" >\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/trifecta/trifecta__banner_3.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/trifecta/trifecta__banner_4.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +


                    "<div class=\"footer\">\n" +
                    "        <div class=\"footer__box\">Copyright@2018</div>\n" +
                    "        <div class=\"footer__links\">\n" +
                    "            <a href=\"http://www.facebook.com/ivan.najdovski.7\"><i class=\"fab fa-facebook-square\"></i></a>\n" +
                    "            <a href=\"http://www.linkedin.com/in/ivan-najdovski-4985a3167/\"><i class=\"fab fa-linkedin\"></i></a>\n" +
                    "            <a href=\"http://www.instagram.com/ivannajdovski/?hl=en\"><i class=\"fab fa-instagram\"></i></a>\n" +
                    "\n" +
                    "        </div>\n" +
                    "        <div class=\"footer__content\"><h1>Ivan Najdovski</h1></div>\n" +
                    "    </div>");
          $(".main__content__build-header").addClass("animate")
            } else if ($(this).children("div").attr("id") === "nike") {
                $(".content__bottom").html("<div class=\"awards\">\n" +
                    "            <div class=\"awards__content\">\n" +
                    "                <h1 class=\"awards__content-header\">Once again Nike pushed the boundaries of innovation, with an interactive iBook that stunned the delegates of an innovation summit in Moskow<h1>\n" +
                    "            </div>\n" +
                    "            <div class=\"awards__list\" style='background-color: #F5EAAF'>\n" +
                    "                <h1>Awards & Recognition</h1>\n" +
                    "                <p>Coming soon...</p>\n" +
                    "                <h1>Deliverables</h1>\n" +
                    "                <p>iBook</p>\n" +

                    "            </div>\n" +
                    "        </div>\n" +

                    "        <div class=\"info\">\n" +
                    "            <div class=\"info__content\">\n" +
                    "                <div class=\"info__top\">\n" +
                    "                    <img src=\"img/nike/nike__small.jpg\" alt=\"\">\n" +
                    "                </div>\n" +
                    "                <div class=\"info__bottom\" style=\"background-color: #fff;color: #000;\">\n" +
                    "                    <h1>iBook</h1>\n" +
                    "                    <p>In close collaboration with Nike we developed an interactive iBook. intuitive interaction and smooth animation were key in this project.</p>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"info__img\" style='background-color: #1E1E1E'>\n" +
                    "                <img src=\"img/nike/nike__logo.png\" alt=\"\" style='width: 40rem; height: auto'>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/nike/nike__banner.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"info\">\n" +
                    "            <div class=\"info__content\">\n" +


                    "                <div class=\"info__bottom\" style=\"background-color: #fff;color: #000;\">\n" +
                    "                    <h1>Chapters</h1>\n" +
                    "                    <p>The iBook displays six different product lines, each presented in its own distinctive style.</p>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>\n" +
                    "            <div class=\"info__img\" style='background-color: #fff'>\n" +
                    "                <img src=\"img/nike/nike__medium.jpg\" alt=\"\" >\n" +
                    "            </div>\n" +
                    "        </div>\n" +

                    "    <div class=\"banner\">\n" +
                    "            <div class=\"banner__content\">\n" +
                    "                <img src=\"img/nike/nike__banner_2.jpg\" alt=\"some pic\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +


                    "<div class=\"footer\">\n" +
                    "        <div class=\"footer__box\">Copyright@2018</div>\n" +
                    "        <div class=\"footer__links\">\n" +
                    "            <a href=\"http://www.facebook.com/ivan.najdovski.7\"><i class=\"fab fa-facebook-square\"></i></a>\n" +
                    "            <a href=\"http://www.linkedin.com/in/ivan-najdovski-4985a3167/\"><i class=\"fab fa-linkedin\"></i></a>\n" +
                    "            <a href=\"http://www.instagram.com/ivannajdovski/?hl=en\"><i class=\"fab fa-instagram\"></i></a>\n" +
                    "\n" +
                    "        </div>\n" +
                    "        <div class=\"footer__content\"><h1>Ivan Najdovski</h1></div>\n" +
                    "    </div>");
          $(".main__content__build-header").addClass("animate")
            }


        if($(".content__bottom").hasClass("active")){

        }else{
            $(".content__bottom").empty();
            $(".main__content__build-header").removeClass("animate")
        }

    });
});