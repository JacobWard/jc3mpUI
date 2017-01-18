/**
 * @overview package-servernews Main
 * @author Jacob 'theWebKeyGuy'
 * @copyright (c) theWebKeyGuy
 * @license
 */

'use strict';

const ui = new WebUIWindow('jc3mp-serverLogin', 'package://jc3mp-serverLogin/ui/index.html', new Vector2(jcmp.viewportSize.x, jcmp.viewportSize.y));
ui.autoResize = true;

var playerName = jcmp.players.filter(p => p.localPlayer)[0].name;
var playerID = jcmp.players.filter(p => p.localPlayer)[0].networkId;

jcmp.ui.AddEvent('userinfo', JSON.stringify({
	id: playerID,
	name: playerName
}));

jcmp.ui.AddEvent('toggle_cursor', (toggle) => {
    //jcmp.localPlayer.controlsEnabled = toggle;
});

