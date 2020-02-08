// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/libs/gl-matrix-2/vec3f64 ../../../ViewAnimation ../../animation/pointToPoint/Animation ./AnimationController ../../webgl-engine/lib/Camera ../../webgl-engine/lib/Intersector".split(" "),function(f,g,k,l,m,n,p,q,r){Object.defineProperty(g,"__esModule",{value:!0});f=function(d){function a(e,a,b){var c=d.call(this,"interaction"===b?null:new m)||this;c.viewState=e;c.intersectionHelper=a;c.mode=b;c.hasTarget=!1;c.animation=
new n.default(c.viewState.mode);return c}k(a,d);Object.defineProperty(a.prototype,"isInteractive",{get:function(){return"interaction"===this.mode},enumerable:!0,configurable:!0});a.prototype.begin=function(e,a){this.hasTarget=!0;a=this.animationSettings(a);b.copyFrom(this.viewState.camera);var d=new r(this.viewState.mode);this.intersectionHelper.intersectRay(b.ray,d,h)&&(b.center=h);this.animation.update(b,e,a);this.animation.finished&&this.finish()};a.prototype.finish=function(){this.animation.currentTime=
this.animation.time;d.prototype.finish.call(this)};Object.defineProperty(a.prototype,"steppingFinished",{get:function(){return this.hasTarget&&this.animation.finished},enumerable:!0,configurable:!0});a.prototype.stepController=function(a,b){this.hasTarget&&this.animation.step(a,b)};a.prototype.onControllerEnd=function(a){this.hasTarget&&(this.animation.cameraAt(this.animation.currentTime/this.animation.time,a),this.animation.currentTime=this.animation.time);d.prototype.onControllerEnd.call(this,a)};
a.prototype.animationSettings=function(a){void 0===a&&(a={});return{apex:{maximumDistance:this.viewState.constraints.clampAltitude(Infinity)/6,ascensionFactor:void 0,descensionFactor:void 0},speedFactor:a.speedFactor,duration:a.duration,maxDuration:a.maxDuration,easing:a.easing}};return a}(p.AnimationController);g.PointToPointAnimationController=f;var b=new q.default,h=l.vec3f64.create()});