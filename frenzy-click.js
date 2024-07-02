'use strict';

javascript:(function() {
	const clicksPerSecond = 10;
  
  function clickBigCookieDuringBuffs() {
    if (Game.hasBuff("Frenzy") ||
      Game.hasBuff("Cursed finger") ||
      Game.hasBuff("Devastation") ||
      Game.hasBuff("Dragonflight"))
    Game.ClickCookie();
}
setInterval(clickBigCookieDuringBuffs, 1000 / clicksPerSecond);
}());
