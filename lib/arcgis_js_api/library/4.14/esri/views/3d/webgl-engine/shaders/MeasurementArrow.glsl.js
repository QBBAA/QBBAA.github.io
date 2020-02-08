// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/makeTemplateObjectHelper","../core/shaderModules/interfaces","../core/shaderModules/ShaderBuilder"],function(h,b,c,d,g){Object.defineProperty(b,"__esModule",{value:!0});b.build=function(){var a=new g.ShaderBuilder;a.vertex.uniforms.add("proj","mat4").add("view","mat4").add("model","mat4").add("width","float");a.attributes.add("position","vec3");a.attributes.add("normal","vec3");a.attributes.add("uv0","vec2");a.attributes.add("auxpos1","float");
a.varyings.add("vtc","vec2");a.varyings.add("vlength","float");a.varyings.add("vradius","float");a.vertex.code.add(d.glsl(e||(e=c(["\n    void main(void) {\n      vec3 bitangent \x3d normal;\n\n      vtc \x3d uv0;\n      vlength \x3d auxpos1;\n      vradius \x3d 0.5 * width;\n\n      vec4 pos \x3d view * vec4((model * vec4(position + vradius * bitangent * uv0.y, 1.0)).xyz, 1.0);\n      gl_Position \x3d proj * pos;\n    }\n  "],["\n    void main(void) {\n      vec3 bitangent \x3d normal;\n\n      vtc \x3d uv0;\n      vlength \x3d auxpos1;\n      vradius \x3d 0.5 * width;\n\n      vec4 pos \x3d view * vec4((model * vec4(position + vradius * bitangent * uv0.y, 1.0)).xyz, 1.0);\n      gl_Position \x3d proj * pos;\n    }\n  "]))));
a.fragment.uniforms.add("outlineSize","float").add("outlineColor","vec4").add("stripeLength","float").add("stripeEvenColor","vec4").add("stripeOddColor","vec4");a.fragment.code.add(d.glsl(f||(f=c(["\n    const float INV_SQRT2 \x3d (1.0 / sqrt(2.0));\n\n    vec4 arrowColor(vec2 tc, float len) {\n      float d \x3d INV_SQRT2 * (tc.x - abs(tc.y));\n      d \x3d min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));\n      d \x3d min(d, 1.0 - abs(tc.y));\n\n      if (d \x3c 0.0) {\n        return vec4(0.0);\n      } else if (d \x3c outlineSize) {\n        return outlineColor;\n      } else {\n        return fract(0.5 / stripeLength * tc.x * vradius) \x3e\x3d 0.5 ? stripeOddColor : stripeEvenColor;\n      }\n    }\n\n    void main(void) {\n      vec2 ntc \x3d vec2(vtc.x / vradius, vtc.y);\n      vec4 color \x3d arrowColor(ntc, vlength / vradius);\n      if (color.a \x3d\x3d 0.0) {\n        discard;\n      }\n      gl_FragColor \x3d color;\n    }\n  "],
["\n    const float INV_SQRT2 \x3d (1.0 / sqrt(2.0));\n\n    vec4 arrowColor(vec2 tc, float len) {\n      float d \x3d INV_SQRT2 * (tc.x - abs(tc.y));\n      d \x3d min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));\n      d \x3d min(d, 1.0 - abs(tc.y));\n\n      if (d \x3c 0.0) {\n        return vec4(0.0);\n      } else if (d \x3c outlineSize) {\n        return outlineColor;\n      } else {\n        return fract(0.5 / stripeLength * tc.x * vradius) \x3e\x3d 0.5 ? stripeOddColor : stripeEvenColor;\n      }\n    }\n\n    void main(void) {\n      vec2 ntc \x3d vec2(vtc.x / vradius, vtc.y);\n      vec4 color \x3d arrowColor(ntc, vlength / vradius);\n      if (color.a \x3d\x3d 0.0) {\n        discard;\n      }\n      gl_FragColor \x3d color;\n    }\n  "]))));
return a};var e,f});