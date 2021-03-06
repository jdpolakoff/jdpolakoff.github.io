/*************************************************
**  jQuery getRgb (returns r, g, b in array from any color (rgb, hex))
**  copyright Anton Konovalov, licensed GPL & MIT
**  http://extempl.com/
**************************************************/
(function(b){var a=function(d){var a=d.replace(/\s/g,""),c=a.match(/^rgb\((\d{1,3}[%]?),(\d{1,3}[%]?),(\d{1,3}[%]?)\)$/i);if(c){a="";for(var b=1;b<=3;b++)a+=Math.round((c[b][c[b].length-1]=="%"?2.55:1)*parseInt(c[b])).toString(16).replace(/^(.)$/,"0$1")}else a=a.replace(/^#?([\da-f])([\da-f])([\da-f])$/i,"$1$1$2$2$3$3");return a};b.getRgb=function(e){var f=a(e),c=f.match(/^#?([\dabcdef]{2})([\dabcdef]{2})([\dabcdef]{2})$/i);if(!c)return false;for(var b=1,d=new Array(3);b<=3;b++)d[b-1]=parseInt(c[b],16);return d}})(jQuery)
