// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","./object","@dojo/framework/shim/string"],function(g,a,e,c){Object.defineProperty(a,"__esModule",{value:!0});var f=/\{([^\}]+)\}/g;a.endsWith=c.endsWith;a.startsWith=c.startsWith;a.padStart=c.padStart;a.replace=function(a,b){return a.replace(f,"object"===typeof b?function(a,d){return e.getDeepValue(d,b)}:function(a,d){return b(d)})};a.escapeRegExpString=function(a){return a.replace(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g,function(a){return"\\"+a})};a.numericHash=function(a){for(var b=
0,c=0;c<a.length;c++)b=(b<<5)-b+a.charCodeAt(c),b|=0;return b}});