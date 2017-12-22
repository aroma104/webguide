$(document).ready(function () {

    $('.lnb a').click(function(e) {
        e.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 400);
    });

    //accordions
    $('.accordions').find('.accordion-trigger').on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('active')){
            $(this).removeClass('active').next('.accordion-contents').stop().slideUp(300);
        }else{
            $(this).closest('.accordions').find('.accordion-trigger').removeClass('active');
            $(this).closest('.accordions').find('.accordion-contents').stop().slideUp(300);
            $(this).addClass('active').next('.accordion-contents').stop().slideDown(300);
        }
    });

    $("#sortWrap").sortable({
        update: function () {
            var order = $(this).sortable('toArray', {
                attribute: 'data-order'
            });
            console.log(order);
        }
    });

    //slider
    var bxslider = $('.slide_wrap').bxSlider({
        // auto: true,
        speed:300,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        ariaHidden:true,
        useCSS:false,
        touchEnabled: false,
        onSliderLoad: function () {
            $('.bx-pager-item').each(function (index) {$(this).find('a').text(index + 1 + "번째 슬라이드 보기");});
            $('.bx-prev').text("이전 버튼");
            $('.bx-next').text("다음 버튼");
        }
    });



});


$(window).scroll(function () {

    //sticky
    $('.component-title').each(function() {
        var doc_scroll_top = $(window).scrollTop() + 30,
            categorys      = $(this),
            category_id    = categorys.attr('id'),
            category_top   = categorys.offset().top,
            components_top = $('.component-area').offset().top;

        if (components_top > $(window).scrollTop()) {
            $('.lnb a').removeClass('active');
        } else if(category_top <= doc_scroll_top) {
            $(".lnb a[href='#" + category_id + "']").addClass('active').siblings('a').removeClass('active');
        } else if ($(document).height()- $(window).height() === $(window).scrollTop()) {
            $('.lnb a:last-child').addClass('active').siblings('a').removeClass('active');
        }

    });

});