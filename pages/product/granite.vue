<template>
    <div id="app">
        <Header active="product"/>
        <GraniteBook />
        <Footer />
    </div>
</template>

<style scoped>

</style>

<script>
import Header from '@/components/Header';
import GraniteBook from  '@/components/Granite';
import Footer from '@/components/Footer';
export default {
    name: 'Granite',
    components:{
        Header,
        GraniteBook,
        Footer,
    }
}
</script>