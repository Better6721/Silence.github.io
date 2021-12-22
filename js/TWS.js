var Arr=new Array();//定义数组
Arr[1]="url('images/product/TWS_white.webp')";
Arr[2]="url('images/product/TWS_black.webp')";
Arr[3]="url('images/product/TWS_1.webp')";
Arr[4]="url('images/product/TWS_2.webp')";
Arr[5]="url('images/product/TWS_3.webp')";
var col=new Array('纯白','经典黑色');
var pr='99.00';
function white(){//自定义函数
    var background=document.getElementById("change");
    background.style.backgroundImage=Arr[1];//设置背景颜色为对应数组元素的值
    document.getElementById("col").innerHTML=col[0];
    document.getElementById("price").innerHTML = pr;
    document.getElementById("price1").innerHTML = pr;
}
function black(){//自定义函数
    var background=document.getElementById("change");
    background.style.backgroundImage=Arr[2];//设置背景颜色为对应数组元素的值
    document.getElementById("col").innerHTML=col[1];
    document.getElementById("price").innerHTML =pr;
    document.getElementById("price1").innerHTML =pr;
}
var n=0;//为变量赋初值
function photo(){//自定义函数
    var background=document.getElementById("change");
    if (n==(Arr.length-1)) n=0;//判断数组指针是否指向最后一个元素
    n++;//变量自加1
    background.style.backgroundImage=Arr[n];
}









