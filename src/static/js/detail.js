document.documentElement.style.fontSize = window.innerWidth / 10 + 'px'
require.config({
    paths: {
        'jquery': './lib/jquery-1.8.3.min',
        'handlebars': './lib/handlebars-v4.0.11',
        'template': './comment/template',
        'swiper': './lib/swiper-3.4.2.min'
    }
})

require(['jquery', 'handlebars', 'template', 'swiper'], function($, handlebars, template, swiper) {
    console.log($)
    $('.btn span').click(function() {
        var ind = $(this).index();
        $(this).addClass('span1').siblings().removeClass('span1');
        $('.tab').eq(ind).show().siblings().hide();
    })
    $.ajax({
        url: '/api/list',
        type: 'get',
        dataType: 'json',
        success: function(data) {
            console.log(data)
            template('#banner-tpl', {
                data: data
            }, '.banner')
            new Swiper('.banner', function() {
                loop: true;
                autoplay: 1000
            })
        }
    })
})