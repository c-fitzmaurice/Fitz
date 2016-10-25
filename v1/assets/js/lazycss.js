/* ============== CSS LAZY LOAD ============== */
function loadCSS(href){
  var ss = window.document.createElement('link');
  var head = window.document.getElementsByTagName('head')[0];

  ss.rel = 'stylesheet';
  ss.href = href;

  // temporarily, set media to something non-matching to ensure it'll fetch without blocking render
  ss.media = 'only x';

  head.appendChild(ss);

  setTimeout( function(){
    // set media back to `all` so that the stylesheet applies once it loads
    ss.media = 'all';
  },0);
}




/* ============== LOAD CSS ============== */
loadCSS('assets/css/bootstrap.css');
loadCSS('assets/css/main.css');
loadCSS('http://fonts.googleapis.com/css?family=Raleway:400,600,700,300');
