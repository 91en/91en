// ==UserScript==
// @name              74vip_tool
// @name:en           74vip_tool
// @namespace         https://74vip.top/
// @version           1.7
// @charset		      UTF-8
// @description       支持腾讯视频、爱奇艺、优酷、土豆、芒果 TV、搜狐视频、乐视视频、PPTV等，支持多个解析接口切换，支持自定义接口，支持站内站外解析，支持 Tampermonkey、Violentmonkey、Greasemonkey
// @description	      度盘万能钥匙，云盘万能钥匙扩展改成 GM 脚本
// @author            74vip
// @require           https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js
// @require           https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// @match             *://v.qq.com/x/cover/*
// @match             *://v.qq.com/x/page/*
// @match             *://www.iqiyi.com/v*
// @match             *://v.youku.com/v_show/*
// @match             *://www.mgtv.com/b/*
// @match             *://tv.sohu.com/v/*
// @match             *://film.sohu.com/album/*
// @match             *://www.le.com/ptv/vplay/*
// @match             *://video.tudou.com/v/*
// @match             *://v.pptv.com/show/*
// @match		      https://pan.baidu.com/share/init?surl=*
// @match       	  https://pan.baidu.com/wap/init?surl=*
// @match		      https://pan.baidu.com/share/init?shareid=*
// @match		      https://pan.baidu.com/wap/init?shareid=*
// @match		      https://pan.baidu.com/s/*
// @grant             unsafeWindow
// @grant             GM_openInTab
// @grant             GM.openInTab
// @grant             GM_getValue
// @grant             GM.getValue
// @grant             GM_setValue
// @grant             GM.setValue
// @grant             GM_registerMenuCommand
// @grant		      GM_xmlhttpRequest
// @run-at		      document-end
// ==/UserScript==

