let mix = require('laravel-mix');
require('laravel-mix-jigsaw');

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
  .disableNotifications()
  .setPublicPath('source/assets/build')
//   .js('source/_assets/js/main.js', 'js') // Not using any JS at the moment
  .postCss('source/_assets/styles/main.css', 'css', [require('tailwindcss')])
  .sourceMaps()
  .version();
