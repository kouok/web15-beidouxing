<template>
    <div>
        <div class="box1 iconfont">
            <div class="b1_sec bor-r">
                <a class="f100 blue" href="">&#xe61e;</a>
                <p class="bs_text">关于华信</p>
            </div>
            <div class="b1_sec bor-r">
                <a class="f100 orange" href="">&#xe634;</a>
                <p class="bs_text">产品中心</p>
            </div>
            <div class="b1_sec bor-r">
                <a class="f100 green" href="">&#xe600;</a>
                <p class="bs_text">解决方案</p>
            </div>
            <div class="b1_sec">
                <a class="f100 red" href="">&#xe62b;</a>
                <p class="bs_text">联系我们</p>
            </div>
        </div>
        <div class="ins"></div>
        <div class="box1 news TitBox">
            <div class="">
                <a class="bor-r pl_44 newsTit" href="">热点新闻</a>
            </div>
            <div class="iconfont">
                <div class="newsTit fl">&#xe6e8;</div>
                <!--轮播新闻-->
                <div class="pw_468">
                    <a class="font_20 co_666" href="#">UFirebird 战略合作发布，打响北斗低功耗物联网第一弹</a>
                </div>
            </div>
        </div>
        <div class="ins"></div>
    </div>
</template>
<script>
    export default {
        name: 'Body',
    }
</script>
<style scoped>
    .box1 {
        display: flex;
    }

    .b1_sec {
        width: 1.86rem;
        height: 2.08rem;
        text-align: center;
        padding-top: .4rem;
    }

    .bs_text {
        margin-top: .1rem;
        font-size: .23rem;
    }

    .f100 {
        width: .9rem;
        height: .9rem;
        padding: .2rem;
        font-size: .5rem;
        color: #fff;
        display: block;
        border-radius: .15rem;
        margin: 0 auto;
    }

    .blue {
        background-color: #28b1f9;
    }

    .orange {
        background-color: #ff8d3a;
    }

    .green {
        background-color: #6fd700;
    }

    .red {
        background-color: #ff6868;
    }

    .news {

    }

    .fl {
        float: left;
    }

    .TitBox {
        padding: .28rem 0;
    }

    .newsTit {
        display: block;
        padding: .2rem .22rem .2rem .2rem;
        color: #f10f1a;
        font-weight: 700;
        font-size: .3rem;
    }

    .pl_44 {
        padding-left: .44rem !important;
    }

    .bor-r {
        border-right: .02rem solid #e6e6e6;
    }

    .ins {
        width: 100%;
        height: .1rem;
        background-color: #e6e6e6;
    }

    .pw_468 {
        width: 4.68rem;
    }

    .font_20 {
        font-size: .20rem;
    }


    .co_666 {
        color: #666;
    }
</style>
