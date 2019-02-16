<template>
    <div class="banner">
        <ul class="b_img clear">
            <li><a href="javascript:void(0)">
                <img alt="" src="../assets/imgs/banner1.png">
            </a></li>
            <li><a href="javascript:void(0)">
                <img alt="" src="../assets/imgs/banner1.png">
            </a></li>
            <li><a href="javascript:void(0)">
                <img alt="" src="../assets/imgs/banner1.png">
            </a></li>
            <li><a href="javascript:void(0)">
                <img alt="" src="../assets/imgs/banner1.png">
            </a></li>
        </ul>
        <ul class="b_btn clear">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'Banner',
    }
</script>
<style scoped>
    .banner {
        overflow: hidden;
        position: relative;
    }

    .b_img {
        width: 400%;

    }

    .b_img img {
        width: 100%;
    }

    .clear:after {
        content: '';
        display: block;
        clear: both;
    }

    .b_img li, .b_btn li {
        float: left;

    }

    .b_img li {
        width: 25%;
    }

    .b_btn {
        position: absolute;
        bottom: .1rem;
        left: 50%;
        transform: translateX(-50%);
    }

    .b_btn li {
        width: .2rem;
        height: .2rem;
        background-color: #fff;
        border-radius: 50%;
        margin-left: .1rem;
    }


</style>
