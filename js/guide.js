$(document).ready(function () {

    $('a[href*="#"]').on('click',function (e) {
        e.preventDefault();
    });

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

    //s : layer popup
    function popupLayer(obj){

        var self = $(obj);
        var	target = $($(obj).attr("href"));

        $('.dimed').addClass('active');
        $('html').addClass('layer-open');

        $('.layers[id*="popup-"]').hide();
        target.attr("tabindex", "0").stop().fadeIn(500).focus();

        $(".layer-close button, .dimed.active").click(function(){
            $('html').removeClass('layer-open');
            $('.dimed').removeClass('active');
            target.stop().hide();
            self.focus();
        });
    }

    $('a[href*="#popup-"]').on('click', function(e){
        e.preventDefault();
        popupLayer(this);
    });
    //e : layer popup

    //card draggable
    $("#sortWrap").sortable({
        update: function () {
            var order = $(this).sortable('toArray', {
                attribute: 'data-order'
            });
            console.log(order);
        }
    });

    //tabmenu - toggle
    $('.tab-toggle ul.tabs li').click(function() {
        var activeTab = $(this).attr('toggle');
        $('.tab-toggle ul.tabs li').removeClass('current');
        $('.tab-contents').removeClass('active');
        $(this).addClass('current');
        $('#' + activeTab).addClass('active');
    });


    //s : tabmenu - Move
    var sideClick = function (target) {
        var theCurrent;

        $('.prev-next a', target).on('click', function (e) {
            theCurrent = $(target).find('li.current');

            if ($(this).hasClass('prev') && theCurrent.index() != 0) {
                theCurrent.prev().find('a')[0].click();
            } else if ($(this).hasClass('next') && theCurrent.index() != $(target).find('li').length - 1) {
                theCurrent.next().find('a')[0].click();
            }

            e.preventDefault();
            e.stopPropagation();
        });
    };

    var autoSlide = function (target) {
        var slideUl = $(target).find('ul');
        var slideList = slideUl.find('li');
        var slideWidth = 0;
        var listWidth = [];
        var theScroll;
        var theIndex;

        var theCurrent = slideUl.find('li.current');
        theCurrent.removeClass('current');

        // 각각의 li 길이 구하기
        for (var i = 0; i < slideList.length; i++) {
            slideList.eq(i).width(slideList.eq(i).width());

            listWidth[i] = Math.round(slideList.eq(i).width());
            slideWidth += listWidth[i];
        }

        theCurrent.addClass('current');

        // 총길이 지정
        slideUl.width(slideWidth);

        // auto-slide
        $('ul li a', target).on('click', function (e) {

            $(this).closest('ul').find('li.current').removeClass('current');
            $(this).parent('li').addClass('current');

            theScroll = 0;
            theIndex = $(this).parent('li').index();

            for (var k = 0; k < theIndex; k++) {
                theScroll += listWidth[k];
            }

            $(target).find('.tabs-ui').animate({scrollLeft: theScroll - 320}, 200);

            if (!$(this).hasClass('link')) e.preventDefault();
        });

        $(target).find('li.current a').trigger('click');
    };

    var tabsUiAutoWidth = function () {
        var tabsUi = $('.tabmenu').width();
        var tabsUiCal = ( tabsUi - $('.prev-next a').width() * 2 ) - 2;
        $('.tabs-ui').css('width', tabsUiCal);
    };

    $('.tabmenu').each(function (index, elem) {
        sideClick(elem);
        autoSlide(elem);
        tabsUiAutoWidth(elem);
    });

    //반응형 사이즈 재정의
    $(window).resize(function (elem) {
        sideClick(elem);
        autoSlide(elem);
        tabsUiAutoWidth(elem);
    });
    //s : tabmenu - Move

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

    //chart 관련
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



