let mix = require('laravel-mix');
require('laravel-mix-jigsaw');

mix.disableNotifications();
mix.setPublicPath('source/assets/build');

mix
  .jigsaw({
    watch: [
      'config.php',
      'source/**/*.md',
      'source/**/*.php',
      'source/**/*.scss',
      '!source/**/_tmp/*',
    ],
  })
  .js('source/_assets/js/main.js', 'js')
  .postCss('source/_assets/styles/main.css', 'css', [require('tailwindcss')])
  .sourceMaps()
  .version();
