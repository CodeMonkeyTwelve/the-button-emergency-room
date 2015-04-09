// Restyle the page
$('#header').remove();  
$('#infobar').remove();
$('.side').remove();
$('.spacer')[1].remove();
$('#sharelink_').remove();
$('#report-action-form').remove();
$('.gold-wrap').remove();
$('.footer-parent').remove();
$('.debuginfo').remove();
$('.content')[0].style.margin = '0';
$('.content')[0].style.background = '#eaedef';
 
// Add our own stuff
var html = '<table align="center"><tr><td style="padding-right: 10px; vertical-align: top;">';
html = html + '<br /><form style="width:531px;" class="thebutton-form"><h1>the stats</h1><table style="text-align:left;font-family:Verdana;font-size:12px;border-spacing:20px 15px;border-collapse:separate;"><tr><td>status</td><td id="status" style="font-weight:bold;"></td><td style="width:60px"></td><td>users</td><td id="usersonline"></td></tr><tr><td>local time</td><td id="localtime"></td><td></td><td>server says</td><td id="secondsleft"></td></tr><tr><td>server time</td><td id="servertime"></td><td></td><td>lowest seen</td><td id="lowestseen"></td></tr></table></form>';
html = html + '<br /><form style="width:531px;height:114px;" class="thebutton-form"><h1>the settings</h1><table style="text-align:left;font-family:Verdana;font-size:12px;border-spacing:20px 15px;border-collapse:separate;"><tr><td><input type="checkbox" id="alarm" value="alarm" checked>sound alarm when below</td><td><input id="alarmlimit" type="number" value="50" min="1" max="60" step="1" style="width:35px"/> seconds</td></tr><tr><td><input type="checkbox" id="autoclick" value="autoclick">auto click when below</td><td><input id="autoclicklimit" type="number" value="10" min="1" max="60" step="1" style="width:35px"/> seconds</td><td id="autooutput"></td></tr></table></form>';
html = html + '<br /><form style="width:531px;height:135px" class="thebutton-form"><h1>the squire</h1><table style="text-align:left;font-family:Verdana;font-size:12px;border-spacing:20px 15px;border-collapse:separate;"><tr><td>squire status</td><td id="squirestatus" style="font-weight:bold;">offline</td><td style="width:130px"></td><td>server timer</td><td id="squireservertime"></td></tr><tr><td>auto clickers</td><td id="squireautoclickers"></td><td></td><td>mode</td><td id="squiremode"></td></tr><tr><td>manual clickers</td><td id="squiremanualclickers"></td><td></td><td></td><td></td></tr></table></form>';
html = html + '</td><td style="padding-left: 10px; vertical-align: top;">';
html = html + '<br /><form style="width:531px;" class="thebutton-form"><h1>the plot</h1><br /><img width="432px" height="252px" id="erplot" /><br /><span style="font-family:Verdana;font-size:12px;">last plot refresh: <span id="erplotlastupdate"></span></span></form>';
html = html + '<br /><form style="width:531px;height:135px" class="thebutton-form"><h1>the live data</h1><table style="text-align:left;font-family:Verdana;font-size:12px;border-spacing:20px 15px;border-collapse:separate;"><tr><td id="livesecs1"></td><td id="livepart1"></td><td id="livetime1"></td><td id="livetick1"></td></tr><tr><td id="livesecs2"></td><td id="livepart2"></td><td id="livetime2"></td><td id="livetick2"></td></tr><tr><td id="livesecs3"></td><td id="livepart3"></td><td id="livetime3"></td><td id="livetick3"></td></tr></table></form>';
html = html + '</td></tr><tr><td colspan="2">';
html = html + '<br /><form id="chat" style="width:1123px;height:800px;position:relative;" class="thebutton-form"><div onclick="if (confirm(\'Are you sure you want to close the chat?\'))$(\'#chat\').remove()" style="cursor:pointer;position:absolute; top:0; right:0;padding:7px;font-family:Verdana;font-size:12px;">x</div><h1>the chat</h1><br /><iframe style="border:0; width:100%; height:750px;" src="https://kiwiirc.com/client/irc.freenode.net/?nick=knight|?&theme=mini#buttonknights"></iframe></form>';
html = html + '</td></tr></table>';
 
$('.thebutton-wrap').append(html);
 
// JS date formatter by meizz
Date.prototype.format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t};
 
