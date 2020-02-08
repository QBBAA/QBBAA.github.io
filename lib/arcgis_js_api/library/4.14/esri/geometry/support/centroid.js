// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","./coordsUtils"],function(y,h,t){function u(a,e){if(!a||!a.length)return null;for(var b=[],f=[],d=e?[Infinity,-Infinity,Infinity,-Infinity,Infinity,-Infinity]:[Infinity,-Infinity,Infinity,-Infinity],g=0,l=a.length;g<l;g++){var p=x(a[g],e,d);p&&f.push(p)}f.sort(function(a,b){var c=a[2]-b[2];0===c&&e&&(c=a[4]-b[4]);return c});f.length&&(g=6*f[0][2],b[0]=f[0][0]/g,b[1]=f[0][1]/g,e&&(g=6*f[0][4],b[2]=0!==g?f[0][3]/g:0),b[0]<d[0]||b[0]>d[1]||b[1]<d[2]||b[1]>d[3]||e&&(b[2]<d[4]||
b[2]>d[5]))&&(b.length=0);if(!b.length)if(a=a[0]&&a[0].length?w(a[0],e):null)b[0]=a[0],b[1]=a[1],e&&2<a.length&&(b[2]=a[2]);else return null;return b}function x(a,e,b){for(var f=0,d=0,g=0,l=0,p=0,n=0;n<a.length;n++){var q=a[n],c=q[0],k=q[1],m=q[2],h=a[(n+1)%a.length],v=h[0],t=h[1],u=h[2],r=c*t-v*k,l=l+r,f=f+(c+v)*r,d=d+(k+t)*r;e&&2<q.length&&2<h.length&&(r=c*u-v*m,g+=(m+u)*r,p+=r);c<b[0]&&(b[0]=c);c>b[1]&&(b[1]=c);k<b[2]&&(b[2]=k);k>b[3]&&(b[3]=k);e&&(m<b[4]&&(b[4]=m),m>b[5]&&(b[5]=m))}0<l&&(l*=-1);
0<p&&(p*=-1);if(!l)return null;a=[f,d,.5*l];e&&(a[3]=g,a[4]=.5*p);return a}function w(a,e){for(var b=e?[0,0,0]:[0,0],f=e?[0,0,0]:[0,0],d=0,g=0,l=0,h=0,n=0,q=a.length;n<q-1;n++){var c=a[n],k=a[n+1];if(c&&k){b[0]=c[0];b[1]=c[1];f[0]=k[0];f[1]=k[1];e&&2<c.length&&2<k.length&&(b[2]=c[2],f[2]=k[2]);var m=t.getLength(b,f);m&&(d+=m,c=t.getMidpoint(c,k),g+=m*c[0],l+=m*c[1],e&&2<c.length&&(h+=m*c[2]))}}return 0<d?e?[g/d,l/d,h/d]:[g/d,l/d]:a.length?a[0]:null}Object.defineProperty(h,"__esModule",{value:!0});
h.extentCentroid=function(a){return a?a.hasZ?[a.xmax-a.xmin/2,a.ymax-a.ymin/2,a.zmax-a.zmin/2]:[a.xmax-a.xmin/2,a.ymax-a.ymin/2]:null};h.polygonCentroid=function(a){return a?u(a.rings,a.hasZ):null};h.ringsCentroid=u;h.lineCentroid=w});