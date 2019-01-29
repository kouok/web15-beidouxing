 window.onload=function(){
    //轮播图div
  var ocarouselBox = document.getElementById('carouselBox');
  //轮播图ul
  var ocarousel = document.getElementById('carousel');
  var d1 = document.getElementById('d1');
  //轮播图标志点
  var osign = document.getElementById('sign').children;
  // console.log(ocarouselBox);
  var num = 1;
  var timer;
  var l = ocarousel.children[0].offsetWidth;
  ocarousel.addEventListener('webkitTransitionEnd',function (){
    if(num>=6){
      ocarousel.style.transition = '';
      ocarousel.style.left=-1*l+'px';
      num=1;
    }
    if(num<=0){
      ocarousel.style.transition = '';
      ocarousel.style.left=-5*l+'px';
      num=5;
    }

  });
  //向左滑动函数
  
  function left(){
    ocarousel.style.transition = 'left 0.6s';
    num++;
    ocarousel.style.left=-l*num+'px';
    fun();

  }
  //向右滑动
  function right(){
    ocarousel.style.transition = 'left 0.6s';
    num--;
    ocarousel.style.left=-num*l+'px';
    fun();
  }
  timer =  setInterval(left,3000);
  var startX = 0;
  var moveX = 0;
  var distanceX = 0;
  // 触摸开始
  ocarousel.addEventListener('touchstart',function (event) {
    clearInterval(timer);
    ocarousel.style.transition = '';
    startX = event.touches[0].clientX;

  });
  ocarousel.addEventListener('touchmove',function (event) {
    moveX = event.touches[0].clientX - startX;
    var left = num*l;
    console.log(num);
    ocarousel.style.left = -left+moveX+'px';
  });
  ocarousel.addEventListener('touchend',function (event) {
    var maxDistance = l/3;
    console.log(num);
    if (Math.abs(moveX)>maxDistance) {
      if (moveX>0) {
        num--;
      }else{
        num++;
      }
      ocarousel.style.transition = 'left 0.6s';
      // console.log(l);
      ocarousel.style.left = -num*l+'px';
      fun();

    }else{
      console.log(l);
      ocarousel.style.transition = 'left 0.6s';
      ocarousel.style.left= -num*l+'px';
    }
    timer =  setInterval(left,3000);
  });
  //绑定圆点
  function fun(){
    var index;
    for(var i = 0;i<5;i++){
      osign[i].className='';
      // console.log(osign[i].className);
    }
    if(num==0){
      index=4;
    }else if(num==6){
      index=0;
    }else{
      index=num-1;
    }
    osign[index].className='bgWhite';
  }

 }
 