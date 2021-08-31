let arr=[0,0,0,0,0,0,0,0,0,0];

b1=document.querySelector('#g1');
b2=document.querySelector('#g2');
b3=document.querySelector('#g3');
b4=document.querySelector('#g4');
b5=document.querySelector('#g5');
b6=document.querySelector('#g6');
b7=document.querySelector('#g7');
b8=document.querySelector('#g8');
b9=document.querySelector('#g9');


const Xdata=`<i class="fas fa-times fa-5x" style='animation: slo 0.3s linear both;'></i>`;
const Odata=`<i class="far fa-circle fa-4x" style='animation: slo 0.3s linear both;'></i>`;


function check(ar)
{
if((ar[1]*ar[2]*ar[3]==1)||(ar[1]*ar[5]*ar[9]==1)||(ar[3]*ar[5]*ar[7]==1)||(ar[4]*ar[5]*ar[6]==1)||(ar[7]*ar[8]*ar[9]==1)||(ar[2]*ar[5]*ar[8]==1)||(ar[3]*ar[6]*ar[9]==1)||(ar[1]*ar[4]*ar[7]==1))
{
setTimeout(function(){alert("X is the winner.");window.location.reload();},300);
}
else if((ar[1]+ar[2]+ar[3]==6)||(ar[1]+ar[5]+ar[9]==6)||(ar[3]+ar[5]+ar[7]==6)||(ar[4]+ar[5]+ar[6]==6)||(ar[7]+ar[8]+ar[9]==6)||(ar[2]+ar[5]+ar[8]==6)||(ar[3]+ar[6]+ar[9]==6)||(ar[1]+ar[4]+ar[7]==6))
{
setTimeout(function(){alert("O is the winner.");window.location.reload();},300);
}
else if((ar[1]!=0)&&(ar[2]!=0)&&(ar[3]!=0)&&(ar[4]!=0)&&(ar[5]!=0)&&(ar[6]!=0)&&(ar[7]!=0)&&(ar[8]!=0)&&(ar[9]!=0))
{
setTimeout(function(){alert("It is the same old draw!");window.location.reload();},300);
}
}



function valChange(arr,a,b)
{
if(arr[a]==0)
{
if(arr[0]==0){
arr[a]=1;b.innerHTML=Xdata;
arr[0]=1;
check(arr);
}
else
{arr[a]=2;b.innerHTML=Odata;
arr[0]=0;
check(arr);}
}
};


b1.addEventListener("click",()=>valChange(arr,1,b1));
b2.addEventListener("click",()=>valChange(arr,2,b2));
b3.addEventListener("click",()=>valChange(arr,3,b3));
b4.addEventListener("click",()=>valChange(arr,4,b4));
b5.addEventListener("click",()=>valChange(arr,5,b5));
b6.addEventListener("click",()=>valChange(arr,6,b6));
b7.addEventListener("click",()=>valChange(arr,7,b7));
b8.addEventListener("click",()=>valChange(arr,8,b8));
b9.addEventListener("click",()=>valChange(arr,9,b9));




