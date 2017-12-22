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