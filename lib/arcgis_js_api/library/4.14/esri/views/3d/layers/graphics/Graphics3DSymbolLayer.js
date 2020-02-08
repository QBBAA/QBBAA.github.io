// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../Color ../../../../core/arrayUtils ../../../../core/compilerUtils ../../../../core/Logger ../../../../core/mathUtils ../../../../core/maybe ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../core/libs/gl-matrix-2/vec4f64 ./elevationAlignmentUtils ./ElevationContext ./featureExpressionInfoUtils ./graphicUtils ./Loadable ./symbolComplexity".split(" "),
function(l,g,v,G,H,w,x,y,z,r,h,A,B,m,t,n,p,C,D){function k(c,b){c=null!=c?b.attributes[c]:0;return null!=c&&isFinite(c)?c:0}Object.defineProperty(g,"__esModule",{value:!0});var c=new t,q=z.getLogger("esri.views.3d.layers.graphics.Graphics3DSymbolLayer");l=function(g){function b(a,d,f,b){var e=g.call(this)||this;e._elevationInfoOverride=null;e.complexity=null;e.logger=q;e._elevationOptions={supportsOffsetAdjustment:!1,supportsOnTheGround:!0};e.symbol=a;e.symbolLayer=d;e._context=f;e._renderPriority=
b.renderPriority;e._renderPriorityDelta=b.renderPriorityStep;e._elevationContext=new t;e._material=null;e.complexity=e.computeComplexity();e._updateDrivenProperties(b.ignoreDrivers);e._updateElevationContext();return e}v(b,g);b.prototype.getCachedSize=function(){return null};Object.defineProperty(b.prototype,"needsDrivenTransparentPass",{get:function(){return this._drivenProperties.opacity&&!this._drivenProperties.opacityAlwaysOpaque},enumerable:!0,configurable:!0});b.prototype._logGeometryCreationWarnings=
function(a,d,f,b){var e="polygons"in a?a.polygons:null;b+=" geometry failed to be created";var c=null;a.projectionSuccess?!d.length||1===d.length&&!d[0].length?c=b+" (no "+f+" were defined)":Array.isArray(d)&&Array.isArray(d[0])?d.some(function(a){return 1===a.length})?c=b+" ("+f+" should contain at least 2 vertices)":e&&0===e.length&&"rings"===f&&(c=b+" (filled "+f+" should use clockwise winding - try reversing the order of vertices)"):c=b+" ("+f+" should be defined as a 2D array)":c=b+" (failed to project geometry to view spatial reference)";
c&&q.warnOncePerTick(c)};b.prototype._validateGeometryType=function(a,d,b){if(x.includes(d,a.type))return!0;this.logger.warn("unsupported geometry type for "+b+(" symbol: "+a.type));return!1};b.prototype._validateGeometry=function(a){return"point"!==a.type||r.isFinite(a.x)&&r.isFinite(a.y)?!0:(q.warn("point coordinate is not a valid number, graphic skipped"),!1)};b.prototype._defaultElevationInfoNoZ=function(){return E};b.prototype._defaultElevationInfoZ=function(){return F};b.prototype._updateElevationContext=
function(){this._elevationContext.setDefaults();h.isSome(this._elevationInfoOverride)?this._elevationContext.mixinApi(this._elevationInfoOverride):this._context.layer.elevationInfo&&(this._elevationContext.mixinApi(this._context.layer.elevationInfo),this._elevationContext.featureExpressionInfoContext=this._context.featureExpressionInfoContext)};b.prototype.getDefaultElevationInfo=function(a){return a.hasZ?this._defaultElevationInfoZ():this._defaultElevationInfoNoZ()};b.prototype.getGeometryElevationMode=
function(a,d){void 0===d&&(d=this.getDefaultElevationInfo(a));return this._elevationContext.mode||d.mode};b.prototype.setElevationInfoOverride=function(a){this._elevationInfoOverride=a;this._updateElevationContext()};b.prototype.getGraphicElevationContext=function(a){var d=h.expect(a.geometry),b=this.getDefaultElevationInfo(d);c.setUnit(null!=this._elevationContext.unit?this._elevationContext.unit:b.unit);c.mode=this.getGeometryElevationMode(d,b);c.setOffsetMeters(null!=this._elevationContext.meterUnitOffset?
this._elevationContext.meterUnitOffset:b.offset);c.featureExpressionInfoContext=this._elevationContext.featureExpressionInfoContext;this._elevationOptions.supportsOnTheGround||"on-the-ground"!==c.mode||(c.mode="relative-to-ground",c.setOffsetMeters(0),c.featureExpressionInfoContext=n.zeroContext);if(d=c.featureExpressionInfoContext&&c.featureExpressionInfoContext.arcade)a=n.createFeature(d.modules,a,this._context.layer),n.setContextFeature(c.featureExpressionInfoContext,a);return c};b.prototype.prepareSymbolLayerPatch=
function(a){};b.prototype.updateGeometry=function(a,d){return!1};b.prototype.onRemoveGraphic=function(a){};b.prototype._updateDrivenProperties=function(a){var d={color:!1,opacity:!1,opacityAlwaysOpaque:!0,size:!1};a||(a=this._context.renderer)&&"visualVariables"in a&&a.visualVariables&&a.visualVariables.forEach(function(a){switch(a.type){case "color":d.color=!0;if(a.stops)for(var b=0;b<a.stops.length;b++){var c=a.stops[b].color;c&&(d.opacity=!0,1>c.a&&(d.opacityAlwaysOpaque=!1))}break;case "opacity":d.opacity=
!0;d.opacityAlwaysOpaque=!1;break;case "size":d.size=!0}});this._drivenProperties=d};b.prototype._getLayerOpacity=function(){if(this._context.layerView&&"fullOpacity"in this._context.layerView)return this._context.layerView.fullOpacity;var a=this._context.layer.opacity;return null==a?1:a};b.prototype._getCombinedOpacity=function(a,d){void 0===d&&(d=u);var b;b=1*this._getLayerOpacity();if(this._drivenProperties.opacity)return b;h.isSome(a)?b*=a.a:d.hasIntrinsicColor||(b=0);return b};b.prototype._getCombinedOpacityAndColor=
function(a,b){void 0===b&&(b=u);b=this._getCombinedOpacity(a,b);if(this._drivenProperties.color)return p.mixinColorAndOpacity(null,b);a=h.isSome(a)?w.toUnitRGB(a):A.vec3f64.ONES;return p.mixinColorAndOpacity(a,b)};b.prototype._getVertexOpacityAndColor=function(a,b,c){a=p.mixinColorAndOpacity(this._drivenProperties.color?a.color:null,this._drivenProperties.opacity?a.opacity:null);c&&(a[0]*=c,a[1]*=c,a[2]*=c,a[3]*=c);return b?new b(a):a};b.prototype._getIdHint=function(a){void 0===a&&(a="");return this._context.layer.id+
"_symbol"+a};b.prototype.isFastUpdatesEnabled=function(){return this._fastUpdates&&this._fastUpdates.enabled};b.prototype.computeComplexity=function(){return D.defaultSymbolLayerComplexity(this.symbol,this.symbolLayer)};b.prototype.destroy=function(){this.abortLoad()};b.prototype.globalPropertyChanged=function(a,b,c){switch(a){case "opacity":return this.layerOpacityChanged(b,c);case "elevationInfo":return a=this._elevationContext.mode,this._updateElevationContext(),this.layerElevationInfoChanged(b,
c,a)===m.SymbolUpdateType.RECREATE?!1:!0;case "slicePlaneEnabled":return this.slicePlaneEnabledChanged(b,c);case "physicalBasedRenderingEnabled":return this.physicalBasedRenderingChanged();case "pixelRatio":return this.pixelRatioChanged();default:return y.neverReachedSilent(a),!1}};b.prototype.updateGraphics3DGraphicElevationInfo=function(a,b,c){var d=this,e=m.SymbolUpdateType.UPDATE;a.forEach(function(a){var f=b(a);h.isSome(f)?(a=d.getGraphicElevationContext(a.graphic),f.needsElevationUpdates=c(a.mode),
f.elevationContext.set(a)):e=m.SymbolUpdateType.RECREATE});return e};b.prototype.applyRendererDiff=function(a,b){return!1};b.prototype.getFastUpdateAttrValues=function(a){if(!this._fastUpdates.enabled)return null;var b=this._fastUpdates.visualVariables,c=b.size?k(b.size.field,a):0,g=b.color?k(b.color.field,a):0;a=b.opacity?k(b.opacity.field,a):0;return B.vec4f64.fromValues(c,g,a,0)};return b}(C.Loadable);g.Graphics3DSymbolLayer=l;g.getAttributeValue=k;var E={mode:"on-the-ground",offset:0,unit:"meters"},
F={mode:"absolute-height",offset:0,unit:"meters"},u={hasIntrinsicColor:!1};g.default=l});