<template>
    <div class="container-fluid header">
        <div class="row covid">
            <div class="col-md-8">
            </div>
            <div class="col-md-4 col-12 col-sm-6">
                <ul>
                    <li> <a href="https://www.facebook.com/Impala-Black-Enterprises-100254445772877" target="_blank"><img src="/facebook-brands.svg" class="social-icon" width="20px" height="20px" /> </a></li>
                    <li> <a href="https://www.instagram.com/impala.black/" target="_blank"><img src="/instagram-brands.svg" class="social-icon" width="20px" height="20px" /> </a></li>
                    <li> <a href="https://twitter.com/ImpalaBlackEnt" target="_blank"><img src="/twitter-brands.svg" class="social-icon" width="20px" height="20px" /> </a></li>
                    <li> <a href="https://www.linkedin.com/company/impala-black-enterprises/" target="_blank"><img src="/linkedin-brands.svg" class="social-icon" width="20px" height="20px" /> </a></li>
                </ul>
            </div>
        </div>
        <div class="row header-main">
            <div class="col-md-4 col-8">
                <div class="logo">
                    <img src="/logo.png" alt="" class="logo-img">
                </div>
                
            </div>
            <div class="col-md-8 col-4">
                <div class="nav-mobile" @click="openNav()">
                    &#9776;
                    </div>
                <div class="nav">
                    <ul>
                        <li><b> <NuxtLink to='/'> <span :class="{'active': (active=='home')? true : false, 'span': (active!='home')? true : false}">Home</span></NuxtLink> </b></li>
                        <li><b> <NuxtLink to='/about'> <span :class="(active=='about')? 'active': 'span' ">About Us </span></NuxtLink> </b></li>
                        <li>
                            <span class="product"><b> <span :class="(active=='product')? 'active': 'span' ">Products</span> <i class="fa fa-angle-down"></i></b></span>
                            <div class="sub-nav">
                                <p><NuxtLink to='/product/granite'>Granite</NuxtLink></p>
                                <hr/>
                                <p><NuxtLink to='/product/sandstone'>Sand Stone</NuxtLink></p>
                                                                
                            </div>
                        </li>
                        <li> <b> <NuxtLink to='/reach'> <span :class="{'active': (active=='reach')? true : false, 'span': (active!='reach')? true : false}">How To Reach</span> </NuxtLink></b></li>
                        <li> <b> <NuxtLink to='/contact'><span :class="{'active': (active=='contact')? true : false, 'span': (active!='contact')? true : false}">Contact us</span> </NuxtLink></b></li>
                    </ul>
                </div>
            </div>
            
        </div>
        <div class="navigation" v-if="nav">
            <div class="navigation-list">
                <NuxtLink to='/'> <span :class="(active=='home')? 'active': 'span-nav' "> Home </span></NuxtLink>
            </div>
            <div class="navigation-list">
                <nuxt-link to='/about'><span :class="(active=='about')? 'active': 'span-nav' ">About Us</span></nuxt-link>
            </div>
            <div class="navigation-list">
                <span :class="(active=='product')? 'active': 'span-nav' " @click="changeSubMenu()">Products <i class="fa fa-angle-down"></i></span>
                
            </div>
            <div class="navigation-sub-list" v-if="submenu==true">
                <nuxt-link to='/product/granite'><span class="active-submenu">Granite</span></nuxt-link>
            </div>
            <div class="navigation-sub-list" v-if="submenu==true">
                Sand Stone
            </div>
            <div class="navigation-list">
                <NuxtLink to="/reach"> <span :class="(active=='reach')? 'active': 'span-nav' "> How To Reach </span> </NuxtLink>
            </div>
            <div class="navigation-list">
                <NuxtLink to="/contact"> <span :class="(active=='contact')? 'active': 'span-nav' ">  Contact us </span> </NuxtLink>
            </div>

        </div>
    </div>
</template>

<style scoped>
    .header{
        z-index:2;
        box-shadow: 2px 2px 2px #f0f0f0;  
        margin: 0px;
        position: sticky;
        top: 0px;
        background-color: white;
    }

    .logo{
        margin: 20px 20px;
        float: left;
    }
    .logo-img{
        width: 200px;
        height: auto;
        position: absolute;
        top: -15px;
        background-color: white;
        border-radius: 10px;
        outline: 0.1em solid #6F9CBC;
    }
    ul{
        list-style-type: none;
    }
    li{
        float: left;
        padding: 15px 20px;
        cursor: pointer;
    }
    li:hover{
        color: #6F9CBC;
    }
    .active{
        color: #6F9CBC !important;
    }
    .covid{
        background-color: #6F9CBC;
        color: white;
        text-align: center;
        padding: 2px 0px;
        height: 40px; 
    }
    .span{
        color: black !important;
    }
    .social-icon{
        color: green;
        margin-top: -8px;
        margin-right: 2%;
        float: left;
    }
    .nav li:hover{
        text-decoration: underline
    }
    .nav-mobile{
        display: none;
    }
    .navigation{
        display: none;
    }
    .sub-nav{
        position: absolute;
        top:40;
        width: 150px;
        height: 100px;
        z-index: 3;
        border: 1px solid #f1f1f1;
        background-color: white;
        border-radius: 5px;
        text-align: center;
        display: none;
    }
    .sub-nav p{
        margin-top: 8px;
    }
    .sub-nav:hover{
        display: block;
    }
    .product:hover + .sub-nav {
        display: block;
    }
    .span-nav{
        color: white;
    }

    @media only screen and (max-width: 600px) {
        .nav{
            display: none;
        }
        .nav-mobile{
            display: block;
            float: right;
            font-size: 25px;
            margin: 10px;
        }
        .navigation{
            display: block;
            position: fixed;
            top: 100px;
            left: 0px;
            width: 100vw;
            height: auto;
            z-index: 5;
            background-color: #6F9CBC;

        }
        .navigation-list{
            width: 100%;
            text-align: center;
            border-bottom: 1px solid #f1f1f1;
            padding: 15px;
            font-size: 18px;
            color: white;

        }
        .navigation-sub-list{
            width: 100%;
            text-align: center;
            border-bottom: 1px solid #f1f1f1;
            padding: 15px;
            font-size: 18px;
            color: #6F9CBC;
            background-color: white;
        }
        .logo-img{
            display: block;
            outline: none;
            position: static;
        }
        .active{
            color: white !important;
            font-weight: bold;
        }
        .active-submenu{
            color: #6F9CBC;
        }
    }
</style>

<script>

import Navigation from  '@/components/Navigation';
export default {
    name: 'Header',
    components:{
        Navigation
    },
    props:{
        active: String
    },
    data(){
        return{
            nav: false,
            submenu: false
        }
    },
    mounted(){
        console.log(this.active)
    },
    methods:{
        openNav(){
            this.nav = !this.nav;
        },
        changeSubMenu(){
            this.submenu = !this.submenu;
        }
    }
    
}
</script>