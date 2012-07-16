(function() {
  
  var toon = document.getElementById('toon')
  , who = document.getElementById('who-link')
  , what = document.getElementById('what-link')
  , social = document.getElementById('social-link')
  , nav = document.getElementById('main-nav')
  
  who.onmouseover = function() {
    toon.className = 'toon who-link'
  }
  
  what.onmouseover = function() {
    toon.className = 'toon what-link'
  }
  
  social.onmouseover = function() {
    toon.className = 'toon social-link'
  }
  
  nav.onmouseout = function() {
    toon.className = 'toon';
  }
  
}());