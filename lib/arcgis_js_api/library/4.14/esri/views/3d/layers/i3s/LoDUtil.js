// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/libs/gl-matrix-2/vec3"],function(r,l,k){function p(c,d,e){for(;0<c;){var a=d.indexOf(c);if(0<=a)return a;c=e.getParentId(c)}return d.indexOf(c)}function q(c,d){for(var e=[c.remove[0]],a=[];1===e.length;)for(var b=e.pop(),h=a.length=0;h<c.load.length;h++){for(var g=c.load[h],f=d.getParentId(g);f!==b;)g=f,f=d.getParentId(g);f=e.indexOf(g);0>f&&(f=e.length,e.push(g),a.push([]));a[f].push(c.load[h])}d=[];d.push({remove:c.remove,load:e});for(h=0;h<e.length;h++)1<
a[h].length?d.push({remove:[e[h]],load:a[h]}):e[h]=a[h][0];return d}Object.defineProperty(l,"__esModule",{value:!0});l.nodeDiff=function(c,d,e){for(var a=0;a<d.length;a++)m[a]=!1,g[a]=null;for(a=0;a<c.length;a++)n[a]=!1,f[a]=null;for(a=0;a<d.length;a++){var b=p(d[a],c,e);0<=b&&(m[a]=!0,null!=f[b]?f[b].push(d[a]):f[b]=[d[a]])}for(a=0;a<c.length;a++)b=p(c[a],d,e),0<=b&&(n[a]=!0,null!=g[b]?g[b].push(c[a]):g[b]=[c[a]]);e=[];for(a=0;a<c.length;a++)null!=f[a]||n[a]||e.push({load:[],remove:[c[a]]});for(a=
0;a<d.length;a++)null!=g[a]||m[a]||e.push({load:[d[a]],remove:[]});for(a=0;a<d.length;a++)null!=g[a]&&(1<g[a].length||g[a][0]!==d[a])&&e.push({load:[d[a]],remove:g[a]});for(a=0;a<c.length;a++)null!=f[a]&&(1<f[a].length||f[a][0]!==c[a])&&e.push({load:f[a],remove:[c[a]]});return e};var n=[!1],f=[null],m=[!1],g=[null];l.sortFrontToBack=function(c,d,e){return c.sort(function(a,b){if(0===a.load.length&&0===b.load.length)return 0;if(0===a.load.length)return-1;if(0===b.load.length)return 1;if(0===a.remove.length&&
0===b.remove.length)return a=e.getRenderCenter(a.load[0]),b=e.getRenderCenter(b.load[0]),k.vec3.dot(a,d)-k.vec3.dot(b,d);if(0===a.remove.length)return-1;if(0===b.remove.length)return 1;if(1===a.load.length&&1===b.load.length)return a=e.getRenderCenter(a.load[0]),b=e.getRenderCenter(b.load[0]),k.vec3.dot(a,d)-k.vec3.dot(b,d);if(1===a.load.length)return-1;if(1===b.load.length)return 1;a=e.getRenderCenter(a.remove[0]);b=e.getRenderCenter(b.remove[0]);return k.vec3.dot(a,d)-k.vec3.dot(b,d)})};l.splitWorkEntries=
function(c,d,e){for(var a=0;a<c.length;++a){var b=c[a];if(b.load.length>d&&1===b.remove.length){b=q(b,e);c[a]=b[0];for(var f=1;f<b.length;f++)c.push(b[f])}}};l.splitWorkEntry=q});