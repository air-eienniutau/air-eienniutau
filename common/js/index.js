/**
 * Created by air-eienniutau on 2016/6/23.
 */
var airIndex = function(){
    this.global={

    };
    this.config={

    };
};
airIndex.prototype={
    _consoleTest_:function(){
        var _self = this;
        var str = "";
        str += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" + "<br/>"+
        "	　　　　　　　　 __＿___＿" + "<br/>"+
        "	　 　 　 　 ／　　　　　　　＼"+ "<br/>"+
        "        　　　　　/　,.． -‐‐-　、　　 ＼"+ "<br/>"+
        "        　　　　　}∠,..艦__これ_ ＼　 　 ＼"+ "<br/>"+
        "　　　 　/.:.:.:./　＼|＼:.:.:.＼＼ 　　 ,"+ "<br/>"+
        "　　　　,′ｉ:/ｎ　　　 ｎ＼i:.:.:.:.i‘，　 }"+ "<br/>"+
        ".　　　 i:人|　U　　　 U　 ｌ:.:.:Λ:‘，/"+ "<br/>"+
        "　　<人（　　 　 　 　　　,':.:./__):.∠ニZ"+ "<br/>"+
        "　　　/:.个: .　__▽__　,./:∠:._｛>o<｝"+ "<br/>"+
        "　 　 {:.:.:‘，( )　( )__L/´　　　 /:.:.|"+ "<br/>"+
        "　　 人:.:.:.: (･x ･l ト--{〉　　 ノi:.:./"+ "<br/>"+
        "    　　　　｀¨¨´|　　 |___,.{　　　､_,.ノ"+ "<br/>"+
        "	　　　　　 　 | 　　|　　 ＼"+ "<br/>"+
        "        .　　　　　　 UΤU___ __／"+ "<br/>"+
        "        　　　　　　　 ノ |_|　|_|"+ "<br/>"+
        "        .　　　　　 　 　 ｣.|　｣.|"+ "<br/>"+
        "        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━";
        $(".j_console_test").html(str);
    },
    _initEvent_:function(){
        var _self = this;
    },
    init:function(){
        var _self = this;
        _self._initEvent_();
        _self._consoleTest_();
    }
};
$(function(){
    var airIndexObj= new airIndex();
    airIndexObj.init();
});