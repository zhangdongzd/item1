/**
 * Created by Administrator on 2017/1/13.
 */
function navCreate() {
    var _nav=document.getElementById("nav");
    var _nav_top=document.createElement("div");
    _nav_top.className="_nav_top";
    var _nav_bottom=document.createElement("div");
    _nav_bottom.className="_nav_bottom";
    _nav.appendChild(_nav_top);
    _nav.appendChild(_nav_bottom);
    var _nav_bottom_left=document.createElement("div");
    _nav_bottom_left.className="_nav_bottom_left";
    var _nav_bottom_right=document.createElement("div");
    _nav_bottom_right.className="_nav_bottom_right";
    _nav_bottom.appendChild(_nav_bottom_left);
    _nav_bottom.appendChild(_nav_bottom_right);
    var _left=document.createElement("div");
    _left.className="_left";
    _left.innerHTML="全部分类";
    var _right=document.createElement("div");
    _right.className="_right";
    var a=["首页","一口价","抵扣券","分期购车"];
    for(var i=0;i<4;i++){
        var _span=document.createElement("span")
        var _a=document.createElement("a");
        _span.appendChild(_a);
        _a.innerHTML=a[i];
        _right.appendChild(_span);
    }
    _nav_top.appendChild(_left);
    _nav_top.appendChild(_right);
}
function Fenlei() {
    this.json={
        "1":["品牌","大众","本田","丰田","吉利汽车","福特","宝马","奔驰","奥迪"],
        "2":["价格","8万以下","8-10万","10-15万","15-20万","20-30万","30-50万","50万以上"],
        "3":["级别","微型车","小型车","紧凑型车","中型车","中大型车","大型车","跑车","MPV","SUV","微面"]
    };
    this.create1=function (a) {
        this.div=document.createElement("div");
        this.div.className="top"+a;
        this.div1=document.createElement("div");
        this.div1.className="div1";
        this.div1.innerHTML=this.json[a][0];
        this.div2=document.createElement("div");
        this.div2.className="div2";
        for(var i=1;i<this.json[a].length;i++){
            this.span=document.createElement("span");
            this._a=document.createElement("a");
            this._a.innerHTML=this.json[a][i];
            this.span.appendChild(this._a);
            this.div2.appendChild(this.span);
        }
        this.div.appendChild(this.div1);
        this.div.appendChild(this.div2);
        this._div.appendChild(this.div);
    }

    /*特殊*/
    this.creatediv=function () {
        this.dfarther=document.getElementsByClassName("_nav_bottom_left")[0].children[0].children[0];
        this.dd=document.createElement("div");
        this.dd.innerHTML="查看全部<span>></span>"
        this.dfarther.appendChild(this.dd);
    }

    this.create=function () {
        this._nav_bottom_left = document.getElementsByClassName("_nav_bottom_left")[0];
        this._div = document.createElement("div");
        this._div.className="box";
        for (var a = 1; a <= 3; a++) {
            this.create1(a);
        }
        this._nav_bottom_left.appendChild(this._div);
    }
}

function Lunbo() {
    this.box=document.getElementsByClassName("_nav_bottom_right")[0];
    this.div=document.createElement("div");
    this.div.className="picture";
    this.img=document.createElement("img");
    this.a=document.createElement("a")
    this.div1=document.createElement("div");
    this.div1.className="pic";
    this.a.appendChild(this.img);
    this.div.appendChild(this.a);
    this.box.appendChild(this.div);
    this.box.appendChild(this.div1);
    for(var i=0;i<7;i++){
        this.span=document.createElement("span");
        this.span.className="o"+(i+1);
        this.div1.appendChild(this.span);
    }
    this.timer=0;
    var _self=this;
    var a=1;
    this.s=this.div1.children;
    this.move=function () {
        window.clearTimeout(_self.timer);
        _self.img.src="images/img"+a+".jpg";
        var i=(a-2);
        if(i<0){i=6}
        _self.s[a-1].style.backgroundColor="red";
        _self.s[i].style.backgroundColor="#fff";
        if(a<7){
            a++;
        }else {a=1}
        _self.timer=window.setTimeout(_self.move,2000);
    }

    this.img.onmouseenter=function(){
        window.clearTimeout(_self.timer);

    }
    this.img.onmouseleave=function(){
        _self.move();
    }
    //console.log(this.s[1].index)

    for(var n=1;n<8;n++){
        this.s[n-1].onmouseenter=function () {
            //window.clearTimeout(_self.timer);
            //a=parseInt(_self.getAttribute("className"));

            _self.img.src="images/img"+n+".jpg";
            var i=(n-2);
            if(i<0){i=6}
            _self.s[n-1].style.backgroundColor="red";
            _self.s[i].style.backgroundColor="#fff";
        }
        /*this.s[n-1].onmouseleave=function () {
         a=n+1
         if(a>7){a=1};
         }*/
    }
}