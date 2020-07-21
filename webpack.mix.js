let mix = require('laravel-mix');

require('laravel-mix-jigsaw');

mix.disableSuccessNotifications();
mix.setPublicPath('source/assets/build');

mix
  .js('source/_assets/js/main.js', 'js')
  .postCss('source/_assets/styles/main.css', 'css', [require('tailwindcss')])
  .jigsaw({
    watch: [
      'config.php',
      'source/**/*.md',
      'source/**/*.php',
      'source/**/*.scss',
      '!source/**/_tmp/*',
    ],
  })
  .options({
    processCssUrls: false,
  })
  .sourceMaps()
  .version();
