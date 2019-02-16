<template>
    <div class="py_20">
        <div class="px_20 clear bb_999">
            <h3 class="fl c_333 c_183884 py_10">新闻中心<span class="f_18">/NEWS CENTER</span></h3>
            <a class="f_18 c_183884 fr lh_40" href="">查看更多&gt;&gt;</a>
        </div>
        <ul class="lh_33 p_20">
            <li class="list_s">
                <a class="f22 c_333 in_block w_520" href="">PTK电台哪家强？eRadio&#8482;智能电台大比测</a>
                <span class="fr c_999">2018-07-16</span>
            </li>
            <li class="list_s">
                <a class="f22 c_333 in_block w_520" href="">共建北斗新时代 | 华信亮相第九届中国卫星导航到拉萨法拉盛福建省卡夫卡</a>
                <span class="fr c_999">2018-07-16</span>
            </li>
            <li class="list_s">
                <a class="f22 c_333 in_block w_520" href="">创新·融合 | 华信引领高精度天线进入全网通时代</a>
                <span class="fr c_999">2018-07-16</span>
            </li>
        </ul>
        <div class="ins"></div>
    </div>
</template>
<script>
    export default {
        name: 'News',
    }
</script>
<style scoped>
    .list_s {
        padding-left: .26rem;
        background: url("../assets/imgs/list.png") no-repeat 0 .06rem;
    }

    .w_520 {
        width: 5rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .ins {
        width: 100%;
        height: .1rem;
        background-color: #e6e6e6;
    }

    /*配置*/
    .in_block {
        display: inline-block;
    }

    .fl {
        float: left;
    }

    .fr {
        float: right;
    }

    .clear:after {
        content: '';
        display: block;
        clear: both;
        height: 0;
    }

    .py_20, .p_20 {
        padding-top: .2rem;
        padding-bottom: .2rem;
    }

    .px_20, .p_20 {
        padding-left: .2rem;
        padding-right: .2rem;
    }

    .py_10 {
        padding-top: .1rem;
        padding-bottom: .1rem;
    }

    .f_28 {
        font-size: .28rem;
    }

    .f22 {
        font-size: .22rem;
    }

    .f_18 {
        font-size: .18rem;
    }

    .lh_33 {
        line-height: .33rem;
    }

    .lh_40 {
        line-height: .4rem;
    }

    .c_333 {
        color: #333;
    }

    .c_999 {
        color: #999;
    }

    .c_183884 {
        color: #183884;
    }

    .bb_999 {
        border-bottom: .01rem solid #999;
    }
</style>
