var elixir = require('laravel-elixir');
require('laravel-elixir-svg-symbols');
// require('laravel-elixir-remove');

var theme = 'fitz';

elixir.config.assetsPath = './';
elixir.config.publicPath = './';

elixir(function(mix) {
    mix

    .sass(theme + '.scss', 'css/' + theme + '.css')

    .scripts(theme + '-raw.js', 'js/' + theme + '.js')

    .svgSprite('./svg','./svg');

    // mix.version('css/' + theme + '.css');
});