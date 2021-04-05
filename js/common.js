'use strict';

// реализация якорей в меню навигации
/* $(document).ready(function () {
    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });
}); */

// реализация фильтрации в секции work

$("a[data-filter]").click(function (e) {
    e.preventDefault();

    let category = $(this).attr("data-filter");

    $("div[data-filter]").stop().fadeOut(0);

    $(`div[data-filter=${category}]`).stop().fadeIn(0);

    $(this).addClass("active");
    $("a[data-filter]").not(this).removeClass("active");
    if (category !== "all") {
        $("#wrapper").css({
            "grid-auto-rows": "minmax(50px, 300px)"
        })
        $(".card__item").css({
            "grid-row": "1"
        })
    } else if (category == "all") {
        $("div[data-filter]").stop().fadeIn(0);
        $("#wrapper").removeAttr("style");
        $(".card__item").removeAttr("style");
    }
})

// релизация кнопки в footer плавное поднятие к началу странице
$(".js-btn-top").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
})

function typing(element) {
    if (typeof element == "string") {
        let inner = $(element).html();
        let fullText = "";
        let counter = 0;
        let interval = setInterval(() => {
            fullText += inner[counter];
            $(element).html(fullText);
            counter++;
            if (fullText == inner) {
                clearInterval(interval)
                setTimeout(() => {
                    typing(element)
                }, 1000);
            }
        }, 120);
    }
}

typing(".title-el");

$('a.disabled').click(function(e) {
    e.preventDefault()
})

// Увеличение картинки при двойном нажатии на неё
const cardImg = document.querySelector('.img_size');
const fullScreenImg = document.querySelector('.view');
const closeImg = document.querySelector('.view__close');

cardImg.addEventListener("click", function (e) {
    e.preventDefault();
    getImg(this);
})

function getImg(img) {
    fullScreenImg.classList.add("active");
    const productImg = img.querySelector(".work-img");
    const parentSrc = productImg.getAttribute("src");
    const viewImg = fullScreenImg.querySelector("img");
    viewImg.setAttribute("src", parentSrc)
}

closeImg.addEventListener("click", function () {
    fullScreenImg.classList.remove("active")
})
