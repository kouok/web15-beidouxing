<template>
    <div class="line_h pd_y_20">
        <div class="dis jus_c">
            <a class="px_20" href="">人才招聘</a>
            <a class="px_20" href="">留言反馈</a>
            <a class="px_20" href="">友情链接</a>
        </div>
        <p class="txt_c co_999">翻版必究 粤ICP备09221680号</p>
        <p class="txt_c co_999">Copyright &copy;2012 深圳市华信天线技术有限公司</p>
    </div>
</template>
<script>
    export default {
        name: 'Footer',
    }
</script>
<style scoped>
    .dis {
        display: flex;
    }

    .jus_c {
        justify-content: center;
    }

    .txt_c {
        text-align: center;
    }

    .co_999 {
        color: #999999;
    }

    .line_h {
        line-height: .4rem;
    }

    .pd_y_20 {
        padding: .2rem 0;
    }

    .px_20 {
        padding: 0 .2rem;
    }
</style>
