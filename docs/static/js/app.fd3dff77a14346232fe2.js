webpackJsonp([1],{"+skl":function(t,e){},0:function(t,e){},"07PK":function(t,e,a){"use strict";e.a={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},1:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},FGQs:function(t,e,a){"use strict";var n=a("ifoU"),r=a.n(n);e.a={name:"home",data:function(){return{msg:"Welcome to Your Vue.js App",cvs:null,sqrt32:Math.sqrt(3)/2,taMap:new r.a,canvas:null}},mounted:function(){var t=document.getElementById("home-root"),e=t.clientWidth-40,a=t.clientHeight-40,n=e>a?a:e;this.canvas=new fabric.Canvas("c"),this.canvas.setWidth(e),this.canvas.setHeight(a),this.canvas.renderAll();var r=Math.round(e/2),s=Math.round(a/2),i=Math.round(.5*a/4);this.sqrt32;this.drawTriangles(r,s,Math.round(.4*n/4),4,1),this.drawTriangles(r,s,Math.round(.4*n/4),4,-1),this.canvas.renderAll()},methods:{drawTriangles:function(t,e,a,n,r){for(var s=a*this.sqrt32,i=0;i<n;i++){for(var o=e+r*i*s+r*s/2-s/2,l=t+i*a/2-a*n+a/2,u=0;u<2*n-i-1;u++){var c=l+u*a,h=this.getTriangleWrapper(c,o,a,90*r+90);this.taMap.set(this.getKey(c,o),h),this.drawTriangleWrapper(h);var d=this.getTriangleWrapper(c+a/2,o,a,90-90*r);this.taMap.set(this.getKey(c+a/2,o),d),this.drawTriangleWrapper(d)}var v=l+(2*n-i-1)*a,f=this.getTriangleWrapper(v,o,a,90*r+90);this.taMap.set(this.getKey(v,o),f),this.drawTriangleWrapper(f)}},drawTriangleWrapper:function(t){this.drawTriangle(t),this.drawLines(t)},getTriangleWrapper:function(t,e,a,n){var r={};return r.taWidth=a,r.taHeight=a*this.sqrt32,r.x=t,r.y=e,r.l=a,r.a=n,180===n?(r.taTop=e+this.sqrt32*a+1,r.taLeft=t+a/2+1,r.taAngle=180,r.taColor="#dddddd",r.lx1=a/2,r.ly1=r.taHeight,r.lx2=a,r.ly2=0,r.lx3=0,r.ly3=0):(r.taTop=e,r.taLeft=t-a/2,r.taAngle=0,r.taColor="#cccccc",r.lx1=a/2,r.ly1=0,r.lx2=a,r.ly2=r.taHeight,r.lx3=0,r.ly3=r.taHeight),r},drawTriangle:function(t){var e=new fabric.Triangle({top:t.taTop,left:t.taLeft,width:t.taWidth,height:t.taHeight,angle:t.taAngle,fill:t.taColor,selectable:!1,hoverCursor:"default"});this.canvas.add(e)},drawLines:function(t){var e=new fabric.Line([t.lx1,t.ly1,t.lx2,t.ly2],{top:t.y,left:t.x,stroke:"white",selectable:!1,hoverCursor:"default"}),a=new fabric.Line([t.lx2,t.ly2,t.lx3,t.ly3],{top:t.y+t.ly2,left:t.x-t.l/2,stroke:"white",selectable:!1,hoverCursor:"default"}),n=new fabric.Line([t.lx3,t.ly3,t.lx1,t.ly1],{top:t.y,left:t.x-t.l/2,stroke:"white",selectable:!1,hoverCursor:"default"});this.canvas.add(e),this.canvas.add(a),this.canvas.add(n)},getKey:function(t,e){return Math.round(t)+","+Math.round(e)}}}},Fnnn:function(t,e){},M93x:function(t,e,a){"use strict";function n(t){a("RHNe")}var r=a("xJD8"),s=a("kMax"),i=a("VU/8"),o=n,l=i(r.a,s.a,!1,o,null,null);e.a=l.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),r=a("M93x"),s=a("YaEn"),i=a("BTaQ"),o=a.n(i),l=a("+skl"),u=(a.n(l),a("tsU9"));a.n(u);n.default.use(o.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:s.a,template:"<App/>",components:{App:r.a}})},Odgc:function(t,e){},RHNe:function(t,e){},YaEn:function(t,e,a){"use strict";var n=a("7+uW"),r=a("/ocq"),s=a("gORT"),i=a("wUZA");n.default.use(r.a),e.a=new r.a({routes:[{path:"/",name:"home",component:i.a},{path:"/home",name:"home",component:i.a},{path:"/test",name:"test",component:s.a}]})},gORT:function(t,e,a){"use strict";function n(t){a("Fnnn")}var r=a("07PK"),s=a("x8Gt"),i=a("VU/8"),o=n,l=i(r.a,s.a,!1,o,"data-v-40211da4",null);e.a=l.exports},kMax:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:"height:"+t.fullHeight+"px",attrs:{id:"app"}},[a("Menu",{attrs:{mode:"horizontal",theme:"dark","active-name":"home"},on:{"on-select":t.go2Page}},[a("MenuItem",{attrs:{name:"home"}},[t._v(" 首页\n    ")]),t._v(" "),a("MenuItem",{attrs:{name:"test"}},[t._v(" test\n    ")])],1),t._v(" "),a("div",{staticClass:"app-main"},[a("router-view")],1)],1)},r=[],s={render:n,staticRenderFns:r};e.a=s},"wO+6":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home-root"}},[a("div",{staticClass:"c-container"},[a("canvas",{staticStyle:{border:"1px solid #dddddd"},attrs:{id:"c"}},[t._v("\n            Your browser does not support the canvas element.\n        ")])])])}],s={render:n,staticRenderFns:r};e.a=s},wUZA:function(t,e,a){"use strict";function n(t){a("Odgc")}var r=a("FGQs"),s=a("wO+6"),i=a("VU/8"),o=n,l=i(r.a,s.a,!1,o,"data-v-61690eef",null);e.a=l.exports},x8Gt:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("Community Chat")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}],s={render:n,staticRenderFns:r};e.a=s},xJD8:function(t,e,a){"use strict";e.a={name:"app",data:function(){return{fullHeight:document.documentElement.clientHeight}},mounted:function(){window.addEventListener("resize",this.handleResize)},methods:{go2Page:function(t){console.log(t),this.$router.push("/"+t)},handleResize:function(){this.fullHeight=document.documentElement.clientHeight}},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)}}}},["NHnr"]);
//# sourceMappingURL=app.fd3dff77a14346232fe2.js.map