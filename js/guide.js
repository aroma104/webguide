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
        auto: true,
        speed:300,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        ariaHidden:true,
        useCSS:false,
        touchEnabled: false,
        nextText : '다음',
        prevText : '이전',
        easing:'linear',
        onSliderLoad: function () {
            $('.bx-pager-item').each(function (index) {$(this).find('a').text(index + 1 + "번째 슬라이드 보기");});
        }
    });

    var ctx = document.getElementById("cv1");
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                label: '# of Votes',
                data: [5, 7, 3, 5, 2, 3, 4, 5, 8, 1, 2, 3, 4, 7, 1, 5, 2, 4, 1, 5, 4, 8, 2, 4, 9, 9, 1, 2, 3, 4 ,8,7,5,2,1,5,1],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)'
                ],
                borderWidth: 0,
            }]
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



