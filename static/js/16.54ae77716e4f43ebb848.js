webpackJsonp([16],{INgv:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("4YfN"),n=a.n(s),l=a("sRVW"),o=a("shW3"),r=a("9Wym"),i=a("Kf/3"),c=a("W/7t"),u=a("2bvH"),v={data:function(){return{title:"收藏夹",clearText:"清空收藏",iconStatus:c.a,maxAmount:i.a,deleteBtn:!0}},components:{MTitle:l.a,MButton:o.a,List:r.a},computed:n()({},Object(u.c)(["favorList"])),methods:n()({clearAll:function(){this.setFavorList([])},playAll:function(){this.replacePlayList({list:this.favorList})},removeSong:function(t){this.removeFavorSong(t)}},Object(u.d)({setFavorList:"SET_FAVOR_LIST",removeFavorSong:"REMOVE_FAVOR_SONG"}),Object(u.b)(["replacePlayList"]))},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"collect-container"},[a("el-col",{attrs:{push:3,span:18}},[a("m-title",{attrs:{data:t.title}}),t._v(" "),a("m-button",{attrs:{text:t.clearText,type:t.iconStatus.clear},nativeOn:{click:function(e){return t.clearAll(e)}}}),t._v(" "),a("m-button",{nativeOn:{click:function(e){return t.playAll(e)}}})],1),t._v(" "),a("el-col",{staticClass:"amount-tips",attrs:{push:3,span:18}},[t._v("温馨提示：收藏夹容量有限，容量达到上限时收藏歌曲系统将自动移除最早收藏的歌曲")]),t._v(" "),a("el-col",{staticClass:"amount-display",attrs:{push:3,span:18}},[t._v("当前容量："+t._s(t.favorList.length)+"/"+t._s(t.maxAmount))]),t._v(" "),t.favorList.length?a("el-col",{staticClass:"favor-songList",attrs:{push:3,span:18}},[a("list",{attrs:{dataList:t.favorList,deleteBtn:t.deleteBtn},on:{removeSong:t.removeSong}})],1):t._e(),t._v(" "),t.favorList.length?t._e():a("el-col",{staticClass:"empty-songList",attrs:{push:10,span:8}},[t._v("您的收藏夹为空，快去收藏喜欢的歌曲吧~")])],1)},staticRenderFns:[]};var p=a("C7Lr")(v,f,!1,function(t){a("WXfA")},"data-v-0dfae560",null);e.default=p.exports},WXfA:function(t,e){}});
//# sourceMappingURL=16.54ae77716e4f43ebb848.js.map