(function() {
    'use strict';
    var $ = $ || window.$;
    var log_count = 1;
    var parseInterfaceList = [];
    var userInterfaceList = [];
    var originalInterfaceList = [{"name":"高科技","type":"站内","url":"https://jx.dy-jx.com/?url="},
                                 {"name":"紫云","type":"站内","url":"https://api.smq1.com/?url="},
								 {"name":"超清解析","type":"站内","url":"https://cdn.yangju.vip/k/?url="},
								 {"name":"927","type":"站内","url":"https://api.927.la/vip/?url="},
                                 {"name":"爸比云","type":"站内","url":"https://jx.1ff1.cn/?url="},
                                 {"name":"74vip","type":"站内","url":"http://v.74vip.top/?v="},

								 {"name":"大亨","type":"站外","url":"http://jx.cesms.cn/?url="},
								 {"name":"WoCao","type":"站外","url":"http://www.wocao.xyz/index.php?url="},
								 {"name":"云播放","type":"站外","url":"https://cdn.yangju.vip/k/?url="},
								 {"name":"618G","type":"站外","url":"http://jx.618g.com/?url="},
                                 {"name":"百域阁","type":"站外","url":"http://api.baiyug.vip/index.php?url="},
								 {"name":"黑云","type":"站外","url":"http://jx.daheiyun.com/?url="}];
    //自定义 log 函数
    function mylog(param1,param2){
        param1 = param1 ? param1 : "";
        param2 = param2 ? param2 : "";
        console.log("#" + log_count++ + "-VIP-log:",param1,param2);
    }

    function innerParse(url){
        $("#iframe-player").attr("src",url);
    }

    function GMopenInTab(url,open_in_background){
        if(typeof GM_openInTab === "function"){
            GM_openInTab(url,open_in_background);
        }else{
            GM.openInTab(url,open_in_background);
        }
    }

    function GMgetValue(name,value){
        if(typeof GM_getValue === "function"){
            return GM_getValue(name,value);
        }else{
            return GM.getValue(name,value);
        }
    }

    function GMsetValue(name,value){
        if(typeof GM_setValue === "function"){
            GM_setValue(name,value);
        }else{
            GM.setValue(name,value);
        }
    }

    function GMaddStyle(css){
        var myStyle = document.createElement('style');
        myStyle.textContent = css;
        var doc = document.head || document.documentElement;
        doc.appendChild(myStyle);
    }

    function showSetting(){
        if(document.querySelector('#jiexi-setting') == null){
            GMaddStyle(`
                       #jiexi-setting legend,table,table th,td{text-align:center;}
                       `);
            var container = document.createElement("div");
            container.id = "jiexi-setting";
            container.style = "position:fixed;z-index:2147483647;width:100%;height:100%;top:0;left:0;background-color:rgba(0,0,0,0.5);";
            container.innerHTML =
                "<div style='position:absolute;width:500px;height:300px;top:50%;left:50%;margin-left:-250px;margin-top:-150px;padding:10px;background-color:#242424;color:white;font-size:14px;'>" +
                "<div id='cancel-button' style='position:absolute;top:-15px;right:-8px;font-size:20px;cursor:pointer;'>╳</div>" +
                "<legend style='font-size:16px;color:#fff;margin:auto;'>VIP 解析设置</legend>" +
                "<table id='interface-table' style='line-height:30px;margin:0 auto;'><tr><th>接口名称</th><th>接口地址</th><th>接口类型</th><th>操作</th></tr>" +
                "<tr><td><input type='text' id='interface-name' name='interface-name' placeholder='接口显示名称' style='border:0;width:100px;margin-right:10px;'></input></td>" +
                "<td><input type='text' id='interface-url' name='interface-url' placeholder='接口地址必须包含 http 或 https' style='border:0;width:200px;margin-right:10px;'></input></td>" +
                "<td><label title='站内' style='margin-right:5px;'><input id='interface-type-in' name='interface-type' value='站内' type='radio' style='margin:0 5px;'></input>站内</label>" +
                "<label title='站外' style='margin-right:10px;'><input id='interface-type-out' name='interface-type' value='站外' type='radio' style='margin:0 5px;' checked></input>站外</label></td>" +
                "<td><input type='button' value='增加' id='save_button' style='cursor:pointer;font-size:12px;background-color:#242424;color:white;border:1px solid #ccc;border-radius:5px;padding:2px 6px;'></input></td></tr>" +
                "</table></div>";
            document.body.appendChild(container);
            if(userInterfaceList.length > 0){
                userInterfaceList.forEach((item,index)=>{
                    var interface_row = $("<tr><td>" + item.name + "</td><td>" + item.url + "</td><td>" + item.type + "</td><td><input type='button' value='删除' class='delete-button' style='cursor:pointer;font-size:12px;background-color:#242424;color:white;border:1px solid #ccc;border-radius:5px;padding:2px 6px;'></input></td>");
                    $("#interface-table").append(interface_row);
                });
            }
        }
        $("#cancel-button").click(()=>{
            $("#jiexi-setting").remove();
        });
        $("#save_button").click(()=>{
            var interface_name = $("input[name='interface-name']").val().replace(/^\s+|\s+$/g,"");
            var interface_url = $("input[name='interface-url']").val().replace(/^\s+|\s+$/g,"");
            var interface_type = $('input[name="interface-type"]:checked').val();
            var saveOrNot = true;
            if(interface_name == ""){
                alert("请输入接口名称");
                return;
            }
            if(interface_url == ""){
                alert(" 请输入接口地址");
                return;
            }
            if(interface_url.indexOf("http") != 0){
                alert(" 请输入以 http 或 https 开头的接口地址");
                return;
            }
            if(interface_type == "站内" && interface_url.indexOf("https") != 0){
                alert("站内解析只支持以 https 开头的接口地址，请修改接口类型");
                return;
            }
            userInterfaceList.forEach((item,index)=>{
                if(interface_name == item.name){
                    alert("已存在同名接口，请修改接口名称");
                    saveOrNot = false;
                }
            });
            if(saveOrNot){
                saveOrNot = false;
                var new_interface = {"name":interface_name,"url":interface_url,"type":interface_type};
                userInterfaceList.push(new_interface);
                GMsetValue("user_interface",userInterfaceList);
                location.reload();
            }
        });
        $(".delete-button").each((index,item)=>{
            item.addEventListener("click",()=>{
                 var delete_item_name = item.parentNode.parentNode.firstChild.innerHTML;
                userInterfaceList.forEach((item,index)=>{
                    if(delete_item_name == item.name){
                        userInterfaceList.splice(index,1);
                    }
                });
                GMsetValue("user_interface",userInterfaceList);
                $(item.parentNode.parentNode).remove();
                $("li").each((index,li_item)=>{
                    if(li_item.innerHTML.indexOf(delete_item_name) > -1){
                        $(li_item).remove();
                    }
                });
            });
        });
    }

    setTimeout(function(){
        GM_registerMenuCommand("自定义 VIP 视频解析接口",showSetting);
        userInterfaceList = GMgetValue("user_interface",[]);
        if(userInterfaceList.length > 0){
            parseInterfaceList = parseInterfaceList.concat(originalInterfaceList,userInterfaceList);
        }else{
            parseInterfaceList = originalInterfaceList;
        }
        var innerList = [],outerList = [];
        var innerli = "",outerli = "";
        parseInterfaceList.forEach((item,index)=>{
            if(item.type == "站内"){
                innerList.push(item);
                innerli += "<li>" + item.name + "</li>";
            }else{
                outerList.push(item);
                outerli += "<li>" + item.name + "</li>";
            }
        });
        parseInterfaceList = innerList.concat(outerList);
        var jiexiDIV = "<div style='display:flex;'><div style='width:180px;padding:10px 0;'><div style='text-align:center;color:#cccccc;line-height:20px;'>站内解析</div>" +
            "<ul style='margin:0 10px;'>" + innerli + "<div style='clear:both;'></div></ul><div style='text-align:center;color:#cccccc;line-height:20px;'>站外解析</div>" +
            "<ul style='margin:0 10px;'>" + outerli + "<div style='clear:both;'></div></ul></div><div style='margin:auto;'><img style='width:200px;' src='https://s1.ax1x.com/2018/12/08/F3L4pt.jpg'></div></div>";
        var videoPlayer = $("<div id='iframe-div' style='width:100%;height:100%;z-index:2147483647;'><iframe id='iframe-player' frameborder='0' allowfullscreen='true' width='100%' height='100%'></iframe></div>");
        if (location.href.indexOf("www.iqiyi.com") > -1){
            GMaddStyle(`.fn-iqiyi-jiexi li{color:#cccccc;text-align:center;width:60px;line-height:20px;float:left;border:1px solid gray;border-radius:8px;padding:0 4px;margin:4px 2px;}`);
            var iqiyi_jiexi = $("<div class='func-item'><span class='func-inner fn-iqiyi-jiexi-text' style='line-height:40px;'><span class='func-name'>解析</span></span>" +
                                "<div class='qy-func-jiexi-pop fn-iqiyi-jiexi' style='display:none;position:absolute;left:-50px;text-align:center;z-index:2147483647;'><div class='qy-popup-box' style='background-color:#2e2e2e;border:1px solid gray;'>" +
                                jiexiDIV + "</div></div></div>");
            var addButtonLoop = setInterval(()=>{
                if($(".func-like-v1").is(":visible") && !document.getElementsByClassName("fn-iqiyi-jiexi")[0]){
                    var qy_flash_func = $(".qy-flash-func");
                    qy_flash_func.prepend(iqiyi_jiexi);
                    $(".fn-iqiyi-jiexi-text").click(()=>{
                        if(document.getElementById("iframe-player") == null){
                            if (document.getElementsByClassName("cupid-public-time")[0] != null){
                                document.getElementsByClassName("cupid-public-time")[0].click();
                            }
                            var flashbox = $("#flashbox");
                            flashbox.attr("z-index","400");
                            flashbox.empty();
                            flashbox.append(videoPlayer);
                        }
                        innerParse(parseInterfaceList[0].url + location.href);
                    });
                    $(".fn-iqiyi-jiexi li").each((index,item)=>{
                        $(item).on('mouseover',()=>{
                            $(item).css('cursor','pointer');
                            $(item).css('color','#01be07');
                        });
                        $(item).on('mouseout',()=>{
                            $(item).css('color','#cccccc');
                        });
                        $(item).on('click',()=>{
                            if(parseInterfaceList[index].type == "站内"){
                                if(document.getElementById("iframe-player") == null){
                                    if (document.getElementsByClassName("cupid-public-time")[0] != null){
                                        document.getElementsByClassName("cupid-public-time")[0].click();
                                    }
                                    var flashbox = $("#flashbox");
                                    flashbox.attr("z-index","400");
                                    flashbox.empty();
                                    flashbox.append(videoPlayer);
                                }
                                innerParse(parseInterfaceList[index].url + location.href);
                            }else{
                                GMopenInTab(parseInterfaceList[index].url + location.href,false);
                            }
                        });
                    });
                    clearInterval(addButtonLoop);
                }
            },1000);
            iqiyi_jiexi.on("mouseover",()=>{
                $(".qy-func-jiexi-pop").show();
            });
            iqiyi_jiexi.on("mouseout",()=>{
                $(".qy-func-jiexi-pop").hide();
            });
            var iqiyi_jiexi_new = $("<div style='float:left;color:#999;cursor:pointer;'><span class='func-name'>解析</span></div>");
            var funcRight = $(".funcRight");
            funcRight.prepend(iqiyi_jiexi_new);
            iqiyi_jiexi_new.click(()=>{
                var vipFloatbgCls = $(".vipFloatbgCls").parent();
                $(vipFloatbgCls).css("display","none");
                $(".J_play-underFrame").css("display","none");
                document.getElementsByClassName("usrTx-register")[0].querySelector("a").click()
                $("#flashbox").empty();
                $("#flashbox").append(videoPlayer);
            });
            iqiyi_jiexi_new.on("mouseover",()=>{
                iqiyi_jiexi_new.css("color","#6ba430");
            });
            iqiyi_jiexi_new.on("mouseout",()=>{
                iqiyi_jiexi_new.css("color","#999");
            });
            setInterval(()=>{
                if($(".qy-player-vippay-popup") != null){
                    var qy_player_vippay_popup = $(".qy-player-vippay-popup").parent();
                    $(qy_player_vippay_popup).css("display","none");
                }
                var div = $("body").children("div");
                div.each((index,item)=>{
                    try{
                        if($(item).css("position") === "fixed"){
                            $(item).remove();
                        }
                    }catch(err){
                        mylog(err);
                    }
                });
            },500);
        }else if(location.href.indexOf("v.qq.com") > -1){
            var type_name = unsafeWindow.COVER_INFO.type_name;
            var vipPage = unsafeWindow.COVER_INFO.vipPage;
            var mod_player;
            if(type_name === "电影"){
                var list_item = $(".mod_figure_list .list_item");
                list_item.each(function(index,item){
                    item.addEventListener('click',()=>{
                        setTimeout(()=>{
                            location.reload();
                        },1000);
                    });
                });
            }else if(type_name === "电视剧" || type_name === "动漫"){
                var select_items = $('.mod_episode .item');
                select_items.each(function(index,item){
                    item.addEventListener('click',()=>{
                        setTimeout(()=>{
                            location.reload();
                        },1000);
                    });
                });
                var mod_episode_filter = $(".mod_episode_filter");
                mod_episode_filter.click(()=>{
                    var select_items = $('.mod_episode .item');
                    select_items.each(function(index,item){
                        item.addEventListener('click',()=>{
                            setTimeout(()=>{
                                location.reload();
                            },1000);
                        });
                    });
                });
            }
            if (document.getElementsByClassName("action_gift")[0]) { // 为了避免显示空间不足，移除赠片按钮
                document.getElementsByClassName("action_gift")[0].remove();
            }
            if (document.getElementsByClassName("action_more")[0]) { // 为了避免显示空间不足，移除举报按钮
                document.getElementsByClassName("action_more")[0].remove();
            }
            var action_wrap = $(".action_wrap");
            GMaddStyle(`.fn-qq-jiexi li{text-align:center;width:60px;line-height:20px;float:left;border:1px solid gray;border-radius:8px;padding:0 4px;margin:4px 2px;}`);
            var qq_jiexi = $("<div id='qq-jiexi-btn' class='action_item action_jiexi' style='position:relative;'><a class='action_title fn-qq-jiexi-text'><span>解析</span></a>" +
                             "<div class='mod_pop_action fn-qq-jiexi' style='background-color:#2e2e2e;width:auto;left:-50px;border:1px solid gray;'>" + jiexiDIV + "</div></div>");
            action_wrap.append(qq_jiexi);
            document.getElementById("qq-jiexi-btn").addEventListener("mouseover",()=>{
                $(".action_jiexi").toggleClass("open");
            });
            document.getElementById("qq-jiexi-btn").addEventListener("mouseout",()=>{
                $(".action_jiexi").toggleClass("open");
            });
            document.getElementsByClassName("fn-qq-jiexi-text")[0].addEventListener("click",()=>{
                if(document.getElementById("iframe-player") == null){
                    var txp_ad_skip_text = $(".txp_ad_inner .txp_ad_skip_text");
                    if(txp_ad_skip_text.text() === "VIP可关闭广告"){
                        txp_ad_skip_text.click();
                        mod_player = $("#mod_player");
                        mod_player.empty();
                        mod_player.append(videoPlayer);
                    }else if(txp_ad_skip_text.text() === "关闭广告"){
                        txp_ad_skip_text.click();
                    }else if(vipPage === true){
                        var txp_btn_play = $(".txp_left_controls .txp_btn_play");
                        if(txp_btn_play.attr("data-status") === "pause"){
                            txp_btn_play.click();
                        }
                        mod_player = $("#mod_player");
                        mod_player.empty();
                        mod_player.append(videoPlayer);
                    }
                }
                innerParse(parseInterfaceList[0].url + location.href);
            });
            $(".fn-qq-jiexi li").each((index,item)=>{
                item.addEventListener('mouseover',()=>{
                    $(item).css('cursor','pointer');
                    $(item).css('color','#fe6527');
                });
                item.addEventListener('mouseout',()=>{
                    $(item).css('color','#999999');
                });
                item.addEventListener('click',()=>{
                    if(parseInterfaceList[index].type == "站内"){
                        if(document.getElementById("iframe-player") == null){
                            var txp_ad_skip_text = $(".txp_ad_inner .txp_ad_skip_text");
                            if(txp_ad_skip_text.text() === "VIP可关闭广告"){
                                txp_ad_skip_text.click();
                                mod_player = $("#mod_player");
                                mod_player.empty();
                                mod_player.append(videoPlayer);
                            }else if(txp_ad_skip_text.text() === "关闭广告"){
                                txp_ad_skip_text.click();
                            }else if(vipPage === true){
                                var txp_btn_play = $(".txp_left_controls .txp_btn_play");
                                if(txp_btn_play.attr("data-status") === "pause"){
                                    txp_btn_play.click();
                                }
                                mod_player = $("#mod_player");
                                mod_player.empty();
                                mod_player.append(videoPlayer);
                            }
                        }
                        innerParse(parseInterfaceList[index].url + location.href);
                    }else{
                        GMopenInTab(parseInterfaceList[index].url + location.href,false);
                    }
                });
            });
            setInterval(()=>{
                $(".tvip_layer").css("display","none");
                $("#mask_layer").css("display","none");
            },500);
        }else if(location.href.indexOf("v.youku.com") > -1){
            setInterval(()=>{
                $(".yk-dmtxtbox").css("width","300px");
            },1000);
            GMaddStyle(`.fn-youku-jiexi li{color:#cccccc;text-align:center;width:60px;line-height:20px;float:left;border:1px solid gray;border-radius:8px;padding:0 4px;margin:4px 2px;}`);
            var bpmodule_playpage_paction = $("#bpmodule-playpage-paction .play-fn");
            var youku_jiexi = $("<li class='fn-download fn-youku-jiexi'><span class='fn-title'><i class='fn-icon'></i></span><span class='text fn-youku-jiexi-text'>解析</span>" +
                                "<div class='fn-panel' style='background-color:#2e2e2e;min-width:100px;width:auto;border:1px solid gray;'>" + jiexiDIV + "</div></li>");
            bpmodule_playpage_paction.append(youku_jiexi);
            $(".fn-youku-jiexi-text").click(()=>{
                if(document.getElementById("iframe-player") == null){
                    var ykPlayer = $("#ykPlayer");
                    ykPlayer.empty();
                    ykPlayer.append(videoPlayer);
                    $("#module_basic_player").css("height","100%");
                    var player = $("#player");
                    player.css("height","100%");
                    player.empty();
                    player.append(videoPlayer);
                }
                innerParse(parseInterfaceList[0].url + location.href);
            });
            $(".fn-youku-jiexi li").each((index,item)=>{
                $(item).on('mouseover',()=>{
                    $(item).css('cursor','pointer');
                    $(item).css('color','#2592ff');
                });
                $(item).on('mouseout',()=>{
                    $(item).css('color','#cccccc');
                });
                $(item).on('click',()=>{
                    if(parseInterfaceList[index].type == "站内"){
                        if(document.getElementById("iframe-player") == null){
                            var ykPlayer = $("#ykPlayer");
                            ykPlayer.empty();
                            ykPlayer.append(videoPlayer);
                            $("#module_basic_player").css("height","100%");
                            var player = $("#player");
                            player.css("height","100%");
                            player.empty();
                            player.append(videoPlayer);
                        }
                        innerParse(parseInterfaceList[index].url + location.href);
                    }else{
                        GMopenInTab(parseInterfaceList[index].url + location.href,false);
                    }
                });
            });
        }else if(location.href.indexOf("www.mgtv.com") > -1){
            GMaddStyle(`.fn-mgtv-jiexi li{color:#cccccc;text-align:center;width:60px;line-height:20px;float:left;border:1px solid gray;border-radius:8px;padding:0 4px;margin:4px 2px;}`);
            var v_panel_box = $(".v-panel-box");
            var mgtv_jiexi = $("<div class='v-panel-mod fn-mgtv-jiexi' style='cursor:pointer;'><a class='v-panel-submod fn-mgtv-jiexi-text'>解析</a>" +
                               "<div class='extend' style='top:-5px;left:-50px;text-align:center;position:relative;'><div class='v-panel-extend'><div class='fn-panel' style='background-color:#2e2e2e;width:auto;border:1px solid gray;'>" +
                               jiexiDIV + "</div></div></div></div>");
            v_panel_box.append(mgtv_jiexi);
            mgtv_jiexi.on("mouseover",()=>{
                $(".fn-mgtv-jiexi .extend").show();
            });
            mgtv_jiexi.on("mouseout",()=>{
                $(".fn-mgtv-jiexi .extend").hide();
            });
            $(".fn-mgtv-jiexi-text").click(()=>{
                if(document.getElementById("iframe-player") == null){
                    var mgtv_player_wrap = $("#mgtv-player-wrap");
                    mgtv_player_wrap.empty();
                    mgtv_player_wrap.append(videoPlayer);
                }
                innerParse(parseInterfaceList[0].url + location.href);
            });
            $(".fn-mgtv-jiexi li").each((index,item)=>{
                $(item).on('mouseover',()=>{
                    $(item).css('color','#ff6f00');
                });
                $(item).on('mouseout',()=>{
                    $(item).css('color','#cccccc');
                });
                $(item).on('click',()=>{
                    if(parseInterfaceList[index].type == "站内"){
                        if(document.getElementById("iframe-player") == null){
                            var mgtv_player_wrap = $("#mgtv-player-wrap");
                            mgtv_player_wrap.empty();
                            mgtv_player_wrap.append(videoPlayer);
                        }
                        innerParse(parseInterfaceList[index].url + location.href);
                    }else{
                        GMopenInTab(parseInterfaceList[index].url + location.href,false);
                    }
                });
            });
            var selected_items = $(".aside-tabbox li");
            selected_items.each(function(index,item){
                item.addEventListener('click',()=>{
                    setTimeout(()=>{
                        location.reload();
                    },1000);
                });
            });
        }else if(location.href.indexOf("tv.sohu.com") > -1){
            GMaddStyle(`.fn-sohu-jiexi li{color:#cccccc;text-align:center;width:60px;line-height:20px;float:left;border:1px solid gray;border-radius:8px;padding:0 4px;margin:4px 2px;}`);
            var vBox_right = $(".vBox-right");
            var sohu_jiexi = $("<div class='vBox vBox-play'><a class='vbtn'>解析</a><div class='vCont fn-sohu-jiexi' style='background-color:#2e2e2e;border:1px solid gray;padding:0;width:auto;margin:0 0 0 -60px;line-height:25px;'>" + jiexiDIV + "</div></div>");
            vBox_right.prepend(sohu_jiexi);
            sohu_jiexi.click(()=>{
                $(".fn-sohu-jiexi").toggle();
            });
            $(".fn-sohu-jiexi li").each((index,item)=>{
                $(item).on('mouseover',()=>{
                    $(item).css('cursor','pointer');
                    $(item).css('color','#e33c30');
                });
                $(item).on('mouseout',()=>{
                    $(item).css('color','#cccccc');
                });
                $(item).on('click',()=>{
                    if(parseInterfaceList[index].type == "站内"){
                        if(document.getElementById("iframe-player") == null){
                            var player_vipTips = $("#player_vipTips");
                            player_vipTips.css("display","none");
                            if(document.querySelector("#menu") == null){
                                var sohuplayer = $("#sohuplayer");
                                sohuplayer.empty();
                                sohuplayer.append(videoPlayer);
                            }else{
                                var player = $("#player");
                                player.empty();
                                player.append(videoPlayer);
                            }
                        }
                        innerParse(parseInterfaceList[index].url + location.href);
                    }else{
                        GMopenInTab(parseInterfaceList[index].url + location.href,false);
                    }
                });
            });
        }else if(location.href.indexOf("film.sohu.com") > -1){
            GMaddStyle(`.fn-sohu-jiexi li{color:#cccccc;text-align:center;width:60px;line-height:20px;float:left;border:1px solid gray;border-radius:8px;padding:0 4px;margin:4px 2px;}`);
            var player_content_info = $(".player-content-info");
            var sohu_film_jiexi = $("<div class='action-item'><a class='action-title fn-sohu-jiexi-text'><span class='ico-text'>解析</span><i class='ico-down'></i></a><div class='hover-content fn-sohu-jiexi' style='background-color:#2e2e2e;border:1px solid gray;width:auto;text-align:center;margin-left:-61px;'>" +
                                    jiexiDIV + "</div></div>");
            player_content_info.prepend(sohu_film_jiexi);
            sohu_film_jiexi.on("mouseover",()=>{
                $(".fn-sohu-jiexi").show();
            });
            sohu_film_jiexi.on("mouseout",()=>{
                $(".fn-sohu-jiexi").hide();
            });
            $(".fn-sohu-jiexi-text").click(()=>{
                if(document.getElementById("iframe-player") == null){
                    var playerWrap = $("#playerWrap");
                    playerWrap.empty();
                    playerWrap.append(videoPlayer);
                }
                innerParse(parseInterfaceList[0].url + location.href);
            });
            $(".fn-sohu-jiexi li").each((index,item)=>{
                $(item).on('mouseover',()=>{
                    $(item).css('cursor','pointer');
                    $(item).css('color','#ee3c3a');
                });
                $(item).on('mouseout',()=>{
                    $(item).css('color','#cccccc');
                });
                $(item).on('click',()=>{
                    if(parseInterfaceList[index].type == "站内"){
                        if(document.getElementById("iframe-player") == null){
                            var playerWrap = $("#playerWrap");
                            playerWrap.empty();
                            playerWrap.append(videoPlayer);
                        }
                        innerParse(parseInterfaceList[index].url + location.href);
                    }else{
                        GMopenInTab(parseInterfaceList[index].url + location.href,false);
                    }
                });
            });
        }else if(location.href.indexOf("www.le.com") > -1){
            GMaddStyle(`.fn-le-jiexi li{color:#cccccc;text-align:center;width:60px;line-height:20px;float:left;border:1px solid gray;border-radius:8px;padding:0 4px;margin:4px 2px;}`);
            var interact_area = $(".interact_area");
            var le_jiexi = $("<li><a class='fn-le-jiexi-text'><span>解析</span></a><div class='fn-le-jiexi' style='display:none;background-color:#2e2e2e;border:1px solid gray;width:auto;position:absolute;top:45px;left:-40px;border-top:2px solid #E42112;box-shadow:0 2px 6px 0 rgba(0,0,0,.1);'>" +
                             jiexiDIV + "</div></li>");
            interact_area.prepend(le_jiexi);
            le_jiexi.on("mouseover",()=>{
                $(".fn-le-jiexi").show();
            });
            le_jiexi.on("mouseout",()=>{
                $(".fn-le-jiexi").hide();
            });
            $(".fn-le-jiexi-text").click(()=>{
                if(document.getElementById("iframe-player") == null){
                    var le_playbox = $("#le_playbox");
                    le_playbox.empty();
                    le_playbox.append(videoPlayer);
                }
                innerParse(parseInterfaceList[0].url + location.href);
            });
            $(".fn-le-jiexi li").each((index,item)=>{
                $(item).css('height','25px');
                $(item).css('padding','0 5px');
                $(item).on('mouseover',()=>{
                    $(item).css('color','#e42013');
                });
                $(item).on('mouseout',()=>{
                    $(item).css('color','#cccccc');
                });
                $(item).on('click',()=>{
                    if(parseInterfaceList[index].type == "站内"){
                        if(document.getElementById("iframe-player") == null){
                            var le_playbox = $("#le_playbox");
                            le_playbox.empty();
                            le_playbox.append(videoPlayer);
                        }
                        innerParse(parseInterfaceList[index].url + location.href);
                    }else{
                        GMopenInTab(parseInterfaceList[index].url + location.href,false);
                    }
                });
            });
        }else if(location.href.indexOf("video.tudou.com") > -1){
            GMaddStyle(`.fn-tudou-jiexi li{color:#cccccc;text-align:center;width:60px;line-height:20px;float:left;border:1px solid gray;border-radius:8px;padding:0 4px;margin:4px 2px;}`);
            var td_interactbox = $(".td-interactbox__fn--right");
            var tudou_jiexi = $("<div class='td-interactbox__fn__item'><div class='dropdown'><div class='tudou-jiexi-text' style='cursor:pointer;color:#fff;'>解析</div><div class='dropdown__panel fn-tudou-jiexi' style='border:0;text-align:center;'>" +
                                "<div style='background-color:#2e2e2e;border:1px solid gray;width:auto;position:absolute;top:10px;left:-100%;'>" + jiexiDIV + "</div></div></div></div>");
            td_interactbox.prepend(tudou_jiexi);
            tudou_jiexi.on("mouseover",()=>{
                $(".tudou-jiexi-text").css("color","#ef6f2e");
                $(".fn-tudou-jiexi").show();
            });
            tudou_jiexi.on("mouseout",()=>{
                $(".tudou-jiexi-text").css("color","#fff");
                $(".fn-tudou-jiexi").hide();
            });
            $(".tudou-jiexi-text").click(()=>{
                if(document.getElementById("iframe-player") == null){
                    var js_player = $(".td-playbox");
                    js_player.empty();
                    js_player.append(videoPlayer);
                }
                innerParse(parseInterfaceList[0].url + location.href);
            });
            $(".fn-tudou-jiexi li").each((index,item)=>{
                $(item).on('mouseover',()=>{
                    $(item).css('cursor','pointer');
                    $(item).css('color','#ef6f2e');
                });
                $(item).on('mouseout',()=>{
                    $(item).css('color','#cccccc');
                });
                $(item).on('click',()=>{
                    if(parseInterfaceList[index].type == "站内"){
                        if(document.getElementById("iframe-player") == null){
                            var js_player = $(".td-playbox");
                            js_player.empty();
                            js_player.append(videoPlayer);
                        }
                        innerParse(parseInterfaceList[index].url + location.href);
                    }else{
                        GMopenInTab(parseInterfaceList[index].url + location.href,false);
                    }
                });
            });
        }else if(location.href.indexOf("v.pptv.com") > -1){
            GMaddStyle(`
                       #fn-pptv-jiexi li{width:auto;color:#cccccc;background:0;text-align:center;width:60px;line-height:20px;float:left;border:1px solid gray;border-radius:8px;padding:0 4px;margin:4px 2px;}
                       #fn-pptv-jiexi {display:none;position:absolute;top:50px;width:auto;text-align:center;background-color:#2e2e2e;border:1px solid gray;}
                       `);
            var module_video2016_ops = $(".module-video2016-ops ul");
            var pptv_jiexi = $("<li id='pptv-jiexi-btn'><a class='pptv_jiexi-text' style='cursor:pointer;'><i class='ic4'></i>解析</a><div id='fn-pptv-jiexi'>" + jiexiDIV + "</div></li>");
            module_video2016_ops.prepend(pptv_jiexi);
            document.getElementById("pptv-jiexi-btn").addEventListener("mouseover",()=>{
                $("#fn-pptv-jiexi").show();
            });
            document.getElementById("pptv-jiexi-btn").addEventListener("mouseout",()=>{
                $("#fn-pptv-jiexi").hide();
            });
            document.getElementsByClassName("pptv_jiexi-text")[0].addEventListener("click",()=>{
                if(document.getElementById("iframe-player") == null){
                    var pptv_playpage_box = $("#pptv_playpage_box");
                    pptv_playpage_box.empty();
                    pptv_playpage_box.append(videoPlayer);
                }
                innerParse(parseInterfaceList[0].url + location.href);
            });
            $("#fn-pptv-jiexi li").each((index,item)=>{
                $(item).on("mouseover",()=>{
                    $(item).css("cursor","pointer");
                    $(item).css("color","#3399ff");
                });
                $(item).on("mouseout",()=>{
                    $(item).css("color","#cccccc");
                });
                $(item).on("click",()=>{
                    if(parseInterfaceList[index].type == "站内"){
                        if(document.getElementById("iframe-player") == null){
                            var pptv_playpage_box = $("#pptv_playpage_box");
                            pptv_playpage_box.empty();
                            pptv_playpage_box.append(videoPlayer);
                        }
                        innerParse(parseInterfaceList[index].url + location.href);
                    }else{
                        GMopenInTab(parseInterfaceList[index].url + location.href,false);
                    }
                });
            });
        }
    },3000);
})();
function shareHistory(id, pw) {//本地历史记录，有效期30天
	if (!/(?:\w|-){5,}/.test(id)) return;
	var log = JSON.parse(localStorage.getItem("shareHistory") || '{}'), Keys = Object.keys(log).filter(x => x != '_lastCheck'), last = log['_lastCheck'], t = Math.round(new Date().getTime() / 1e3), exp = t + 30 * 86400;
	if (!last) {
		Keys.forEach(x => {
			if (log[x].split('|').length == 1) log[x] += '|' + exp;
		});
		log['_lastCheck'] = t;
		localStorage.setItem("shareHistory", JSON.stringify(log));
	} else if (last && t - last > 3600) {
		Keys.forEach(x => {
			var arr = log[x].split('|');
			if (+arr[1] < t) log[x] = undefined;
		});
		log['_lastCheck'] = t;
		localStorage.setItem("shareHistory", JSON.stringify(log));
	}
	if (pw == undefined) {
		return log[id] && log[id].split('|').shift() || '';
	} else if (/^[a-zA-Z0-9]{4}$/.test(pw)) {
		log[id] = pw + '|' + exp;
		localStorage.setItem("shareHistory", JSON.stringify(log));
	}
}

