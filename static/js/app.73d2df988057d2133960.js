webpackJsonp([18],{"55++":function(t,e){},"9cIF":function(t,e,n){"use strict";e.a=function(t){var e=i.b+"netease/url",n={isRedirect:0,id:t.id};return r.a.get(Object(a.b)(e,n))},e.b=function(t){var e={id:t,type:"lrc",key:"523077333"};return r.a.get(Object(a.b)("https://api.mlwei.com/music/api/wy/",e))};var i=n("T452"),s=n("84iU"),r=n.n(s),a=n("Gdqy")},FTC2:function(t,e){},Gdqy:function(t,e,n){"use strict";e.b=function(t,e){var n=t+"?";for(var i in e)n+=i+"="+e[i]+"&";return n.slice(0,n.length-1)},e.e=function(t){for(var e="",n=0;n<t.length;n++)e+=t[n]+"/";return e.slice(0,e.length-1)},e.f=function(t){for(var e="",n=0;n<t.length;n++)e+=t[n].name+"/";return e.slice(0,e.length-1)},e.h=function(t){var e=new Date(t),n=e.getFullYear(),i=(e.getMonth()+1).toString().padStart(2,"0"),s=e.getDate().toString().padStart(2,"0");return n+"-"+i+"-"+s},e.a=function(t){for(var e=0;e<t.length;e++){var n=s(t[e].name);t[e].tag=n}return t},e.c=function(t){for(var e={},n=[],i=[],s=0;s<t.length;s++)e[t[s].tag]?e[t[s].tag].push(t[s]):(e[t[s].tag]=[t[s]],n.push(t[s].tag));"*"===(n=n.sort())[0]&&(n.shift(),n.push("*"));for(var r=0;r<n.length;r++)i.push(e[n[r]]);return i},e.i=function(t){var e=t/1e3,n=Math.floor(e/60).toString().padStart(2,"0"),i=Math.floor(e%60).toString().padStart(2,"0");return n+":"+i},e.d=function(t){for(var e=t.slice(),n=0;n<t.length;n++){var i=(r=0,a=n,Math.floor(Math.random()*(a-r+1)+r)),s=e[n];e[n]=e[i],e[i]=s}var r,a;return e},e.g=function(t){var e="";return t.forEach(function(t){e=e+t+"/"}),e=e.slice(0,e.length-1)};var i=n("aEOX");function s(t){var e=t.slice(0,1),n=/[a-zA-Z]/;return n.test(e)?e.toLocaleUpperCase():n.test(i(e,{style:i.STYLE_FIRST_LETTER}))?i(e,{style:i.STYLE_FIRST_LETTER,heteronym:!0})[0][0].toLocaleUpperCase():"*"}},"Kf/3":function(t,e,n){"use strict";n.d(e,"a",function(){return l}),e.g=function(t){var e=t.query;if(t.empty)return void i.a.remove(r);var n=i.a.get(r,[]);return s=n,a=e,c=function(t){return t===e},l=o,u=s.findIndex(c),0!==u&&(u>0&&s.splice(u,1),s.unshift(a),l&&s.length>l&&s.pop()),i.a.set(r,n),n;var s,a,c,l,u},e.d=function(){return i.a.get(r,[])},e.f=function(t){var e=t;e.length>l&&(e=t.slice(0,l));for(var n=0;n<e.length;n++)e[n].lyrics="";i.a.set(a,e)},e.c=function(){var t=[];return i.a.get(a,[]).forEach(function(e){t.push(new s.a(e))}),t},e.e=function(t){for(var e=0;e<t.length;e++)t[e].lyrics="";i.a.set(c,t)},e.b=function(){var t=[];return i.a.get(c,[]).forEach(function(e){t.push(new s.a(e))}),t};var i=n("IKiI"),s=n("PvFA"),r="__search__",a="__list__",c="__favorite__",o=6,l=64},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={};n.d(i,"replacePlayList",function(){return j}),n.d(i,"addToList",function(){return F}),n.d(i,"clearList",function(){return V}),n.d(i,"_saveSearchHistory",function(){return X});var s={};n.d(s,"singer",function(){return K}),n.d(s,"playing",function(){return z}),n.d(s,"playList",function(){return Q}),n.d(s,"sequenceList",function(){return W}),n.d(s,"mode",function(){return B}),n.d(s,"showList",function(){return J}),n.d(s,"currentIndex",function(){return Z}),n.d(s,"sequenceIndex",function(){return tt}),n.d(s,"currentSong",function(){return et}),n.d(s,"currentSongList",function(){return nt}),n.d(s,"songReady",function(){return it}),n.d(s,"lyricsReady",function(){return st}),n.d(s,"isRandom",function(){return rt}),n.d(s,"currentAlbum",function(){return at}),n.d(s,"searchHistory",function(){return ct}),n.d(s,"searchKeywords",function(){return ot}),n.d(s,"searchCategory",function(){return lt}),n.d(s,"searchResult",function(){return ut}),n.d(s,"currentPage",function(){return ht}),n.d(s,"favorList",function(){return ft}),n.d(s,"currentMV",function(){return dt}),n.d(s,"mvMode",function(){return pt});var r=n("EqYI"),a=n("4YfN"),c=n.n(a),o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-container"},[n("el-row",{staticClass:"header-title"},[n("el-col",{attrs:{span:24}},[n("div",{staticClass:"grid-content header-text"},[t._v("Yuki Music")])])],1),t._v(" "),n("el-row",{staticClass:"nav-bar"},[n("el-col",{staticClass:"nav-item",attrs:{span:4,gutter:0}},[n("router-link",{staticClass:"item-link",attrs:{to:"/recommend"}},[t._v("推荐")])],1),t._v(" "),n("el-col",{staticClass:"nav-item",attrs:{span:4,gutter:0}},[n("router-link",{staticClass:"item-link",attrs:{to:"/topsinger"}},[t._v("歌手")])],1),t._v(" "),n("el-col",{staticClass:"nav-item",attrs:{span:4,gutter:0}},[n("router-link",{staticClass:"item-link",attrs:{to:"/hotsonglist"}},[t._v("歌单")])],1),t._v(" "),n("el-col",{staticClass:"nav-item",attrs:{span:4,gutter:0}},[n("router-link",{staticClass:"item-link",attrs:{to:"/search"}},[t._v("搜索")])],1),t._v(" "),n("el-col",{staticClass:"nav-item",attrs:{span:4,gutter:0}},[n("router-link",{staticClass:"item-link",attrs:{to:"/mvrecommend"}},[t._v("MV")])],1),t._v(" "),n("el-col",{staticClass:"nav-item",attrs:{span:4,gutter:0}},[n("router-link",{staticClass:"item-link",attrs:{to:"/collect"}},[t._v("收藏")])],1)],1)],1)},staticRenderFns:[]};var l=n("C7Lr")({},o,!1,function(t){n("55++")},"data-v-66aa821f",null).exports,u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-row",{staticClass:"footer-container"},[e("el-col",{attrs:{span:24}},[e("p",{staticClass:"grid-content"},[this._v("Designed by Tanqurey")])])],1)},staticRenderFns:[]};var h=n("C7Lr")({},u,!1,function(t){n("mo8t")},"data-v-6702ef4e",null).exports,f=n("2bvH"),d=n("Gdqy"),p=n("9cIF"),v=n("T452"),m=n("W/7t"),g=n("AA3o"),y=n.n(g),_=n("xSur"),L=n.n(_),S=/\[(\d{2,}):(\d{2})(?:\.(\d{2,3}))?]/g,T=0,E={title:"ti",artist:"ar",album:"al",offset:"offset",by:"by"};function C(){}var I=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C;y()(this,t),this.lrc=e,this.tags={},this.lines=[],this.handler=n,this.state=T,this.curLine=0,this._init()}return L()(t,[{key:"_init",value:function(){this._initTag(),this._initLines()}},{key:"_initTag",value:function(){for(var t in E){var e=this.lrc.match(new RegExp("\\["+E[t]+":([^\\]]*)]","i"));this.tags[t]=e&&e[1]||""}}},{key:"_initLines",value:function(){for(var t=this.lrc.split("\n"),e=0;e<t.length;e++){var n=t[e],i=S.exec(n);if(i){var s=n.replace(S,"").trim();if(s){var r=i[3]||0,a=r.length,c=parseInt(r,10);c=a>2&&c<100?c:c>99?c:10*c,this.lines.push({time:60*i[1]*1e3+1e3*i[2]+c,txt:s})}}}this.lines.sort(function(t,e){return t.time-e.time})}},{key:"_findCurNum",value:function(t){for(var e=0;e<this.lines.length;e++)if(t<=this.lines[e].time)return e;return this.lines.length-1}},{key:"_callHandler",value:function(t){t<0||this.handler({txt:this.lines[t].txt,lineNum:t})}},{key:"_playRest",value:function(){var t=this,e=this.lines[this.curNum].time-(+new Date-this.startStamp);this.timer=setTimeout(function(){t._callHandler(t.curNum++),t.curNum<t.lines.length&&1===t.state&&t._playRest()},e)}},{key:"play",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments[1];this.lines.length&&(this.state=1,this.curNum=this._findCurNum(t),this.startStamp=+new Date-t,e||this._callHandler(this.curNum-1),this.curNum<this.lines.length&&(clearTimeout(this.timer),this._playRest()))}},{key:"togglePlay",value:function(){var t=+new Date;1===this.state?(this.stop(),this.pauseStamp=t):(this.state=1,this.play((this.pauseStamp||t)-(this.startStamp||t),!0),this.pauseStamp=0)}},{key:"stop",value:function(){this.state=T,clearTimeout(this.timer)}},{key:"seek",value:function(t){this.play(t)}}]),t}(),b=n("iVXR"),R=n.n(b),A={created:function(){this.sequenceList.length&&this.setCurrentIndex(0)},data:function(){return{progress:0,volume:100,volDisplay:!1,currentTime:"00:00",currentLyrics:{},currentLineNumber:0,playUrl:"",ListHandler:!1,currentListIndex:null,ops:{bar:{background:"#D32F2F",keepShow:!0}}}},methods:c()({},Object(f.d)({toggleListDisplay:"TOGGLE_LIST",setState:"SET_PLAYING_STATE",giveSongUrl:"GIVE_SONG_URL",setCurrentIndex:"SET_CURRENT_INDEX",setMode:"SET_PLAY_MODE",setPlayList:"SET_PLAYLIST",setSongReadyStatus:"SET_SONG_READY_STATUS",setLyricsReadyStatus:"SET_LYRICS_READY_STATUS",removeSong:"REMOVE_SONG",setIsRandom:"SET_IS_RANDOM"}),{toggleVol:function(){this.volDisplay=!this.volDisplay},_transTime:function(t){return Object(d.i)(t)},sliderUpdate:function(){var t=this.$refs.player;this.progress=1e3*t.currentTime/this.currentSong.duration*100,this.currentTime=Object(d.i)(1e3*t.currentTime)},mouseChange:function(t){var e=this.$refs.player,n=t/100*this.currentSong.duration/1e3;if(this.currentLyrics.seek(1e3*n),e.paused)return this.currentLyrics.togglePlay(),void(e.currentTime=n);e.pause(),e.currentTime=n,e.play()},togglePlay:function(){if(0!==this.playList.length){var t=this.$refs.player;t.paused?(this.setState(!0),t.play()):(this.setState(!1),t.pause())}else this.$message({message:"播放列表内没有歌曲，请进行添加",type:"warning"})},prev:function(){if(this.songReady&&this.lyricsReady){var t=void 0;t=0==this.currentIndex?this.playList.length-1:this.currentIndex-1,this.setState(!0),this.setCurrentIndex(t)}},next:function(){if(this.songReady&&this.lyricsReady){var t=void 0;t=this.currentIndex==this.playList.length-1?0:this.currentIndex+1,this.setState(!0),this.setCurrentIndex(t)}},ready:function(){this.setSongReadyStatus(!0),this.lyricsReady||this._getLyrics()},error:function(){""!==this.playUrl&&(this.$message({message:"版权受限，已为您跳过该歌曲",type:"error"}),this._removeSong(this.sequenceIndex))},toggleMode:function(){var t=(this.mode+1)%3;this.setMode(t);var e=null;t===m.b.random?(e=Object(d.d)(this.sequenceList),this.resetCurrentIndex(e),this.setPlayList(e),this.setIsRandom(!0)):t===m.b.sequence&&(e=this.sequenceList,this.resetCurrentIndex(e),this.setPlayList(e))},resetCurrentIndex:function(t){var e=this,n=t.findIndex(function(t){return t.id===e.currentSong.id});this.setCurrentIndex(n)},end:function(){this.currentLineNumber=-1,this.mode===m.b.loop||1===this.playList.length?(this.currentLyrics.seek(0),this.$refs.lyricsScroller.scrollTo({y:-130},100),this.loop()):this.next()},loop:function(){this.$refs.player.currentTime=0,this.$refs.player.play()},lyricHandler:function(t){var e=t.lineNum;t.txt;if(this.currentLineNumber=e,this.$refs.lyricsItem[e]){var n=this.$refs.lyricsItem[e].offsetTop;this.$refs.lyricsScroller.scrollTo({y:n-130},100)}else this.currentLyrics.stop()},_getLyrics:function(){var t=this;0!==this.sequenceList.length&&(this.currentSong.lyrics?(this.currentLyrics=new I(this.currentSong.lyrics,this.lyricHandler),this.setLyricsReadyStatus(!0)):this.currentSong.getLyrics().then(function(e){t.currentLyrics.lines&&t.currentLyrics.stop(),t.currentLyrics=new I(e,t.lyricHandler),t.setLyricsReadyStatus(!0)}),this.currentLineNumber=-1,this.$refs.lyricsScroller.scrollTo({y:-130},100))},changeSong:function(t){if(this.mode!==m.b.sequence){for(var e=0;e<this.playList.length;e++)if(this.playList[e].id===this.sequenceList[t].id)return void this.setCurrentIndex(e)}else this.setCurrentIndex(t)},_clearList:function(){if(0!=this.playList.length){var t=this.$refs.player;t.pause(),t.currentTime=0,this.progress=0,this.clearList(),this.setState(!1),this.$message({message:"已为您清空列表，请重新添加歌曲",type:"success"})}},toggleListHandler:function(t){this.currentListIndex=t>-1?t:-1},_removeSong:function(t){if(this.playList.length>1)this.sequenceList[t].id===this.currentSong.id&&this.next();else{var e=this.$refs.player;e.pause(),this.setState(!1),e.currentTime=0}this.progress=0,this.removeSong(t)}},Object(f.b)(["clearList"])),props:{songInfo:{type:Array,default:function(){return[]}}},computed:c()({},Object(f.c)(["playList","currentSong","currentIndex","showList","playing","mode","sequenceList","songReady","lyricsReady","sequenceIndex","isRandom","mvMode"]),{iconMode:function(){return this.mode==m.b.sequence?"icon-danquxunhuan":this.mode==m.b.loop?"icon-suiji":"icon-liebiaoxunhuan"}}),watch:{currentSong:function(t,e){var n=this;if(t.id!==e.id){this.currentLyrics instanceof I&&this.currentLyrics.stop(),this.setLyricsReadyStatus(!1),this.setSongReadyStatus(!1),""===t.url?Object(p.a)(t).then(function(t){if(t.data.code==v.a){var e=n.currentIndex,i=t.data.data;n.playUrl=i,n.giveSongUrl({index:e,url:i})}}):this.playUrl=t.url;var i=setTimeout(function(){if(n.$refs.listItem[n.sequenceIndex]){var t=n.$refs.listItem[n.sequenceIndex].$el.offsetTop;n.$refs.listScroller.scrollTo({y:t-130},100)}clearTimeout(i)})}},volume:function(t){var e=t/100;this.$refs.player.volume=e},playing:function(t){if(this.currentLyrics.lines){if(!this.playList.length)return void this.currentLyrics.stop();this.currentLyrics.togglePlay()}},lyricsReady:function(t){t&&this.playing&&(this.currentLyrics.play(),this.$refs.player.play())},showList:function(t){var e=this,n=setTimeout(function(){if(t&&-1!=e.currentLineNumber&&e.currentLyrics.lines&&e.$refs.lyricsItem){var i=e.$refs.lyricsItem[e.currentLineNumber].offsetTop;e.$refs.lyricsScroller.scrollTo({y:i-130},100),clearInterval(n)}},100)},isRandom:function(t){if(this.mode===m.b.random&&!t){var e=Object(d.d)(this.sequenceList);this.resetCurrentIndex(e),this.setPlayList(e),this.setIsRandom(!0)}},mvMode:function(t){!0===t&&(this.$refs.player.pause(),this.setState(!1))}},components:{vuescroll:R.a}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block player-container"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showList,expression:"showList"}],staticClass:"playlist-container"},[n("el-row",{staticClass:"list-header"},[n("el-col",{staticClass:"header header-playlist",attrs:{span:12}},[t._v("\n        播放列表 ("+t._s(t.playList.length)+")\n        "),n("p",{staticClass:"header-emptylist iconfont icon-jinzhi",on:{click:t._clearList}},[t._v(" 清空列表")])]),t._v(" "),n("el-col",{staticClass:"header header-songname",attrs:{span:11}},[t._v(t._s(t.currentSong.name?t.currentSong.name:"播放列表为空"))]),t._v(" "),n("el-col",{staticClass:"header header-close",attrs:{span:1}},[n("p",{staticClass:"header-closelist iconfont icon-shanchu",on:{click:t.toggleListDisplay}})])],1),t._v(" "),n("el-row",[n("el-col",{staticClass:"playlist",attrs:{span:12}},[n("vuescroll",{ref:"listScroller",attrs:{ops:t.ops}},t._l(t.sequenceList,function(e,i){return n("el-row",{key:i,ref:"listItem",refInFor:!0,staticClass:"playlist-item",class:{"item-active":t.sequenceList[i].id===t.currentSong.id},nativeOn:{mouseenter:function(e){return t.toggleListHandler(i)},mouseleave:function(e){return t.toggleListHandler()}}},[n("el-col",{attrs:{span:11,title:t.sequenceList[i].name}},[t._v(t._s(t.sequenceList[i].name))]),t._v(" "),n("el-col",{attrs:{span:2}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.currentListIndex===i,expression:"currentListIndex===idx"}],staticClass:"iconfont icon-zanting list-play-btn",on:{click:function(e){return t.changeSong(i)}}})]),t._v(" "),n("el-col",{attrs:{span:2}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.currentListIndex===i,expression:"currentListIndex===idx"}],staticClass:"iconfont icon-jinzhi list-remove-btn",on:{click:function(e){return t._removeSong(i)}}})]),t._v(" "),n("el-col",{attrs:{span:3}},[t._v(t._s(t._transTime(t.sequenceList[i].duration)))]),t._v(" "),n("el-col",{attrs:{span:6,title:t.sequenceList[i].singer,tag:"li"}},[t._v(t._s(t.sequenceList[i].singer))])],1)}),1)],1),t._v(" "),n("el-col",{staticClass:"lyrics",attrs:{span:12}},[n("vuescroll",{ref:"lyricsScroller",attrs:{ops:t.ops}},[t.currentLyrics.lines&&this.playList.length?n("div",{staticClass:"lyrics-container"},[n("div",{staticClass:"blank"}),t._v(" "),0!=t.currentLyrics.lines.length?n("ul",t._l(t.currentLyrics.lines,function(e,i){return n("li",{key:i,ref:"lyricsItem",refInFor:!0,staticClass:"each-lyrics",class:{currentLyric:i===t.currentLineNumber}},[t._v(t._s(e.txt))])}),0):n("div",{staticClass:"each-lyrics"},[t._v("暂无歌词或为纯音乐")]),t._v(" "),n("div",{staticClass:"blank"})]):t._e()])],1)],1)],1),t._v(" "),n("audio",{ref:"player",attrs:{src:t.playUrl},on:{canplaythrough:t.ready,error:function(e){return t.error()},ended:t.end,timeupdate:t.sliderUpdate}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.volDisplay,expression:"volDisplay"}],staticClass:"volume-adjust"},[n("div",{staticClass:"block"},[n("el-slider",{staticClass:"volume-slider",attrs:{vertical:""},model:{value:t.volume,callback:function(e){t.volume=e},expression:"volume"}})],1)]),t._v(" "),n("div",{staticClass:"player-body"},[n("el-row",[n("el-col",{attrs:{span:3}},[n("ul",{staticClass:"react-left"},[n("li",{staticClass:"left-item kuaitui iconfont icon-kuaitui",on:{click:t.prev}}),t._v(" "),n("li",{staticClass:"left-item bofang iconfont",class:{"icon-zanting":!t.playing,"icon-bofang":t.playing},on:{click:t.togglePlay}}),t._v(" "),n("li",{staticClass:"left-item kuaijin iconfont icon-kuaijin",on:{click:t.next}})])]),t._v(" "),n("el-col",{staticClass:"pic",attrs:{span:2}},[n("img",{attrs:{src:t.currentSong.albumPic,alt:""}})]),t._v(" "),n("el-col",{staticClass:"slider-container",attrs:{span:11}},[n("el-row",{staticClass:"slider"},[n("el-col",{staticClass:"song-info"},[n("div",{staticClass:"info-name"},[t._v(t._s(t.currentSong.name))]),t._v(" "),n("div",{staticClass:"info-singer"},[t._v("  "+t._s(t.currentSong.singer))])]),t._v(" "),n("el-slider",{staticClass:"slider-body",attrs:{"show-tooltip":!1},on:{change:t.mouseChange},model:{value:t.progress,callback:function(e){t.progress=e},expression:"progress"}})],1)],1),t._v(" "),n("el-col",{staticClass:"time",attrs:{span:3}},[t.currentSong.id?n("span",{staticClass:"current-time"},[t._v(t._s(t.currentTime))]):t._e(),t._v(" "),t.currentSong.id?n("span",{staticClass:"total-time"},[t._v("/ "+t._s(t._transTime(t.currentSong.duration)))]):t._e()]),t._v(" "),n("el-col",{attrs:{span:5}},[n("ul",{staticClass:"react-right"},[n("li",{staticClass:"right-item volume iconfont icon-shengyin",on:{click:t.toggleVol}}),t._v(" "),n("li",{staticClass:"right-item mode iconfont",class:t.iconMode,on:{click:t.toggleMode}}),t._v(" "),n("li",{staticClass:"right-item list iconfont icon-liebiao",on:{click:t.toggleListDisplay}})])])],1)],1)])},staticRenderFns:[]};var N=n("C7Lr")(A,x,!1,function(t){n("FTC2")},"data-v-cfb5b720",null).exports,w=n("Kf/3"),O={created:function(){var t=this;window.onbeforeunload=function(){Object(w.f)(t.sequenceList)}},components:{MHeader:l,MFooter:h,Player:N},computed:c()({},Object(f.c)(["sequenceList","favorList","mvMode"]))},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-container",{attrs:{id:"app"}},[e("el-header",[e("m-header")],1),this._v(" "),e("el-main",[e("keep-alive",[e("router-view")],1)],1),this._v(" "),e("el-footer",[e("m-footer")],1),this._v(" "),e("player",{directives:[{name:"show",rawName:"v-show",value:!this.mvMode,expression:"!mvMode"}]})],1)},staticRenderFns:[]};var P=n("C7Lr")(O,k,!1,function(t){n("Xy6o")},null,null).exports,D=n("3XdE");r.default.use(D.a);var q,M=function(t){Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"hSpU")).then(function(e){t(e)})},U=function(t){Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"XL6n")).then(function(e){t(e)})},Y=new D.a({routes:[{path:"/",redirect:"/recommend"},{path:"/recommend",component:function(t){Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"W1+L")).then(function(e){t(e)})}},{path:"/topsinger",component:function(t){Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"odbJ")).then(function(e){t(e)})}},{path:"/singer",component:function(t){Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"0IpB")).then(function(e){t(e)})},children:[{path:":id",component:function(t){Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"lEJ1")).then(function(e){t(e)})}}]},{path:"/songlist",component:function(t){Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"kv63")).then(function(e){t(e)})},children:[{path:":id",component:function(t){Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"vUck")).then(function(e){t(e)})}}]},{path:"/hotsonglist",component:function(t){Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"zIK1")).then(function(e){t(e)})}},{path:"/albumdetail",component:M,children:[{path:":id",component:U}]},{path:"/search",component:function(t){n.e(14).then(n.bind(null,"YOyO")).then(function(e){t(e)})}},{path:"/albumdetail",component:M,children:[{path:":id",component:U}]},{path:"/searchresult",component:function(t){Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"ZnRs")).then(function(e){t(e)})},children:[{path:":keyword/:type",component:function(t){Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"y/ct")).then(function(e){t(e)})}}]},{path:"/collect",component:function(t){Promise.all([n.e(0),n.e(16)]).then(n.bind(null,"INgv")).then(function(e){t(e)})}},{path:"/mvrecommend",component:function(t){Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"oUmK")).then(function(e){t(e)})}},{path:"/mvdetail",component:function(t){Promise.all([n.e(0),n.e(15)]).then(n.bind(null,"esXl")).then(function(e){t(e)})},children:[{path:":id",component:function(t){Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"W3aC")).then(function(e){t(e)})}}]}]}),$=n("cHER"),G=n.n($),H=(n("SO90"),n("BCbe")),j=function(t,e){var n=t.commit,i=(t.state,e.list);console.log(i),n("CLEAR_PLAYLIST"),n("SET_SEQUENCE_LIST");for(var s=0;s<i.length;s++)n("ADD_SEQUENCE_LIST",i[s]),n("ADD_PLAYLIST",i[s]);n("SET_PLAYING_STATE",!0),n("SET_CURRENT_INDEX",0),n("SET_IS_RANDOM",!1)},F=function(t,e){var n=t.commit,i=t.state,s=e.item,r=e.play;n("ADD_SEQUENCE_LIST",s),i.sequenceList.length!==i.playList.length&&n("ADD_PLAYLIST",s),n("SET_IS_RANDOM",!1),r?(n("SET_CURRENT_INDEX",i.sequenceList.length-1),n("SET_PLAYING_STATE",!0)):1===i.playList.length&&(n("SET_CURRENT_INDEX",0),n("SET_PLAYING_STATE",!0))},V=function(t){var e=t.commit;t.state;e("SET_SEQUENCE_LIST"),e("CLEAR_PLAYLIST"),e("SET_CURRENT_INDEX",-1),e("SET_SONG_READY_STATUS",!1),e("SET_LYRICS_READY_STATUS",!1)},X=function(t,e){var n=t.commit,i=(t.state,e.query);if(e.empty)return Object(w.g)({empty:!0}),void n("SET_SEARCH_HISTORY",[]);n("SET_SEARCH_HISTORY",Object(w.g)({query:i}))},K=function(t){return t.singer},z=function(t){return t.playing},Q=function(t){return t.playList},W=function(t){return t.sequenceList},B=function(t){return t.mode},J=function(t){return t.showList},Z=function(t){return t.currentIndex},tt=function(t){if(t.currentIndex>=0&&t.playList.length>0&&t.currentIndex<t.playList.length)for(var e=0;e<t.sequenceList.length;e++)if(t.sequenceList[e].id===t.playList[t.currentIndex].id)return e},et=function(t){return t.playList[t.currentIndex]||{}},nt=function(t){return t.currentSongList},it=function(t){return t.songReady},st=function(t){return t.lyricsReady},rt=function(t){return t.isRandom},at=function(t){return t.currentAlbum},ct=function(t){var e=[];return 0!==t.searchHistory.length&&t.searchHistory.forEach(function(t){var n={};n.value=t,e.push(n)}),e},ot=function(t){return t.searchKeywords},lt=function(t){return t.searchCategory},ut=function(t){return t.searchResult},ht=function(t){return t.currentPage},ft=function(t){return t.favorList},dt=function(t){return t.currentMV},pt=function(t){return t.mvMode},vt=n("a3Yh"),mt=n.n(vt),gt=(q={},mt()(q,"SET_SINGER",function(t,e){t.singer=e}),mt()(q,"SET_PLAYING_STATE",function(t,e){t.playing=e}),mt()(q,"SET_PLAY_MODE",function(t,e){t.mode=e}),mt()(q,"SET_PLAYLIST",function(t,e){t.playList=e}),mt()(q,"SET_CURRENT_INDEX",function(t,e){t.currentIndex=e}),mt()(q,"ADD_SEQUENCE_LIST",function(t,e){t.sequenceList.push(e)}),mt()(q,"ADD_PLAYLIST",function(t,e){t.playList.push(e)}),mt()(q,"SET_SEARCH_HISTORY",function(t,e){t.searchHistory=e}),mt()(q,"SET_SEARCH_CATEGORY",function(t,e){t.searchCategory=e}),mt()(q,"SET_SEARCH_KEYWORDS",function(t,e){t.searchCategory=e}),mt()(q,"SET_SEARCH_KEYWORDS",function(t,e){t.searchKeywords=e}),mt()(q,"TOGGLE_LIST",function(t){t.showList=!t.showList}),mt()(q,"GIVE_SONG_URL",function(t,e){var n=e.index,i=e.url;t.playList[n].url=i}),mt()(q,"GIVE_ALBUM_DESC",function(t,e){t.currentAlbum.desc=e}),mt()(q,"GIVE_ALBUM_COMPANY",function(t,e){t.currentAlbum.company=e}),mt()(q,"SET_CURRENT_SONG_LIST",function(t,e){t.currentSongList=e}),mt()(q,"SET_SONG_READY_STATUS",function(t,e){t.songReady=e}),mt()(q,"SET_LYRICS_READY_STATUS",function(t,e){t.lyricsReady=e}),mt()(q,"REMOVE_SONG",function(t,e){var n=t.playList.findIndex(function(n){return n.id===t.sequenceList[e].id}),i=t.currentIndex;i>n&&i--,t.sequenceList.splice(e,1),t.sequenceList.length!==t.playList.length&&t.playList.splice(n,1),i>=t.playList.length?t.currentIndex=t.playList.length-1:t.currentIndex=i}),mt()(q,"REMOVE_FAVOR_SONG",function(t,e){t.favorList.splice(e,1),Object(w.e)(t.favorList)}),mt()(q,"CLEAR_PLAYLIST",function(t){t.playList=[]}),mt()(q,"SET_SEQUENCE_LIST",function(t){t.sequenceList=[]}),mt()(q,"SET_IS_RANDOM",function(t,e){t.isRandom=e}),mt()(q,"SET_CURRENT_ALBUM",function(t,e){t.currentAlbum=e}),mt()(q,"SET_SEARCH_RESULT",function(t,e){t.searchResult=e}),mt()(q,"SET_CURRENT_PAGE",function(t,e){t.currentPage=e-1}),mt()(q,"SET_FAVOR_LIST",function(t,e){t.favorList=e,Object(w.e)(e)}),mt()(q,"ADD_FAVOR_LIST",function(t,e){for(var n=e.messageCaller,i=e.song,s=0;s<t.favorList.length;s++)if(t.favorList[s].id===i.id)return void n.$message({message:"您已经收藏过本歌曲了哦~",type:"warning"});if(t.favorList.length===w.a)return t.favorList.pop(),n.$message({message:"收藏夹容量已达上限，系统已自动移除最早收藏的歌曲",type:"warning"}),t.favorList.unshift(i),void Object(w.e)(t.favorList);t.favorList.unshift(i),Object(w.e)(t.favorList),n.$message({message:"已放入收藏夹",type:"success"})}),mt()(q,"SET_CURRENT_MV",function(t,e){t.currentMV=e}),mt()(q,"SET_MV_MODE",function(t,e){t.mvMode=e}),q),yt=Object(w.c)(),_t={singer:{},playing:!1,playList:yt,sequenceList:yt,mode:m.b.sequence,currentIndex:-1,showList:!1,currentSongList:{},songReady:!1,lyricsReady:!1,isRandom:!1,currentAlbum:{},searchKeywords:"",searchCategory:0,searchHistory:Object(w.d)(),searchResult:{},currentPage:0,favorList:Object(w.b)(),currentMV:{},mvMode:!1};n("bg9d");r.default.use(f.a);var Lt=new f.a.Store({actions:i,getters:s,state:_t,mutations:gt,strict:!1,plugins:[]});n("vdhN");r.default.config.productionTip=!1,r.default.use(G.a),r.default.use(H.a,{loading:n("zUsG")}),new r.default({el:"#app",router:Y,store:Lt,render:function(t){return t(P)}})},PvFA:function(t,e,n){"use strict";var i=n("rVsN"),s=n.n(i),r=n("AA3o"),a=n.n(r),c=n("xSur"),o=n.n(c),l=n("Gdqy"),u=n("9cIF"),h=n("T452"),f=function(){function t(e){var n=e.name,i=e.singer,s=e.id,r=e.album,c=e.duration,o=e.albumPic,u=e.albumId,h=e.url;a()(this,t),this.name=n,this.singer=i,this.id=s,this.album=r,this.duration=c,this.normalDuration=Object(l.i)(c),this.albumPic=o,this.albumId=u,this.url=h||""}return o()(t,[{key:"getLyrics",value:function(){var t=this;return this.lyrics?s.a.resolve(this.lyrics):new s.a(function(e){Object(u.b)(t.id).then(function(n){n.status===h.a&&(t.lyrics=n.data,e(n.data))})})}}]),t}();e.a=f},SO90:function(t,e){},T452:function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return s});var i="https://v1.itooi.cn/",s=200},"W/7t":function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return r});var i={sequence:0,loop:1,random:2},s={song:1,singer:2,songList:3,album:4,mv:5},r={play:0,clear:1}},Xy6o:function(t,e){},mo8t:function(t,e){},vdhN:function(t,e){},zUsG:function(t,e,n){t.exports=n.p+"static/img/loading.6432318.gif"}},["NHnr"]);
//# sourceMappingURL=app.73d2df988057d2133960.js.map