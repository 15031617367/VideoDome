<template>
    <div>
        <div class="introduce_Modular">
            <div class="introduce_Modular_img">
                <img :src="img" alt="">
            </div>
            <div class="introduce_Modular_describe">
                <p>片名：毒液：致命守护者</p>
                <p>导演：鲁本·弗雷斯彻</p>  
                <p>简介：《毒液：致命守护者》是一部由美国哥伦比亚电影公司、腾讯影业、漫威影业联合出品，索尼电影娱乐公司发行的科幻电影，由鲁本·弗雷斯彻执导，汤姆·哈迪、米歇尔·威廉姆斯、里..</p>
            </div>
        </div>

        <div class="address_Modular">
            <div class="address_Modular_details">
                <div class="address_Modular_title">标清</div>
                <div>
                    <el-button type="info" v-for="(tiem,index) in 4" :key="index">地址{{index}}</el-button>
                </div>
            </div>
            <div class="address_Modular_details">
                <div class="address_Modular_title">高清</div>
                <div>
                    <el-button type="info" v-for="(tiem,index) in 4" :key="index">地址{{index}}</el-button>
                </div>
            </div>
            <div class="address_Modular_details">
                <div class="address_Modular_title">超清1080p</div>
                <div>
                    <el-button type="info" v-for="(tiem,index) in 4" :key="index">地址{{index}}</el-button>
                </div>
            </div>

        </div>




    </div>
</template>

<script>
export default {
    data(){
        return {
            img:require("../../assets/Film.jpg")
        }
    },
    mounted(){
      
    },
    components:{},
    computed:{},
    methods:{},
}
</script>

<style scoped>
/* 描述 */
.introduce_Modular{
    display: flex;
}
.introduce_Modular_img>img{
    width: 271px;
    height: 271px;
}
.introduce_Modular_describe{
    width: 500px;
    height: auto;
    text-align: left;
    margin-left: 10px;
}

/* 地址 */
.address_Modular{
    width: 100%;
    height: auto;
    margin-top:15px;
    padding-top: 10px;
    background:#F5FFFA
}
.address_Modular_details{
    border-top: 0.5px dashed #ADD8E6;
    width: 100%;
    height: 100px;
}
.address_Modular_details{
    text-align: left;
    padding-left: 20px;
}
.address_Modular_title{
    margin-top: 10px;
    margin-bottom: 10px;
}




</style>

