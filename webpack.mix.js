require('dotenv').config()
let webpack = require('webpack')
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

let dotenvplugin = new webpack.DefinePlugin({
    'process.env': {
        APP_ENV: JSON.stringify(process.env.APP_ENV || 'production'),
        RECAPTCHA_SITE_KEY: JSON.stringify(process.env.RECAPTCHA_SITE_KEY || '')
    }
})

mix.js('resources/js/app.js', 'public/js')
    .webpackConfig({
        resolve: {
            alias: {
                '@': __dirname + '/resources/js/',
                '~': __dirname + '/resources/sass/',
            }
        },
        plugins: [
            dotenvplugin,
        ]
    })
    .browserSync({
        proxy: 'localhost',
        port: 32816,
        open: false,
    })
    .vue();
