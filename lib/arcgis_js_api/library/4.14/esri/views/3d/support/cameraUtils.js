// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../Camera ../../../core/Logger ../../../core/mathUtils ../../../core/promiseUtils ../../../core/libs/gl-matrix-2/vec3 ../../../core/libs/gl-matrix-2/vec3f64 ../../../geometry/Point ../../../geometry/SpatialReference ../../../geometry/support/scaleUtils ../camera/intersectionUtils ./cameraUtilsPlanar ./cameraUtilsSpherical ./earthUtils ./ElevationProvider ./mathUtils ./projectionUtils ../../support/spatialReferenceSupport".split(" "),
function(ha,g,ia,I,J,F,T,y,U,p,q,r,u,V,W,K,L,C,M,N,k,X){function t(a){return"global"===a.viewingMode?L:K}function O(a,b,c){var d=a.state.camera,e=d.fovX,d=d.width/2/d.pixelRatio;"global"===a.viewingMode&&null!=c&&(b*=Math.cos(y.deg2rad(c)));b/=a.renderCoordsHelper.unitInMeters;return d/(96*39.37/b)/Math.tan(e/2)}function P(a,b,c){var d=a.state.camera;b=96*39.37/(d.width/2/d.pixelRatio/(b*Math.tan(d.fovX/2)));"global"===a.viewingMode&&(b/=Math.cos(y.deg2rad(c)));return b*=a.renderCoordsHelper.unitInMeters}
function Q(a,b,c,d,e,f){if(v(f)){var l=G(f.signal);z(a,d.heading,d.tilt,b,c,e,l);l.resolver.promise.then(function(b){return f.resolver.resolve(A(a,b,d.fov))},function(a){return f.resolver.reject(a)})}else return b=z(a,d.heading,d.tilt,b,c,e),A(a,b,d.fov,f)}function R(a,b,c,d,e){return t(a).directionToHeadingTilt(b,c,d,e)}function Y(a,b){return!!(a.basemapTerrain&&a.renderCoordsHelper.fromRenderCoords(b,x,a.spatialReference)&&M.getElevationAtPoint(a.basemapTerrain,x)>x.z-1)}function Z(a,b,c){return J(this,
void 0,void 0,function(){var d;return I(this,function(e){switch(e.label){case 0:return a.renderCoordsHelper.fromRenderCoords(b,x,a.spatialReference)?[4,a.elevationProvider.queryElevation(x,c)]:[2,!1];case 1:return d=e.sent(),[2,d>x.z-1]}})})}function aa(a,b,c){return J(this,void 0,void 0,function(){var d,e;return I(this,function(f){switch(f.label){case 0:d=q.vec3f64.create();if(b)return[3,1];p.vec3.copy(d,a.state.camera.center);return[3,5];case 1:if(!(b instanceof r))return[3,4];k.pointToVector(b,
d,a.renderSpatialReference);return null!=b.z||null==a.basemapTerrain?[3,3]:[4,a.elevationProvider.queryElevation(b,c)];case 2:return e=f.sent(),null!=e&&a.renderCoordsHelper.setAltitude(e,d),[2,d];case 3:return[3,5];case 4:p.vec3.copy(d,b),f.label=5;case 5:return[2,d]}})})}function ba(a,b){var c=q.vec3f64.create();b&&b instanceof r?(k.pointToVector(b,c,a.renderSpatialReference),null==b.z&&null!=a.basemapTerrain&&(b=M.getElevationAtPoint(a.elevationProvider,b),null!=b&&a.renderCoordsHelper.setAltitude(b,
c))):b?p.vec3.copy(c,b):p.vec3.copy(c,a.state.camera.center);return c}function z(a,b,c,d,e,f,l){var n=d&&d instanceof r?d:null;if(v(l))aa(a,d,l.signal).then(function(d){H(a,b,c,n,d,e,f,l)},function(a){return l.resolver.reject(a)});else return d=ba(a,d),H(a,b,c,n,d,e,f,l)}function H(a,b,c,d,e,f,l,n){d||(d=k.vectorToPoint(e,a.renderSpatialReference,a.spatialReference||u.WGS84));f=Math.max(f,a.state.constraints.minimumPoiDistance);var h=ca(a,b,c,e,f,l),g=t(a).eyeForCenterWithHeadingTilt,m=g(e,f,h.heading,
h.tilt);if(l===B.ADJUST&&"global"===a.viewingMode&&0<c){var p=function(){var h=f,g=f,m=a.state.constraints.tilt(g),g=t(a).eyeTiltToLookAtTilt(c,e,g),g=Math.min(g,.5*Math.PI),m=m.min*(1-D)+g*D,h=t(a).lookAtTiltToEyeTilt(m,e,h);l=1>c-h?B.LOCKED:B.ADJUST;return H(a,b,h,d,e,f,l,n)};if(Y(a,m.eye))return p();if(v(n)){Z(a,m.eye,n.signal).then(function(a){if(a)return p();n.resolver.resolve({eye:m.eye,up:m.up,center:q.vec3f64.clone(e),heading:m.heading,tilt:m.tilt})});return}}h=!n||v(n)?{center:q.vec3f64.create(),
eye:q.vec3f64.create(),up:q.vec3f64.create(),tilt:0,heading:0}:n;h.eye=m.eye;h.up=m.up;h.center=q.vec3f64.clone(e);h.heading=m.heading;h.tilt=m.tilt;v(n)&&n.resolver.resolve(h);return h}function ca(a,b,c,d,e,f){var l=0;if(f=f===B.ADJUST)if(l=a.pointsOfInterest.centerOnSurfaceFrequent.distance,8<Math.log(e/l)/Math.LN2)f=!0;else{var g=a.renderSpatialReference,h=a.spatialReference||u.WGS84;f=k.vectorToPoint(d,g,h);g=k.vectorToPoint(a.pointsOfInterest.centerOnSurfaceFrequent.renderLocation,g,h);l*=Math.tan(.5*
a.state.camera.fov);f=5<g.distance(f)/l}f?(b=0,f=a.state.constraints.tilt(e),f.max=Math.min(f.max,.5*Math.PI),f=f.min*(1-D)+f.max*D,c=t(a).eyeTiltToLookAtTilt(c,d,e),l=Math.min(c,f)):l=t(a).eyeTiltToLookAtTilt(c,d,e);c=l=a.state.constraints.clampTilt(e,l);c=t(a).lookAtTiltToEyeTilt(c,d,e);return{heading:b,tilt:c}}function A(a,b,c,d){a=k.vectorToPoint(b.eye,a.renderSpatialReference,a.spatialReference||u.WGS84);return a?d?(d.position=a,d.heading=b.heading,d.tilt=b.tilt,d.fov=c,d):new F(a,b.heading,
b.tilt,c):null}function G(a){return{resolver:U.createResolver(),signal:a}}function v(a){return a&&"resolver"in a}Object.defineProperty(g,"__esModule",{value:!0});var S=T.getLogger("esri.views.3d.support.cameraUtils"),w=q.vec3f64.create(),E=q.vec3f64.create(),da=q.vec3f64.create(),ea={heading:0,tilt:0},x=new r,fa=new N.Cyclical(-2.0037508342788905E7,2.0037508342788905E7),ga=new N.Cyclical(-180,180),B;(function(a){a[a.LOCKED=0]="LOCKED";a[a.ADJUST=1]="ADJUST"})(B=g.OrientationMode||(g.OrientationMode=
{}));g.headingTiltToDirectionUp=function(a,b,c,d,e){return t(a).headingTiltToDirectionUp(b,c,d,e)};g.externalToInternal=function(a,b){var c=a.renderSpatialReference,d=t(a).headingTiltToDirectionUp,e=q.vec3f64.create();if(!k.pointToVector(b.position,e,c))return null;c=d(e,b.heading,b.tilt);p.vec3.scale(c.direction,c.direction,a.state.camera.distance);p.vec3.add(c.direction,c.direction,e);a=W.cameraOnContentAlongViewDirection(a,e,c.direction,c.up);a.fov=y.deg2rad(b.fov);return a};g.internalToExternal=
function(a,b,c){var d=a.renderSpatialReference,e=p.vec3.copy(da,b.viewForward),e=R(a,b.eye,e,b.up,ea);a=a.spatialReference||u.WGS84;k.vectorToVector(b.eye,d,w,a)||(a=u.WGS84,k.vectorToVector(b.eye,d,w,a));if(!c)return new F(new r(w,a),e.heading,e.tilt,y.rad2deg(b.fov));c.position.x=w[0];c.position.y=w[1];c.position.z=w[2];c.position.spatialReference=a;c.heading=e.heading;c.tilt=e.tilt;c.fov=y.rad2deg(b.fov);return c};g.scaleToDistance=O;g.distanceToScale=P;g.fromCenterScale=function(a,b,c,d,e,f){c=
O(a,c,b.latitude);return Q(a,b,c,d,e,f)};g.fromCenterDistance=Q;g.directionToHeadingTilt=R;g.getObserverForPointAtDistance=z;g.fromExtent=function(a,b,c,d,e,f){var g,n=0;null!=b.zmax&&null!=b.zmin&&(g=(b.zmax+b.zmin)/2,n=b.zmax-b.zmin);var h,k;if("global"===a.viewingMode){if(!X.isSpatialReferenceSupported(b.spatialReference,"global"))return v(f)&&f.resolver.reject(),null;var m=new r(b.xmin,b.ymin,b.spatialReference),p=new r(b.xmax,b.ymax,b.spatialReference),q=b.spatialReference.isGeographic?ga:fa;
b=new r(q.center(m.x,p.x),(p.y+m.y)/2,b.spatialReference);null!=g&&(b.z=g);k=C.getGreatCircleSpanAt(b,m,p);h=k.lon;k=k.lat;q.diff(m.x,p.x)>q.range/2&&(h+=C.halfEarthCircumference);h=Math.min(h,C.halfEarthCircumference);k=Math.min(k,C.halfEarthCircumference)}else m=a.spatialReference||u.WGS84,h=b.xmax-b.xmin,k=b.ymax-b.ymin,b=new r({x:b.xmin+.5*h,y:b.ymin+.5*k,z:g,spatialReference:m});g=a.state.camera;n=Math.max(1/Math.tan(g.fovX/2)*h*.5,1/Math.tan(g.fovY/2)*k*.5,1/Math.tan(g.fov/2)*n*.5)/1;if(v(f))h=
G(f.signal),z(a,c,d,b,n,e,h),h.resolver.promise.then(function(b){return f.resolver.resolve(A(a,b,a.camera.fov))},function(a){return f.resolver.reject(a)});else return c=z(a,c,d,b,n,e),A(a,c,a.camera.fov,f)};g.toExtent=function(a,b,c){var d=a.renderSpatialReference,e=p.vec3.dist(b.eye,c);c=k.vectorToPoint(c,d,a.spatialReference||u.WGS84);d=2*e*Math.tan(b.fovX/2)*1;b=2*e*Math.tan(b.fovY/2)*1;return"global"===a.viewingMode?L.toExtent(a,c,d,b):K.toExtent(a,c,d,b)};var D=.7;g.observerToCamera=A;g.scaleToZoom=
function(a,b){if(a=a.basemapTerrain&&a.basemapTerrain.tilingScheme)return a.levelAtScale(b);S.error("#scaleToZoom()","Cannot compute zoom from scale without a tiling scheme")};g.zoomToScale=function(a,b){if(a=a.basemapTerrain&&a.basemapTerrain.tilingScheme)return a.scaleAtLevel(b);S.error("#zoomToScale()","Cannot compute scale from zoom without a tiling scheme")};g.scaleToResolution=function(a,b){return a.spatialReference?V.getResolutionForScale(b,a.spatialReference):void 0};g.computeScale=function(a,
b,c){var d=a.renderSpatialReference;b||(b=a.state.camera);var e;e=u.WGS84;b instanceof F?(e=b.position.latitude,k.pointToVector(b.position,w,d),k.pointToVector(c,E,d),b=p.vec3.distance(w,E)):(k.vectorToVector(b.center,d,E,e),e=E[1],b=b.distance);return P(a,b,e)};g.createAsyncContext=G;g.isAsyncContext=v});