<template>
    <div id="app">
        <Header active="contact"/>    
        <Contact />
        <Footer />
    </div>
</template>

<style scoped>

</style>

<script>
import Header from '@/components/Header';
import Contact from '@/components/ContactUs.vue';
import Footer from  '@/components/Footer';
export default {
    name: 'contact',
    components:{
        Header,
        Contact,
        Footer
    },
    
}
</script>