// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../../core/tsSupport/extendsHelper ../../../../../../core/tsSupport/decorateHelper ../../../../../../core/maybe ../../../../../../core/libs/gl-matrix-2/vec3 ../../../../../../core/libs/gl-matrix-2/vec3f32 ../../../../../../core/libs/gl-matrix-2/vec4 ../../../../../../core/libs/gl-matrix-2/vec4f32 ./ComponentTechnique ./shader/ComponentShader.glsl ../../../core/material/MaterialBase ../../../core/shaderLibrary/DiscardOrAdjustAlpha.glsl".split(" "),function(k,h,l,
c,f,t,u,m,n,p,v,b,w){function x(b){switch(b){case 0:return 0;case 1:return 1;case 2:return 2;case 3:return 7}}Object.defineProperty(h,"__esModule",{value:!0});k=function(e){function a(){var a=e.call(this)||this;a.baseColor=n.vec4f32.fromValues(1,1,1,1);a.usePBR=!1;a.roughnessFactor=1;a.metallicFactor=1;a.reflectanceFactor=.5;a.emissiveFactor=u.vec3f32.fromValues(0,0,0);a.baseColorTexture=null;a.metallicRoughnessTexture=null;a.emissionTexture=null;a.occlusionTexture=null;a.normalTexture=null;a.objectOpacity=
1;a.commonMaterialParameters=new q;a.componentParameters=new r;a.alphaCutoff=w.TEXTURE_ALPHA_CUTOFF_DEFAULT;a.alphaDiscardMode=1;a.transparencyHint=null;a.isIntegratedMesh=!1;a.polygonOffsetEnabled=!1;a._techniqueConfig=new p.ComponentTechniqueConfiguration;return a}l(a,e);a.prototype.dispose=function(a){this._technique&&(a.release(this._technique),this._technique=void 0);this.baseColorTexture=null};Object.defineProperty(a.prototype,"hasTransparency",{get:function(){return 0!==this._computeWhichMaterialPass()},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"hasVisibleComponents",{get:function(){return 0===this.objectOpacity?!1:2!==this.componentParameters.visible},enumerable:!0,configurable:!0});a.prototype.getTechnique=function(a,b,c){var d=this._techniqueConfig;d.vertexColors=c.colors;d.normalMode=this.isIntegratedMesh?2:c.normals?1:3;d.vertexTextureCoordinates=c.textureCoordinates;d.usePBR=this.usePBR;d.hasMetalnessAndRoughnessTexture=f.isSome(this.metallicRoughnessTexture);d.hasEmissionTexture=
f.isSome(this.emissionTexture);d.hasOcclusionTexture=f.isSome(this.occlusionTexture);d.hasNormalTexture=f.isSome(this.normalTexture);this.dirty&&(d.componentData=this.componentParameters.type,d.cullFace=this.commonMaterialParameters.cullFace,d.doubleSidedMode=this.commonMaterialParameters.doubleSided?1:0,d.baseColorTexture=f.isSome(this.baseColorTexture),c=this._computeWhichMaterialPass(),d.blendingEnabled=1===c||2===c,d.alphaDiscardMode=this.alphaDiscardMode,d.stencilWriteEnabled=this.isIntegratedMesh,
d.polygonOffsetEnabled=this.polygonOffsetEnabled,this._setClean());d.slicePlaneEnabled=b.slicePlaneEnabled&&this.commonMaterialParameters.slicePlaneEnabled;1===b.identifier?(d.output=3,d.vertexDiscardMode=0):2===b.identifier?(d.output=4,d.vertexDiscardMode=0):(2===this._computeWhichMaterialPass()?d.vertexDiscardMode=b.transparent?2:1:d.vertexDiscardMode=0,d.output=x(b.subPass),0===b.subPass?(d.receiveAmbientOcclusion=b.ambientOcclusionEnabled,d.receiveShadows=b.shadowsEnabled):(d.receiveAmbientOcclusion=
!1,d.receiveShadows=!1));return this._technique=a.repository.acquireAndReleaseExisting(p.ComponentTechnique,d,this._technique)};a.prototype.submit=function(a,b){var c=b.renderable.geometry,d=b.components,g=b.renderable.drawParameters;b=b.renderable.meta.cameraDepthSquared;var e=d.geometryRanges,d=d.highlightRanges;switch(this._computeWhichMaterialPass()){case 0:a.materialOpaque.submitDraw(this,c,e,g,b);break;case 1:a.materialTransparent.submitDraw(this,c,e,g,b);break;case 2:a.materialOpaque.submitDraw(this,
c,e,g,b);a.materialTransparent.submitDraw(this,c,e,g,b);break;case 3:a.materialIntegratedMesh.submitDraw(this,c,e,g,b)}f.isSome(a.shadowMap)&&2!==this.componentParameters.castShadows&&a.shadowMap.submitDraw(this,c,e,g,b);f.isSome(a.highlight)&&f.isSome(d)&&a.highlight.submitDraw(this,c,d,g,b)};Object.defineProperty(a.prototype,"attributeLocations",{get:function(){return v.attributeLocations},enumerable:!0,configurable:!0});a.prototype._computeWhichMaterialPass=function(){return this.isIntegratedMesh?
3:0===this.componentParameters.transparent?1:1===this.componentParameters.transparent?2:1===this.objectOpacity&&0===this.componentParameters.opaqueOverride?0:f.isSome(this.transparencyHint)?this.transparencyHint?1:0:1>this.baseColor[3]||1>this.objectOpacity||f.isSome(this.baseColorTexture)?1:2===this.componentParameters.transparent?0:2};c([b.parameter({vectorOps:m.vec4})],a.prototype,"baseColor",void 0);c([b.parameter()],a.prototype,"usePBR",void 0);c([b.parameter()],a.prototype,"roughnessFactor",
void 0);c([b.parameter()],a.prototype,"metallicFactor",void 0);c([b.parameter()],a.prototype,"reflectanceFactor",void 0);c([b.parameter({vectorOps:t.vec3})],a.prototype,"emissiveFactor",void 0);c([b.parameter({dispose:!0})],a.prototype,"baseColorTexture",void 0);c([b.parameter({dispose:!0})],a.prototype,"metallicRoughnessTexture",void 0);c([b.parameter({dispose:!0})],a.prototype,"emissionTexture",void 0);c([b.parameter({dispose:!0})],a.prototype,"occlusionTexture",void 0);c([b.parameter({dispose:!0})],
a.prototype,"normalTexture",void 0);c([b.parameter()],a.prototype,"objectOpacity",void 0);c([b.parameterBlock()],a.prototype,"commonMaterialParameters",void 0);c([b.parameterBlock()],a.prototype,"componentParameters",void 0);c([b.parameter()],a.prototype,"alphaCutoff",void 0);c([b.parameter()],a.prototype,"alphaDiscardMode",void 0);c([b.parameter()],a.prototype,"transparencyHint",void 0);c([b.parameter()],a.prototype,"isIntegratedMesh",void 0);c([b.parameter()],a.prototype,"polygonOffsetEnabled",
void 0);return a}(b.MaterialBase);h.ComponentMaterial=k;var q=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;a.doubleSided=!1;a.cullFace=2;a.slicePlaneEnabled=!0;return a}l(a,e);c([b.parameter()],a.prototype,"doubleSided",void 0);c([b.parameter()],a.prototype,"cullFace",void 0);c([b.parameter()],a.prototype,"slicePlaneEnabled",void 0);return a}(b.MaterialParameterBlock);h.CommonMaterialParameters=q;var r=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;
a.externalColor=n.vec4f32.fromValues(1,1,1,1);a.externalColorMixMode=1;a.castShadows=0;return a}l(a,e);Object.defineProperty(a.prototype,"transparent",{get:function(){return 1>this.externalColor[3]?0:2},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"opaqueOverride",{get:function(){return 3===this.externalColorMixMode&&1===this.externalColor[3]?0:2},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"visible",{get:function(){return 0<this.externalColor[3]?0:2},enumerable:!0,
configurable:!0});Object.defineProperty(a.prototype,"type",{get:function(){return 0},enumerable:!0,configurable:!0});c([b.parameter({vectorOps:m.vec4})],a.prototype,"externalColor",void 0);c([b.parameter()],a.prototype,"externalColorMixMode",void 0);c([b.parameter()],a.prototype,"castShadows",void 0);return a}(b.MaterialParameterBlock);h.ComponentParametersUniform=r;k=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;a.texture=null;a.transparent=2;a.opaqueOverride=2;a.castShadows=
2;a.visible=2;return a}l(a,e);Object.defineProperty(a.prototype,"type",{get:function(){return 1},enumerable:!0,configurable:!0});c([b.parameter()],a.prototype,"texture",void 0);c([b.parameter()],a.prototype,"transparent",void 0);c([b.parameter()],a.prototype,"opaqueOverride",void 0);c([b.parameter()],a.prototype,"castShadows",void 0);c([b.parameter()],a.prototype,"visible",void 0);return a}(b.MaterialParameterBlock);h.ComponentParametersVarying=k});