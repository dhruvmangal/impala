<template>
    <div class="container-fluid summery">
        <div class="row">
            <div class="col-md-4">
                <div class="sum-div" >
                    <div class="title">
                        <div class="title-upper">
                            <i class="fa fa-industry"></i>
                        </div>
                        <div class="title-lower">
                            <h3>Stone Expert</h3>
                        </div>
                    </div>
                    <div class="body">
                        <p>
                            We have one of the biggest processing units in Rajasthan and process all type of Indian as well as Italian Marble, Granite and sandstone in any type of finishes. We have earned a renowned name and are known to keep our core values and traditions.
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="sum-div">
                    <div class="title">
                        <div class="title-upper">
                            <i class="fa fa-handshake"></i>
                        </div>
                        <div class="title-lower">
                            <h3>WorldWide Clients</h3>
                        </div>
                    </div>
                    <div class="body">
                        <p>
                            We export our product to Russia, China, USA, France, Italy, Philippines, Dubai, Abu Dhabi, Malaysia, Singapore, Pakistan, Ethiopia, Tanzania, South Africa, Egypt, Algeria, Morocco, Spain, Poland, Turkey, Argentina, Brazil, Guatemala, Mexico etc.
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="sum-div">
                    <div class="title">
                        <div class="title-upper">
                            <i class="fa fa-comments"></i>
                        </div>
                        <div class="title-lower">
                            <h3>24x7 Support</h3>
                        </div>
                    </div>
                    <div class="body">
                        <p>
                            We are known to keep our core values and traditions hence being one of the most trustworthy, disciplined, focused and reliable group in the entire marble industry inheriting a legacy of discipline, dedication and customer focused approach.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .summery{
        margin-top: 30px;
    }
    .sum-div{
        width: 80% !important;
        height: 280px;
        margin: 10px 10%;
        border: 1px solid #f1f1f1;
        border-radius: 5px;
    }
    .title{
        text-align: center;
        width: 100%;
        height: 60px;
        background-color: #6F9CBC;
    }
    .title-upper{
        position: absolute;
        top: -15px;
        left: calc(40% + 25px);
        text-align: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        font-size: 25px;
        color: white;
        background-color: #6F9CBC;
        z-index: 1;
    }
    .title-lower{
        position: relative;
        z-index:2;
        color: white;
        font-size: 18px !important;
        padding-top: 16px;
    }
    .body{
        padding: 10px;
        text-align : justify;

    }
    .sum-div:hover{
        animation: shake 1s;
        animation-iteration-count: 1;
    }
    @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        50% { transform: translate(-1px, 2px) rotate(-1deg); }
        60% { transform: translate(-3px, 1px) rotate(0deg); }
        70% { transform: translate(3px, 1px) rotate(-1deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
    }
</style>

<script>
export default {
    name: 'Summery',
    
}
</script>