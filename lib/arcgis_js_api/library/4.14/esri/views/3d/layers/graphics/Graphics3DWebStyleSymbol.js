// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ./Loadable ./symbolComplexity".split(" "),function(l,m,e,f,g,h,k){return function(d){function a(c,a){var b=d.call(this)||this;b.symbol=c;b.convert=a;b.graphics3DSymbol=null;b.referenced=0;return b}e(a,d);a.prototype.getSymbolLayerSize=function(a){return this.graphics3DSymbol?this.graphics3DSymbol.getSymbolLayerSize(a):null};a.prototype.doLoad=function(a){return g(this,
void 0,void 0,function(){var b;return f(this,function(c){switch(c.label){case 0:return[4,this.symbol.fetchSymbol({signal:a})];case 1:return b=c.sent(),b.id=this.symbol.id,this.graphics3DSymbol=this.convert(b),[4,this.graphics3DSymbol.load()];case 2:return c.sent(),[2]}})})};a.prototype.createGraphics3DGraphic=function(a){return this.graphics3DSymbol.createGraphics3DGraphic(a,this)};Object.defineProperty(a.prototype,"complexity",{get:function(){return this.graphics3DSymbol?this.graphics3DSymbol.complexity:
k.emptySymbolComplexity},enumerable:!0,configurable:!0});a.prototype.globalPropertyChanged=function(a,b){return this.graphics3DSymbol.globalPropertyChanged(a,b)};a.prototype.applyRendererDiff=function(a,b){return this.graphics3DSymbol.applyRendererDiff(a,b)};a.prototype.prepareSymbolPatch=function(a){this.graphics3DSymbol&&this.graphics3DSymbol.prepareSymbolPatch(a)};a.prototype.updateGeometry=function(a,b){return this.graphics3DSymbol?this.graphics3DSymbol.updateGeometry(a,b):!1};a.prototype.onRemoveGraphic=
function(){};a.prototype.getFastUpdateStatus=function(){return this.graphics3DSymbol?this.graphics3DSymbol.getFastUpdateStatus():{loading:1,fast:0,slow:0}};a.prototype.destroy=function(){this.graphics3DSymbol&&this.graphics3DSymbol.destroy();this.graphics3DSymbol=void 0;this.abortLoad()};Object.defineProperty(a.prototype,"destroyed",{get:function(){return void 0===this.graphics3DSymbol},enumerable:!0,configurable:!0});return a}(h.Loadable)});