// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../support/mathUtils ./ComponentUtils ./GeometryRecord ./HighlightUtils ./IdGen ./Util".split(" "),function(t,B,y,r,m,l,n,u,f,p,v,z,A){var q=A.assert;t=function(){function c(a){void 0===a&&(a={});this._objectTransformation=m.mat4f64.create();this._bvObjectSpace=new w;this._bvWorldSpace=
new w;this._bvDirty=!0;this._hasVolatileTransformation=!1;this._allComponentsVisibleDirty=this._allComponentsHiddenDirty=!0;this.id=c._idGen.gen(a.idHint);this.castShadow=null!=a.castShadow?a.castShadow:!0;(this.metadata=a.metadata)&&this.metadata.isElevationSource&&(this.metadata.lastValidElevationBB=new x);this.objectTransformation=m.mat4f64.create();this._initializeGeometryRecords(a.geometries,a.materials,a.transformations,a.origins)}Object.defineProperty(c.prototype,"geometryRecords",{get:function(){return this._geometryRecords},
enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"geometries",{get:function(){return this._geometries},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"objectTransformation",{get:function(){return this._objectTransformation},set:function(a){r.mat4.copy(this._objectTransformation,a);this._invalidateBoundingVolume();this._notifyDirty("objTransformation")},enumerable:!0,configurable:!0});c.prototype.dispose=function(){for(var a=0,b=this._geometryRecords;a<b.length;a++)p.pool.release(b[a]);
this._geometries=this._geometryRecords=null};c.prototype._initializeGeometryRecords=function(a,b,d,c){if(Array.isArray(a)){q(b.length===a.length,"Object3D: materials don't match geometries");q(d.length===a.length,"Object3D: transformations don't match geometries");this._geometryRecords=Array(a.length);this._geometries=a.slice();for(var e=0;e<a.length;e++)this._geometryRecords[e]=p.pool.acquire(a[e],b[e],m.mat4f64.clone(d[e]),{},c&&c[e]);this._hasVolatileTransformation=!1}else this._geometryRecords=
[],this._geometries=[]};Object.defineProperty(c.prototype,"parentLayer",{get:function(){return this._parentLayer},set:function(a){q(null==this._parentLayer||null==a,"Object3D can only be added to a single Layer");this._parentLayer=a},enumerable:!0,configurable:!0});c.prototype.getNumGeometryRecords=function(){return this._geometryRecords.length};c.prototype.findGeometryRecords=function(a){for(var b=[],d=0;d<this._geometries.length;d++)this._geometries[d]===a&&b.push(this._geometryRecords[d]);return b};
c.prototype.getGeometryRecord=function(a){q(0<=a&&a<this._geometryRecords.length,"Object3d.getGeometryDataByIndex: index out of range");return this._geometryRecords[a]};c.prototype.addGeometry=function(a,b,d,c,k,h){d=d?m.mat4f64.clone(d):m.mat4f64.IDENTITY;this._geometries.push(a);a=p.pool.acquire(a,b,d,c||{},k,h);this._geometryRecords.push(a);this._hasVolatileTransformation=this._geometryRecords.some(function(a){return!!a.shaderTransformation});this._notifyDirty("objGeometryAdded",a);this._invalidateBoundingVolume();
this._allComponentsVisibleDirty=this._allComponentsHiddenDirty=!0;return a};c.prototype.removeGeometry=function(a){var b=this._geometryRecords.splice(a,1)[0];p.pool.release(b);this._hasVolatileTransformation=this._geometryRecords.some(function(a){return!!a.shaderTransformation});this._geometries.splice(a,1);this._notifyDirty("objGeometryRemoved",b);this._invalidateBoundingVolume();this._allComponentsVisibleDirty=this._allComponentsHiddenDirty=!0;return b};c.prototype.removeAllGeometries=function(){for(;0<
this.getNumGeometryRecords();)this.removeGeometry(0)};c.prototype.geometryVertexAttrsUpdated=function(a){this._notifyDirty("vertexAttrsUpdated",this._geometryRecords[a]);this._invalidateBoundingVolume()};c.prototype.areAllComponentsHidden=function(){if(this._allComponentsHiddenDirty){this._allComponentsHiddenDirty=!1;this._allComponentsHidden=!0;for(var a=0,b=this._geometryRecords;a<b.length;a++){var d=b[a];if(!f.isAllHidden(d.instanceParameters.componentVisibilities,d.geometry.data.componentOffsets)){this._allComponentsHidden=
!1;break}}}return this._allComponentsHidden};c.prototype.areAllComponentsVisible=function(){if(this._allComponentsVisibleDirty){this._allComponentsVisibleDirty=!1;this._allComponentsVisible=!0;for(var a=0,b=this._geometryRecords;a<b.length;a++){var d=b[a];if(!f.isAllVisible(d.instanceParameters.componentVisibilities,d.geometry.data.componentOffsets)){this._allComponentsVisible=!1;break}}}return this._allComponentsVisible};c.prototype.hasComponents=function(){for(var a=!1,b=0;b<this._geometries.length&&
!(a=f.hasComponents(this._geometries[b].data.componentOffsets));b++);return a};c.prototype.setComponentVisibility=function(a,b,d){b=f.updateVisibility(a.instanceParameters.componentVisibilities,a.geometry.data.componentOffsets,b,d);a.instanceParameters.componentVisibilities=b;this._notifyDirty("visibilityChanged",a);this._allComponentsVisibleDirty=this._allComponentsHiddenDirty=!0};c.prototype.setHidden=function(a,b){a.instanceParameters.hidden=!!b;this._notifyDirty("visibilityChanged",a)};c.prototype.isHidden=
function(a){return!!a.instanceParameters.hidden};c.prototype.getComponentVisibility=function(a,b){return f.getVisibility(a.instanceParameters.componentVisibilities,b)};c.prototype.hideAllComponents=function(){if(this._allComponentsHiddenDirty||!this._allComponentsHidden){for(var a=0,b=this._geometryRecords;a<b.length;a++){var d=b[a],c=f.hideAllComponents(d.instanceParameters.componentVisibilities);d.instanceParameters.componentVisibilities=c}this._notifyDirty("visibilityChanged");this._allComponentsVisibleDirty=
this._allComponentsHiddenDirty=!1;this._allComponentsHidden=!0;this._allComponentsVisible=!1}};c.prototype.unhideAllComponents=function(){if(this._allComponentsVisibleDirty||!this._allComponentsVisible){for(var a=0,b=this._geometryRecords;a<b.length;a++){var c=b[a],e=f.unhideAllComponents(c.instanceParameters.componentVisibilities);c.instanceParameters.componentVisibilities=e}this._notifyDirty("visibilityChanged");this._allComponentsHidden=this._allComponentsVisibleDirty=this._allComponentsHiddenDirty=
!1;this._allComponentsVisible=!0}};c.prototype._setComponentHighlight=function(a,b,c,e){b=f.addHighlight(a.instanceParameters.componentHighlights,b,c,e);a.instanceParameters.componentHighlights=b};c.prototype.setComponentHighlight=function(a,b,c){var d=v.generateHighlightId();this._setComponentHighlight(a,b,c,d);this._notifyDirty("componentHighlightChanged");return d};c.prototype.highlightAllComponents=function(a){for(var b=v.generateHighlightId(),c=0,e=this._geometryRecords;c<e.length;c++)this._setComponentHighlight(e[c],
null,a,b);this._notifyDirty("componentHighlightChanged");return b};c.prototype.removeHighlights=function(a){for(var b=0,c=this._geometryRecords;b<c.length;b++){var e=c[b].instanceParameters,k=f.removeHighlight(e.componentHighlights,a);e.componentHighlights=k}this._notifyDirty("componentHighlightChanged")};c.prototype.getComponentFromTriangleNr=function(a,b){q(0<=a&&a<this._geometryRecords.length,"Object3d.getComponentFromTriangleNr: index out of range");return f.componentFind(this._geometryRecords[a].geometry.data.componentOffsets,
3*b)};c.prototype.setGeometryTransformation=function(a,b){q(0<=a&&a<this._geometryRecords.length,"Object3d.setGeometryTransformation: index out of range");var c=this._geometryRecords[a];p.pool.release(c);b=p.pool.acquire(c.geometry,c.material,m.mat4f64.clone(b),c.instanceParameters);this._geometryRecords[a]=b;this._notifyDirty("objGeometryReplaced",[c,b]);this._invalidateBoundingVolume()};c.prototype.getCombinedStaticTransformation=function(a,b){b=b||m.mat4f64.create();r.mat4.multiply(b,this.objectTransformation,
a.getStaticTransformation());return b};c.prototype.getCombinedShaderTransformation=function(a,b){b=b||m.mat4f64.create();r.mat4.multiply(b,this.objectTransformation,a.getShaderTransformation());return b};c.prototype.hasVolativeTransformation=function(){return this._hasVolatileTransformation};c.prototype.getMetadata=function(){return this.metadata};c.prototype.getBBMin=function(a){this._validateBoundingVolume();return a?this._bvObjectSpace.bbMin:this._bvWorldSpace.bbMin};c.prototype.getBBMax=function(a){this._validateBoundingVolume();
return a?this._bvObjectSpace.bbMax:this._bvWorldSpace.bbMax};c.prototype.getCenter=function(a){this._validateBoundingVolume();return a?this._bvObjectSpace.center:this._bvWorldSpace.center};c.prototype.getBSRadius=function(a){this._validateBoundingVolume();return a?this._bvObjectSpace.bsRadius:this._bvWorldSpace.bsRadius};c.prototype._validateBoundingVolume=function(){if(this._bvDirty||this._hasVolatileTransformation){this._bvObjectSpace.init();this._bvWorldSpace.init();for(var a=0;a<this._geometryRecords.length;++a){var b=
this._geometries[a],c=this._geometryRecords[a],b=b.boundingInfo;this._calculateTransformedBoundingVolume(b,this._bvObjectSpace,c.getShaderTransformation());this._calculateTransformedBoundingVolume(b,this._bvWorldSpace,this.getCombinedShaderTransformation(c))}l.vec3.lerp(this._bvObjectSpace.center,this._bvObjectSpace.bbMin,this._bvObjectSpace.bbMax,.5);l.vec3.lerp(this._bvWorldSpace.center,this._bvWorldSpace.bbMin,this._bvWorldSpace.bbMax,.5);for(var c=n.vec3f64.create(),e=n.vec3f64.create(),k=u.maxScale(this.objectTransformation),
a=0;a<this._geometryRecords.length;++a){var b=this._geometries[a],h=this._geometryRecords[a].getShaderTransformation(),g=u.maxScale(h),b=b.boundingInfo;l.vec3.transformMat4(c,b.getCenter(),h);h=l.vec3.distance(c,this._bvObjectSpace.center);b=b.getBSRadius()*g;this._bvObjectSpace.bsRadius=Math.max(this._bvObjectSpace.bsRadius,h+b);l.vec3.transformMat4(e,c,this.objectTransformation);g=l.vec3.distance(e,this._bvWorldSpace.center);this._bvWorldSpace.bsRadius=Math.max(this._bvWorldSpace.bsRadius,g+b*k)}this._bvDirty=
!1}};c.prototype._calculateTransformedBoundingVolume=function(a,b,c){var d=a.getBBMin();a=a.getBBMax();var k=n.vec3f64.clone(d),h=n.vec3f64.clone(a);l.vec3.transformMat4(k,k,c);l.vec3.transformMat4(h,h,c);for(var g=0;3>g;++g)b.bbMin[g]=Math.min(b.bbMin[g],k[g],h[g]),b.bbMax[g]=Math.max(b.bbMax[g],k[g],h[g]);for(g=0;3>g;++g){l.vec3.copy(k,d);l.vec3.copy(h,a);k[g]=a[g];h[g]=d[g];l.vec3.transformMat4(k,k,c);l.vec3.transformMat4(h,h,c);for(var f=0;3>f;++f)b.bbMin[f]=Math.min(b.bbMin[f],k[f],h[f]),b.bbMax[f]=
Math.max(b.bbMax[f],k[f],h[f])}};c.prototype._invalidateBoundingVolume=function(){this._bvDirty=!0;this._parentLayer&&this._parentLayer.notifyObjectBBChanged(this,{center:this._bvWorldSpace.center,radius:this._bvWorldSpace.bsRadius})};c.prototype._notifyDirty=function(a,b,c,e){this._parentLayer&&this._parentLayer.notifyDirty(a,b,c||1,e||this)};Object.defineProperty(c.prototype,"test",{get:function(){var a=this;return{hasGeometry:function(b){return-1<a._geometries.indexOf(b)},getGeometryIndex:function(b){return a._geometries.indexOf(b)}}},
enumerable:!0,configurable:!0});c._idGen=new z.IdGen;return c}();var x=function(){function c(){this.bbMin=n.vec3f64.fromValues(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);this.bbMax=n.vec3f64.fromValues(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}c.prototype.isEmpty=function(){return this.bbMax[0]<this.bbMin[0]&&this.bbMax[1]<this.bbMin[1]&&this.bbMax[2]<this.bbMin[2]};return c}(),w=function(c){function a(){var a=c.call(this)||this;a.center=n.vec3f64.create();a.bsRadius=0;return a}
y(a,c);a.prototype.init=function(){l.vec3.set(this.bbMin,Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);l.vec3.set(this.bbMax,-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);l.vec3.set(this.center,0,0,0);this.bsRadius=0};a.prototype.getCenter=function(){return this.center};a.prototype.getBSRadius=function(){return this.bsRadius};return a}(x);return t});