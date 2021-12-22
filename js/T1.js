var Arr=new Array();//定义数组
Arr[1]="url('images/product/T1_white.jpg')";
Arr[2]="url('images/product/T1_black.jpg')";
Arr[3]="url('images/product/T1_1.jpg')";
Arr[4]="url('images/product/T1_2.jpg')";
Arr[5]="url('images/product/T1_3.jpg')";
Arr[6]="url('images/product/T1_4.jpg')";
Arr[7]="url('images/product/T1_5.jpg')";
Arr[8]="url('images/product/T1_6.jpg')";
Arr[9]="url('images/product/T1_7.jpg')";
Arr[10]="url('images/product/T1_8.jpg')";
Arr[11]="url('images/product/T1_9.jpg')";
function white(){//自定义函数
    var background=document.getElementById("change");
    background.style.backgroundImage=Arr[1];//设置背景颜色为对应数组元素的值
    document.getElementById("col").innerHTML=col[0];
}
function black(){//自定义函数
    var background=document.getElementById("change");
    background.style.backgroundImage=Arr[2];//设置背景颜色为对应数组元素的值
    document.getElementById("col").innerHTML=col[1];
}
var n=0;//为变量赋初值
function photo(){//自定义函数
    var background=document.getElementById("change");
    if (n==(Arr.length-1)) n=0;//判断数组指针是否指向最后一个元素
    n++;//变量自加1
    background.style.backgroundImage=Arr[n];
}




