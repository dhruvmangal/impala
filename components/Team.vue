<template>
    <div class="container-fluid team">
        <div class="row">
            <div class="col-md-12">
                <center><h3> <i class="fa fa-users"></i> Our Team</h3></center>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <div class="image">
                        <img src="/p00.png" class="pic" />
                    </div>
                    <div class="body">
                        <h5>Arpit Sharma</h5>
                        <h6>Proprietor & Manager</h6>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="image">
                        <img src="/p01.png" class="pic" />
                    </div>
                    <div class="body">
                        <h5>Aman Agrawal</h5>
                        <h6>Accounts manager</h6>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="image">
                        <img src="/p03.png" class="pic" />
                    </div>
                    <div class="body">
                        <h5>Mahesh Kumar Sharma</h5>
                        <h6>Legal & Documentation Head</h6>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="image">
                        <img src="/p04.png" class="pic" />
                    </div>
                    <div class="body">
                        <h5>Ankit Yadav</h5>
                        <h6>Logistic Head</h6>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="image">
                        <img src="/p02.png" class="pic" />
                    </div>
                    <div class="body">
                        <h5>Dhruv Mangal</h5>
                        <h6>Marketing Head</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.team{
    margin: 50px 0px;
}
.image{
    text-align: center;
    padding: 15px;
}
.body{
    text-align: center;
}
.body h6{
    color: gray;
}
.pic{
    width: 150px;
    height: 150px;
    border-radius: 50%;
}
.pic:hover{
    border: 3px solid red;
}
.card{
    margin: 10px 0px;
}
</style>

<script>
export default {
    name:'Team'
}
</script>