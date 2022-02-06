<template>
    <div class="container-fluid mission">
        <div class="row">
            <div class="col-md-12 title">
                <center>
                    <h3> <i class="fa fa-bullseye-arrow"></i> Our Mission</h3>
                </center>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <img src="/granite_cutting.jpg" class="promo" draggable="false" />
            </div>
            <div class="col-md-6">
                <p class="body">
                    Our mission is to create a supply chain for quality stone products, 
in india and in out of india as well while generating employment for many people.
<br/>
Global stone markets size is approx USD 57.4 Bn in 2019 and is projected to reach USD 62.58 Bn by 2027.
That shows us a great opportunity to work with many entities around the world and to satisfy them with our quality products

                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.mission{
    margin: 60px 0px;
}
.title{
    margin: 20px 0px;
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
    name: 'Mission'
}
</script>