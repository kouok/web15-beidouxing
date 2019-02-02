<template>
    <div>
        <div class="flex h_70 lh_80">
            <a class="px_20 c_183884 fs_28 " href="">
                <div class="xuan">高度定位天线</div>
            </a>
            <a class="px_20 c_183884 fs_28" href=""><span>数传电台</span></a>
            <a class="px_20 c_183884 fs_28" href=""><span>卫星通信</span></a>
        </div>
        <div class="xian">
            <div></div>
        </div>
        <div class="py_35 px_20 over_hidden">
            <ul class="clear w_800">
                <li class="w_230 txt_c mr_10 fl">
                    <div class="bg_e6 w_230 h_195 pt_40"><img alt="" class="w_180" src="../assets/imgs/3D.png"></div>
                    <div class="b_1_e6 py_28">
                        <h3 class="fs_25">3D基准站天线</h3>
                        <a class="fs_18 c_b3 mt_12 in_block b_1_e6 ppp" href="">查看详情&gt;&gt;</a>
                    </div>
                </li>
                <li class="w_230 txt_c mr_10 fl">
                    <div class="bg_e6 w_230 h_195 pt_40"><img alt="" class="w_180" src="../assets/imgs/2D.png"></div>
                    <div class="b_1_e6 py_28">
                        <h3 class="fs_25">2D基准站天线</h3>
                        <a class="fs_18 c_b3 mt_12 in_block b_1_e6 ppp" href="">查看详情&gt;&gt;</a>
                    </div>
                </li>
                <li class="w_230 txt_c mr_10 fl">
                    <div class="bg_e6 w_230 h_195 pt_40"><img alt="" class="w_180" src="../assets/imgs/3D.png"></div>
                    <div class="b_1_e6 py_28">
                        <h3 class="fs_25">3D基准站天线</h3>
                        <a class="fs_18 c_b3 mt_12 in_block b_1_e6 ppp" href="">查看详情&gt;&gt;</a>
                    </div>
                </li>
            </ul>
            <!--<ul></ul>-->
            <!--<ul></ul>-->
        </div>
        <div class="ins"></div>
    </div>
</template>

<script>
    export default {
        name: 'product',
    }
</script>

<style scoped>

    .ppp {
        padding: .05rem .18rem;
    }

    a {
        position: relative;
    }

    .xian {
        width: 100%;
        height: .02rem;
        background-color: #e6e6e6;
    }

    .xuan:after {
        content: '';
        display: block;
        width: 1.68rem;
        height: .06rem;
        position: absolute;
        top: .67rem;
        background-color: #183884;
    }

    /*pei*/
    .ins {
        width: 100%;
        height: .1rem;
        background-color: #e6e6e6;
    }


    .fl {
        float: left;
    }

    .clear:after {
        content: '';
        display: block;
        height: 0;
        clear: both;
    }

    .b_1_e6 {
        border: 1px solid #e6e6e6;
    }

    .in_block {
        display: inline-block;
    }

    .flex {
        display: flex;
        justify-content: center;
    }

    .pt_40 {
        padding-top: .4rem;
    }

    .over_hidden {
        overflow: hidden;
    }

    .w_800 {
        width: 8rem;
    }

    .w_230 {
        width: 2.3rem;
    }

    .w_180 {
        width: 1.8rem;
    }

    .h_70 {
        height: .7rem;
    }

    .lh_80 {
        line-height: .8rem;
    }

    .py_35 {
        padding-top: .35rem;
        padding-bottom: .35rem;
    }

    .py_28 {
        padding-top: .28rem;
        padding-bottom: .28rem;
    }

    .px_20 {
        padding-left: .2rem;
        padding-right: .2rem;

    }

    .mr_10 {
        margin-right: .1rem;
    }

    .mt_12 {
        margin-top: .12rem;
    }

    .h_195 {
        height: 1.95rem;
    }

    .fs_28 {
        font-size: .28rem;
    }

    .fs_25 {
        font-size: .25rem;
    }

    .fs_18 {
        font-size: .18rem;
    }

    .c_b3 {
        color: #b3b3b3;
    }

    .c_183884 {
        color: #183884;
    }

    .bg_e6 {
        background-color: #e6e6e6;
    }

    .txt_c {
        text-align: center;
    }
</style>
