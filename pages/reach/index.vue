<template>
    <div id="app">
        <Header active="reach"/>
        <Map />
        <Footer />
    </div>
</template>

<style scoped>

</style>

<script>
import Header from '@/components/Header';
import Map from '@/components/Map';
import Footer from '@/components/Footer';
export default {
    name: 'Reach',
    components:{
        Header,
        Map,
        Footer
    }
}
</script>