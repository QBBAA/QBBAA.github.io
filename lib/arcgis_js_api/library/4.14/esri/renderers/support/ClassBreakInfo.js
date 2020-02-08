// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../symbols ../../core/JSONSupport ../../core/accessorSupport/decorators ../../symbols/support/jsonUtils".split(" "),function(d,b,h,e,g,k,c,f){Object.defineProperty(b,"__esModule",{value:!0});d=function(d){function a(a){a=d.call(this,a)||this;a.description=null;a.label=null;a.minValue=null;a.maxValue=0;a.symbol=null;return a}h(a,d);b=a;a.prototype.clone=function(){return new b({description:this.description,
label:this.label,minValue:this.minValue,maxValue:this.maxValue,symbol:this.symbol?this.symbol.clone():null})};a.prototype.getMeshHash=function(){var a=JSON.stringify(this.symbol);return this.minValue+"."+this.maxValue+"."+a};var b;e([c.property({type:String,json:{write:!0}})],a.prototype,"description",void 0);e([c.property({type:String,json:{write:!0}})],a.prototype,"label",void 0);e([c.property({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],a.prototype,"minValue",
void 0);e([c.property({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],a.prototype,"maxValue",void 0);e([c.property({types:g.symbolTypesRenderer,json:{origins:{"web-scene":{types:g.symbolTypesRenderer3D,read:f.read,write:f.writeTarget}},read:f.read,write:f.writeTarget}})],a.prototype,"symbol",void 0);return a=b=e([c.subclass("esri.renderers.support.ClassBreakInfo")],a)}(c.declared(k.JSONSupport));b.ClassBreakInfo=d;b.default=d});