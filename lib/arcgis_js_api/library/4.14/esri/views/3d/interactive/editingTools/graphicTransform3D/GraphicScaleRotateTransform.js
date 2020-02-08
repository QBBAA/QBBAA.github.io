// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/decorateHelper ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/tsSupport/generatorHelper ../../../../../core/tsSupport/awaiterHelper ../../../../../core/tsSupport/assignHelper ../../../../../core/Handles ../../../../../core/mathUtils ../../../../../core/maybe ../../../../../core/scheduling ../../../../../core/screenUtils ../../../../../core/watchUtils ../../../../../core/libs/gl-matrix-2/mat4 ../../../../../core/libs/gl-matrix-2/mat4f64 ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../core/libs/gl-matrix-2/vec3f64 ../../../../../core/libs/gl-matrix-2/math/common ../../../../../support/elevationInfoUtils ../../Manipulator3D ../../manipulatorUtils ../../manipulatorUtils ../manipulatorDragUtils ./graphicTransform3DToolConfig ../../../support/geometryUtils ../../../support/mathUtils ../../../support/stack ../../../webgl-engine/lib/Geometry ../../../webgl-engine/lib/GeometryUtil ../../../webgl-engine/materials/ColorMaterial".split(" "),
function(B,C,aa,ba,ca,da,I,J,D,q,K,E,F,w,L,n,y,M,N,O,P,Q,G,c,u,R,l,H,A,S){function T(b,a){var c=b.allLayerViews.find(function(c){return c.layer===a.layer});if(q.isNone(a.symbol))return null;var d=a.symbol;return{symbolLayers:d.symbolLayers.map(function(a){var b=null,f=null;"object"===a.type&&(b=a.heading);f=c.getSymbolLayerSize(d,a);return{heading:b,size:f}}).toArray()}}function V(c,a,e,d){c.symbolLayers.forEach(function(c,b){var f=a.symbolLayers[b];b=f.heading;f=f.size;"object"===c.type&&(c.heading=
(q.isSome(b)?b:0)-M.toDegree(e),q.isSome(f)&&"width"in f&&(c.width=f.width*d,c.depth=f.depth*d,c.height=f.height*d))})}function z(c,a,e){c=a.projectPoint(c,E.castRenderScreenPointArray(W));a=a.renderToScreen(c,X);return n.vec3.set(e,a[0],a[1],0)}function Y(b){var a=null,e=1,d=function(){return e};return{start:function(){e=b.getScale();a=b.getScale;b.getScale=d},update:function(a){e+=((e+1)/2-e)*Math.min(a*c.RING_RESET_ANIMATION_SPEED_FACTOR,1);b.tool.updateManipulators();return.01>Math.abs(e-1)?1:
0},destroy:function(){b.getScale=a;b.tool.updateManipulators()}}}function Z(b){var a=0,e=null,d=function(){return!1};return{start:function(){e=b.getFocused;b.getFocused=d;a=0},update:function(d){a+=d;return!b.ringManipulator.focused||a>c.RING_INDICATOR_DELAY_MS?1:0},destroy:function(){b.getFocused=e;b.tool.updateManipulators()}}}Object.defineProperty(C,"__esModule",{value:!0});var g;(function(c){c.ScaleIn=32;c.ScaleOut=64;c.RotateLeft=128;c.RotateRight=256;c.Highlighted=512;c.Unlocked=1024;c.TouchInput=
32768})(g||(g={}));B=function(){function b(a){var c=this;this.mode=null;this._handles=new J;this._activeAnimation=this._scaleRotateDragData=null;this.getFocused=function(){return c.ringManipulator.focused};this.getScale=function(){return q.isSome(c._scaleRotateDragData)&&"scale"===c._scaleRotateDragData.mode?c._scaleRotateDragData.scale:1};this.tool=a.tool;this.mode=a.mode}b.prototype.destroy=function(){this._clear()};b.prototype._clear=function(){q.isSome(this._activeAnimation)&&(this._activeAnimation.frameTask.remove(),
this._activeAnimation=null);this._handles.removeAll();this.tool.manipulators.remove(this.ringManipulator);this.ringManipulator=null};Object.defineProperty(b.prototype,"dragging",{get:function(){return this.ringManipulator.dragging},enumerable:!0,configurable:!0});b.prototype.startAnimation=function(a){var c=this;this.cancelActiveAnimation();a.start();var d=K.addFrameTask({update:function(d){a.update(d.deltaTime)&&c.cancelActiveAnimation()}});this._activeAnimation=I({},a,{frameTask:d})};b.prototype.cancelActiveAnimation=
function(){q.isSome(this._activeAnimation)&&(this._activeAnimation.frameTask.remove(),this._activeAnimation.destroy(),this._activeAnimation=null)};b.prototype.recreateManipulators=function(){var a=this;this._clear();this.ringManipulator=this.createRingManipulator();this.tool.manipulators.add(this.ringManipulator);var b=G.createManipulatorDragEventPipeline(this.ringManipulator,function(d,b){a._scaleRotateDragData=null;var e=T(a.tool.view,a.tool.graphic);if(q.isNone(e))return null;var f={mode:"none",
origin:y.vec3f64.clone(d.renderLocation),angle:0,startAngle:a.tool.symbolRotationAngle,angleDir:0,scale:1,scaleDir:0,startSymbolData:e};a._scaleRotateDragData=f;b.next(G.screenToRenderPlane(a.tool.view,u.plane.fromPositionAndNormal(d.renderLocation,y.vec3f64.fromValues(d.modelTransform[8],d.modelTransform[9],d.modelTransform[10])))).next(function(d){var b=P.calculateInputRotationTransform(d.renderStart,d.renderEnd,f.origin,d.plane),e=R.cyclicalPI.shortestSignedDiff(f.angle,b);f.angleDir=D.clamp(f.angleDir+
e,-c.ROTATE_INDICATOR_DIRECTION_BUFFER,c.ROTATE_INDICATOR_DIRECTION_BUFFER);f.angle=b;e=n.vec3.subtract(l.sv3d.get(),d.renderStart,f.origin);b=n.vec3.subtract(l.sv3d.get(),d.renderEnd,f.origin);e=n.vec3.length(e);b=n.vec3.length(b);b=0===e?0:b/e;f.scaleDir=D.clamp(f.scaleDir+(b-f.scale),-c.SCALE_INDICATOR_DIRECTION_BUFFER,c.SCALE_INDICATOR_DIRECTION_BUFFER);f.scale=b;if("none"===f.mode){if(!(b=a.mode)){var g=d.plane,h=f.origin,k=a.tool.view.state.camera,p=d.renderStart,b=d.renderEnd,e=z(p,k,l.sv3d.get()),
b=z(b,k,l.sv3d.get());if(n.vec3.squaredDistance(e,b)<c.DRAG_THRESHOLD_PX*c.DRAG_THRESHOLD_PX)b=null;else var U=n.vec3.subtract(l.sv3d.get(),p,h),g=n.vec3.cross(l.sv3d.get(),U,g),p=n.vec3.add(l.sv3d.get(),p,g),h=z(h,k,l.sv3d.get()),k=z(p,k,l.sv3d.get()),p=n.vec3.subtract(l.sv3d.get(),k,e),k=n.vec3.subtract(l.sv3d.get(),e,h),e=u.ray.wrap(e,p),k=u.ray.wrap(h,k),b=u.ray.distance2(e,b)<u.ray.distance2(k,b)?"rotate":"scale"}if(q.isSome(b)){switch(b){case "rotate":a.tool.emit("graphic-rotate-start",{graphic:a.tool.graphic});
break;case "scale":a.tool.emit("graphic-scale-start",{graphic:a.tool.graphic})}f.mode=b}}if(q.isSome(a.tool.graphic.symbol)){b=a.tool.graphic.symbol.clone();e=0;k=1;switch(f.mode){default:case "none":break;case "scale":k=f.scale;break;case "rotate":e=f.angle}V(b,f.startSymbolData,e,k);a.tool.graphic.symbol=b}switch(d.action){case "start":case "update":switch(f.mode){case "rotate":a.tool.emit("graphic-rotate",{graphic:a.tool.graphic,angle:f.angle,type:"rotate"});break;case "scale":a.tool.emit("graphic-scale",
{graphic:a.tool.graphic,scale:f.scale,type:"scale"})}break;case "end":switch(f.mode){case "rotate":a.tool.emit("graphic-rotate-stop",{graphic:a.tool.graphic});break;case "scale":a.tool.emit("graphic-scale-stop",{graphic:a.tool.graphic})}}"end"===d.action&&(a.startAnimation(Y(a)),a._scaleRotateDragData=null);a.tool.updateManipulators()})});this._handles.add(b);this._handles.add([F.init(this.tool.graphic,"geometry",function(){Q.placeManipulatorAtGraphic(a.ringManipulator,a.tool.graphic)}),this.ringManipulator.events.on("focus",
function(c){"focus"===c.action?a.startAnimation(Z(a)):a.tool.updateManipulators()}),this.ringManipulator.events.on("immediate-click",function(a){a.stopPropagation()}),F.init(this.tool.graphic,["visible","layer.visible"],function(){a.ringManipulator.visible=a.tool.graphic.visible&&a.tool.graphic.layer.visible})])};b.prototype.updateManipulators=function(a,c){var b=w.mat4.identity(l.sm4d.get()),e=this.tool.symbolRotationAngle;0!==e&&w.mat4.rotate(b,b,e,y.vec3f64.fromValues(0,0,1));var e=this.getScale(),
e=w.mat4.fromScaling(l.sm4d.get(),n.vec3.set(l.sv3d.get(),e,e,e)),t=w.mat4.identity(l.sm4d.get());w.mat4.multiply(t,a,e);w.mat4.multiply(t,t,b);this.ringManipulator.modelTransform=t;this.ringManipulator.state=0;this.ringManipulator.state|=!0===c?g.Highlighted:0;this.ringManipulator.state|=q.isSome(this._scaleRotateDragData)&&"none"!==this._scaleRotateDragData.mode?0:g.Unlocked;if(q.isSome(this._scaleRotateDragData))switch(this._scaleRotateDragData.mode){case "rotate":this.ringManipulator.state|=0>
this._scaleRotateDragData.angleDir?g.RotateLeft:g.RotateRight;break;case "scale":this.ringManipulator.state|=0>this._scaleRotateDragData.scaleDir?g.ScaleIn:g.ScaleOut}};b.prototype.createRingManipulator=function(){for(var a=function(a,b,e){for(var d=[],f=Math.ceil(c.GEOMETRY_SEGMENTS*(b-a)/(2*Math.PI)),g=0;g<f+1;g++){var h=a+g*(b-a)/f;d.push(y.vec3f64.fromValues(e*Math.cos(h),e*Math.sin(h),0))}return d},b=function(b){return a(0,2*Math.PI,b)},d=function(a,b){return new H(A.createPathExtrusionGeometry([[-b/
2,0],[b/2,0],[b/2,c.RING_HEIGHT/2],[-b/2,c.RING_HEIGHT/2]],a,[],[],!1),"graphic-transform-ring")},l=b(c.RING_RADIUS),t=d(l,c.RING_THICKNESS),f=[],n=[],q=[],v=0;2>v;v++){var m=v*Math.PI-Math.PI/4,h=Math.PI/2-c.ROTATE_INDICATOR_ARC_LENGTH,k=m+h,m=m+Math.PI/2-h,h=a(k,m,c.INNER_INDICATOR_RADIUS),p=d(h,c.INDICATOR_THICKNESS);q.push(h);f.push(p);n.push(p);for(p=0;2>p;p++){var u=0===p,r=L.mat4f64.create();if(u){w.mat4.scale(r,r,[1,-1,1]);w.mat4.rotate(r,r,-k,[0,0,1]);var x=Math.round(c.ROTATE_INDICATOR_ARROW_PLACEMENT_PERCENTAGE*
(h.length-1))}else w.mat4.rotate(r,r,m,[0,0,1]),x=Math.round((1-c.ROTATE_INDICATOR_ARROW_PLACEMENT_PERCENTAGE)*(h.length-1));r[12]=h[x][0];r[13]=h[x][1];r[14]=h[x][2];x=A.createExtrudedTriangle(c.ROTATE_INDICATOR_ARROW_TIP_LENGTH,0,c.ROTATE_INDICATOR_ARROW_TIP_RADIUS,c.RING_HEIGHT);A.transformInPlace(x,r);r=new H(x,"graphic-transform-ring-rotate");(u?f:n).push(r)}}p=[];for(v=0;2>v;v++)m=v*Math.PI-Math.PI/4,h=Math.PI/2-c.SCALE_INDICATOR_ARC_LENGTH,k=m+h,m=m+Math.PI/2-h,h=a(k,m,c.OUTER_INDICATOR_RADIUS),
p.push(d(h,c.INDICATOR_THICKNESS));v=b(c.RING_RADIUS+c.SCALE_INDICATOR_OFFSET1);k=b(c.RING_RADIUS+c.SCALE_INDICATOR_OFFSET2);v=d(v,c.INDICATOR_THICKNESS);k=d(k,c.INDICATOR_THICKNESS);m=b(c.RING_RADIUS-c.SCALE_INDICATOR_OFFSET1);h=b(c.RING_RADIUS-c.SCALE_INDICATOR_OFFSET2);b=d(m,c.INDICATOR_THICKNESS);d=d(h,c.INDICATOR_THICKNESS);m=this.createMaterial();h=this.createMaterial(.66);r=this.createMaterial(.5);u=this.createMaterial(.33);t=[{geometry:t,material:m,stateMask:g.Highlighted},{geometry:t,material:r}];
this.mode&&"scale"!==this.mode||(t=t.concat([{geometry:p,material:m,stateMask:g.Highlighted|g.Unlocked},{geometry:v,material:h,stateMask:g.Highlighted|g.ScaleIn},{geometry:k,material:u,stateMask:g.Highlighted|g.ScaleIn},{geometry:b,material:h,stateMask:g.Highlighted|g.ScaleOut},{geometry:d,material:u,stateMask:g.Highlighted|g.ScaleOut}]));this.mode&&"rotate"!==this.mode||(t=t.concat([{geometry:n,material:m,stateMask:g.Highlighted|g.Unlocked},{geometry:f,material:m,stateMask:g.Highlighted|g.RotateLeft},
{geometry:n,material:m,stateMask:g.Highlighted|g.RotateRight}]));l=[l].concat(q);return new O.Manipulator3D({view:this.tool.view,renderObjects:t,autoScaleRenderObjects:!1,radius:c.RING_THICKNESS,focusMultiplier:1,touchMultiplier:1.5,elevationInfo:N.getGraphicEffectiveElevationInfo(this.tool.graphic),collisionType:{type:"ribbon",paths:l,direction:y.vec3f64.fromValues(0,0,1)}})};b.prototype.createMaterial=function(a){void 0===a&&(a=1);var b=c.HANDLE_COLOR.concat([a]);a=new S({color:b,transparent:1!==
a,cullFace:2},"graphic-transform");a.renderOccluded=2;return a};return b}();C.GraphicScaleRotateTransform=B;var W=y.vec3f64.create(),X=E.createScreenPointArray()});