(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-me-me"],{"0d16":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t._t("default",null,{options:t.options,data:t.dataList,pagination:t.paginationInternal,loading:t.loading,hasMore:t.hasMore,error:t.errorMessage})],2)},o=[]},"459e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}},methods:{}};e.default=a},"4af1":function(t,e,n){"use strict";(function(t){var a=n("4ea4");n("4160"),n("c975"),n("fb6a"),n("a434"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("2909")),o={load:"load",error:"error"},r={add:"add",replace:"replace"},c=["pageCurrent","pageSize","collection","action","field","getcount","orderby","where"],u={name:"UniClouddb",props:{options:{type:[Object,Array],default:function(){return{}}},collection:{type:String,default:""},action:{type:String,default:""},field:{type:String,default:""},orderby:{type:String,default:""},where:{type:[String,Object],default:""},pageData:{type:String,default:"add"},pageCurrent:{type:Number,default:1},pageSize:{type:Number,default:20},getcount:{type:[Boolean,String],default:!1},getone:{type:[Boolean,String],default:!1},gettree:{type:[Boolean,String],default:!1},startwith:{type:String,default:""},limitlevel:{type:Number,default:10},manual:{type:Boolean,default:!1}},data:function(){return{loading:!1,hasMore:!1,dataList:this.getone?void 0:[],paginationInternal:{current:this.pageCurrent,size:this.pageSize,count:0},errorMessage:""}},created:function(){var t=this;this._isEnded=!1,this.$watch((function(){var e=[];return c.forEach((function(n){e.push(t[n])})),e}),(function(e,n){t.paginationInternal.size=t.pageSize;for(var a=!1,i=2;i<e.length;i++)if(e[i]!==n[i]){a=!0;break}a&&(t.clear(),t.reset()),e[0]!==n[0]&&(t.paginationInternal.current=t.pageCurrent),t._execLoadData()})),this.manual||this.loadData()},beforeDestroy:function(){},methods:{loadData:function(t,e){var n=null;"object"===typeof t?(t.clear&&(this.clear(),this.reset()),void 0!==t.current&&(this.paginationInternal.current=t.current),"function"===typeof e&&(n=e)):"function"===typeof t&&(n=t),this._execLoadData(n)},loadMore:function(){this._isEnded||this._execLoadData()},refresh:function(){this.clear(),this._execLoadData()},clear:function(){this._isEnded=!1,this.dataList=[]},reset:function(){this.paginationInternal.current=1},add:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.toastTitle,i=n.success,o=n.fail,r=n.complete;uni.showLoading();var c=t.database();c.collection(this.collection).add(e).then((function(t){i&&i(t),uni.showToast({title:a||"新增成功"})})).catch((function(t){o&&o(t),uni.showModal({content:t.message,showCancel:!1})})).finally((function(){uni.hideLoading(),r&&r()}))},remove:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.action,i=n.success,o=n.fail,r=n.complete,c=n.confirmTitle,u=n.confirmContent;t&&t.length&&uni.showModal({title:c||"提示",content:u||"是否删除该数据",showCancel:!0,success:function(n){n.confirm&&e._execRemove(t,a,i,o,r)}})},update:function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=a.toastTitle,o=a.success,r=a.fail,c=a.complete;uni.showLoading();var u=t.database();return u.collection(this.collection).doc(e).update(n).then((function(t){o&&o(t),uni.showToast({title:i||"修改成功"})})).catch((function(t){r&&r(t),uni.showModal({content:t.message,showCancel:!1})})).finally((function(){uni.hideLoading(),c&&c()}))},_execLoadData:function(t){var e=this;this.loading||(this.loading=!0,this.errorMessage="",this._getExec().then((function(n){e.loading=!1;var a=n.result,c=a.data,u=a.count;e._isEnded=c.length<e.pageSize,e.hasMore=!e._isEnded;var s,l=e.getone?c.length?c[0]:void 0:c;(t&&t(l,e._isEnded),e._dispatchEvent(o.load,l),e.getone||e.pageData===r.replace)?e.dataList=l:((s=e.dataList).push.apply(s,(0,i.default)(l)),e.dataList.length&&e.paginationInternal.current++);e.getcount&&(e.paginationInternal.count=u)})).catch((function(n){e.loading=!1,e.errorMessage=n,t&&t(),e.$emit(o.error,n)})))},_getExec:function(){var e=t.database();this.action&&(e=e.action(this.action)),e=e.collection(this.collection),this.where&&Object.keys(this.where).length&&(e=e.where(this.where)),this.field&&(e=e.field(this.field)),this.orderby&&(e=e.orderBy(this.orderby));var n=this.paginationInternal,a=n.current,i=n.size,o={};return this.getcount&&(o.getCount=this.getcount),this.gettree&&(o.getTree={limitLevel:this.limitlevel,startWith:this.startwith}),e=e.skip(i*(a-1)).limit(i).get(o),e},_execRemove:function(e,n,a,i,o){var c=this;if(this.collection&&e){var u=Array.isArray(e)?e:[e];if(u.length){uni.showLoading({mask:!0});var s=t.database(),l=s.command,d=s;n&&(d=d.action(n)),d.collection(this.collection).where({_id:l.in(u)}).remove().then((function(t){a&&a(t.result),c.pageData===r.replace?c.refresh():c.removeData(u)})).catch((function(t){i&&i(t),uni.showModal({content:t.message,showCancel:!1})})).finally((function(){uni.hideLoading(),o&&o()}))}}},removeData:function(t){for(var e=t.slice(0),n=this.dataList,a=n.length-1;a>=0;a--){var i=e.indexOf(n[a]._id);i>=0&&(n.splice(a,1),e.splice(i,1))}},_dispatchEvent:function(t,e){this._changeDataFunction?this._changeDataFunction(e,this._isEnded):this.$emit(t,e,this._isEnded)}}};e.default=u}).call(this,n("a9ff")["default"])},6851:function(t,e,n){"use strict";n.r(e);var a=n("459e"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"848e":function(t,e,n){"use strict";n.r(e);var a=n("4af1"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"960d":function(t,e,n){"use strict";n.r(e);var a=n("0d16"),i=n("848e");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var r,c=n("f0c5"),u=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);e["default"]=u.exports},a4a2:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={unicloudDb:n("960d").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t._v("你地方"),n("unicloud-db",{ref:"me",attrs:{collection:"uni-id-users",field:"username,nickname"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data,i=e.error;return[i?n("v-uni-view",[t._v(t._s(i.message))]):a?n("v-uni-view",[n("uni-list",t._l(a,(function(e,a){return n("uni-list-item",[n("v-uni-view",{attrs:{slot:"body"},slot:"body"},[t._v(t._s(e.username)+"\n\t\t\t\t\t\t"+t._s(e.nickname))])],1)})),1)],1):t._e()]}}])})],1)},o=[]},e4c3:function(t,e,n){"use strict";n.r(e);var a=n("a4a2"),i=n("6851");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var r,c=n("f0c5"),u=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"383aa352",null,!1,a["a"],r);e["default"]=u.exports}}]);