(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-home-swiper-swiper"],{"055e":function(t,e,n){var i=n("aa06");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("5b0e339b",i,!0,{sourceMap:!1,shadowMode:!1})},"0782":function(t,e,n){"use strict";n.r(e);var i=n("7de1"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},"0fac":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-swiper__warp[data-v-2dea7496]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:relative;overflow:hidden}.uni-swiper__dots-box[data-v-2dea7496]{position:absolute;bottom:10px;left:0;right:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-swiper__dots-item[data-v-2dea7496]{width:8px;border-radius:100px;margin-left:6px;background-color:rgba(0,0,0,.4);cursor:pointer}.uni-swiper__dots-item[data-v-2dea7496]:first-child{margin:0}.uni-swiper__dots-default[data-v-2dea7496]{border-radius:100px}.uni-swiper__dots-long[data-v-2dea7496]{border-radius:50px}.uni-swiper__dots-bar[data-v-2dea7496]{border-radius:50px}.uni-swiper__dots-nav[data-v-2dea7496]{bottom:0;height:40px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:rgba(0,0,0,.2)}.uni-swiper__dots-nav-item[data-v-2dea7496]{\n  /* overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; */font-size:%?28?%;color:#fff;margin:0 15px}.uni-swiper__dots-indexes[data-v-2dea7496]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-swiper__dots-indexes-text[data-v-2dea7496]{color:#fff;font-size:%?24?%}',""]),t.exports=e},3441:function(t,e,n){"use strict";var i=n("9a17"),o=n.n(i);o.a},3991:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-swiper__warp"},[t._t("default"),"default"===t.mode?n("v-uni-view",{key:"default",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-swiper__dots-item uni-swiper__dots-bar",style:{width:(i===t.current?2*t.dots.width:t.dots.width)+"px",height:t.dots.width/3+"px","background-color":i!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,"border-radius":"0px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem(i)}}})})),1):t._e(),"dot"===t.mode?n("v-uni-view",{key:"dot",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-swiper__dots-item",style:{width:t.dots.width+"px",height:t.dots.height+"px","background-color":i!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:i!==t.current?t.dots.border:t.dots.selectedBorder},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem(i)}}})})),1):t._e(),"round"===t.mode?n("v-uni-view",{key:"round",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-swiper__dots-item ",class:[i===t.current&&"uni-swiper__dots-long"],style:{width:(i===t.current?3*t.dots.width:t.dots.width)+"px",height:t.dots.height+"px","background-color":i!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:i!==t.current?t.dots.border:t.dots.selectedBorder},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem(i)}}})})),1):t._e(),"nav"===t.mode?n("v-uni-view",{key:"nav",staticClass:"uni-swiper__dots-box uni-swiper__dots-nav",style:{"background-color":t.dotsStyles.backgroundColor,bottom:"0"}},[n("v-uni-text",{staticClass:"uni-swiper__dots-nav-item",style:{color:t.dotsStyles.color}},[t._v(t._s(t.current+1+"/"+t.info.length+" "+t.info[t.current][t.field]))])],1):t._e(),"indexes"===t.mode?n("v-uni-view",{key:"indexes",staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-swiper__dots-item uni-swiper__dots-indexes",style:{width:t.dots.width+"px",height:t.dots.height+"px",color:i===t.current?t.dots.selectedColor:t.dots.color,"background-color":i!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:i!==t.current?t.dots.border:t.dots.selectedBorder},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickItem(i)}}},[n("v-uni-text",{staticClass:"uni-swiper__dots-indexes-text"},[t._v(t._s(i+1))])],1)})),1):t._e()],2)},r=[]},"4d4a":function(t,e,n){"use strict";n.r(e);var i=n("d206"),o=n("e607");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("efec");var s,d=n("f0c5"),a=Object(d["a"])(o["default"],i["b"],i["c"],!1,null,"0c4b4a55",null,!1,i["a"],s);e["default"]=a.exports},"7de1":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniSwiperDot",props:{info:{type:Array,default:function(){return[]}},current:{type:Number,default:0},dotsStyles:{type:Object,default:function(){return{}}},mode:{type:String,default:"default"},field:{type:String,default:""}},data:function(){return{dots:{width:8,height:8,bottom:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",selectedBackgroundColor:"#333",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}},watch:{dotsStyles:function(t){this.dots=Object.assign(this.dots,this.dotsStyles)},mode:function(t){"indexes"===t?(this.dots.width=20,this.dots.height=20):(this.dots.width=8,this.dots.height=8)}},created:function(){"indexes"===this.mode&&(this.dots.width=20,this.dots.height=20),this.dots=Object.assign(this.dots,this.dotsStyles)},methods:{clickItem:function(t){this.$emit("clickItem",t)}}};e.default=i},"81be":function(t,e,n){"use strict";n.r(e);var i=n("3991"),o=n("0782");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("3441");var s,d=n("f0c5"),a=Object(d["a"])(o["default"],i["b"],i["c"],!1,null,"2dea7496",null,!1,i["a"],s);e["default"]=a.exports},"9a17":function(t,e,n){var i=n("0fac");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("352695d8",i,!0,{sourceMap:!1,shadowMode:!1})},aa06:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.swiper[data-v-0c4b4a55]{margin-bottom:10px}.swiper .swiper-box[data-v-0c4b4a55]{width:100%;height:164px}.swiper .swiper-box uni-image[data-v-0c4b4a55]{width:100%;height:164px}',""]),t.exports=e},d206:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uniSwiperDot:n("81be").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-swiper-dot",{staticClass:"swiper",attrs:{info:t.info,current:t.current,field:"content",mode:"default",dotsStyles:t.dotsStyles}},[n("v-uni-swiper",{staticClass:"swiper-box",attrs:{autoplay:!0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},t._l(t.info,(function(t,e){return n("v-uni-swiper-item",{key:e},[n("v-uni-view",{staticClass:"swiper-item"},[n("v-uni-image",{attrs:{src:t.url}})],1)],1)})),1)],1)},r=[]},e607:function(t,e,n){"use strict";n.r(e);var i=n("f9d0"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},efec:function(t,e,n){"use strict";var i=n("055e"),o=n.n(i);o.a},f9d0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{autoplay:!0,info:[{content:"内容 A",url:"https://pic7.58cdn.com.cn/wuxian/n_v20f3f27e139fa4a558b4d77c08b6b5edb_280c554d2644eae7.png"},{content:"内容 B",url:"https://a.58cdn.com.cn/app58/icons/n_v2d78cdf6fb9f5480c819245a4a7fd06f3.png"},{content:"内容 C",url:"https://pic7.58cdn.com.cn/wuxian/n_v20f3f27e139fa4a558b4d77c08b6b5edb_280c554d2644eae7.png"}],current:0,dotsStyles:{width:9,height:3,selectedBackgroundColor:"rgba(255, 255, 255, .8)",backgroundColor:"rgba(0, 0, 0, .3)",border:"rgba(255, 255, 255, .8)",selectedBorder:"1px rgba(0, 0, 0, .3) solid"}}},methods:{change:function(t){this.current=t.detail.current}}};e.default=i}}]);