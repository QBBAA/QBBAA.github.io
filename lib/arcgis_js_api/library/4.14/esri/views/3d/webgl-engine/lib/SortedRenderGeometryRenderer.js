// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/iteratorUtils","../../../../core/PooledArray","./rendererUtils"],function(h,l,m,g,n){Object.defineProperty(l,"__esModule",{value:!0});var p=function(){return function(){}}();h=function(){function b(c,e,d){this._rctx=c;this._materialRep=e;this.emitUpdatingChanged=d;this._pendingAddsRemoves=new Map;this._adds=new g;this._removes=new g;this._updates=new g({allocator:function(a){return a?a:new p},deallocator:function(a){a.renderGeometry=null;return a}});this._materialRenderers=
new Map;this._sortedMaterialRenderers=new g;this._hasWater=this._hasHighlights=!1}b.prototype.dispose=function(){this._adds.prune();this._removes.prune();this._updates.prune()};Object.defineProperty(b.prototype,"updating",{get:function(){return 0<this._pendingAddsRemoves.size||0<this._updates.length},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"hasHighlights",{get:function(){return this._hasHighlights},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"hasWater",
{get:function(){return this._hasWater},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"isEmpty",{get:function(){return!this.updating&&0===this._materialRenderers.size},enumerable:!0,configurable:!0});b.prototype.commitChanges=function(){var c=this,e=!1;if(!this.updating)return!1;this.updateAddsRemoves();var d=!1,a=!1;n.splitRenderGeometryChangeSetByMaterial({numToAdd:this._adds.length,toAdd:this._adds.data,numToRemove:this._removes.length,toRemove:this._removes.data,numToUpdate:this._updates.length,
toUpdate:this._updates.data}).forEach(function(b,k){var f=c._materialRenderers.get(k);!f&&0<b.toAdd.length&&(f=k.createRenderer(c._rctx,c._materialRep),c._materialRenderers.set(k,f),a=d=e=!0);if(f){var g=d||f.hasHighlights,h=a||f.hasWater;f.modify(b);d=d||g!==f.hasHighlights;a=a||h!==f.hasWater;f.isEmpty&&(c._materialRenderers.delete(k),f.dispose(),e=!0)}});this._adds.clear();this._removes.clear();this._updates.clear();this._pendingAddsRemoves.clear();e&&this.updateSortedMaterialRenderers();d&&(this._hasHighlights=
m.someMap(this._materialRenderers,function(a){return a.hasHighlights}));a&&(this._hasWater=m.someMap(this._materialRenderers,function(a){return a.hasWater}));this.emitUpdatingChanged();return!0};b.prototype.add=function(c){for(var e=0===this._pendingAddsRemoves.size,d=0;d<c.length;d++)this._pendingAddsRemoves.set(c[d],0);e&&0<this._pendingAddsRemoves.size&&this.emitUpdatingChanged()};b.prototype.remove=function(c){for(var e=0===this._pendingAddsRemoves.size,d=0;d<c.length;d++){var a=c[d],f=this._pendingAddsRemoves.get(a);
0===f?this._pendingAddsRemoves.set(a,2):2!==f&&this._pendingAddsRemoves.set(a,1)}e&&0<this._pendingAddsRemoves.size&&this.emitUpdatingChanged()};b.prototype.modify=function(c,e){for(var d=0===this._updates.length,a=0;a<c.length;a++){var f=c[a],b=this._updates.pushNew();b.renderGeometry=f;b.updateType=e}d&&0<this._updates.length&&this.emitUpdatingChanged()};b.prototype.updateLogic=function(c){for(var e=!1,d=0;d<this._sortedMaterialRenderers.length;d++){var a=this._sortedMaterialRenderers.data[d];a.updateLogic&&
a.updateLogic(c)&&(e=!0)}return e};b.prototype.draw=function(c,e,d){for(var a=0;a<this._sortedMaterialRenderers.length;a++){var b=this._sortedMaterialRenderers.data[a],g=d.getMaterialRenderStatsObject(b.type);b.render(null,c,e,g)}};b.prototype.updateSortedMaterialRenderers=function(){var c=this;this._sortedMaterialRenderers.clear();this._materialRenderers.forEach(function(e){c._sortedMaterialRenderers.push(e)});this._sortedMaterialRenderers.sort(function(c,d){return d.renderPriority()-c.renderPriority()})};
b.prototype.updateAddsRemoves=function(){var c=this;this._adds.clear();this._removes.clear();this._pendingAddsRemoves.forEach(function(b,a){switch(b){case 0:c._adds.push(a);break;case 1:c._removes.push(a)}});for(var b=0;b<this._updates.length;)this._pendingAddsRemoves.has(this._updates.data[b].renderGeometry)?this._updates.removeUnorderedIndex(b):b++};Object.defineProperty(b.prototype,"test",{get:function(){return{sortedMaterialRenderers:this._sortedMaterialRenderers}},enumerable:!0,configurable:!0});
return b}();l.SortedRenderGeometryRenderer=h});