// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(c,e,f,g){Object.defineProperty(e,"__esModule",{value:!0});c=function(c){function d(a,d){var b=c.call(this,!0)||this;b.view=a;b._canZoom=!0;b.registerIncoming("mouse-wheel",d,function(a){return b._handleMouseWheel(a)});return b}f(d,c);d.prototype._handleMouseWheel=function(a){var c=this;if(this.view.navigation.mouseWheelZoomEnabled&&(a.preventDefault(),a.stopPropagation(),this._canZoom)){var b=
this.view.mapViewNavigation;a=a.data;if(a=b.zoom(1/Math.pow(.6,1/60*a.deltaY),[a.x,a.y]))this._canZoom=!1,a.catch(function(){}).then(function(){c._canZoom=!0;b.end()})}};return d}(g.InputHandler);e.MouseWheelZoom=c});