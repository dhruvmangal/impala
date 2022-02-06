<template>
  <div id="app">
    <Header active="home"/>
    <Sliders/>
    <Summery />    
    <AboutHome/>
    <Inquery />
    <CompanyLegal />
    <Footer/>
    <!--Start of Tawk.to Script-->
<!--End of Tawk.to Script-->
  </div>
  
</template>

<style scoped>
#app {
  font-family: 'Lato', sans-serif;
}
</style>
<script>
import Header from '@/components/Header';
import Sliders from '@/components/Sllider';
import Summery from '@/components/Summery';
import AboutHome from  '@/components/AboutHome.vue';
import Inquery from '@/components/Inquery';
import CompanyLegal from  '@/components/CompanyLegal.vue';
import Footer from  '@/components/Footer';

export default {
  name: 'index',
  components:{
    Header,
    Sliders,
    Summery,
    AboutHome,
    Inquery,
    CompanyLegal,
    Footer
  },

  created(){
    
    
    
    // var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    // (function(){
    // var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    // s1.async=true;
    // s1.src='https://embed.tawk.to/615c3ed7d326717cb684d575/1fh85d8e2';
    // s1.charset='UTF-8';
    // s1.setAttribute('crossorigin','*');
    // s0.parentNode.insertBefore(s1,s0);
    // })();
    // window.Tawk_API.onLoad = function () { window.Tawk_API.hideWidget(); };
  }
}
</script>
