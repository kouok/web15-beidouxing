<template>
    <div id="app">
        <Header></Header>
        <Banner></Banner>
        <Body></Body>
        <product></product>
        <news></news>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './components/Header'
    import Banner from './components/Banner'
    import Body from './components/Body'
    import news from './components/News'
    import Footer from './components/Footer'
    import product from './components/product'

    export default {
        name: 'app',
        components: {
            Header,
            Banner,
            Body,
            product,
            news,
            Footer,

        }
    }
</script>

<style scoped>
    #app,
    html,
    body {
        width: 100%;
        height: 100%;
    }
</style>
