// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/awaiterHelper ../../../core/tsSupport/declareExtendsHelper ../../../geometry ../../../core/Error ../../../core/maybe ../../../core/promiseUtils ../../../core/accessorSupport/decorators ../RasterInfo ../RasterStorageInfo ../TileInfo ./BaseRaster ./DBFParser ../../../tasks/support/FeatureSet".split(" "),function(M,N,x,r,v,C,z,D,E,F,m,G,H,I,J,K,L){var h=new Map;h.set("int16",
"esriFieldTypeSmallInteger");h.set("int32","esriFieldTypeInteger");h.set("int64","esriFieldTypeInteger");h.set("float32","esriFieldTypeSingle");h.set("float64","esriFieldTypeDouble");h.set("text","esriFieldTypeString");return function(t){function b(){var a=null!==t&&t.apply(this,arguments)||this;a.storageInfo=null;return a}C(b,t);b.prototype.open=function(a){return v(this,void 0,void 0,function(){var k,d,f,c,e,n;return x(this,function(b){switch(b.label){case 0:return[4,this.init()];case 1:return b.sent(),
k=a?E.unwrap(a.signal):null,[4,this.request({url:this.url+"/conf.json",responseType:"json"},k)];case 2:d=b.sent();if(!this._validateHeader(d))throw new D("cloudraster:open","Invalid or unsupported conf.json.");this.datasetName=this.url.slice(this.url.lastIndexOf("/")+1);f=this._parseHeader(d);c=f.storageInfo;e=f.rasterInfo;return"thematic"!==e.dataType?[3,4]:[4,this._fetchAuxiliaryInformation()];case 3:n=b.sent(),e.attributeTable=n,b.label=4;case 4:return this._set("storageInfo",c),this._set("rasterInfo",
e),this.ioConfig.retryCount=this.ioConfig.retryCount||0,[2]}})})};b.prototype.fetchRawTile=function(a,k,d,f){void 0===f&&(f={});return v(this,void 0,void 0,function(){var c,e,b,y,p,u,q;return x(this,function(n){switch(n.label){case 0:c=this.rasterInfo.storageInfo.maximumPyramidLevel-a;if(0>c)return[2,null];e=this._buildCacheFilePath(c,k,d,f.multidimensionalDefinition);b=this._getIndexRecordFromBundle(k,d);return[4,this.request({url:e,range:{from:0,to:this.storageInfo.headerSize-1},responseType:"array-buffer"},
f.signal)];case 1:y=n.sent();if(!y)return[2,null];p=new Uint8Array(y);u=this._getTileEndAndContentType(p,b);return 0===u.recordSize?[2,null]:[4,this.request({url:e,range:{from:u.position,to:u.position+u.recordSize},responseType:"array-buffer"},f.signal)];case 2:return(q=n.sent())?[2,this.decodePixelBlock(q,{width:this.rasterInfo.storageInfo.tileInfo.size[0],height:this.rasterInfo.storageInfo.tileInfo.size[1],planes:null,pixelType:null})]:[2,null]}})})};b.prototype._validateHeader=function(a){var k=
"origin extent geodataXform LODInfos blockWidth blockHeight bandCount pixelType pixelSizeX pixelSizeY format packetSize".split(" ");return a&&"RasterInfo"===a.type&&!k.some(function(d){return!a[d]})};b.prototype._parseHeader=function(a){var k="u1 u2 u4 u8 s8 u16 s16 u32 s32 f32 f64".split(" ")[a.pixelType],d=a.bandCount,f=a.histograms,c=a.colormap,e=a.blockWidth,b=a.blockHeight,y=a.firstPyramidLevel,p=a.maximumPyramidLevel,u=a.statistics&&a.statistics.map(function(a){return{min:a.min,max:a.max,avg:a.mean,
stddev:a.standardDeviation,median:a.median,mode:a.mode}}),q=new z.SpatialReference(a.extent.spatialReference||a.geodataXform.spatialReference),h=new z.Extent({xmin:a.extent.xmin,ymin:a.extent.ymin,xmax:a.extent.xmax,ymax:a.extent.ymax,spatialReference:q}),m=new z.Point({x:a.pixelSizeX,y:a.pixelSizeY,spatialReference:q}),x=a.properties,r=a.format.toLowerCase().replace("cache/",""),v=new z.Point(a.origin.x,a.origin.y,q),t,g,l,w;if(c&&c.colors)for(t=[],g=0;g<c.colors.length;g++)l=c.colors[g],w=c.values?
c.values[g]:g,t.push([w,l&255,l<<16>>>24,l<<8>>>24,l>>>24]);c=a.LODInfos;l=[];for(g=0;g<c.levels.length;g++)l.push({level:c.levels[g],resolution:c.resolutions[g],scale:96/.0254*c.resolutions[g]});c=new I({dpi:96,lods:l,format:r,origin:v,size:[e,b],spatialReference:q});r={recordSize:8,packetSize:a.packetSize,headerSize:a.packetSize*a.packetSize*8+64};l=Math.round((h.xmax-h.xmin)/m.x);w=Math.round((h.ymax-h.ymin)/m.y);var B=[{maxCol:Math.ceil(l/e)-1,maxRow:Math.ceil(w/b)-1,minCol:0,minRow:0}],A=2;if(0<
p)for(g=0;g<p;g++)B.push({maxCol:Math.ceil(l/A/e)-1,maxRow:Math.ceil(w/A/b)-1,minCol:0,minRow:0}),A*=2;a=new G({width:l,height:w,pixelType:k,bandCount:d,extent:h,spatialReference:q,pixelSize:m,keyProperties:x,statistics:u,histograms:f,multidimensionalInfo:a.mdInfo,colormap:t,storageInfo:new H({blockWidth:e,blockHeight:b,pyramidBlockWidth:e,pyramidBlockHeight:b,origin:v,tileInfo:c,firstPyramidLevel:y,maximumPyramidLevel:p,blockBoundary:B})});return{storageInfo:r,rasterInfo:a}};b.prototype._fetchAuxiliaryInformation=
function(a){return v(this,void 0,void 0,function(){var k,d,b,c,e,n,m,p;return x(this,function(f){switch(f.label){case 0:return k=this.request({url:this.url+"/conf.vat.json",responseType:"json"},a).then(function(a){return a}).catch(function(){return null}),d=this.request({url:this.url+"/conf.vat.dbf",responseType:"array-buffer"},a).then(function(a){return a}).catch(function(){return null}),[4,F.all([k,d])];case 1:return b=f.sent(),b[0]&&(e=b[0].fields,n=b[0].values,e&&n&&(e=e.map(function(a){return{type:"OID"===
a.name?"esriFieldTypeOID":h.get(a.type),name:a.name,alias:a.alias||a.name}}),m=n.map(function(a){return{attributes:a}}),e&&n&&(c={fields:e,features:m}))),!c&&b[1]&&(p=K.parse(b[1]),c=p.recordSet),[2,L.fromJSON(c)]}})})};b.prototype._buildCacheFilePath=function(a,b,d,f){var c=this.storageInfo.packetSize;d=Math.floor(d/c)*c;b="R"+this._toHexString4(Math.floor(b/c)*c)+"C"+this._toHexString4(d);var c="L",c=10<=a?c+a.toString():c+("0"+a.toString()),e=f&&f[0];if(!e)return this.url+"/_alllayers/"+c+"/"+
b+".bundle";f=this.rasterInfo.multidimensionalInfo.variables.filter(function(a){return a.name===e.variableName})[0].dimensions[0];a=f.values.indexOf(e.values[0]).toString(16);f=Math.max(4,Math.ceil(Math.log(f.values.length)/Math.LN2))-a.length;for(d=0;d<f;d++)a="0"+a;return this.url+"/_alllayers/"+e.variableName+"/"+("S"+a)+"/"+c+"/"+b+".bundle"};b.prototype._getIndexRecordFromBundle=function(a,b){var d=this.storageInfo.packetSize;a=a%d*d+b%d;if(0>a)throw"Invalid level / row / col";return a*this.storageInfo.recordSize+
64};b.prototype._getTileEndAndContentType=function(a,b){a=a.subarray(b,b+8);b=0;var d;for(d=0;5>d;d++)b|=(a[d]&255)<<8*d;var f=b&0xffffffffff;b=0;for(d=5;8>d;d++)b|=(a[d]&255)<<8*(d-5);return{position:f,recordSize:b&0xffffffffff}};b.prototype._toHexString4=function(a){a=a.toString(16);if(4!==a.length)for(var b=4-a.length;0<b--;)a="0"+a;return a};r([m.property({readOnly:!0})],b.prototype,"storageInfo",void 0);r([m.property({type:String,json:{write:!0}})],b.prototype,"datasetFormat",void 0);return b=
r([m.subclass("esri.layers.support.rasterDatasets.CloudRaster")],b)}(m.declared(J))});