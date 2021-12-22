var Arr=new Array();//定义数组
Arr[1]="url('images/product/TNTGO_black.png')";
Arr[2]="url('images/product/TNTGO_green.png')";
Arr[3]="url('images/product/TNTGO_1.png')";
Arr[4]="url('images/product/TNTG0_2.png')";
Arr[3]="url('images/product/TNTGO_3.png')";
Arr[4]="url('images/product/TNTGO_5.png')";
Arr[3]="url('images/product/TNTGO_6.png')";
Arr[4]="url('images/product/TNTGO_7.png')";
var col=new Array('黑色','绿色');
var pr='1999.00';
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









