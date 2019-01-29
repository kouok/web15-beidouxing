<template>
  <div class="heade">
    <img src="../assets/imgs/logo.png">
    <div class="iconfont headerOne">
      <a href="" title="" class="iconfont icon-sousuo"></a>
      <a href="javascript:void(0)" title="" @click='show=!show' class="iconfont icon-caidan"></a>
      
      <div class="nav" v-show='show'>
        <ul class="ul">
          <li class="bor-b" @click='show=!show'><a href="javascript:void(0)" title=""><span>&#xe606;</span>首页</a></li>
          <li class="bor-b checked" @click='show=!show'><a href="javascript:void(0)" title=""><span>&#xe61e;</span>关于花信</a></li>
          <li class="bor-b" @click='show=!show'><a href="javascript:void(0)" title=""><span>&#xe634;</span>产品中心</a></li>
          <li class="bor-b" @click='show=!show'><a href="javascript:void(0)" title=""><span>&#xe600;</span>解决方案</a></li>
          <li class="bor-b" @click='show=!show'><a href="javascript:void(0)" title=""><span>&#xe631;</span>公司新闻</a></li>
          <li class="bor-b" @click='show=!show'><a href="javascript:void(0)" title=""><span class="mar-0">&#xe8ab;</span>人才招聘</a></li>
          <li class="" @click='show=!show'><a href="javascript:void(0)" title=""><span>&#xe62b;</span>关于我们</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headtop',
  data(){
    return{
      show:false,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .heade {
  height: .5rem;
  display: flex;
  justify-content: space-between;

}
.heade>img{
  width: 0.8rem;
  height:0.3rem;
  margin-left: 0.13rem;
  margin-top: 0.1rem;
}

.headerOne {
  margin-top: .13rem;
  margin-right: .32rem;
  position: relative;
}

.headerOne a {
  font-size: .2rem;
  margin-left: .12rem;
  color:#0B356E;
}
.nav {
  position: absolute;
  width: 1.45rem;
  background: white;
  z-index: 11;
  top: 0.25rem;
  right: -0.075rem;

}
.nav>ul{
  list-style: none;
}
.nav li{
  text-align: left;
  font-size: 0.16rem;
}
.nav:before {
  content: '';
  display: block;
  position: absolute;
  top: -.15rem;
  right: .02rem;
  border: solid transparent;
  border-bottom-color: #fff;
  border-width: .1rem;
  z-index: 12;
}

.nav a {
  font-size: 0.2rem;
  color: #9d9d9d;
}

.nav li {
  height: .37rem;
  line-height: .37rem;
}
.bor-b {
  border-bottom: .01rem solid #e6e6e6;
}
.checked{
  background:#183884;
}
.checked a {
  color: #fff;
}

.ul span {
  margin-right: 0.15rem;
}
.mar-0 {
  margin-right: -0.01rem!important;
}
</style>
