var Arr=new Array();//定义数组
Arr[1]="url('images/product/p_grey.jpg')";
Arr[2]="url('images/product/p_blue.jpg')";
Arr[3]="url('images/product/p_1.jpg')";
var col=new Array('灰色','蓝色');
var pr='129.00';
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









