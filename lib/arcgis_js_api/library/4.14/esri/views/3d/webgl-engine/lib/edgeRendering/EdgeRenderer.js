// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/assignHelper ../../../../../core/tsSupport/extendsHelper ../../../../../core/mathUtils ../../../../../core/PooledArray ../../../../../core/libs/gl-matrix-2/mat3 ../../../../../core/libs/gl-matrix-2/mat3f32 ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../core/libs/gl-matrix-2/vec3f64 ../../collections/Component/Material/ComponentTechnique ../../core/shaderLibrary/Slice.glsl ../../core/shaderLibrary/attributes/VertexPosition.glsl ../../core/shaderLibrary/util/DoublePrecision.glsl ../../core/util/TwoVectorPosition ./EdgeShaderTechnique".split(" "),
function(p,g,t,F,u,h,k,v,m,w,x,q,y,z,A,n){Object.defineProperty(g,"__esModule",{value:!0});g.LINE_WIDTH_FRACTION_FACTOR=8;g.EXTENSION_LENGTH_OFFSET=128;var B={type:"uber",slicePlaneEnabled:!1,sliceHighlightDisabled:!1,strokesTexture:null,legacy:!0},C=function(){function c(){this._value=0}Object.defineProperty(c.prototype,"value",{get:function(){return this._value},enumerable:!0,configurable:!0});c.prototype.increment=function(){this._value++};c.prototype.decrement=function(){this._value--};return c}(),
D={solid:0,sketch:1,uber:2};p=function(){function c(b,a,d){var l,f,e;this.rctx=b;this.shaderTechniqueRepository=a;this.config=new n.EdgeShaderTechnique.Configuration;this.technique=null;this.refCount=new C;this.renderables=new Set;this.sortedRenderables=(l={},l[1]=(f={},f[1]=new h,f[2]=new h,f),l[2]=(e={},e[1]=new h,e[2]=new h,e),l);this.renderablesDirty=!1;this.settings=t({},B,d);this.key=c.getKey(this.settings.type,this.settings.slicePlaneEnabled,this.settings.legacy);this.writerSettings={variants:this.settings.strokesTexture.variants};
this.config.legacy=this.settings.legacy;this.config.mode=D[this.settings.type];this.config.silhouette=!1;this.config.antialiasing=!!this.rctx.capabilities.blendMinMax;this.config.slicePlaneEnabled=this.settings.slicePlaneEnabled;this.config.doublePrecisionRequiresObfuscation=z.doublePrecisionRequiresObfuscation(b)}c.prototype.dispose=function(){this.technique&&(this.shaderTechniqueRepository.release(this.technique),this.technique=null)};c.prototype.addRenderable=function(b){this.renderables.add(b);
this.renderablesDirty=!0};c.prototype.removeRenderable=function(b){this.renderables.delete(b);this.renderablesDirty=!0};c.prototype.setRenderablesDirty=function(){this.renderablesDirty=!0};c.prototype.forEachRenderable=function(b,a){this.renderablesDirty&&this.sortRenderables();this.sortedRenderables[a][1].forEach(b);this.sortedRenderables[a][2].forEach(b)};c.prototype.bindRegularEdges=function(b,a){this.config.silhouette=!1;this.technique=this.shaderTechniqueRepository.acquireAndReleaseExisting(n.EdgeShaderTechnique,
this.config,this.technique);this.technique.bindPass(this.rctx,{renderParameters:b,edgeRenderParameters:a});this.rctx.setPipelineState(this.technique.pipeline);this.rctx.bindProgram(this.technique.program)};c.prototype.bindSilhouetteEdges=function(b,a){this.config.silhouette=!0;this.technique=this.shaderTechniqueRepository.acquireAndReleaseExisting(n.EdgeShaderTechnique,this.config,this.technique);this.technique.bindPass(this.rctx,{renderParameters:b,edgeRenderParameters:a});this.rctx.setPipelineState(this.technique.pipeline);
this.rctx.bindProgram(this.technique.program)};c.prototype.renderRegularEdges=function(b,a,d){this.render(this.technique.program,b,b.regular.vao,a,d)};c.prototype.renderSilhouetteEdges=function(b,a,d){this.render(this.technique.program,b,b.silhouette.vao,a,d)};c.prototype.render=function(b,a,d,c,f){this.setUniforms(b,a,c);this.rctx.bindVAO(d);this.rctx.capabilities.instancing.drawArraysInstanced(6,0,4,f)};c.prototype.setUniforms=function(b,a,d){a.components.buffer.textureBuffer.bind(b,g.componentDataBindParameters);
if("origin"in a.transform)b.setUniformMatrix4fv("uView",d.view),b.setUniformMatrix4fv("uModel",a.transform.modelMatrix),q.Slice.bindUniforms(b,this.settings,d.slicePlane,a.transform.origin.vec3);else{var c=new A.TwoVectorPosition(a.transform.position),f=k.mat3.transpose(r,k.mat3.invert(r,a.transform.rotationScale)),e=new x.ComponentDrawParameters;m.vec3.copy(e.worldFromModel_TL,c.low);m.vec3.copy(e.worldFromModel_TH,c.high);k.mat3.copy(e.worldFromModel_RS,a.transform.rotationScale);k.mat3.copy(e.transformNormal_GlobalFromModel,
f);y.VertexPosition.bindModelTransform(b,e);b.setUniformMatrix3fv("uTransformNormal_GlobalFromModel",e.transformNormal_GlobalFromModel);a=d.viewInvTransp;a=m.vec3.set(E,a[3],a[7],a[11]);q.Slice.bindUniforms(b,this.settings,d.slicePlane,a)}"uber"!==this.settings.type&&"sketch"!==this.settings.type||this.setSketchUniforms(b);b.setUniform1f("uWorldLineRadiusPerDistance",Math.tan(d.fovY/2)/(d.viewport[3]/2))};c.prototype.setSketchUniforms=function(b){var a=this.settings.strokesTexture,d=a.texture;this.rctx.bindTexture(d,
0);b.setUniform1i("uStrokesTexture",0);b.setUniform2f("uStrokesTextureScale",1/d.descriptor.width,1/d.descriptor.height);b.setUniform1f("uStrokesLog2Resolution",u.log2(a.resolution));b.setUniform1f("uStrokesNormalizationScale",a.normalizationScale);b.setUniform1f("uStrokesAmplitude",a.amplitude);b.setUniform1f("uStrokeVariants",a.variants)};c.prototype.sortRenderables=function(){var b=this;this.renderablesDirty=!1;this.sortedRenderables[1][1].clear();this.sortedRenderables[1][2].clear();this.sortedRenderables[2][1].clear();
this.sortedRenderables[2][2].clear();this.renderables.forEach(function(a){switch(a.objectTransparency){case 1:case 2:switch(a.edgeTransparency){case 1:case 2:b.sortedRenderables[a.objectTransparency][a.edgeTransparency].push(a)}}});var a=function(a,b){return"origin"in a.transform&&"origin"in b.transform?a.transform.origin.id<b.transform.origin.id?-1:a.transform.origin.id>b.transform.origin.id?1:0:0};this.sortedRenderables[1][1].sort(a);this.sortedRenderables[1][2].sort(a);this.sortedRenderables[2][1].sort(a);
this.sortedRenderables[2][2].sort(a)};c.getKey=function(b,a,c){return"edges-t:"+b+":"+a+":"+c};return c}();g.EdgeRenderer=p;g.componentDataBindParameters={texName:"uComponentDataTex",invDimName:"uComponentDataTexInvDim",unit:2};var r=v.mat3f32.create(),E=w.vec3f64.create()});