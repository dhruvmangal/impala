<template>
    <div class="container-fluid background">
        <div class="row">
            <div class="col-md-12">
                 <div class="inquery-title">
                    <center>
                        <p> <i class="fa fa-comments"></i> Inquery</p>
                    </center>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3">
                   
            </div>
            <div class="col-md-6">
                <form @submit.prevent="submitForm()" v-if="res==false">
                    <div class="form-item">
                        <label for="name">
                            Name
                        </label>
                        <input type="text" class="form-control" v-model="name">
                    </div>
                    <div class="form-item">
                        <label>
                                Email
                        </label>
                        <input type="email" class="form-control" v-model="email">
                    </div>
                    <div class="form-item">
                        <label>
                                Phone No
                        </label>
                        <input type="number" class="form-control" v-model="phone">
                    </div>
                    <div class="form-item">
                        <label>
                            Message
                        </label>
                        <textarea class="form-control" v-model="message"></textarea>
                    </div>
                    <div class="form-item">
                        <input type="submit" class="btn btn-submit" value="Submit Inquery"/>
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
            <div class="col-md-3">
                
            </div>
        </div>
    </div>
</template>

<style scoped>
.background{
    width: 100%;
    height: 600px;
    background: url('/background.jpg');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-attachment: fixed;
    padding: 10px 30px;
    color: white;
}
form{
    background-color: rgba(35,35,35,0.5);
    padding: 10px;
    color: white;
}
.form-item{
    margin: 20px 0px;
}
.btn-submit{
    background-color: teal;
    color: white;
}
.inquery-title{
    margin: 20px 0px;
    font-size: 40px;
}
.inquery-title span{
    font-size: 16px;
    margin-top: -10px;
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
    name: 'Inquery',
    data(){
        return{
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