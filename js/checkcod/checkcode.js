var str="";
var img="";
var strsource=['明','天','日','科','技','会','更','好','创','新'];
for(var i=0;i<4;i++){
    var n=Math.floor(Math.random()*strsource.length);
    str=str+strsource[n];
    img=img+"<img src='images/checkcode/"+n+".gif' width='19' height='20'> ";
    div1.innerHTML=img;
}