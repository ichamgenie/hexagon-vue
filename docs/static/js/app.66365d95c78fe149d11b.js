webpackJsonp([1],{"+Jxc":function(t,e,n){"use strict";function i(t){n("dMTc")}var a=n("Lqq9"),s=n("tVD0"),r=n("VU/8"),o=i,c=r(a.a,s.a,!1,o,"data-v-17fa7a0d",null);e.a=c.exports},"+eWO":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:"height:"+t.fullHeight+"px",attrs:{id:"app"}},[n("Menu",{attrs:{mode:"horizontal",theme:"dark","active-name":"home"},on:{"on-select":t.go2Page}},[n("MenuItem",{attrs:{name:"home"}},[t._v(" Canvas\n    ")]),t._v(" "),n("MenuItem",{attrs:{name:"demo"}},[t._v(" Demo\n    ")]),t._v(" "),n("MenuItem",{attrs:{name:"about"}},[t._v(" About\n    ")])],1),t._v(" "),n("div",{staticClass:"app-main"},[n("router-view")],1)],1)},a=[],s={render:i,staticRenderFns:a};e.a=s},"+skl":function(t,e){},0:function(t,e){},1:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},"5XL0":function(t,e){},FGQs:function(t,e,n){"use strict";var i=n("BO1k"),a=n.n(i),s=n("+Jxc");e.a={name:"home",components:{field:s.a},data:function(){return{dataList:[],itemKeyList:[],sqrt32:Math.sqrt(3)/2,taLength:30,taL:0,taH:0,inputR:10,hexagonR:10,centerX:0,centerY:0,currentFlag:0,currentPattern:0,currentKey:"",currentStartPoint:null,svgWidth:500,svgHeight:500,showLines:!0,fillColor:"#ddddff",strokeColor:"#0000ff",taStrokeColor:"#eeeeeeee"}},watch:{taLength:function(t){this.refreshGuides();var e=!0,n=!1,i=void 0;try{for(var s,r=a()(this.itemKeyList);!(e=(s=r.next()).done);e=!0){var o=s.value;this.removeElement(o)}}catch(t){n=!0,i=t}finally{try{!e&&r.return&&r.return()}finally{if(n)throw i}}},inputR:function(t){this.refreshGuides();var e=!0,n=!1,i=void 0;try{for(var s,r=a()(this.itemKeyList);!(e=(s=r.next()).done);e=!0){var o=s.value;this.removeElement(o)}}catch(t){n=!0,i=t}finally{try{!e&&r.return&&r.return()}finally{if(n)throw i}}}},mounted:function(){var t=this;window.onkeydown=function(e){switch(e.code){case"ArrowUp":case"ArrowDown":t.currentFlag=(t.currentFlag+1)%2,t.removeElement(t.currentKey),t.addElement(t.currentStartPoint);break;case"ArrowLeft":t.currentPattern=(t.currentPattern+5)%6,t.removeElement(t.currentKey),t.addElement(t.currentStartPoint);break;case"ArrowRight":t.currentPattern=(t.currentPattern+1)%6,t.removeElement(t.currentKey),t.addElement(t.currentStartPoint)}},window.onresize=function(t){},t.refreshSize(t),this.refreshGuides()},methods:{refreshSize:function(t){var e=document.getElementById("svg-container");t.svgWidth=e.clientWidth,t.svgHeight=e.clientHeight,t.svgWidth>1440&&(t.inputR=20),t.centerX=Math.round(t.svgWidth/2),t.centerY=Math.round(t.svgHeight/2)},refreshGuides:function(){this.hexagonR=this.inputR,this.taL=this.taLength,this.taH=this.taL*this.sqrt32,this.dataList=[];for(var t=0;t<this.hexagonR;t++){for(var e=this.centerY-(this.hexagonR-t)*this.taH,n=this.centerX-this.taL*t*.5-this.taL*this.hexagonR*.5,i=0;i<this.hexagonR+t;i++){var a=n+i*this.taL,s={x:a,y:e,ang:0};this.dataList.push(s);var r={x:a+.5*this.taL,y:e,ang:180};this.dataList.push(r)}var o=n+(this.hexagonR+t)*this.taL,c={x:o,y:e,ang:0};this.dataList.push(c)}for(var l=0;l<this.hexagonR;l++){for(var h=this.centerY+l*this.taH,u=this.centerX-this.taL*(2*this.hexagonR-l-1)*.5,d=0;d<2*this.hexagonR-l-1;d++){var g=u+d*this.taL,v={x:g,y:h,ang:180};this.dataList.push(v);var m={x:g+.5*this.taL,y:h,ang:0};this.dataList.push(m)}var f=u+(2*this.hexagonR-l-1)*this.taL,p={x:f,y:h,ang:180};this.dataList.push(p)}},prependChild:function(t,e){e.hasChildNodes()?e.insertBefore(t,e.firstChild):e.appendChild(t)},getStartPoint:function(t,e){var n=t.target.attributes.d.value,i=n.split(" "),a={x:parseFloat(i[0].substring(1)),y:parseFloat(i[1])},s={x:parseFloat(i[2].substring(1)),y:parseFloat(i[3])},r={x:parseFloat(i[4].substring(1)),y:parseFloat(i[5])},o=[];return o.push(a),o.push(s),o.push(r),o[(3-Math.floor(this.currentPattern/2))%3]},getAngle:function(t){return(t+this.currentPattern)%6},getPointList:function(t){var e=[4,5,0,1,3];0!=this.currentFlag&&(e=[5,4,3,2,0]);var n=t,i=this.getNextPoint(n,this.getAngle(e[0]),1),a=this.getNextPoint(i,this.getAngle(e[1]),1),s=this.getNextPoint(a,this.getAngle(e[2]),2),r=this.getNextPoint(s,this.getAngle(e[3]),1),o=this.getNextPoint(r,this.getAngle(e[4]),2),c=[];return c.push(n),c.push(i),c.push(a),c.push(s),c.push(r),c.push(o),c},getItemKey:function(t){return Math.round(t.x)+"-"+Math.round(t.y)+this.currentPattern+"-"+this.currentFlag},getItemKeyTmp:function(t){return this.getItemKey(t)+"-tmp"},enterTriangle:function(t,e){this.removeElement(this.currentKey);var n=this.getStartPoint(t,e);this.currentStartPoint=n,this.addElement(n)},addElement:function(t){var e=this.getPointList(t),n="",i=!0,s=!1,r=void 0;try{for(var o,c=a()(e);!(i=(o=c.next()).done);i=!0){var l=o.value;n=n+"L"+l.x+" "+l.y+" "}}catch(t){s=!0,r=t}finally{try{!i&&c.return&&c.return()}finally{if(s)throw r}}n="M"+n.substring(1)+"Z";var h=document.createElementNS("http://www.w3.org/2000/svg","path");h.setAttribute("d",n);var u=this.getItemKeyTmp(t);h.setAttribute("id",u),h.style.fill=this.fillColor,h.style.stroke=this.strokeColor,h.style.strokeWidth=1,this.prependChild(h,document.getElementById("svg")),this.currentKey=u},exitTriangle:function(t,e){this.removeElement(this.currentKey)},removeElement:function(t){var e=document.getElementById("svg");if(e){var n=document.getElementById(t);n&&e.removeChild(n)}},addItem:function(t,e){var n=this.getStartPoint(t,e),i=this.getPointList(n),s="",r=!0,o=!1,c=void 0;try{for(var l,h=a()(i);!(r=(l=h.next()).done);r=!0){var u=l.value;s=s+"L"+u.x+" "+u.y+" "}}catch(t){o=!0,c=t}finally{try{!r&&h.return&&h.return()}finally{if(o)throw c}}s="M"+s.substring(1)+"Z";var d=document.createElementNS("http://www.w3.org/2000/svg","path");d.setAttribute("d",s);var g=this.getItemKey(n);d.setAttribute("id",g),d.style.fill=this.fillColor,d.style.stroke=this.strokeColor,d.style.strokeWidth=1,document.getElementById("svg").appendChild(d),this.itemKeyList.push(g)},getPath:function(t){var e=t.x,n=t.y,i=t.ang,a=.5*this.taL,s=e,r=n,o=s+a,c=r+this.taH,l=s-a,h=c;return 0!=i&&(s=e-a,r=n,o=e+a,c=n,l=e,h=n+this.taH),"M"+s+" "+r+" L"+o+" "+c+" L"+l+" "+h+" Z"},getStyle:function(t){var e=this.showLines?this.taStrokeColor:"#dddddd00";return 0==t.ang?{fill:"#dddddd00",stroke:e,"stroke-width":.5}:{fill:"#eeeeee00",stroke:e,"stroke-width":.5}},downloadImage:function(){var t=document.getElementById("svg-container").innerHTML,e=new Image;e.src="data:image/svg+xml;base64,"+window.btoa(unescape(encodeURIComponent(t)));var n=this;e.onload=function(){var t=document.createElement("canvas");t.width=n.svgWidth,t.height=n.svgHeight,t.getContext("2d").drawImage(e,0,0);var i=document.createElement("a");i.href=t.toDataURL("image/png"),i.download="hexagon",i.click()}},refreshSvg:function(){this.refreshSize(this),this.refreshGuides();var t=!0,e=!1,n=void 0;try{for(var i,s=a()(this.itemKeyList);!(t=(i=s.next()).done);t=!0){var r=i.value;this.removeElement(r)}}catch(t){e=!0,n=t}finally{try{!t&&s.return&&s.return()}finally{if(e)throw n}}},undoItem:function(){var t=this.itemKeyList.pop();t&&this.removeElement(t)},getNextPoint:function(t,e,n){var i=t.x,a=t.y,s=0,r=0,o=n*this.taL,c=.5*o,l=n*this.taH;switch(e%6){case 0:s=i+o,r=a;break;case 1:s=i+c,r=a-l;break;case 2:s=i-c,r=a-l;break;case 3:s=i-o,r=a;break;case 4:s=i-c,r=a+l;break;case 5:s=i+c,r=a+l}return{x:s,y:r}}}}},Lqq9:function(t,e,n){"use strict";e.a={props:{label:""}}},M93x:function(t,e,n){"use strict";function i(t){n("svRI")}var a=n("xJD8"),s=n("+eWO"),r=n("VU/8"),o=i,c=r(a.a,s.a,!1,o,null,null);e.a=c.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a=n("M93x"),s=n("YaEn"),r=n("BTaQ"),o=n.n(r),c=n("+skl"),l=(n.n(c),n("tsU9"));n.n(l);i.default.use(o.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:s.a,template:"<App/>",components:{App:a.a}})},UGKU:function(t,e){},UJfa:function(t,e,n){"use strict";e.a={}},YaEn:function(t,e,n){"use strict";var i=n("7+uW"),a=n("/ocq"),s=n("vDma"),r=n("wUZA"),o=n("zRCK");i.default.use(a.a),e.a=new a.a({routes:[{path:"/",name:"home",component:r.a},{path:"/home",name:"home",component:r.a},{path:"/demo",name:"demo",component:s.a},{path:"/about",name:"about",component:o.a}]})},dMTc:function(t,e){},iqeJ:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-root"},[n("Modal",{attrs:{width:1e3},model:{value:t.imageModal,callback:function(e){t.imageModal=e},expression:"imageModal"}},[n("div",{staticClass:"big-image-container"},[n("img",{staticClass:"big-image",attrs:{src:t.bigImage}})]),t._v(" "),n("div",{staticStyle:{height:"0px"},attrs:{slot:"footer"},slot:"footer"})]),t._v(" "),n("div",{staticClass:"list-panel"},t._l(t.imageList,function(e){return n("div",{staticClass:"image-container",on:{click:function(n){t.showBigImage(e)}}},[n("img",{staticClass:"demo-image",attrs:{src:e}})])}))],1)},a=[],s={render:i,staticRenderFns:a};e.a=s},mBew:function(t,e){},r8iW:function(t,e,n){"use strict";e.a={name:"HelloWorld",data:function(){return{imageList:[],imageModal:!1,bigImage:""}},mounted:function(){this.imageList.push("http://wx1.sinaimg.cn/large/6f90e942ly1frqdmpdw2ij211s0mrjsp.jpg"),this.imageList.push("http://wx3.sinaimg.cn/large/536cc3d9ly1frrh82wahjj21f40wr411.jpg"),this.imageList.push("http://wx4.sinaimg.cn/large/6f90e942ly1frqdmmmbfij20ty0mrtab.jpg")},methods:{showBigImage:function(t){this.bigImage=t,this.imageModal=!0}}}},svRI:function(t,e){},tVD0:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field-root"},[n("div",{staticClass:"field-label"},[t._v(t._s(t.label))]),t._v(" "),n("div",{staticClass:"field-input"},[t._t("default")],2)])},a=[],s={render:i,staticRenderFns:a};e.a=s},vDma:function(t,e,n){"use strict";function i(t){n("UGKU")}var a=n("r8iW"),s=n("iqeJ"),r=n("VU/8"),o=i,c=r(a.a,s.a,!1,o,"data-v-00bd8ae8",null);e.a=c.exports},wUZA:function(t,e,n){"use strict";function i(t){n("mBew")}var a=n("FGQs"),s=n("xFge"),r=n("VU/8"),o=i,c=r(a.a,s.a,!1,o,"data-v-2a840dc9",null);e.a=c.exports},xFge:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home-root"}},[n("Row",{staticStyle:{height:"100%",width:"100%"}},[n("Col",{staticStyle:{height:"100%",background:"#eeeeee"},attrs:{span:"18"}},[n("div",{attrs:{id:"svg-container"}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",height:t.svgHeight,width:t.svgWidth,id:"svg"}},t._l(t.dataList,function(e){return n("path",{style:t.getStyle(e),attrs:{d:t.getPath(e)},on:{mouseover:function(n){t.enterTriangle(n,e)},mouseout:function(n){t.exitTriangle(n,e)},mousedown:function(n){t.addItem(n,e)}}})}))])]),t._v(" "),n("Col",{staticStyle:{height:"100%","box-shadow":"0px 0px 16px #cccccc"},attrs:{span:"6"}},[n("div",{staticClass:"right-panel"},[n("field",{attrs:{label:"Tips"}},[n("div",{staticStyle:{color:"#777777"}},[t._v("Use ↑ ↓ ← → to rotate and flip.")])]),t._v(" "),n("field",{attrs:{label:"Width"}},[n("Slider",{attrs:{step:5,min:10,max:50,"show-stops":""},model:{value:t.taLength,callback:function(e){t.taLength=e},expression:"taLength"}})],1),t._v(" "),n("field",{attrs:{label:"Levels"}},[n("Slider",{attrs:{step:5,min:5,max:30,"show-stops":""},model:{value:t.inputR,callback:function(e){t.inputR=e},expression:"inputR"}})],1),t._v(" "),n("field",{attrs:{label:"Show Lines"}},[n("i-switch",{model:{value:t.showLines,callback:function(e){t.showLines=e},expression:"showLines"}})],1),t._v(" "),n("div",{staticStyle:{"margin-top":"15px"}},[n("Button",{attrs:{type:"ghost"},on:{click:t.undoItem}},[t._v("Undo")]),t._v(" "),n("Button",{attrs:{type:"ghost"},on:{click:t.refreshSvg}},[t._v("Refresh")]),t._v(" "),n("Button",{attrs:{type:"primary"},on:{click:t.downloadImage}},[t._v("Download")])],1)],1)])],1)],1)},a=[],s={render:i,staticRenderFns:a};e.a=s},xJD8:function(t,e,n){"use strict";e.a={name:"app",data:function(){return{fullHeight:document.documentElement.clientHeight}},mounted:function(){window.addEventListener("resize",this.handleResize)},methods:{go2Page:function(t){console.log(t),this.$router.push("/"+t)},handleResize:function(){this.fullHeight=document.documentElement.clientHeight}},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)}}},y8bn:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-root"},[n("div",{staticClass:"content-container"},[n("div",{staticClass:"content-panel"},[n("div",{staticClass:"image-panel"},[n("img",{staticClass:"about-image",attrs:{src:"http://wx2.sinaimg.cn/large/536cc3d9gy1frrewdesq3j20gk0m276s.jpg"}})]),t._v(" "),n("div",{staticClass:"mid-line"}),t._v(" "),n("div",{staticClass:"text-panel"},[n("div",{staticClass:"text-container"},[t._v("\n                    这个画图工具的想法来"),n("br"),t._v("\n                    自于高中上课的时候一次开小差"),n("br"),t._v("\n                    画了这么一个图形"),n("br"),t._v("\n                    发现一个不怎么规则的图形可以这样无限填满整个平面"),n("br"),t._v("\n                    还挺好看的"),n("br"),t._v("\n                    就是画起来有点费劲"),n("br"),t._v("\n                    后来做了码农一直想写这么一个程序"),n("br"),t._v("\n                    用来画这个图形"),n("br"),t._v("\n                    今天终于写出来了"),n("br")])])])])])}],s={render:i,staticRenderFns:a};e.a=s},zRCK:function(t,e,n){"use strict";function i(t){n("5XL0")}var a=n("UJfa"),s=n("y8bn"),r=n("VU/8"),o=i,c=r(a.a,s.a,!1,o,"data-v-297e10e9",null);e.a=c.exports}},["NHnr"]);
//# sourceMappingURL=app.66365d95c78fe149d11b.js.map