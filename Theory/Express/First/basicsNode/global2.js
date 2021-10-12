var time =0;
var timer = setInterval(function(){
    time += 2;
   
    console.log(time+'sec have passed ');
    if(time>7)
    clearInterval(timer);
});