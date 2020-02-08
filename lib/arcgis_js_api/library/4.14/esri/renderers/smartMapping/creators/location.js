// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../.. ../../../core/Error ../../../core/maybe ../../../core/promiseUtils ./support/utils ../heuristics/outline ../heuristics/sizeRange ../support/utils ../symbology/location".split(" "),function(F,v,y,t,k,z,n,w,A,q,B,C,x,u){function D(f){return k(this,void 0,void 0,function(){var a,d,c,b;return t(this,function(e){switch(e.label){case 0:if(!f||!f.layer)throw new n("location-renderer:missing-parameters",
"'layer' parameter is required");a=y({},f);a.symbolType=a.symbolType||"2d";d=[0,2,1,3];c=x.createLayerAdapter(a.layer,d);a.layer=c;if(!c)throw new n("location-renderer:invalid-parameters","'layer' must be one of these types: "+x.getLayerTypeLabels(d).join(", "));return[4,c.load()];case 1:e.sent();b=c.geometryType;a.outlineOptimizationEnabled="polygon"===b?a.outlineOptimizationEnabled:!1;a.sizeOptimizationEnabled="point"===b||"multipoint"===b||"polyline"===b?a.sizeOptimizationEnabled:!1;if("mesh"===
b)a.symbolType="3d-volumetric",a.colorMixMode=a.colorMixMode||"replace",a.edgesType=a.edgesType||"none";else{if("3d-volumetric-uniform"===a.symbolType&&"point"!==b)throw new n("location-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(-1<a.symbolType.indexOf("3d-volumetric")&&(!a.view||"3d"!==a.view.type))throw new n("location-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'");
}return[2,a]}})})}function E(f,a){return k(this,void 0,void 0,function(){var d,c,b,e,g;return t(this,function(l){switch(l.label){case 0:return d=f.locationScheme,b=c=null,[4,q.getBasemapInfo(f.basemap,f.view)];case 1:e=l.sent();c=w.isSome(e.basemapId)?e.basemapId:null;b=w.isSome(e.basemapTheme)?e.basemapTheme:null;if(d)return[2,{scheme:u.cloneScheme(d),basemapId:c,basemapTheme:b}];if(g=u.getSchemes({basemap:c,basemapTheme:b,geometryType:a,worldScale:-1<f.symbolType.indexOf("3d-volumetric"),view:f.view}))d=
g.primaryScheme,c=g.basemapId,b=g.basemapTheme;return[2,{scheme:d,basemapId:c,basemapTheme:b}]}})})}Object.defineProperty(v,"__esModule",{value:!0});v.createRenderer=function(f){return k(this,void 0,void 0,function(){var a,d,c,b,e,g,l,h,p,k,m;return t(this,function(r){switch(r.label){case 0:return[4,D(f)];case 1:return a=r.sent(),d=a.layer.geometryType,[4,E(a,d)];case 2:c=r.sent();b=c.scheme;if(!b)throw new n("location-renderer:insufficient-info","Unable to find location scheme");e=a.view;g=a.layer;
return[4,A.all([a.outlineOptimizationEnabled?B({view:e,layer:g}):null,a.sizeOptimizationEnabled?C({view:e,layer:g}):null])];case 3:return l=r.sent(),h=l[0],p=l[1],k=h&&h.opacity,m=new z.SimpleRenderer({symbol:q.createSymbol(d,{type:a.symbolType,color:b.color,size:q.getSymbolSizeFromScheme(b,d),outline:q.getSymbolOutlineFromScheme(b,d,k),meshInfo:{colorMixMode:a.colorMixMode,edgesType:a.edgesType}})}),h&&h.visualVariables&&h.visualVariables.length&&(m.visualVariables=h.visualVariables.map(function(a){return a.clone()})),
p&&p.minSize&&(m.visualVariables?m.visualVariables.push(p.minSize):m.visualVariables=[p.minSize]),[2,{renderer:m,locationScheme:u.cloneScheme(b),basemapId:c.basemapId,basemapTheme:c.basemapTheme}]}})})}});