// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/Handles ../../../../core/iteratorUtils ../../../../core/maybe ../../../../core/TimeProfiler ../../../../core/watchUtils ../../../../core/libs/gl-matrix-2/vec2f64 ../../support/debugFlags ../core/shaderLibrary/hud/HUD.glsl ./BoundingInfo ./depthRange ./depthRangeUtils ./FxaaRenderPass ./glUtil3D ./HighlightHelper ./OffscreenRenderingHelper ./RenderContext ./rendererUtils ./RenderPluginManager ./renderStats ./ShadowMap ./SliceHelper ./SmaaRenderPass ./SSAOHelper ./edgeRendering/EdgeView ../lighting/SceneLighting ../materials/HUDMaterial ../materials/internal/waterMaterialUtils ../../../webgl/Profiling".split(" "),
function(q,T,v,w,r,t,x,y,m,n,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S){function u(b,a){return b.isVisible()&&b.isVisibleInPass(a.pass)&&0!==(b.renderOccluded&a.renderOccludedMask)}q=function(){function b(a,c,e,d,b,f,l){var g=this;this._programRep=a;this._materialRep=c;this._rctx=b;this.requestRender=f;this._stage=l;this._materialRenderers=new Map;this._hasHighlights=!1;this._lighting=new P.SceneLighting;this._content=new Map;this._isRendering=!1;this._fallbackDepthStencilTexture=null;this._stats=new J.RenderStatsAggregator;
this._edgeView=null;this._handles=new v;this.renderOptions={antialiasing:"smaa"};this.renderHiddenTransparentEdges=function(){};this._shaderTechniqueRepository=d;this._fxaaPass=new C(this._rctx);this._smaaPass=new M(this._rctx);this._bindParameters={view:null,proj:null,viewInvTransp:null,fovY:0,nearFar:null,viewport:null,shadowMappingEnabled:!1,ssaoEnabled:!1,origin:null,pixelRatio:null,slicePlane:null};this._offscreenRendering=new F(this._programRep,this._rctx);this._sliceHelper=new L;this._shadowMap=
new K(this._rctx);this._ssaoHelper=new N(d,this._rctx,function(){return g.requestRender()});this._highlightHelper=new E(d,this._rctx);this._renderPlugins=new I.RenderPluginManager({rctx:this._rctx,programRep:this._programRep,shaderTechniqueRep:d,textureRep:e,materialRep:this._materialRep,requestRender:this.requestRender});this._renderContext=new G(this._rctx,this._offscreenRendering,this._lighting,this._shadowMap,this._ssaoHelper,this._sliceHelper);this._handles.add(x.init(m,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",
function(a){g.renderHiddenTransparentEdges=a?function(){return g.renderEdges(1)}:function(){};g.requestRender()}))}b.prototype.dispose=function(){this._handles.destroy();this._materialRenderers.forEach(function(a){a.dispose()});this._materialRenderers=null;this._edgeView&&(this._edgeView.destroy(),this._edgeView=null);this._offscreenRendering.enabled=!1;this._fallbackDepthStencilTexture&&(this._fallbackDepthStencilTexture.dispose(),this._fallbackDepthStencilTexture=null);this._shadowMap&&(this._shadowMap.enabled=
!1,this._shadowMap.dispose());this._ssaoHelper&&(this._ssaoHelper.enabled=!1,this._ssaoHelper.dispose());this._highlightHelper&&(this._highlightHelper.enabled=!1);z.tmpIndices.prune();this._content.clear();this._content=null};Object.defineProperty(b.prototype,"updating",{get:function(){return"smaa"===this.renderOptions.antialiasing&&this._smaaPass.isLoadingResources||R.waterTextureRepo.loading()},enumerable:!0,configurable:!0});b.prototype.ensureEdgeView=function(){var a=this;null==this._edgeView&&
(this._edgeView=new O.EdgeView(this._rctx,this._shaderTechniqueRepository,{setNeedsRender:function(){return a.requestRender()}}),this._edgeView.initialize());return this._edgeView};Object.defineProperty(b.prototype,"edgeView",{get:function(){return this._edgeView},enumerable:!0,configurable:!0});b.prototype.setLighting=function(a){this._lighting.set(a)};b.prototype.setRenderParams=function(a){void 0!==a.shadowMapResolution&&!1===this._shadowMap.enabled&&(this._shadowMap.textureResolution=a.shadowMapResolution);
void 0!==a.shadowMap&&(this._shadowMap.enabled=a.shadowMap);void 0!==a.shadowMapMaxCascades&&(this._shadowMap.maxCascades=a.shadowMapMaxCascades);this._highlightHelper.enabled=!0;void 0!==a.ssao&&(this._ssaoHelper.enabled=a.ssao);void 0!==a.ssaoAttenuation&&(this._ssaoHelper.attenuation=a.ssaoAttenuation);void 0!==a.ssaoRadius&&(this._ssaoHelper.radius=a.ssaoRadius);void 0!==a.ssaoFilterRadius&&console.error("The property ssaoFilterRadius is no longer supported as a render parameter.");void 0!==a.ssaoSamples&&
(this._ssaoHelper.samples=a.ssaoSamples);a.background&&(this._offscreenRendering.background=a.background);void 0!==a.antialiasingEnabled&&(this.renderOptions.antialiasing=a.antialiasingEnabled?"smaa":"none");void 0!==a.defaultHighlightOptions&&this._highlightHelper.setDefaultOptions(a.defaultHighlightOptions);void 0!==a.slicePlane&&(this._sliceHelper.plane=a.slicePlane);this.requestRender()};Object.defineProperty(b.prototype,"hasSlicePlane",{get:function(){return!!this._sliceHelper.plane},enumerable:!0,
configurable:!0});b.prototype.getRenderParams=function(){var a={};this._shadowMap&&(a.shadowMap=this._shadowMap.enabled,a.shadowMapResolution=this._shadowMap.textureResolution,a.shadowMapMaxCascades=this._shadowMap.maxCascades);this._ssaoHelper&&this._ssaoHelper.isSupported&&(a.ssao=this._ssaoHelper.enabled,a.ssaoAttenuation=this._ssaoHelper.attenuation,a.ssaoRadius=this._ssaoHelper.radius,a.ssaoFilterRadius=this._ssaoHelper.filterRadius,a.ssaoSamples=this._ssaoHelper.samples);return a};Object.defineProperty(b.prototype,
"renderPlugins",{get:function(){return this._renderPlugins},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"canRender",{get:function(){return!0},enumerable:!0,configurable:!0});b.prototype.getStats=function(){return this._stats.getAggregatedStats()};b.prototype.getFramebufferTexture=function(a){switch(a){case "color":return this._offscreenRendering.colorTexture;case "hudVisibility":return this._offscreenRendering.hudVisibilityTexture;case "shadowMap":return this._shadowMap&&this._shadowMap.getDepthTexture();
case "linearDepth":return this._offscreenRendering.linearDepthTexture;case "normals":return this._offscreenRendering.normalTexture;case "highlight":return this._offscreenRendering.highlightTexture}return null};b.prototype.isEmpty=function(){return 0===this._materialRenderers.size};b.prototype.modify=function(a,c,e,d,b,f){var g=this;void 0===c&&(c=a?a.length:0);void 0===d&&(d=e?e.length:0);void 0===f&&(f=b?b.length:0);this._isRendering&&console.warn("Renderer.modify called while rendering");for(var h=
0;h<d;++h)this._content.delete(e[h].uniqueName);for(h=0;h<c;++h)this._content.set(a[h].uniqueName,a[h]);if(c||d||f){var k=!1;H.splitRenderGeometryChangeSetByMaterial({toAdd:a,numToAdd:c,toRemove:e,numToRemove:d,toUpdate:b,numToUpdate:f}).forEach(function(a,c){var e=g._materialRenderers.get(c);!e&&0<a.toAdd.length&&(e=c.createRenderer(g._rctx,g._materialRep),g._materialRenderers.set(c,e));e&&(e.modify(a),e.isEmpty&&(k=!0))});k&&this._materialRenderers.forEach(function(a,c){a.isEmpty&&(g._materialRenderers.delete(c),
a.dispose())});this._hasHighlights=w.someMap(this._materialRenderers,function(a){return a.hasHighlights});this.requestRender()}};b.prototype.updateLogic=function(a){var c=!1;this._materialRenderers.forEach(function(e){e.updateLogic&&(c=e.updateLogic(a)||c)});return c};b.prototype.render=function(a){this.renderScene(a);if(this.onPostRender)this.onPostRender()};b.prototype.renderScene=function(a){var c=this;this._isRendering=!0;var e=this._rctx,d=this._offscreenRendering,b=a.camera,f=a.fbo,l=this._sliceHelper.plane;
a.disableSlice&&(this._sliceHelper.plane=null);this._renderPlugins.prepareRender(b);this.renderShadowMap(a);d.enabled=!0;d.initializeFrame(b,f);this.renderLinearDepth(a);this.renderNormal(a);this._ssaoHelper.enabled&&this._ssaoHelper.computeSSAO(b,d.linearDepthTexture,d.normalTexture);this._ssaoHelper.bindToAllPrograms(this._programRep);this._ssaoHelper.bindToAllPrograms(this._shaderTechniqueRepository);this._stats.reset();this.updateGlobalUniforms(b.projectionMatrix);this._renderContext.pass=0;this._renderContext.camera=
b;this._renderContext.options=this.renderOptions;d.bindTarget(d.mainColor,d.mainDepth);this._renderPlugins.render(0,this._renderContext);this.renderOpaqueGeometry(this._renderContext);this.renderEdges(2);this.renderHiddenTransparentEdges();this.renderTransparentGeometry(this._renderContext);this.renderEdges(1);var h=b=!1,b=this.renderHUDVisibility(this._renderContext);this.renderInternalSlot(17,this._renderContext);(h=this.renderTransparentTerrain(this._renderContext))&&b&&(d.compositeTransparentTerrainOntoHUDVisibility(),
d.renderToTargets(function(){return c.renderHUD(n.HUD.TransparentRenderStyle.OCCLUDED)},d.mainColor,d.tmpDepth,void 0,!0));h&&d.compositeTransparentTerrainOntoMain();d.renderToTargets(function(){c.renderInternalSlot(9,c._renderContext);c._renderPlugins.render(13,c._renderContext);c._renderPlugins.render(14,c._renderContext)},d.mainColor,d.mainDepth);this.renderOccluded();this.renderAntiAliasing(f);e.bindFramebuffer(f);e.clearSafe(256);this.renderHUD(n.HUD.TransparentRenderStyle.NOTOCCLUDED);this.renderHighlights(a,
f);this._sliceHelper.plane=l;this._isRendering=!1};b.prototype.renderEdges=function(a){var c=this,e=this._edgeView;e&&e.shouldRender()&&this._offscreenRendering.renderAndComposite(function(){return e.render(c._bindParameters,a)},"alpha")};b.prototype.renderShadowMap=function(a){var c=this._shadowMap;if(c.enabled){m.ENABLE_PROFILE_DEPTH_RANGE&&t.begin("depthRange");var e=a.camera,b=a.fbo,g=a.lightDirection,f=this.computeDepthRange(e);m.ENABLE_PROFILE_DEPTH_RANGE&&t.end("depthRange");c.prepare(e,g,
f);g=c.getCascades();for(f=0;f<g.length;++f){var l=g[f];l.camera.setGLViewport(this._rctx);a.camera=l.camera;this.renderGeometryPass(3,a)}a.camera=e;c.finish(b);e.setGLViewport(this._rctx)}c.bindToAllPrograms(this._programRep);c.bindToAllPrograms(this._shaderTechniqueRepository)};b.prototype.renderLinearDepth=function(a){var c=this;this._ssaoHelper.enabled||this._renderPlugins.needsLinearDepth()?this._offscreenRendering.renderToTargets(function(){return c.renderGeometryPass(1,a)},this._offscreenRendering.linearDepth,
this._offscreenRendering.tmpDepth,[0,0,0,0],!0):this._offscreenRendering.disposeTarget(this._offscreenRendering.linearDepth)};b.prototype.renderNormal=function(a){var c=this;this._ssaoHelper.enabled?this._offscreenRendering.renderToTargets(function(){c.renderGeometryPass(2,a)},this._offscreenRendering.normal,this._offscreenRendering.tmpDepth,[0,0,0,0],!0):this._offscreenRendering.disposeTarget(this._offscreenRendering.normal)};b.prototype.computeDepthRange=function(a){var c=B.depthRangeFromScene(a,
this._content,this._stage.getLayers());A.union(c,this.renderPlugins.queryDepthRange(a));c.near=Math.max(a.near,c.near);c.far=Math.min(a.far,c.far);return c};b.prototype.renderGeometryPass=function(a,c){this._isRendering=!0;c=c.camera;this.updateGlobalUniforms(c.projectionMatrix);this._renderContext.pass=a;this._renderContext.camera=c;this.renderGeometryPassScene(this._renderContext);this._isRendering=!1};b.prototype.renderGeometryPassScene=function(a){this.renderGeometry(a);this.renderTransparentTerrain(a)};
b.prototype.renderGeometry=function(a){this.renderOpaqueGeometry(a);this.renderTransparentGeometry(a)};b.prototype.renderOpaqueGeometry=function(a){this._renderPlugins.render(1,a);this._renderPlugins.render(2,a);this._renderPlugins.render(3,a);this.renderInternalSlot(4,a);this._renderPlugins.render(5,a);a.ssaoHelper&&(a.ssaoHelper.bindToAllPrograms(this._programRep),a.ssaoHelper.bindToAllPrograms(this._shaderTechniqueRepository));this._renderPlugins.render(12,this._renderContext)};b.prototype.renderTransparentGeometry=
function(a){this.renderInternalSlot(6,a);this._renderPlugins.render(7,a);a.ssaoHelper&&(a.ssaoHelper.bindToAllPrograms(this._programRep),a.ssaoHelper.bindToAllPrograms(this._shaderTechniqueRepository))};b.prototype.renderTransparentTerrain=function(a){return this._renderPlugins.render(8,a)};b.prototype.renderHUDVisibility=function(a){var c=this,e=Q.shouldRenderVisibilityDuringRenderPass(a.pass),b=a.offscreenRenderingHelper&&a.offscreenRenderingHelper.enabled,g=!1;e&&b&&a.offscreenRenderingHelper.renderHUDVisibility(function(){g=
c.renderInternalSlot(10,a)});return g};b.prototype.renderHUD=function(a){this._bindParameters.renderTransparentlyOccludedHUD=a;this.renderInternalSlot(18,this._renderContext);this.renderInternalSlot(15,this._renderContext);this.renderInternalSlot(16,this._renderContext)};b.prototype.renderHighlights=function(a,c){var b=this,d=this._highlightHelper;if(d&&d.enabled&&(this._hasHighlights||this._renderPlugins.needsHighlight())){var g=null;d.profilingCallback&&(g=S.startMeasurement(this._renderContext.rctx));
var f=this._offscreenRendering;this._renderContext.highlightDepthTexture=this._bindParameters.highlightDepthTexture;f=f.renderToTargets(function(){b.renderGeometryPass(4,a);b._rctx.clearSafe(256);b.renderHUD(n.HUD.TransparentRenderStyle.BOTH)},f.highlight,f.tmpDepth,[0,0,0,0],!0);d.render(a.camera,f,c);null!==g&&d.profilingCallback&&g.stop(function(a){d.profilingCallback&&d.profilingCallback(a)})}else this._offscreenRendering.disposeTarget(this._offscreenRendering.highlight)};b.prototype.renderOccluded=
function(){var a=this;this._materialRenderers.forEach(function(a,c){c&&c.isVisible()&&1!==c.renderOccluded&&k.push(c)});if(0!==k.length){var c=this._offscreenRendering,b=this._renderContext,d=function(e,d){b.renderOccludedMask=d;c.renderToTargets(function(){a.renderInternalSlot(4,b,k);a.renderInternalSlot(6,b,k);a.renderInternalSlot(9,b,k)},c.tmpColor,c.tmpDepth,[0,0,0,0],!0);b.resetRenderOccludedMask();c.compositeOccludedOntoMain(e)};b.pass=0;d(.4,4);d(.5,2);d(1,8);k.length=0}};b.prototype.renderAntiAliasing=
function(a){var c=this;switch(this.renderOptions.antialiasing){case "smaa":this._smaaPass.loadResources(function(){return c.requestRender()});this._smaaPass.enable()?(this._fxaaPass.disable(),this._smaaPass.render({colorTexture:this._offscreenRendering.colorTexture},a)):this._offscreenRendering.composite();break;case "fxaa":this._fxaaPass.enable()?(this._smaaPass.disable(),this._fxaaPass.render({colorTexture:this._offscreenRendering.colorTexture},a)):this._offscreenRendering.composite();break;default:this._offscreenRendering.composite(),
this._fxaaPass.disable(),this._smaaPass.disable()}};b.prototype.renderInternalSlot=function(a,c,b){this._bindParameters.view=c.camera.viewMatrix;this._bindParameters.proj=c.camera.projectionMatrix;this._bindParameters.viewInvTransp=c.camera.viewInverseTransposeMatrix;this._bindParameters.cameraAboveGround=c.camera.aboveGround;this._bindParameters.fovY=c.camera.fovY;p[0]=c.camera.near;p[1]=c.camera.far;var e=this._renderContext.offscreenRenderingHelper;this._bindParameters.nearFar=p;this._bindParameters.viewport=
c.camera.fullViewport;this._bindParameters.shadowMap=c.shadowMap;this._bindParameters.shadowMappingEnabled=!!c.shadowMap&&c.shadowMap.enabled;this._bindParameters.ssaoEnabled=!!c.ssaoHelper&&c.ssaoHelper.enabled;this._bindParameters.pixelRatio=c.camera.pixelRatio;this._bindParameters.slicePlane=c.sliceHelper&&c.sliceHelper.plane;this._bindParameters.hudVisibilityTexture=e?e.hudVisibilityTexture:null;this._bindParameters.highlightDepthTexture=e&&e.depthTexture||this.getFallbackDepthTexture();return this.renderInternalSlotMaterials(a,
c,b)};b.prototype.renderInternalSlotMaterials=function(a,c,b){var e=this,g=0===c.pass?this._stats:null,f=!1;r.isSome(b)?b.forEach(function(b){u(b,c)&&(b=e._materialRenderers.get(b),r.isSome(b)&&(f=b.render(a,c,e._bindParameters)||f))}):this._materialRenderers.forEach(function(b,d){u(d,c)&&(d=g?g.getMaterialRenderStatsObject(b.type):null,f=b.render(a,c,e._bindParameters,d)||f)});return f};b.prototype.updateGlobalUniforms=function(a){for(var c=this._programRep.getProgramsUsingUniform("proj"),b=0;b<
c.length;b++)c[b].setUniformMatrix4fv("proj",a);if(this._lighting)for(c=this._programRep.getProgramsUsingUniform("lightingMainDirection"),b=0;b<c.length;b++)this._lighting.setUniforms(c[b]);c=this._shaderTechniqueRepository.getProgramsUsingUniform("proj");for(b=0;b<c.length;b++)c[b].setUniformMatrix4fv("proj",a);if(this._lighting)for(c=this._shaderTechniqueRepository.getProgramsUsingUniform("lightingMainDirection"),b=0;b<c.length;b++)this._lighting.setUniforms(c[b])};b.prototype.getFallbackDepthTexture=
function(){this._fallbackDepthStencilTexture||(this._fallbackDepthStencilTexture=D.createEmptyDepthTexture(this._rctx));return this._fallbackDepthStencilTexture};b.prototype.getGpuMemoryUsage=function(){return{offscreen:this._offscreenRendering?this._offscreenRendering.getGpuMemoryUsage():0,highlights:this._highlightHelper?this._highlightHelper.getGpuMemoryUsage():0,shadows:this._shadowMap?this._shadowMap.getGpuMemoryUsage():0,ssao:this._ssaoHelper?this._ssaoHelper.getGpuMemoryUsage():0}};return b}();
var p=y.vec2f64.create(),k=[];return q});