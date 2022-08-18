var close = document.getElementsByClassName("coupon");
var i;
for(i=0;i<close.length;i++){
    close[i].addEventListener("click",function(){
        this.parentElement.style.display = 'none';
    });
}