var hash = location.hash && /^#([a-zA-Z0-9]{4})$/.test(location.hash) && RegExp.$1,
	$ = unsafeWindow.require('system-core:context/context.js').instanceForSystem.libs.JQuery,
	input = document.querySelector('.pickpw input[tabindex="1"], .access-box input#accessCode'),
	btn = document.querySelector('.pickpw a.g-button, .access-box a#getfileBtn'),
	label = document.querySelector('.pickpw dt, .access-box label[for=accessCode]'),
	shareID = (location.href.match(/\/init\?(?:surl|shareid)=((?:\w|-)+)/) || location.href.match(/\/s\/1((?:\w|-)+)/))[1],
	history = shareHistory(shareID);

if (location.href.indexOf('baidu.com/s/') > 0) {//v5
	var url = location.href.replace('baidu.com', 'baiduwp.com').match(/^([^#]+)/)[1] + (location.href.indexOf('?') == -1 ? '?' : '&') + 'pwd=' + history;
	$('<a class="g-button" href="' + url + '" title="转到 Pandownload 网页版"><span class="g-button-right"><em class="icon icon-picpre-download" style="color:#d60;"><font color="#090"></em><span class="text" style="width: auto;"><font color="#090">Pandownload 网页版</font></span></span></a>').insertBefore('.x-button-box a.g-button[data-button-id=b3]');
}

if (!input || !btn) return;
//if (location.hash && /^#([a-zA-Z0-9]{4})$/.test(location.hash)) return;//v2

label.style.margin="-5px 0 10px";
label.innerHTML += '<br>度盘万能钥匙：';

if (hash || history) {//v4，一秒后
	label.innerHTML += '发现提取码（'.fontcolor('green') + (hash || history).fontcolor('red') + '），稍后填写并点击'.fontcolor('green');
	setTimeout(function() {
		input.value = hash || history;
		if (hash) shareHistory(shareID, hash);//保存
		btn.click();
	},
	1e3);
	return;
}

var url ='https://ypsuperkey.meek.com.cn/api/items/BDY-'
		+ shareID + '?access_key=4fxNbkKKJX2pAm3b8AEu2zT5d2MbqGbD&client_version=2018.8';

GM_xmlhttpRequest({
	method: 'GET',
	url: url,
	onload: function(xhr) {
		var e = JSON.parse(xhr.responseText);
		console.log(xhr.responseText);
		label.innerHTML += xhr.status == 200 ? ('连接成功，'.fontcolor('blue') + (e.access_code ? '密码已获取'.fontcolor('blue') : '但密码找不到'.fontcolor('red'))) : (e.message + '，服务器状态：' + xhr.statusText + '(' + xhr.status + ')').fontcolor('red');//状态提示
		if (xhr.status == 200 && e.access_code) {
			input.value = e.access_code;//填写密码
			shareHistory(shareID, e.access_code);
			//setTimeout(function(){btn.click();}, 1e3);//一秒后自动点击
		}
	}
});
