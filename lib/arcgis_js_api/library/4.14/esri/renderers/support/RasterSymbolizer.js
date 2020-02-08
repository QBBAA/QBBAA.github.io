// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../rasterRenderers ../../core/JSONSupport ../../core/Logger ../../core/accessorSupport/decorators ../../layers/support/RasterInfo ../../layers/support/rasterFunctions/pixelUtils ../support/colorRampUtils".split(" "),function(C,D,t,w,p,E,F,u,x,y,n,z,m,A){var B=y.getLogger("esri.renderers.support.RasterSymbolizer");
return function(v){function e(a){return v.call(this,a)||this}w(e,v);e.prototype.readRenderer=function(a,b,c){return u.read(a,c)};e.prototype.bind=function(){this.lookup={};if(!this.renderer)return!1;var a;switch(this.renderer.type){case "unique-value":a=this._updateUVRenderer(this.renderer);break;case "raster-colormap":a=this._updateColormapRenderer(this.renderer);break;case "raster-stretch":a=this._updateStretchRenderer(this.renderer);break;case "class-breaks":a=this._updateClassBreaksRenderer(this.renderer)}return a};
e.prototype.symbolize=function(a){if(!(a&&a.pixels&&0<a.pixels.length&&0!==a.validPixelCount))return a;try{3<a.pixels.length&&(a=m.extractBands(a,[0,1,2]));var b=void 0;switch(this.renderer.type){case "unique-value":case "raster-colormap":b=this._symbolize_colormap(a);break;case "class-breaks":b=this._symbolize_classBreaks(a);break;case "raster-stretch":b=this._symbolize_stretch(a)}return b}catch(c){return B.error("symbolize",c.message),a}};e.prototype.generateWebGLParameters=function(a,b){void 0===
b&&(b=!1);if(b)return{bandCount:3,outMin:0,outMax:1,minCutOff:[0,0,0],maxCutOff:[255,255,255],factor:[1/255,1/255,1/255],useGamma:!1,gamma:[1,1,1],gammaCorrection:[1,1,1],colormap:null,colormapOffset:null,type:"stretch"};if(-1<["unique-value","raster-colormap","class-breaks"].indexOf(this.renderer.type))return b=this.lookup.lut,{colormap:b.indexedColormap,colormapOffset:b.colormapOffset,type:"lut"};var c=this.renderer;b=c.gamma;var g=c.useGamma,d=this.getStretchCutoff(c,a),c=d.minCutOff,h=d.maxCutOff,
e=d.outMin,d=d.outMax;a&&a.pixels&&2===a.pixels.length&&(a=a.clone(),a.statistics=[a.statistics[0]],a.pixels=[a.pixels[0]]);a=Math.min(3,a&&a.getPlaneCount()||this.rasterInfo.bandCount);var q=new Float32Array(a),f;for(f=0;f<a;f++)q[f]=(d-e)/(h[f]-c[f])/255;var r=new Float32Array(a);if(g)for(f=0;f<a;f++)r[f]=1<b[f]?2<b[f]?6.5+Math.pow(b[f]-2,2.5):6.5+100*Math.pow(2-b[f],4):1;return{bandCount:a,outMin:e/255,outMax:d/255,minCutOff:c,maxCutOff:h,factor:q,useGamma:g,gamma:g?b:[1,1,1],gammaCorrection:g?
r:[1,1,1],colormap:null,colormapOffset:null,type:"stretch"}};e.prototype._isLUTChanged=function(a){if(!this.lookup)return!0;if("raster-stretch"===this.renderer.type){var b=this.renderer.colorRamp;if(a)return JSON.stringify(b.toJSON())!==JSON.stringify(this.lookup.rendererJson.colorRamp);a=t({},this.renderer.toJSON());b=t({},this.lookup.rendererJson);a.colorRamp=null;b.colorRamp=null}return JSON.stringify(this.renderer.toJSON())!==JSON.stringify(this.lookup.rendererJson)};e.prototype._symbolize_colormap=
function(a){return this._isLUTChanged()&&!this.bind()?a:m.colorize(a,this.lookup.lut)};e.prototype._symbolize_classBreaks=function(a){var b=-1<["u8","u16","s8","s16"].indexOf(this.rasterInfo.pixelType);return this._isLUTChanged()&&!this.bind()?a:b?m.colorize(a,this.lookup.lut):m.remapColor(a,this.lookup.lut)};e.prototype._symbolize_stretch=function(a){var b=this.rasterInfo.pixelType,c=this.renderer,g=-1<["u8","u16","s8","s16"].indexOf(b),d=c.gamma,e=c.useGamma;if(g){if(c.dynamicRangeAdjustment)g=
this.getStretchCutoff(c,a),b=m.createStretchLUT(t({pixelType:b},g,{gamma:e?d:null}));else{if(this._isLUTChanged()&&(d=this.bind(),!d))return a;b=this.lookup?this.lookup.lut:null}if(!b)return a;b=m.lookupPixels(a,b)}else g=this.getStretchCutoff(c,a),b=m.stretch(a,t({},g,{gamma:e?d:null}));if(c.colorRamp){if(this._isLUTChanged(!0)&&(d=this.bind(),!d))return a;b=m.colorize(b,this.lookup.colorRampLut)}return b};e.prototype._updateUVRenderer=function(a){var b=this.rasterInfo,c=b.bandCount,g=b.attributeTable,
d=b.statistics,b=-1<["u8","s8"].indexOf(b.pixelType)&&d&&null!=d[0].min&&null!=d[0].max;if(1!==c||!g&&!b)return!1;var e=a.field;if(!e)return!1;var k=[];if(g){var q=g.fields.filter(function(a){return"value"===a.name.toLowerCase()})[0];if(!q)return!1;g.features.forEach(function(c){var b=a.uniqueValueInfos.filter(function(a){return String(a.value)===String(c.attributes[e])})[0];(b=b&&b.symbol&&b.symbol.color)&&k.push([c.attributes[q.name],b.r,b.g,b.b,1<b.a?b.a:Math.round(255*b.a)])})}else{if("Value"!==
e.toLowerCase())return!1;a.uniqueValueInfos.forEach(function(a){var b=a&&a.symbol&&a.symbol.color;b&&k.push([parseInt(a.value,10),b.r,b.g,b.b,1<b.a?b.a:Math.round(255*b.a)])})}if(0===k.length)return!1;c=m.createColormapLUT({colormap:k});this.lookup={rendererJson:a.toJSON(),lut:c};return this.canRenderInWebGL=!0};e.prototype._updateColormapRenderer=function(a){var b=a.extractColormap();if(!b||0===b.length)return!1;b=m.createColormapLUT({colormap:b});this.lookup={rendererJson:a.toJSON(),lut:b};return this.canRenderInWebGL=
!0};e.prototype._updateClassBreaksRenderer=function(a){var b=-1<["u8","u16","s8","s16"].indexOf(this.rasterInfo.pixelType),c=a.classBreakInfos;if(!c||0===c.length)return!1;var e=c.sort(function(a,b){return a.minValue-b.minValue}),c=e[e.length-1];if(!b)return b=e.map(function(a){return{value:a.minValue,mappedColor:[a.symbol.color.r,a.symbol.color.g,a.symbol.color.b,1<a.symbol.color.a?a.symbol.color.a:Math.round(255*a.symbol.color.a)]}}),b.push({value:c.maxValue,mappedColor:[c.symbol.color.g,c.symbol.color.b,
1<c.symbol.color.a?c.symbol.color.a:Math.round(255*c.symbol.color.a)]}),this.lookup={rendererJson:a.toJSON(),lut:b},this.canRenderInWebGL=!1,!0;var d=[],h,k=0;e.forEach(function(a){h=Math.ceil(a.minValue);k=Math.floor(a.maxValue);for(var b=h;b<k;b++)d.push([b,a.symbol.color.r,a.symbol.color.g,a.symbol.color.b,1<a.symbol.color.a?a.symbol.color.a:Math.round(255*a.symbol.color.a)])});d.push([c.maxValue,c.symbol.color.r,c.symbol.color.g,c.symbol.color.b,1<c.symbol.color.a?c.symbol.color.a:Math.round(255*
c.symbol.color.a)]);b=m.createColormapLUT({colormap:d,fillUnspecified:!1});this.lookup={rendererJson:a.toJSON(),lut:b};return this.canRenderInWebGL=!0};e.prototype._updateStretchRenderer=function(a){if(!(a.statistics||this.rasterInfo.statistics||a.dynamicRangeAdjustment))return!1;var b=a.histograms||this.rasterInfo.histograms;if(!a.dynamicRangeAdjustment&&"percent-clip"===a.stretchType&&!b)return!1;var c=a.gamma,e=a.useGamma,b=a.colorRamp,d=this.rasterInfo.pixelType;if(!a.dynamicRangeAdjustment&&
-1<["u8","u16","s8","s16"].indexOf(d)){var h=this.getStretchCutoff(a),c=m.createStretchLUT(t({pixelType:d},h,{gamma:e?c:null}));this.lookup={rendererJson:a.toJSON(),lut:c}}b&&(b=A.convertColorRampToColormap(b,256),this.lookup.colorRampLut=m.createColormapLUT({colormap:b}),this.lookup.rendererJson=a.toJSON());return this.canRenderInWebGL=!0};e.prototype.getStretchCutoff=function(a,b){var c,e,d=a.stretchType;a.dynamicRangeAdjustment?"min-max"===d&&b.statistics?c=b.statistics.map(function(a){return[a.minValue,
a.maxValue,0,0]}):(e=m.estimateStatisticsHistograms(b),c=e.statistics,e=e.histograms):(c=a.statistics,e=a.histograms||this.rasterInfo.histograms);b=c||e?(c||e).length:this.rasterInfo.bandCount;var h=[],k=[],q,f,r,n,p,l;c[0]instanceof Array||(c=c.map(function(a){return[a.min,a.max,a.avg,a.stddev]}));switch(d){case "min-max":for(d=0;d<b;d++)h[d]=c[d][0],k[d]=c[d][1];break;case "standard-deviation":for(d=0;d<b;d++)h[d]=c[d][2]-a.numberOfStandardDeviations*c[d][3],k[d]=c[d][2]+a.numberOfStandardDeviations*
c[d][3],h[d]<c[d][0]&&(h[d]=c[d][0]),k[d]>c[d][1]&&(k[d]=c[d][1]);break;case "percent-clip":for(d=0;d<b;d++){c=e[d];n=new Uint32Array(c.size);r=c.counts;f=0;q=(c.max-c.min)/c.size;p=-.5===c.min&&1===q?.5:0;for(l=0;l<c.size;l++)f+=r[l],n[l]=f;r=a.minPercent*f/100;for(l=0;l<c.size;l++)if(n[l]>r){h[d]=c.min+q*(l+p);break}r=(1-a.maxPercent/100)*f;for(l=c.size-2;0<=l;l--)if(n[l]<r){k[d]=c.min+q*(l+2-p);break}}break;default:for(d=0;d<b;d++)h[d]=c[d][0],k[d]=c[d][1]}return{minCutOff:h,maxCutOff:k,outMax:a.outputMax||
255,outMin:a.outputMin||0}};p([n.property({types:u.rasterRendererTypes,json:{write:!0}})],e.prototype,"renderer",void 0);p([n.reader("renderer")],e.prototype,"readRenderer",null);p([n.property({type:z,json:{write:!0}})],e.prototype,"rasterInfo",void 0);p([n.property({json:{write:!0}})],e.prototype,"lookup",void 0);p([n.property({})],e.prototype,"canRenderInWebGL",void 0);return e=p([n.subclass("esri.renderers.support.RasterSymbolizer")],e)}(n.declared(x.JSONSupport))});