// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../core/compilerUtils ../../../../core/Error ../../../../core/Evented ../../../../core/mathUtils ../../../../core/mathUtils ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/typedArrayUtil ../../../../core/urlUtils ../../../../support/requestUtils ../../support/imageUtils ./DDSUtil ./DefaultVertexBufferLayouts ./glUtil3D ./IdGen ./Util ../../../webgl/FramebufferObject ../../../webgl/Texture ../../../webgl/Util ../../../webgl/capabilities/isWebGL2Context".split(" "),
function(I,J,m,n,r,w,x,t,u,f,p,h,q,y,z,A,B,C,D,E,F,k,G,H){return function(){function c(a,d,b){this.data=a;this.loadingController=this.loadingPromise=this.powerOfTwoStretchInfo=this.glTexture=null;this.events=new x;this.data=a;this.id=c.idGen.gen(d);this.params=b||{};this.params.mipmap=!1!==this.params.mipmap;this.params.noUnpackFlip=this.params.noUnpackFlip||!1;this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1;this.params.wrap=this.params.wrap||{s:10497,t:10497};this.params.powerOfTwoResizeMode=
this.params.powerOfTwoResizeMode||1;this.estimatedTexMemRequired=c.estimateTexMemRequired(this.data,this.params);this.startPreload()}c.prototype.startPreload=function(){var a=this.data;f.isNone(a)||(a instanceof HTMLVideoElement?this.startPreloadVideoElement(a):a instanceof HTMLImageElement&&this.startPreloadImageElement(a))};c.prototype.startPreloadVideoElement=function(a){q.isBlobProtocol(a.src)||"auto"===a.preload&&a.crossOrigin||(a.preload="auto",a.crossOrigin="anonymous",a.src=a.src)};c.prototype.startPreloadImageElement=
function(a){q.isDataProtocol(a.src)||q.isBlobProtocol(a.src)||a.crossOrigin||(a.crossOrigin="anonymous",a.src=a.src)};c.getDataDimensions=function(a){return a instanceof HTMLVideoElement?{width:a.videoWidth,height:a.videoHeight}:a};c.estimateTexMemRequired=function(a,d){if(f.isNone(a))return 0;if(h.isArrayBuffer(a)||h.isUint8Array(a))return a.byteLength;a=a instanceof Image||a instanceof ImageData||a instanceof HTMLCanvasElement||a instanceof HTMLVideoElement?c.getDataDimensions(a):d;return(d.mipmap?
4/3:1)*a.width*a.height*(d.components||4)||0};c.prototype.dispose=function(){this.data=void 0};Object.defineProperty(c.prototype,"width",{get:function(){return this.params.width},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"height",{get:function(){return this.params.height},enumerable:!0,configurable:!0});c.prototype.createDescriptor=function(a){return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?
9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:this.params.mipmap&&!this.params.disableAnisotropy?a.parameters.maxMaxAnisotropy:void 0}};c.prototype.load=function(a,d){if(f.isSome(this.glTexture))return this.glTexture;if(f.isSome(this.loadingPromise))return this.loadingPromise;var b=this.data;if(f.isNone(b))return this.glTexture=new k(a,this.createDescriptor(a),null),a.bindTexture(this.glTexture),this.glTexture;if("string"===typeof b)return this.loadFromURL(a,
d,b);if(b instanceof Image)return this.loadFromImageElement(a,d,b);if(b instanceof HTMLVideoElement)return this.loadFromVideoElement(a,d,b);if(b instanceof ImageData||b instanceof HTMLCanvasElement)return this.loadFromImage(a,b,d);if((h.isArrayBuffer(b)||h.isUint8Array(b))&&this.params.encoding===c.DDS_ENCODING)return this.loadFromDDSData(a,b);if(h.isUint8Array(b))return this.loadFromPixelData(a,b);if(h.isArrayBuffer(b))return this.loadFromPixelData(a,new Uint8Array(b));r.neverReachedSilent(b);return null};
Object.defineProperty(c.prototype,"requiresFrameUpdates",{get:function(){return this.data instanceof HTMLVideoElement},enumerable:!0,configurable:!0});c.prototype.frameUpdate=function(a,d,b){if(!(this.data instanceof HTMLVideoElement)||f.isNone(this.glTexture)||2>this.data.readyState||b===this.data.currentTime)return b;if(f.isSome(this.powerOfTwoStretchInfo)){var e=this.powerOfTwoStretchInfo;b=e.framebuffer;var c=e.vao,e=e.sourceTexture;e.setData(this.data);this.drawStretchedTexture(a,d,b,c,e,this.glTexture)}else d=
this.data,a=d.width,d=d.height,c=this.glTexture.descriptor,b=c.width,c=c.height,a!==b||d!==c?this.glTexture.updateData(0,0,0,Math.min(a,b),Math.min(d,c),this.data):this.glTexture.setData(this.data);this.glTexture.descriptor.hasMipmap&&this.glTexture.generateMipmap();return this.data.currentTime};c.prototype.loadFromDDSData=function(a,d){this.glTexture=A.createDDSTexture(a,this.createDescriptor(a),d,this.params.mipmap);a.bindTexture(this.glTexture);return this.glTexture};c.prototype.loadFromPixelData=
function(a,d){E.assert(0<this.params.width&&0<this.params.height);var b=this.createDescriptor(a);b.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408;b.width=this.params.width;b.height=this.params.height;this.glTexture=new k(a,b,d);a.bindTexture(this.glTexture);return this.glTexture};c.prototype.loadAsync=function(a){return n(this,void 0,void 0,function(){var d,b,c,g=this;return m(this,function(e){this.loadingController=d=p.createAbortController();this.loadingPromise=
b=a(d.signal);c=function(){g.loadingController===d&&(g.loadingController=null);g.loadingPromise===b&&(g.loadingPromise=null)};b.then(c,c);return[2,b]})})};c.prototype.loadFromURL=function(a,d,b){var c=this;return this.loadAsync(function(e){return n(c,void 0,void 0,function(){var c;return m(this,function(g){switch(g.label){case 0:return[4,z.requestImage(b,{signal:e})];case 1:return c=g.sent(),[2,this.loadFromImage(a,c,d)]}})})})};c.prototype.loadFromImageElement=function(a,d,b){var c=this;return b.complete?
this.loadFromImage(a,b,d):this.loadAsync(function(e){return n(c,void 0,void 0,function(){var c;return m(this,function(g){switch(g.label){case 0:return[4,y.loadImageAsync(b,b.src,!1,e)];case 1:return c=g.sent(),[2,this.loadFromImage(a,c,d)]}})})})};c.prototype.loadFromVideoElement=function(a,d,b){return 2<=b.readyState?this.loadFromImage(a,b,d):this.loadFromVideoElementAsync(a,d,b)};c.prototype.loadFromVideoElementAsync=function(a,d,b){var c=this;return this.loadAsync(function(e){return p.create(function(g,
h){var v=function(){b.removeEventListener("loadeddata",l);b.removeEventListener("error",k);f.isSome(m)&&m.remove()},l=function(){2<=b.readyState&&(v(),g(c.loadFromImage(a,b,d)))},k=function(a){v();h(a||w("Failed to load video"))};b.addEventListener("loadeddata",l);b.addEventListener("error",k);var m=p.onAbort(e,k)})})};c.prototype.loadFromImage=function(a,d,b){var e=c.getDataDimensions(d);this.params.width=e.width;this.params.height=e.height;var g=this.createDescriptor(a);g.pixelFormat=3===this.params.components?
6407:6408;if(this.requiresPowerOfTwo(a,g)&&(!u.isPowerOfTwo(e.width)||!u.isPowerOfTwo(e.height)))return this.glTexture=this.makePowerOfTwoTexture(a,d,e,g,b),a.bindTexture(this.glTexture),this.glTexture;g.width=e.width;g.height=e.height;this.glTexture=new k(a,g,d);a.bindTexture(this.glTexture);return this.glTexture};c.prototype.requiresPowerOfTwo=function(a,d){var b="number"===typeof d.wrapMode?33071===d.wrapMode:33071===d.wrapMode.s&&33071===d.wrapMode.t;return!H.default(a.gl)&&(d.hasMipmap||!b)};
c.prototype.makePowerOfTwoTexture=function(a,d,b,c,g){var e=b.width;b=b.height;var f=t.nextHighestPowerOfTwo(e),h=t.nextHighestPowerOfTwo(b);c.width=f;c.height=h;var l;switch(this.params.powerOfTwoResizeMode){case 2:c.textureCoordinateScaleFactor=[e/f,b/h];l=new k(a,c);l.updateData(0,0,0,e,b,d);break;case 1:case null:case void 0:l=this.stretchToPowerOfTwo(a,d,c,g);break;default:r.neverReached(this.params.powerOfTwoResizeMode)}c.hasMipmap&&l.generateMipmap();return l};c.prototype.stretchToPowerOfTwo=
function(a,c,b,e){var d=new k(a,b),f=new F(a,{colorTarget:0,depthStencilTarget:0},d);c=new k(a,{target:3553,pixelFormat:b.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!b.flipped,maxAnisotropy:8,preMultiplyAlpha:b.preMultiplyAlpha},c);b=C.createQuadVAO(a,B.Pos3Tex);this.drawStretchedTexture(a,e,f,b,c,d);this.requiresFrameUpdates?this.powerOfTwoStretchInfo={vao:b,sourceTexture:c,framebuffer:f}:(b.dispose(!0),c.dispose(),f.detachColorTexture(),a.bindFramebuffer(null),f.dispose());
return d};c.prototype.drawStretchedTexture=function(a,c,b,e,g,f){a.bindFramebuffer(b);b=a.getViewport();a.setViewport(0,0,f.descriptor.width,f.descriptor.height);f=c.program;a.bindProgram(f);f.setUniform4f("color",1,1,1,1);f.setUniform1i("tex",0);a.bindTexture(g,0);a.bindVAO(e);a.setPipelineState(c.pipeline);a.drawArrays(5,0,G.vertexCount(e,"geometry"));a.bindFramebuffer(null);a.setViewport(b.x,b.y,b.width,b.height)};c.prototype.unload=function(){if(f.isSome(this.powerOfTwoStretchInfo)){var a=this.powerOfTwoStretchInfo,
c=a.framebuffer,b=a.sourceTexture;a.vao.dispose(!0);b.dispose();c.dispose();this.powerOfTwoStretchInfo=this.glTexture=null}f.isSome(this.glTexture)&&(this.glTexture.dispose(),this.glTexture=null);f.isSome(this.loadingController)&&(a=this.loadingController,this.loadingPromise=this.loadingController=null,a.abort());this.events.emit("unloaded")};c.idGen=new D.IdGen;c.DDS_ENCODING="image/vnd-ms.dds";return c}()});