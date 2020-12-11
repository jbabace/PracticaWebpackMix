const mix = require('laravel-mix');
mix.sass('src/input.scss', 'dist-mix').js('src/script.js', 'dist-mix').sourceMaps().copy('src/index.html', 'dist-mix').extract(['leaflet']);