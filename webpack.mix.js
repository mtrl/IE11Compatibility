let mix = require('laravel-mix')

mix.setPublicPath('dist')
   .js('resources/js/nova.js', 'js')
   .sass('resources/sass/nova.scss', 'css')
