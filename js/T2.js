var Arr=new Array();//定义数组
Arr[1]="url('images/product/T2_1.png')";
Arr[2]="url('images/product/T2_black.png')";
Arr[3]="url('images/product/T2_2.png')";
Arr[4]="url('images/product/T2_3.png')";
Arr[5]="url('images/product/T2_4.png')";
Arr[6]="url('images/product/T2_5.png')";
Arr[7]="url('images/product/T2_6.png')";
Arr[8]="url('images/product/T2_7.png')";
Arr[9]="url('images/product/T2_8.png')";
Arr[10]="url('images/product/T2_9.png')";
Arr[11]="url('images/product/T2_10.png')";
Arr[12]="url('images/product/T2_11.png')";
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




