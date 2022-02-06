<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 slider">
                <div class="slider-img">
                    <img :src="img[i]" width="100%" height="500px" />
                    <div class="slider-info">
                        Impala Black is a platform to buy quality products
                    </div>
                </div>
                    
                   <div class="arrow-left" @click="prev()"><i class="fa fa-angle-left"></i></div>
                    <div class="arrow-right" @click="next()"><i class="fa fa-angle-right"></i></div>
                <div class="dots">
                    <div v-for="(im,index) in img" :key="index">
                        <div :class="(index==i)? 'dot active': 'dot' "></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.slider{
    height: 500px;
    width: 100%;
    padding: 0px; 
}
.arrow-left{
    position: absolute;
    top: 40%;
    color: black;
    font-size: 40px;
    background-color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 0px 10px;
    padding: 0px 15px;
}
.arrow-right{
    position: absolute;
    top: 40%;
    right: 20px;
    color: black;
    font-size: 40px;
    background-color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 0px 10px;
    padding: 0px 15px;
}
.slider-img{
    width: 100%;
    height: 100%;
}
.slider-info{
    width: 30%;
    height: 370px;
    padding: 10px;
    background-color: rgba(35,35,35,0.5);
    position: absolute;
    top: 60px;
    left: 10%;
    color: white;
    font-size: 20px;
}
.dots{
    position: absolute;
    left: calc(50% - 10vh);
    bottom: 10px;
    width: 30vh;
}
.dot{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: gray;
    margin: 0px 10px;
    float: left;
}

.active{
    background-color: #f1f1f1;
}
</style>

<script>
export default {
    name: 'Sliders',
    data(){
        return {
            img: [
                '/slider03.webp',
                '/slider01.jpg',
                '/slider02.jpg'       
            ],
            i: 0,
            slider : null
        }
    },
    mounted(){
        this.slideShow();
    },
    methods:{
        changeI(){
            if(this.i<this.img.length-1){
                this.i++
            }else{
                this.i = 0; 
            }
        },

        slideShow(){
            this.slider = setInterval(this.changeI, 3000);
        },
        stopSlideShow(){
            clearInterval( this.slider)
        },
        prev(){
            if(this.i<this.img.length && this.i>0){
                this.stopSlideShow();
                this.i--;
                this.slideShow();
            }else if(this.i==0){
                this.i = this.img.length-1; 
            }
        },
        next(){
            if(this.i<this.img.length-1){
                this.stopSlideShow();
                this.i++;
                this.slideShow();
            }else if(this.i==this.img.length-1){
                this.i = 0 
            }
        }
    },
    watch:{

    }
}
</script>