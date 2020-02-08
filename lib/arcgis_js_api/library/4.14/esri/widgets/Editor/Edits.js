// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/HandleOwner ../../core/maybe ../../core/accessorSupport/decorators".split(" "),function(l,m,f,c,g,h,k,b){function d(b){return k.isNone(b)?null:JSON.stringify(b)}return function(e){function a(a){a=e.call(this,a)||this;a._baselineAttributesJSON=null;a._baselineGeometryJSON=null;return a}f(a,e);Object.defineProperty(a.prototype,"attributesModified",{get:function(){var a=
this._baselineAttributesJSON,b=this.feature;return!(!b||a===d(b.attributes))},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"geometryModified",{get:function(){var a=this._baselineGeometryJSON,b=this.feature;return!(!b||a===d(b.geometry))},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"modified",{get:function(){return this.attributesModified||this.geometryModified},enumerable:!0,configurable:!0});a.prototype.trackChanges=function(){this.feature&&(this._baselineAttributesJSON=
d(this.feature.attributes),this._baselineGeometryJSON=d(this.feature.geometry),this.notifyChange("attributesModified"),this.notifyChange("geometryModified"))};a.prototype.updateAttributes=function(a){this.feature.attributes=a;this.notifyChange("attributesModified")};a.prototype.updateGeometry=function(a){this.feature.geometry=a;this.notifyChange("geometryModified")};c([b.property()],a.prototype,"attributesModified",null);c([b.property()],a.prototype,"feature",void 0);c([b.property()],a.prototype,
"geometryModified",null);c([b.property({dependsOn:["attributesModified","geometryModified"]})],a.prototype,"modified",null);return a=c([b.subclass("esri.widgets.Editor.Edits")],a)}(b.declared(h.HandleOwnerMixin(g)))});