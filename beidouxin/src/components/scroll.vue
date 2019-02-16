<template>
  <section class="carouselBox" id="carouselBox">
    <ul class="carousel" id="carousel">
      <li><img src="../assets/imgs/banner1.png" alt=""></li>
      <li><img src="../assets/imgs/banner1.png" alt=""></li>
      <li><img src="../assets/imgs/banner1.png" alt=""></li>
      <li><img src="../assets/imgs/banner1.png" alt=""></li>
      <li><img src="../assets/imgs/banner1.png" alt=""></li>
      <li><img src="../assets/imgs/banner1.png" alt=""></li>
      <li><img src="../assets/imgs/banner1.png" alt=""></li>
    </ul>
    <ul class="sign" id="sign">
      <li class="bgWhite"></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'scroll'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carouselBox{
  position: relative;
  height:2.5rem;
  overflow: hidden;
}
.carousel{
  position: absolute;
  left: -3.75rem;
  list-style: none;
  width: 700%;
  height:2.5rem;
}
.carousel>li{
  float: left;
  width: 3.75rem;
  height: 2.5rem;
}
.carousel>li>img{
  width:100%;
  height:100%;
}
.sign{
  
  position: absolute;
  bottom: 0.08rem;
  left:50%;
  margin-left: -0.3rem;
  list-style: none;
  
}
.sign>li{
  float: left;
  border-radius: 50%;
  width: 0.06rem;
  height:0.06rem;
  background: #ccc;
  margin-left: 0.06rem;

}
.sign>.bgWhite{ background: white }
</style>
