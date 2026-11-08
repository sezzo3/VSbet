$(document).ready(function () {
    // search input
    $("#search_modal").on("shown.bs.modal", function () {
        $("#header_searchInp").focus();
    });

    // hero banner slider
    $(".hero_banner").owlCarousel({
        loop: true,
        margin: 16,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1 },
            992: { items: 2 }
        }
    });

    // horizontal scroll effect
    $(".horizontal_scroll").on("wheel", function (e) {

        var deltaX = e.originalEvent.deltaX;
        var deltaY = e.originalEvent.deltaY;

        var scrollLeft = this.scrollLeft;
        var scrollWidth = this.scrollWidth;
        var width = $(this).outerWidth();

        if (Math.abs(deltaY) > Math.abs(deltaX)) {

            if (
                (deltaY > 0 && scrollLeft + width < scrollWidth) ||
                (deltaY < 0 && scrollLeft > 0)
            ) {
                e.preventDefault();

                this.scrollLeft += deltaY;
            }

        }

    });

    // hero banner
    $(".games_slider").owlCarousel({
        loop: false,
        margin: 12,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        navText: [
            '<i class="fi fi-rr-angle-small-left"></i>',
            '<i class="fi fi-rr-angle-small-right"></i>'
        ],
        responsive: {
            0: { items: 3 },
            576: { items: 3 },
            768: { items: 4 },
            992: { items: 6 },
            1200: { items: 7 },
        }
    });

});