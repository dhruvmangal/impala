<template>
    <div id="app">
        <Header active="about"/>
        <AboutCompany />
        <Mission />
        <Team />
        <Footer />
    </div>
</template>

<style scoped>

</style>

<script>
import Header from '@/components/Header';
import AboutCompany from '@/components/About';
import Mission from '@/components/Mission';
import Footer from  '@/components/Footer';
import Team from '@/components/Team';

export default {
    name: 'About',
    components:{
        Header,
        AboutCompany,
        Mission,
        Footer,
        Team
    }
}
</script>