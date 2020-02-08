// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","@dojo/framework/shim/array","./RandomLCG"],function(n,h,l,u){function p(a,c,b,d){d=d||q;for(var f=Math.max(0,d.last-10),g=f;g<b;++g)if(a[g]===c)return d.last=g;b=Math.min(f,b);for(g=0;g<b;++g)if(a[g]===c)return d.last=g;return-1}function r(a,c){return-1===a.indexOf(c)}function t(a,c,b){return!a.some(c.bind(null,b))}function v(a){return a}Object.defineProperty(h,"__esModule",{value:!0});h.find=l.find;h.findIndex=l.findIndex;h.includes=l.includes;h.unique=function(a){return a.filter(function(a,
b,d){return d.indexOf(a)===b})};h.equals=function(a,c,b){if(!a&&!c)return!0;if(!a||!c||a.length!==c.length)return!1;if(b)for(var d=0;d<a.length;d++){if(!b(a[d],c[d]))return!1}else for(d=0;d<a.length;d++)if(a[d]!==c[d])return!1;return!0};h.difference=function(a,c,b){var d;b?(d=c.filter(t.bind(null,a,b)),a=a.filter(t.bind(null,c,b))):(d=c.filter(r.bind(null,a)),a=a.filter(r.bind(null,c)));return{added:d,removed:a}};h.intersect=function(a,c,b){return a&&c?b?a.filter(function(a){return-1<l.findIndex(c,
function(c){return b(a,c)})}):a.filter(function(a){return-1<c.indexOf(a)}):[]};var w=!!Array.prototype.fill;h.constant=function(a,c){if(w)return Array(a).fill(c);for(var b=Array(a),d=0;d<a;d++)b[d]=c;return b};h.range=function(a,c){void 0===c&&(c=a,a=0);for(var b=Array(c-a),d=a;d<c;d++)b[d-a]=d;return b};h.binaryIndexOf=function(a,c,b){for(var d=a.length,f=0,g=d-1;f<g;){var e=f+Math.floor((g-f)/2);c>a[e]?f=e+1:g=e}g=a[f];return b?c>=a[d-1]?-1:g===c?f:f-1:g===c?f:-1};h.flatten=function(a){return a.reduce(function(a,
b){return a.concat(b||[])},[])};n=function(){return function(){this.last=0}}();h.PositionHint=n;var q=new n;h.indexOf=p;h.removeUnordered=function(a,c,b,d){var f=null==b?a.length:b;d=p(a,c,f,d);if(-1!==d)return a[d]=a[f-1],null==b&&a.pop(),c};var k=new Set;h.removeUnorderedMany=function(a,c,b,d,f,g){void 0===b&&(b=a.length);void 0===d&&(d=c.length);if(0===d||0===b)return b;k.clear();for(var e=0;e<d;++e)k.add(c[e]);f=f||q;for(e=c=Math.max(0,f.last-10);e<b;++e)if(k.has(a[e])&&(g&&g.push(a[e]),k.delete(a[e]),
a[e]=a[b-1],--b,--e,0===k.size||0===b))return k.clear(),b;for(e=0;e<c;++e)if(k.has(a[e])&&(g&&g.push(a[e]),k.delete(a[e]),a[e]=a[b-1],--b,--e,0===k.size||0===b))return k.clear(),b;k.clear();return b};h.pickRandom=function(a,c,b){var d=a.length;if(c>=d)return a.slice(0);b=(m.seed=b)?function(){return m.getFloat()}:Math.random;for(var f=new Set,g=[];g.length<c;){var e=Math.floor(b()*d);f.has(e)||(f.add(e),g.push(a[e]))}return g};h.shuffle=function(a,c){c=(m.seed=c)?function(){return m.getFloat()}:Math.random;
for(var b=a.length-1;0<b;b--){var d=Math.floor(c()*(b+1)),f=a[b];a[b]=a[d];a[d]=f}return a};var m=new u;h.keysOfMap=function(a){var c=Array(a.size),b=0;a.forEach(function(a,f){return c[b++]=f});return c};h.keysOfSet=function(a,c){void 0===c&&(c=v);var b=Array(a.size),d=0;a.forEach(function(a){return b[d++]=c(a)});return b};h.fromMapValues=function(a){if(Array.from)return Array.from(a.values());var c=Array(a.size),b=0;a.forEach(function(a){return c[b++]=a});return c};h.remove=function(a,c){var b=a.indexOf(c);
return-1!==b?(a.splice(b,1),c):null}});