// Beep function by paul fournel
function beep(){var snd=new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");snd.play();};
 
// The magic
var online = false; var lowestseen = 61; var lastseenlive = '';
var localtime; var servertime; var localsecond; var serversecond; var secondsleft;
function heartBeat()
{
 localtime = new Date().format("yyyy-MM-dd-hh-mm-ss");
 servertime = r.thebutton._tickTime;
 localsecond = parseInt(localtime.slice(17,19));
 serversecond = parseInt(servertime.slice(17,19));
 drift_margin = r.thebutton._msgSecondsLeft / 10;
 if(drift_margin < 1)
 {
   drift_margin = 1
 }
 online = localtime.slice(14,16) == servertime.slice(14,16) && ((serversecond - drift_margin <= localsecond && localsecond <= serversecond + drift_margin) || (serversecond == 59 && localsecond == 0));       
  
 // autoclick
 if(online && r.thebutton._msgSecondsLeft <= $('#autoclicklimit').val() && $('#autoclick').is(':checked'))
 {
  $("#thebutton").click();
  $('#autooutput').html('<span style="color:red;font-weight:bold;">!!! BUTTON PRESSED !!!</span>');
 }
 // alarm
 if(online && r.thebutton._msgSecondsLeft <= $('#alarmlimit').val() && $('#alarm').is(':checked'))
  beep();
 // lowest seen
 if(lowestseen > r.thebutton._msgSecondsLeft)
 {
  lowestseen = r.thebutton._msgSecondsLeft;
  $('#lowestseen').html(lowestseen);
 }             
 // output                                                              
 $('#localtime').html(localtime);
 $('#servertime').html(servertime);
 $('#secondsleft').html(r.thebutton._msgSecondsLeft);
 $('#status').html(online ? 'online' : '<span style="color:red;">!!! OUT OF SYNC !!!</span>');
 // live data
 if(r.thebutton._tickMac != lastseenlive)
 {
  lastseenlive = r.thebutton._tickMac;
  $('#livepart3').html($('#livepart2').html());
  $('#livepart2').html($('#livepart1').html());
  $('#livepart1').html($(".thebutton-participants").text());
   
  $('#livetick3').html($('#livetick2').html());
  $('#livetick2').html($('#livetick1').html());     
  $('#livetick1').html(r.thebutton._tickMac.substring(0,25));
   
  $('#livesecs3').html($('#livesecs2').html());
  $('#livesecs2').html($('#livesecs1').html());
  $('#livesecs1').html(r.thebutton._msgSecondsLeft);
   
  $('#livetime3').html($('#livetime2').html());
  $('#livetime2').html($('#livetime1').html());
  $('#livetime1').html(r.thebutton._tickTime);
 
 }
 
}
function updatePlot()
{
 $('#erplot').attr("src", "https://abra.me:8443/static/plot.png?rnd=" + Math.random());
 $('#erplotlastupdate').html(new Date().format("yyyy-MM-dd-hh-mm-ss"));
}
 
function updateUsers()
{
  $.get(
      "/r/thebutton", {},
      function(data) {   
        prefix1 = '<p class="users-online "';
        prefix2 = '<span class="number">';
        suffix = '</span>';
         
        data = data.substring(data.indexOf(prefix1));             
        data = data.substring(data.indexOf(prefix2) + prefix2.length);
        data = data.substring(0, data.indexOf(suffix));
        $('#usersonline').html(data);
      }
  );
}
setInterval(heartBeat, 200);                         
setInterval(updateUsers, 1*60*1000);                
setInterval(updatePlot, 1*60*1000);
updateUsers();
updatePlot();
 
/*
Credits:
https://www.reddit.com/r/thebutton/comments/3186ox/code_to_beep_when_the_timer_hits_x_seconds/
https://www.reddit.com/r/thebutton/comments/319rfw/this_code_will_automatically_press_the_button_for/
https://www.reddit.com/r/thebutton/comments/314xe7/javascript_code_snippet_for_tracking_lowest/
https://www.reddit.com/r/thebutton/comments/3136tz/the_code_of_the_button_may_contain_spoilers/
https://www.reddit.com/r/thebutton/comments/3173tf/i_made_a_bot/
https://www.reddit.com/r/thebutton/comments/31afj9/i_made_a_js_bookmarklet_to_help_people_with_their/
http://www.mithorium.com/public/buttonctrl.js    
 
http://deepthought.be/thebutton/
https://kiwiirc.com/client/irc.freenode.net/#buttonknights
https://github.com/jamesrom/jamesrom.github.io/blob/master/index.html
https://github.com/tombh/roundtable
https://abra.me:8443/static/payload.js
https://github.com/Abrackadabra/thebutton/tree/master/server
*/
 
jQuery.getScript("https://cdn.socket.io/socket.io-1.2.0.js", function (data, status, jqxhr) {
   
  var DEBUG = false;
  var status = 'connecting...';
  var autoclick = false;
  var socket = io('https://abra.me:' + (DEBUG ? '9443' : '8443') + '/');
  var armed = false;  
  var first_ping = true;
  var autoclicked = false;
  var username = false;   
  var instance_token = 'not_set';
  var username = "a" + Math.random();
   
  function now() {
    return new Date().getTime() / 1000;
  }
 
  socket.on('connect', function () {
    $('#squirestatus').text('online');
  });
 
  socket.on('disconnect', function () {
    $('#squirestatus').text('offline');
  });
 
  socket.on('close', function () {
    $('#squirestatus').text('offline');
    socket.disconnect();
  });
 
  socket.on('update', update);
 
  function ping() {
    var msg = {
      username: username,
      valid: true,
      client_time: now(),
      client_timer: r.thebutton._msgSecondsLeft,
      instance_token: instance_token,
      first_ping: first_ping,
      autoclick: false,
      autoclicked: false
    };
    first_ping = false;
 
    socket.emit('ping', msg);
  }
 
  window.setInterval(ping, 1000);
 
  function update(msg) {
   
    $('#squireservertime').html(msg.server_timer);
    $('#squireautoclickers').html(msg.autoclickers);
    $('#squiremanualclickers').html(msg.manuals);
    $('#squiremode').html(msg.mode);
     
  }
 
});
