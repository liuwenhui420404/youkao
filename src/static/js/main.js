document.documentElement.style.fontSize = window.innerWidth / 10 + 'px'
require.config({
    paths: {
        'jquery': './lib/jquery-1.8.3.min',
        'handlebars': './lib/handlebars-v4.0.11',
        'template': './comment/template'
    }
})

require(['jquery', 'handlebars', 'template'], function($, handlebars, template) {
    console.log($)
    $('.title1 li').click(function() {
        var ind = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.tab-content').eq(ind).show().siblings().hide();
    })
    $.ajax({
        url: '/api/list',
        type: 'get',
        dataType: 'json',
        success: function(data) {
            console.log(data)
            template('#list-tpl', {
                data: data
            }, '.list')
        }
    })
})