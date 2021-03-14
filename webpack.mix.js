const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .webpackConfig({
        resolve: {
            alias: {
                '@': __dirname + '/resources/js/',
                '~': __dirname + '/resources/sass/',
            }
        }
    })
    .browserSync({
        proxy: 'localhost',
        port: 32816,
        open: false,
    })
    .vue();
