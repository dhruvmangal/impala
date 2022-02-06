<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="title">
                    <h3>
                        <i class="fa fa-industry"></i> About Company    
                    </h3>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <img src="/factory.jpg" class="promo" draggable="false" />
            </div>
            <div class="col-md-6">
                <p class="body">
Impala Black was founded in 2018 by Mr. Arpit Sharma who is introducing the stone market new and innovative ways in production and supply.
<br/>
Impala Black a stone manufacture, provider and supplier. We supply indian stones around the world. We offer atmosphere of cooperation and coordination. 
The company is focused, disciplined, dedicated while maintaining the premium quality of work.


                </p>
            </div>
        </div>
    </div>    
</template>

<style scoped>
.title{
    text-align: center;
    margin: 60px 0px;
}
.promo{
    width: 80%;
    height: auto;
    border-radius: 20px;
    margin: 30px;
}
.body{
    padding: 50px 30px;
    text-align  : justify;
    font-size: 20px;
}

</style>

<script>
export default {
    name: 'AboutCompany'
}
</script>