 <template>
    <div class="container-fluid company-legal">
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <div class="legal">
                    <center>
                        <img src="/logo.png" alt="" class="logo-big">

                    </center>
                    <div class="socials">
                        <ul>
                    <li> <a href="https://www.facebook.com/Impala-Black-Enterprises-100254445772877" target="_blank"><img src="/facebook-brands.svg" class="social-icon" width="20px" height="20px" /> </a></li>
                    <li> <a href="https://www.instagram.com/impala.black/" target="_blank"><img src="/instagram-brands.svg" class="social-icon" width="20px" height="20px" /> </a></li>
                    <li> <a href="https://twitter.com/ImpalaBlackEnt" target="_blank"><img src="/twitter-brands.svg" class="social-icon" width="20px" height="20px" /> </a></li>
                    <li> <a href="https://www.linkedin.com/company/impala-black-enterprises/" target="_blank"><img src="/linkedin-brands.svg" class="social-icon" width="20px" height="20px" /> </a></li>
                </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
</template>

<style scoped>
.company-legal{
    margin: 30px 0px;
}
.logo-big{
    width: 50%;
    height: auto;
}
.socials{
    width: 50%;
    margin: 0px 25%;
}
ul{
    list-style-type: none;
}
li{
    float: left;
    margin: 0px 20px;
}
</style>

<script>
export default {
    name: 'CompanyLegal'
}
</script>