// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper dojo/i18n!../../nls/smartMapping ../.. ../../../core/Error ../../../core/maybe ../../../core/promiseUtils ../../../core/screenUtils ../../../intl/substitute ./support/utils ../heuristics/ageUnit ../heuristics/outline ../heuristics/sizeRange ../statistics/support/ageUtils ../support/utils ../symbology/size ../../support/AuthoringInfo ../../support/AuthoringInfoVisualVariable ../../support/utils ../../visualVariables/SizeVariable".split(" "),
function(la,D,y,u,l,K,G,e,N,L,O,Y,q,Z,P,aa,H,p,C,Q,ba,ca,R){function da(b){return l(this,void 0,void 0,function(){var a,f,c,d,g,m;return u(this,function(n){switch(n.label){case 0:if(!(b&&b.layer&&(b.field||b.valueExpression||b.sqlExpression)))throw new e("size-visual-variable:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(b.valueExpression&&!b.sqlExpression&&!b.view)throw new e("size-visual-variable:missing-parameters","View is required when 'valueExpression' is specified");
a=y({},b);f=[0,2,1,3];c=p.createLayerAdapter(a.layer,f);a.layer=c;if(!c)throw new e("size-visual-variable:invalid-parameters","'layer' must be one of these types: "+p.getLayerTypeLabels(f).join(", "));"height"===a.axis&&(a.sizeOptimizationEnabled=!1);return[4,c.load()];case 1:n.sent();d=c.geometryType;if("mesh"===d)throw new e("size-visual-variable:invalid-parameters","Size visualization is not applicable to layers with 'mesh' geometry type");if(a.worldScale){if("polyline"===d||"polygon"===d)throw new e("size-visual-variable:not-supported",
"'worldScale' sizing is not supported for polyline and polygon layers");if(!a.view||"3d"!==a.view.type)throw new e("size-visual-variable:invalid-parameters","'view' parameter should be an instance of SceneView when 'worldScale' parameter is true");}return[4,p.getFieldsList({field:a.field,normalizationField:a.normalizationField,valueExpression:a.valueExpression})];case 2:g=n.sent();if(m=q.verifyBasicFieldValidity(c,g,"size-visual-variable:invalid-parameters"))throw m;return[2,a]}})})}function ea(b){return l(this,
void 0,void 0,function(){var a,f,c,d,g,m,n;return u(this,function(k){switch(k.label){case 0:if(!(b&&b.layer&&(b.field||b.valueExpression||b.sqlExpression)))throw new e("size-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(b.valueExpression&&!b.sqlExpression&&!b.view)throw new e("size-continuous-renderer:missing-parameters","View is required when 'valueExpression' is specified");a=y({},b);a.symbolType=a.symbolType||"2d";
a.defaultSymbolEnabled=null==a.defaultSymbolEnabled?!0:a.defaultSymbolEnabled;f=[0,2,1,3];c=p.createLayerAdapter(a.layer,f);a.layer=c;if(!c)throw new e("size-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+p.getLayerTypeLabels(f).join(", "));return[4,c.load()];case 1:k.sent();d=c.geometryType;g=-1<a.symbolType.indexOf("3d");a.outlineOptimizationEnabled="polygon"===d?a.outlineOptimizationEnabled:!1;if("mesh"===d)throw new e("size-continuous-renderer:invalid-parameters",
"Size visualization is not applicable to layers with 'mesh' geometry type");if(g&&("polyline"===d||"polygon"===d))throw new e("size-continuous-renderer:not-supported","3d symbols are not supported for polyline and polygon layers");if(-1<a.symbolType.indexOf("3d-volumetric")&&(!a.view||"3d"!==a.view.type))throw new e("size-continuous-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or 3d-volumetric-uniform");return[4,p.getFieldsList({field:a.field,
normalizationField:a.normalizationField,valueExpression:a.valueExpression})];case 2:m=k.sent();if(n=q.verifyBasicFieldValidity(c,m,"size-continuous-renderer:invalid-parameters"))throw n;return[2,a]}})})}function fa(b){return l(this,void 0,void 0,function(){var a,f,c,d,g,m,n,k;return u(this,function(h){switch(h.label){case 0:if(!b||!b.layer||!b.field&&!b.valueExpression)throw new e("size-class-breaks-renderer:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(b.valueExpression&&
!b.view)throw new e("size-class-breaks-renderer:missing-parameters","View is required when 'valueExpression' is specified");a=y({},b);a.symbolType=a.symbolType||"2d";a.defaultSymbolEnabled=null==a.defaultSymbolEnabled?!0:a.defaultSymbolEnabled;a.classificationMethod=a.classificationMethod||"equal-interval";a.normalizationType=p.getNormalizationType(a);f=[0,2,1,3];c=p.createLayerAdapter(a.layer,f);a.layer=c;if(!c)throw new e("size-class-breaks-renderer:invalid-parameters","'layer' must be one of these types: "+
p.getLayerTypeLabels(f).join(", "));d=null!=a.minValue&&null!=a.maxValue;if(!d&&(null!=a.minValue||null!=a.maxValue))throw new e("size-class-breaks-renderer:missing-parameters","Both 'minValue' and 'maxValue' are required when specifying custom data range");return[4,c.load()];case 1:h.sent();g=c.geometryType;m=-1<a.symbolType.indexOf("3d");a.outlineOptimizationEnabled="polygon"===g?a.outlineOptimizationEnabled:!1;if("mesh"===g)throw new e("size-class-breaks-renderer:invalid-parameters","Size visualization is not applicable to layers with 'mesh' geometry type");
if(m&&("polyline"===g||"polygon"===g))throw new e("size-class-breaks-renderer:not-supported","3d symbols are not supported for polyline and polygon layers");if(-1<a.symbolType.indexOf("3d-volumetric")&&(!a.view||"3d"!==a.view.type))throw new e("size-class-breaks-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or 3d-volumetric-uniform");return[4,p.getFieldsList({field:a.field,normalizationField:a.normalizationField})];
case 2:n=h.sent();if(k=q.verifyBasicFieldValidity(c,n,"size-class-breaks-renderer:invalid-parameters"))throw k;return[2,a]}})})}function ga(b){b=y({},b);delete b.basemap;delete b.sizeScheme;delete b.legendOptions;delete b.symbolType;delete b.defaultSymbolEnabled;b.analyzeData=!(null!=b.minValue&&null!=b.maxValue);return b}function S(b){b=y({},b);var a=-1<b.symbolType.indexOf("3d-volumetric");if(b.worldScale=a)b.axis="3d-volumetric-uniform"===b.symbolType?"all":"height";delete b.symbolType;delete b.defaultSymbolEnabled;
return b}function ha(b){return l(this,void 0,void 0,function(){var a,f,c,d,g,m;return u(this,function(n){switch(n.label){case 0:if(!(b&&b.layer&&b.view&&b.startTime&&b.endTime))throw new e("size-age-renderer:missing-parameters","'layer', 'view', 'startTime', 'endTime' parameters are required");a=y({},b);a.symbolType=a.symbolType||"2d";a.defaultSymbolEnabled=null==a.defaultSymbolEnabled?!0:a.defaultSymbolEnabled;f=[0,2,1,3];c=p.createLayerAdapter(a.layer,f);a.layer=c;if(!c)throw new e("size-age-renderer:invalid-parameters",
"'layer' must be one of these types: "+p.getLayerTypeLabels(f).join(", "));return[4,c.load()];case 1:n.sent();d=c.geometryType;g=-1<a.symbolType.indexOf("3d");a.outlineOptimizationEnabled="polygon"===d?a.outlineOptimizationEnabled:!1;if("mesh"===d)throw new e("size-age-renderer:invalid-parameters","Size visualization is not applicable to layers with 'mesh' geometry type");if(g&&("polyline"===d||"polygon"===d))throw new e("size-age-renderer:not-supported","3d symbols are not supported for polyline and polygon layers");
if(-1<a.symbolType.indexOf("3d-volumetric")&&(!a.view||"3d"!==a.view.type))throw new e("size-age-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or 3d-volumetric-uniform");if(m=H.verifyDates(c,a.startTime,a.endTime,"size-age-renderer:invalid-parameters"))throw m;if(a.unit&&-1===H.supportedAgeUnits.indexOf(a.unit))throw new e("size-age-renderer:invalid-unit","Supported units are: "+H.supportedAgeUnits.join(", "));return[2,
a]}})})}function T(b){return l(this,void 0,void 0,function(){var a,f,c,d,g;return u(this,function(m){switch(m.label){case 0:return a=b.sizeScheme,c=f=null,[4,q.getBasemapInfo(b.basemap,b.view)];case 1:d=m.sent();f=N.isSome(d.basemapId)?d.basemapId:null;c=N.isSome(d.basemapTheme)?d.basemapTheme:null;if(a)return[2,{scheme:C.cloneScheme(a),basemapId:f,basemapTheme:c}];if(g=C.getSchemes({basemap:f,basemapTheme:c,geometryType:b.geometryType,worldScale:b.worldScale,view:b.view}))a=g.primaryScheme,f=g.basemapId,
c=g.basemapTheme;return[2,{scheme:a,basemapId:f,basemapTheme:c}]}})})}function U(b,a){var f;switch(a){case "point":case "multipoint":f=[b.minSize,b.maxSize];break;case "polyline":f=[b.minWidth,b.maxWidth];break;case "polygon":f=[b.marker.minSize,b.marker.maxSize]}return f}function ia(b,a,f,c){return l(this,void 0,void 0,function(){var d,g,m,n,k,h,I,J,B,z,v,p,t,r,w,l,x,A,V,F;return u(this,function(u){switch(u.label){case 0:return d=c.layer,g=c.field,m="function"===typeof g,k=(n=g&&!m?d.getField(g):
null)&&"date"===n.type,h=d.geometryType,[4,T({basemap:c.basemap,geometryType:h,sizeScheme:c.sizeScheme,worldScale:c.worldScale,view:c.view})];case 1:I=u.sent();J=I.scheme;if(!J)throw new e("size-visual-variable:insufficient-info","Unable to find size scheme");z=(B=a&&[a.minSize,a.maxSize])||U(J,h);p=(v=q.getDefaultDataRange(b,k,!1))||[b.min,b.max];t=[];w=(r="height"===c.axis)?c.axis:void 0;l=z[0];x=z[1];r&&"number"===typeof l&&"number"===typeof x&&(A=q.getSizeRangeForAxis({minSize:l,maxSize:x},w),
t.push(new R({axis:"width-and-depth",minSize:A.minSize})),x=A.maxSize);t.unshift(new R({field:g,valueExpression:c.valueExpression,valueExpressionTitle:c.valueExpressionTitle,valueUnit:"unknown",normalizationField:f,axis:w,minSize:l,maxSize:x,minDataValue:p[0],maxDataValue:p[1],legendOptions:c.legendOptions}));V=new ba({type:"size",minSliderValue:null!=c.minValue?c.minValue:b.min,maxSliderValue:null!=c.maxValue?c.maxValue:b.max});F=new Q({visualVariables:[V]});return[2,{basemapId:I.basemapId,basemapTheme:I.basemapTheme,
visualVariables:t,statistics:b,defaultValuesUsed:!!v,sizeScheme:C.cloneScheme(J),authoringInfo:F}]}})})}function W(b,a,f,c,d){var g=d.field,m=d.layer.geometryType,n=d.defaultSymbolEnabled,k=C.cloneScheme(b.sizeScheme),h="polygon"===m,e=h?k.marker:k,k=h?k.background:null,h=h?"point":m,l=a&&a.opacity,p=b.visualVariables.map(function(a){return a.clone()});a&&a.visualVariables&&a.visualVariables.length&&p.push.apply(p,a.visualVariables.map(function(a){return a.clone()}));return{renderer:new G.ClassBreaksRenderer({backgroundFillSymbol:k&&
q.createSymbol(m,{type:d.symbolType,color:k.color,outline:q.getSymbolOutlineFromScheme(k,m,l)}),classBreakInfos:[{minValue:-X,maxValue:X,symbol:q.createSymbol(h,{type:d.symbolType,color:e.color,size:q.getSymbolSizeFromScheme(e,h),outline:q.getSymbolOutlineFromScheme(e,h,l)})}],defaultLabel:n?K.other:null,defaultSymbol:n?q.createSymbol(h,{type:d.symbolType,color:e.noDataColor,size:q.getSymbolSizeFromScheme(e,h,!0),outline:q.getSymbolOutlineFromScheme(e,h,l)}):null,field:g,normalizationField:c,normalizationType:f,
valueExpression:d.valueExpression,valueExpressionTitle:d.valueExpressionTitle,visualVariables:p,authoringInfo:b.authoringInfo&&b.authoringInfo.clone()}),visualVariables:b.visualVariables.map(function(a){return a.clone()}),statistics:b.statistics,defaultValuesUsed:b.defaultValuesUsed,sizeScheme:C.cloneScheme(b.sizeScheme),basemapId:b.basemapId,basemapTheme:b.basemapTheme}}function ja(b,a){var f=O.toPt(b.minSize);b=(O.toPt(b.maxSize)-f)/(4<=a?a-1:a);for(var c=[],d=0;d<a;d++)c.push(f+b*d);return c}function ka(b,
a){return l(this,void 0,void 0,function(){var f,c,d,g,m,e,k,h,l,p,B,z,v,y,t,r,w,E,x,A;return u(this,function(n){switch(n.label){case 0:return f=b.layer,c=b.defaultSymbolEnabled,d=f.geometryType,g="polygon"===d,m=-1<b.symbolType.indexOf("3d-volumetric"),[4,T({basemap:b.basemap,geometryType:d,sizeScheme:b.sizeScheme,worldScale:m,view:b.view})];case 1:return e=n.sent(),k=e.scheme,h=a.result,l=a.outlineResult,p=h.classBreakInfos,B=b.classificationMethod,z=b.normalizationType,v=g?k.marker:k,y=g?k.background:
null,t=g?"point":d,r=U(v,t),w=m&&q.getSizeRangeForAxis({minSize:r[0],maxSize:r[1]},"height"),E=ja({minSize:r[0],maxSize:m?w.maxSize:r[1]},p.length),x=l&&l.opacity,A=new G.ClassBreaksRenderer({backgroundFillSymbol:y&&q.createSymbol(d,{type:b.symbolType,color:y.color,outline:q.getSymbolOutlineFromScheme(y,d,x)}),classBreakInfos:p.map(function(a,c){return{minValue:a.minValue,maxValue:a.maxValue,symbol:q.createSymbol(t,{type:b.symbolType,color:v.color,size:E[c],widthAndDepth:w&&w.minSize,outline:q.getSymbolOutlineFromScheme(v,
t,x)}),label:a.label}}),defaultLabel:c?K.other:null,defaultSymbol:c?q.createSymbol(t,{type:b.symbolType,color:v.noDataColor,size:q.getSymbolSizeFromScheme(v,t,!0),widthAndDepth:w&&w.minSize,outline:q.getSymbolOutlineFromScheme(v,t,x)}):null,field:b.field,valueExpression:b.valueExpression,valueExpressionTitle:b.valueExpressionTitle,normalizationType:z,normalizationField:b.normalizationField,normalizationTotal:"percent-of-total"===z?h.normalizationTotal:void 0,legendOptions:b.legendOptions,authoringInfo:new Q({type:"class-breaks-size",
classificationMethod:B,standardDeviationInterval:b.standardDeviationInterval})}),"standard-deviation"!==B&&ca.setLabelsForClassBreaks({classBreakInfos:A.classBreakInfos,classificationMethod:B,normalizationType:z,round:!0}),l&&l.visualVariables&&l.visualVariables.length&&(A.visualVariables=l.visualVariables.map(function(a){return a.clone()})),[2,{renderer:A,sizeScheme:C.cloneScheme(k),classBreaksResult:h,defaultValuesUsed:a.defaultValuesUsed,basemapId:e.basemapId,basemapTheme:e.basemapTheme}]}})})}
function M(b){return l(this,void 0,void 0,function(){var a,f,c,d,g,e,n,k;return u(this,function(h){switch(h.label){case 0:return[4,da(b)];case 1:return a=h.sent(),f=a.view,c=a.layer,g=(d=a.normalizationField)?"field":void 0,[4,L.all([a.statistics?a.statistics:q.getSummaryStatistics({layer:c,field:a.field,valueExpression:a.valueExpression,sqlExpression:a.sqlExpression,sqlWhere:a.sqlWhere,normalizationType:g,normalizationField:d,minValue:a.minValue,maxValue:a.maxValue,view:f}),a.sizeOptimizationEnabled?
aa({view:f,layer:c}):null])];case 2:return e=h.sent(),n=e[0],k=e[1],[2,ia(n,k,d,a)]}})})}Object.defineProperty(D,"__esModule",{value:!0});var X=Math.pow(2,53)-1;D.createVisualVariables=M;D.createContinuousRenderer=function(b){return l(this,void 0,void 0,function(){var a,f,c,d,g,e,n;return u(this,function(k){switch(k.label){case 0:return[4,ea(b)];case 1:return a=k.sent(),f={layer:a.layer,view:a.view},[4,L.all([M(S(a)),a.outlineOptimizationEnabled?P(f):null])];case 2:return c=k.sent(),d=c[0],g=c[1],
n=(e=a.normalizationField)?"field":void 0,[2,W(d,g,n,e,a)]}})})};D.createClassBreaksRenderer=function(b){return l(this,void 0,void 0,function(){var a,f;return u(this,function(c){switch(c.label){case 0:return[4,fa(b)];case 1:return a=c.sent(),[4,q.getClassBreaks(ga(a),a.outlineOptimizationEnabled)];case 2:return f=c.sent(),[2,ka(a,f)]}})})};D.createAgeRenderer=function(b){return l(this,void 0,void 0,function(){var a,f,c,d,e,m,n,k,h,l,p,B,z,v,C,t,r,w,E,x,A,D,F,G;return u(this,function(g){switch(g.label){case 0:return[4,
ha(b)];case 1:a=g.sent();f=a.defaultSymbolEnabled;c=a.view;d=a.startTime;e=a.endTime;m=a.symbolType;n=a.minValue;k=a.maxValue;h=a.layer;l={layer:a.layer,view:a.view};C=(v=L).all;if(!a.unit)return[3,2];t={unit:a.unit,statistics:null,valueExpression:null};return[3,4];case 2:return[4,Z({view:c,layer:h,startTime:d,endTime:e,minValue:n,maxValue:k})];case 3:t=g.sent(),g.label=4;case 4:return[4,C.apply(v,[[t,a.outlineOptimizationEnabled?P(l):null]])];case 5:return p=g.sent(),B=p[0],z=p[1],r=B.unit,w=B.statistics,
E=H.getAgeExpressions({layer:h,startTime:d,endTime:e,unit:r}).valueExpression,x=Y.substitute(K["ageInfo_"+r],{unit:r,startTime:q.formatDate(d,r,h),endTime:q.formatDate(e,r,h)}),[4,M(S({layer:h,basemap:a.basemap,valueExpression:E,symbolType:m,statistics:w,legendOptions:{title:x},sizeScheme:a.sizeScheme,sizeOptimizationEnabled:a.sizeOptimizationEnabled,view:a.view,minValue:n,maxValue:k}))];case 6:return A=g.sent(),D={layer:h,valueExpression:E,defaultSymbolEnabled:f,symbolType:m},F=W(A,z,null,null,D),
G=F.renderer.authoringInfo.visualVariables,G.forEach(function(a){return q.updateAgeRendererAuthoringInfoVV(a,d,e,r)}),[2,y({},F,{unit:r})]}})})}});