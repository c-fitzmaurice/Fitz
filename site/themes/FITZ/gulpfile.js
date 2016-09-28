var elixir = require('laravel-elixir');
var theme = 'fitz';

elixir.config.assetsPath = './';
elixir.config.publicPath = './';

elixir(function(mix) {
    mix

    .sass(theme + '.scss', 'css/' + theme + '.css')

    .scripts(theme + '.js', 'js/' + theme + '.js');

    // mix.version('css/' + theme + '.css');
});