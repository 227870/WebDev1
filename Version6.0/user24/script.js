 function changeText() {
    document.getElementById('textChange').innerHTML = "Hey";
   }

   var space = "";
   var pos = 0;
   var msg = "User 19";
   
   function Scroll(){
   document.title = msg.substring(pos, msg.length) + space +msg.substring(0,pos);
   
   pos++;
   if (pos > msg.length) pos = 0;
   window.setTimeout("Scroll()", 0);
   }
   Scroll();
   
   javascript:document.body.contentEditable='true'; document.designMode='on'; void 0

   
<head>
<script language="JavaScript"> <!-- Web Site: http://www.crosswinds.net/~llizard --> <!-- This script and many more are available free online at --> <!-- The JavaScript Source!! http://javascript.internet.com --> <!-- Begin var agt=navigator.userAgent.toLowerCase(); if (agt.indexOf("mac") != -1) var a="\r"; else var a="\n"; var max=0; function tlist() { max=tlist.arguments.length; for (i=0; i this[i]=tlist.arguments[i]; } tl = new tlist( " o"+a+ " /|\\"+a+ " */ \\* ejm97"+a, " o_"+a+ " \<| *"+a+ " *\>\\ ejm97"+a, " _o/*"+a+ " * |"+a+ " / \\ ejm97"+a, " *\o_"+a+ " / *"+a+ " \<\\ ejm97"+a, " _o/*"+a+ " * |"+a+ " / \\ ejm97"+a, " *\\c/*"+a+ " )"+a+ " / \> ejm97"+a, " *"+a+ " \\__/c"+a+ " \> \\* ejm97"+a, " __/"+a+ " (o_*"+a+ " \\* ejm97"+a, " \\ /"+a+ " |"+a+ " */o\\* ejm97"+a, " \\_"+a+ " ("+a+ " */o\\* ejm97"+a, " \<_"+a+ " __("+a+ " * o|* ejm97"+a, " /_"+a+ " __("+a+ " * o|* ejm97"+a, " ___"+a+ " *\/ \>"+a+ " o|* ejm97"+a, " *"+a+ " o|_/"+a+ " */ \\ ejm97"+a, " *"+a+ " _o|_"+a+ " * \>\\ ejm97"+a, " _o/*"+a+ " * |"+a+ " / \\ ejm97"+a, " *\\o/*"+a+ " |"+a+ " / \\ ejm97"+a, " c/*"+a+ " \<\\"+a+ " */\\ ejm97"+a, " c__"+a+ " \<\ *"+a+ " */\\ ejm97"+a, " c__"+a+ " /\ *"+a+ " * /\> ejm97"+a, " c/*"+a+ " /(__"+a+ " * / ejm97"+a, " __o/*"+a+ " * (__"+a+ " \< ejm97"+a, " __o_"+a+ " * / *"+a+ " \<\\ ejm97"+a, " *_o_"+a+ " | *"+a+ " \< \\ ejm97"+a, " *_c_*"+a+ " |"+a+ " \>\\ ejm97"+a, " *_c_*"+a+ " |__"+a+ " \> ejm97"+a, " *_c_*"+a+ " __|__"+a+ " ejm97"+a, " "+a+ " *_c_*"+a+ " __)__ ejm97"+a, " "+a+ " *\\c/*"+a+ " __)__ ejm97"+a ); var x=0; function tick() { document.animation.cheerleader.value = " " + a + tl[x]; x++; if (x != max) setTimeout("tick()", 200); else x = 0; } // End --> </script>
</head>
<body onload="tickundefined)">
<center>
<form name='animation'>
	<textarea name='cheerleader' rows='5' cols='20'></textarea><br>
	<input type='button' value="Start Again" onclick ='' "javascript:tickundefined)">
</form>
</center>