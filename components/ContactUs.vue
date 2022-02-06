<template>
    <div class="container-fluid contact">
        <div class="row">
            <div class="col-md-12">
                <img src="/slider03.jpg" class="slider" />
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="title">
                    <h3>
                        <i class="fa fa-address-book"></i> Contact Us
                    </h3>
                    
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <div class="body">
                    <form action="" @submit.prevent="submitForm()" v-if="res==false">
                        <div class="form-item">
                            <label for="Name">Enter Your Full Name</label>
                            <input type="text" class="form-control" required v-model="name"/>
                        </div>
                        <div class="form-item">
                            <label for="phone">Enter Your Phone Number</label>
                            <input type="number" class="form-control" required v-model="phone"/>
                        </div>
                        <div class="form-item">
                            <label for="email">Enter Your Email Address</label>
                            <input type="email" class="form-control" required v-model="email"/>
                        </div>
                        <div class="form-item">
                            <label for="message">Message</label>
                            <textarea class="form-control" rows="6" required v-model="message" >

                            </textarea>
                        </div>
                        <div class="form-item">
                            <input type="submit" class="form-control btn btn-submit" value="Submit">
                        </div>
                    </form>
                    <div class="form-submitted" v-if="res==true">
                        <div class="done">
                            <i class="fa fa-check-circle"></i>
                        </div>
                        <div class="done-text">
                            <p>Your query is submitted</p>
                        </div>
                        <div class="done-btn">
                            <button class="form-control btn btn-primary" @click="changeRes()">
                                Submit query again
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
</template>

<style scoped>
.title{
    margin: 20px 0px;
    text-align: center;
}
.slider{
    width: 100%;
    height: 300px;
}
.body{
    margin: 30px;
}
label{
    font-weight: bold;
}
.form-item{
    margin: 10px 0px;
}
.btn-submit{
    background-color: teal;
    color: white;
}
.done{
    text-align:center;
    font-size: 50px;
    color: green;

}
.done-text{
    text-align: center;
}
</style>

<script>
export default {
    name: 'Contact',
    data(){
        return {
            err: null,
            name: null,
            email: null,
            phone: null,
            message: null,
            res: false
        }
    },
    methods:{
        async submitForm(){
            event.preventDefault();
            let formData  = new FormData();
            formData.append('name', this.name);
            formData.append('email', this.email);
            formData.append('phone', this.phone);
            formData.append('message', this.message);

            try{
                this.$axios.$post('https://impalablack.com/impala/contact/create/', formData).then((res)=>{
                    //console.log(res);
                    if(res>0){
                        this.res = true;
                    }
                }).catch(e=>{
                    this.err = e;
                })
            }
            catch(e){
                this.err= e;
            }
        },
        changeRes(){
            this.res = false;
        }
    }
}
</script>