<template>
    <div class="head iconfont">
        <div class="logo"><a href=""><img alt="" src="../assets/imgs/logo.png"></a></div>
        <div class="ben">
            <a class="f30" href="javascript: void(0)">&#xe612;</a>
            <a class="f45" href="javascript: void(0)">&#xe657;</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>

<style scoped>
    .head {
        height: .96rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo {
        line-height: .54rem;
        margin-left: .3rem;
    }

    .logo a {
        display: block;
        width: 100%;
        height: 100%;
    }

    .logo img {
        height: .54rem;
    }

    .ben {
        margin-right: .35rem;
    }

    .ben a {
        margin-left: .28rem;
    }

    .f45 {
        font-size: .45rem;
    }

    .f30 {
        font-size: .3rem;
    }
</style>
