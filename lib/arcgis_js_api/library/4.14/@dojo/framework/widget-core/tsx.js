//>>built
(function(b){"object"===typeof module&&"object"===typeof module.exports?(b=b(require,exports),void 0!==b&&(module.exports=b)):"function"===typeof define&&define.amd&&define(["require","exports","tslib","./d"],b)})(function(b,e){function g(d,a){return Array.isArray(a)?a.reduce(g,d):h.__spread(d,[a])}Object.defineProperty(e,"__esModule",{value:!0});var h=b("tslib"),f=b("./d");e.REGISTRY_ITEM="__registry_item";var k=function(){function d(){this.properties={}}d.type=e.REGISTRY_ITEM;return d}();e.FromRegistry=
k;e.fromRegistry=function(d){return a=function(a){function c(){var c=null!==a&&a.apply(this,arguments)||this;c.properties={};c.name=d;return c}h.__extends(c,a);return c}(k),a.type=e.REGISTRY_ITEM,a;var a};e.tsx=function(d,a){void 0===a&&(a={});for(var b=[],c=2;c<arguments.length;c++)b[c-2]=arguments[c];b=b.reduce(g,[]);a=null===a?{}:a;return"string"===typeof d?f.v(d,a,b):"registry"===d.type&&a.__autoRegistryItem?(c=a.__autoRegistryItem,delete a.__autoRegistryItem,f.w(c,a,b)):d.type===e.REGISTRY_ITEM?
(c=new d,f.w(c.name,a,b)):f.w(d,a,b)}});