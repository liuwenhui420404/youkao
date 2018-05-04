var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    mock = require('./src/mock')

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

gulp.task('default', ['server'], function() {

})