var elixir = require('laravel-elixir');
require('laravel-elixir-svg-symbols');

var theme = 'fitz';

elixir.config.sourcemaps = true;
elixir.config.assetsPath = './';
elixir.config.publicPath = './';

elixir(function(mix) {
    mix
    .sass(theme + '.scss', 'css/' + theme + '.css')
    .scripts(theme + '-raw.js', 'js/' + theme + '.js')
    .svgSprite('./svg','./svg');
});
