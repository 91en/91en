webpackJsonp([15],{J9T6:function(e,t){},YOyO:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("4YfN"),a=s.n(r),i=s("2bvH"),o=s("W/7t"),c={data:function(){return{keywords:"",category:"",deleteTips:"清空搜索记录",options:[{value:o.c.song,label:"单曲"},{value:o.c.singer,label:"歌手"},{value:o.c.songList,label:"歌单"},{value:o.c.album,label:"专辑"},{value:o.c.mv,label:"MV"}]}},methods:a()({getSearchHistory:function(e,t){this.searchHistory;var s=e?this.searchHistory.filter(this.createFilter(e)):this.searchHistory;this.searchHistory.length&&this.searchHistory[0].value!==this.deleteTips&&s.unshift({value:this.deleteTips}),t(s)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},beginSearch:function(e){""!==e?e.length>24?this.$message({message:"检索内容过长,请提取必要关键字",type:"error"}):""!==this.category?(this.setKeywords(e),this.setCategory(this.category),this._saveSearchHistory({query:e}),this.$router.push({path:"/searchresult/"+e+"/"+this.category})):this.$message({message:"您还未选择检索类别",type:"error"}):this.$message({message:"检索内容不可为空",type:"error"})},deleteHistory:function(e){e.value===this.deleteTips&&(this._saveSearchHistory({empty:!0}),this.keywords="")}},Object(i.b)(["_saveSearchHistory"]),Object(i.d)({setKeywords:"SET_SEARCH_KEYWORDS",setCategory:"SET_SEARCH_CATEGORY"})),computed:a()({},Object(i.c)(["searchHistory","searchKeywords","searchCategory"]))},l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-row",[s("el-col",{staticClass:"search-container"},[s("el-row",{staticClass:"search-header"},[s("el-col",[e._v("全局搜索")])],1),e._v(" "),s("el-row",{staticClass:"search-body"},[s("el-col",{staticClass:"body-keywords",attrs:{span:8,push:2}},[s("el-autocomplete",{staticClass:"inline-input",attrs:{"fetch-suggestions":e.getSearchHistory,placeholder:"请输入搜索关键字",size:"mini",clearable:!0,"prefix-icon":"el-icon-search"},on:{select:e.deleteHistory},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}})],1),e._v(" "),s("el-col",{staticClass:"body-category",attrs:{span:6,push:11}},[s("el-select",{attrs:{size:"mini"},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}},e._l(e.options,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),s("el-col",{staticClass:"search-btn",attrs:{span:6,push:20}},[s("el-button",{attrs:{type:"danger",size:"mini"},nativeOn:{click:function(t){return e.beginSearch(e.keywords)}}},[e._v("搜索")])],1)],1)],1)],1)},staticRenderFns:[]};var n=s("C7Lr")(c,l,!1,function(e){s("J9T6")},"data-v-27321ec0",null);t.default=n.exports}});
//# sourceMappingURL=15.b94c9e0a8b60bd0d674f.js.map