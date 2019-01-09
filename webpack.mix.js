let mix = require('laravel-mix');
let build = require('./tasks/build.js');
require('laravel-mix-purgecss');
require('laravel-mix-tailwind');

mix.disableSuccessNotifications();
mix.setPublicPath('source/assets/build');
mix.webpackConfig({
  plugins: [
    build.jigsaw,
    build.browserSync(),
    build.watch(['source/**/*.md', 'source/**/*.php', 'source/**/*.scss', '!source/**/_tmp/*']),
  ],
});

mix
  .js('source/_assets/js/main.js', 'js')
  .extract(['vue'])
  .sass('source/_assets/sass/main.scss', 'css')
  .tailwind()
  .purgeCss({
    globs: [
      path.join(__dirname, 'source/**/*.blade.php'),
      path.join(__dirname, 'source/_assets/**/*.blade.php'),
    ],
  })
  .options({
    processCssUrls: false,
  })
  .version();
