
    var tit = document.getElementById('nav');
    // 占位符设置
    var rect = tit.getBoundingClientRect();//获得页面中导航条相对浏览器视窗的位置。
    var inseDiv = document.createElement('div');
    tit.parentNode.replaceChild(inseDiv, tit);
    inseDiv.appendChild(tit);
    inseDiv.style.height = rect.height + 'px';
    // 获取导航条距页面顶部的距离
    var titTop = tit.offsetTop;
    //设置滚动监听事件
    document.onscroll = function() {
        //获取当前滚动距离
        var btop = document.body.scrollTop || document.documentElement.scrollTop;
        //如果滚动距离大于导航条距顶部距离
        if (btop > titTop) {
            //为导航条设置fixed
            tit.className = "clearfix fix";
        }else {
        //移出fixed
        tit.className = "clearfix";
        }
    }
        //获取div下面所有的a标签（返回节点对象）
        var myNav =document.getElementsByClassName("menu").getElementsByTagName("a");

        //获取当前窗口的url
        var myURL = document.location.href;

        //循环div下面所有的链接，
        for(i=1;i<myNav.length;i++){
        //获取每一个a标签的herf属性
        var links = myNav[i].getAttribute("href");
        var myURL = document.location.href;

        //查看div下的链接是否包含当前窗口，如果存在，则给其添加样式
        if(myURL.indexOf(links) != -1){
        myNav[i].className="active";
        myNav[0].className="";
    }
    }


