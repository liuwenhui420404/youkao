define(['jquery', 'handlebars'], function($, Handlebars) {
    return function(id, data, content) {
        var tpl = /#/g.test(id) ? $(id).html() : id;
        var template = Handlebars.compile(tpl);
        var html = template(data);
        if (content) {
            $(content).html(html)
        } else {
            return html
        }
    }
})
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: './src',
            index: 'page/index.html',
            middleware: function(req, res, next) {
                if (/\/api/g.test(req.url)) {
                    res.end(JSON.stringify(
                        mock(req.url)
                    ))
                }
                next();
            }
        },
        files: ['src'],
        port: 9898,
        host: 'localhost'
    })
})