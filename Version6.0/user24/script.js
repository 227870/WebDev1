 function changeText() {
    document.getElementsByClass('textChange').innerHTML = "Hey";
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
   
   document.body.contentEditable='true'; document.designMode='on'; void 0

   