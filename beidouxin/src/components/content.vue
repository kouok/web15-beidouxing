<template>
   <div>
    <div class="iconfont two">
      <div class="contentBg bor-r">
        <div class="cor-bg">&#xe61e;</div>
        <p>关于华信</p>
      </div>
      <div class="contentBg bor-r">
        <div class="cor-bg cor-o">&#xe634;</div>
        <p>产品中心</p>
      </div>
      <div class="contentBg bor-r">
        <div class="cor-bg cor-g">&#xe600;</div>
        <p>解决方案</p>
      </div>
      <div class="contentBg">
        <div class="cor-bg cor-red">&#xe62b;</div>
        <p>关于我们</p>
      </div>
    </div>
    <div class="top"></div>
    <div class="now">
      <div class="nowTitle">
        <div>
          <a class="bor-r"style='padding-right:0.1rem;font-size:0.16rem;color:red'>热点新闻</a>
        </div>
      </div>
      <div class="nowTop iconfont ">
        <div class="fon">&#xe6e8;<a>UFirbird战略合作发布,打响北斗低功耗物联网第一弹</a></div>
      </div>
    </div>
    <div class="tabqh">
      <ul>
        <li>高精度定位天线</li>
        <li>数传电台</li>
        <li>卫星通信</li>
      </ul>
      <div class="tabimgBox">
        <div>
          <img src="../assets/imgs/3D扼流圈天线.png" alt="">
          <p>3D基准站天线</p>
          <button>查看详情</button>
        </div>
        <div>
          <img src="../assets/imgs/3D扼流圈天线.png" alt="">
          <p>3D基准站天线</p>
          <button>查看详情</button>
        </div>
        <div>
          <img src="../assets/imgs/3D扼流圈天线.png" alt="">
          <p>3D基准站天线</p>
          <button>查看详情</button>
        </div>
      </div>
    </div>
    <div class="list">
      <div>新闻中心</div>
      <div>查看更多>></div>
    </div>
    <ul class="listUl">
      <li v-for="item,index in list">{{item.title}}
        <div style="float:right;">{{item.time}}</div>
      </li>
    </ul>
    <p class="p2"><a href="#" >人才招聘</a><a href="#">留言反馈</a><a href="#">友情链接</a></p>
    <p class="p1">翻版必究，yijgy$h215222号</p>
    <p class="p1">Copy 2012翻版必究，生政华政有限公司</p>
  </div>
</template>

<script>
export default {
  name: 'contentbox',
  data(){
    return{
      list:[{title:'新闻1,哪家强。。。',time:'2018-06-12'},{title:'新闻1,哪家强。。。',time:'2018-06-12'},{title:'新闻1,哪家强。。。',time:'2018-06-12'}]
    }
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.two{
  display:flex;
  height:1.05rem;
}
.contentBg{
  width:25%;
  height:1.05rem;
  text-align:center;

}
.contentBg p{
  font-size: 0.14rem;
}
.bor-r{
  border-right:1px solid #a1a1a1;

}
.cor-bg{
  width:0.47rem;
  height:0.47rem;
  background:#28b1f9;
  font-size:0.18rem;
  margin-left:0.21rem;
  margin-top:0.23rem;
  color:white;
  line-height:0.47rem;
  border-radius:0.1rem;
}
.cor-o{
  background:#ff8d3a;
}
.cor-g{
  background:green;
}
.cor-red{
  background:#ff6868;
}
.top{
  width:100%;
  height:0.05rem;
  background:#e6e6e6;
}
.now{
  height:0.6rem;
  display:flex;
}
.nowTitle{
  width:0.95rem;
  height:0.6rem;
  line-height:0.6rem;
  text-align:center;
  flex:1;
}
.mr{
  margin-right:.1rem;
}
.nowTop{
  width:2.795rem;
  height:0.6rem;
  font-size:.14rem;

}
.fon{
  margin-top:0.15rem;
  padding-right: 0.15rem;
  color:red;
  text-align: left;
  font-size:.13rem;
  
}
.nowTop a{
  color:#8f8f8f;

}
.tabqh{
  margin-top: 0.05rem;
}
.tabqh ul{
  list-style: none;
  display: flex;
  justify-content:space-around;
}
.tabqh li{
  height:0.4rem;
  line-height: 0.4rem;
  text-align: center;
  color:#162B5F;
}
.tabqh li:hover{
  border-bottom: 0.02rem solid #162B5F;
}
.tabimgBox{
  padding:0.2rem 0.1rem;
  
  display: flex;
  justify-content: space-between;
}
.tabimgBox>div{
  width:1.15rem;
  text-align: center;
}
.tabimgBox>div>img{
  width: 100%
}
.tabimgBox>div>button{
  border: 0.01rem solid #ccc;
  background-color: #B2B2B2;
  color:#666;
}
</style>