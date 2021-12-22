var Arr=new Array();//定义数组
Arr[1]="url('images/product/R2_white.png')";
Arr[2]="url('images/product/R2_black.png')";
Arr[3]="url('images/product/R2_green.png')";
Arr[4]="url('images/product/R2_1.png')";
Arr[5]="url('images/product/R2_2.png')";
Arr[6]="url('images/product/R2_3.png')";
Arr[7]="url('images/product/R2_4.png')";
Arr[8]="url('images/product/R2_5.png')";
var col=new Array('纯白光阴特别版','经典黑色','孔雀蓝');
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
function blue(){//自定义函数
    var background=document.getElementById("change");
    background.style.backgroundImage=Arr[3];//设置背景颜色为对应数组元素的值
    document.getElementById("col").innerHTML=col[2];
}
var n=0;//为变量赋初值
function photo(){//自定义函数
    var background=document.getElementById("change");
    if (n==(Arr.length-1)) n=0;//判断数组指针是否指向最后一个元素
    n++;//变量自加1
    background.style.backgroundImage=Arr[n];
}
var btns = document.getElementsByClassName('ack1');
var pri=new Array('2,699.00','2,999.00','3,699.00','4,499.00');
var rom=new Array('8+128','8+256','12+256','16+512');
function ack(){
    for (var i = 0; i < btns.length; i++) {
        btns[i].onclick=function () {
            console.log(i);
            for (var j=0;j<btns.length;++j){
                btns[j].style.backgroundColor='';
            }
            this.style.backgroundColor='cornflowerblue';
            if (this.id == "bt1") {
                document.getElementById("price").innerHTML = pri[0];
                document.getElementById("price1").innerHTML = pri[0];
                document.getElementById("rom").innerHTML = rom[0];
            }
            else if(this.id=="bt2"){
                document.getElementById("price").innerHTML=pri[1];
                document.getElementById("price1").innerHTML=pri[1];
                document.getElementById("rom").innerHTML=rom[1];
            }
            else if(this.id=="bt3"){
                document.getElementById("price").innerHTML=pri[2];
                document.getElementById("price1").innerHTML=pri[2];
                document.getElementById("rom").innerHTML=rom[2];
            }
            else{
                document.getElementById("price").innerHTML=pri[3];
                document.getElementById("price1").innerHTML=pri[3];
                document.getElementById("rom").innerHTML=rom[3];
            }
        }
    }

}








