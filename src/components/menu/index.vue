<template>
    <div>
        <!-- 轮播 -->
        <el-carousel :interval="5000" arrow="always" height="400px">
            <el-carousel-item v-for="(item,index) in WheelPlanting" :key="index">
                <img :src="item.img" alt="">
            </el-carousel-item>
        </el-carousel>

        <div class="Film_Modular">
            <div class="Film_title_flex">
                <div class="Film_title">每日更新</div>
                <div class="Film_More">更多</div>
            </div>
            <!-- 电影列表 -->
            <div class="Film_list">
                <div v-for="(time,index) in 5" class="Film_list_modular" :key="index" @click="details" >
                    <div class="nusp"></div>
                    <el-card :body-style="{ padding: '0px' }">
                        <img :src="film" class="image">
                        <div>
                            <div class="Film_list_modular_name">毒液：致命守护者</div>
                            <div class="Film_list_modular_describe">毒液来袭</div>
                        </div>
                    </el-card>
                </div>
            </div>
        </div>

        <div class="Film_Modular">
            <div class="Film_title_flex">
                <div class="Film_title">喜剧</div>
                <div class="Film_More">更多</div>
            </div>
            <!-- 电影列表 -->
            <div class="Film_list">
                <div v-for="(time,index) in 5" class="Film_list_modular" :key="index">
                    <div class="nusp"></div>
                    <el-card :body-style="{ padding: '0px' }">
                        <img :src="film" class="image">
                        <div>
                            <div class="Film_list_modular_name">毒液：致命守护者</div>
                            <div class="Film_list_modular_describe">毒液来袭</div>
                        </div>
                    </el-card>
                </div>
            </div>
        </div>

        <div class="Film_Modular">
            <div class="Film_title_flex">
                <div class="Film_title">恐怖</div>
                <div class="Film_More">毒液来袭</div>
            </div>
            <!-- 电影列表 -->
            <div class="Film_list">
                <div v-for="(time,index) in 5" class="Film_list_modular" :key="index">
                    <div class="nusp"></div>
                    <el-card :body-style="{ padding: '0px' }">
                        <img :src="film" class="image">
                        <div>
                            <div class="Film_list_modular_name">毒液：致命守护者</div>
                            <div class="Film_list_modular_describe">毒液来袭</div>
                        </div>
                    </el-card>
                </div>
            </div>
        </div>
        <div class="Film_Modular">
            <div class="Film_title_flex">
                <div class="Film_title">记录</div>
                <div class="Film_More">更多</div>
            </div>
            <!-- 电影列表 -->
            <div class="Film_list">
                <div v-for="(time,index) in 5" class="Film_list_modular" :key="index">
                    <div class="nusp"></div>
                    <el-card :body-style="{ padding: '0px' }">
                        <img :src="film" class="image">
                        <div>
                            <div class="Film_list_modular_name">毒液：致命守护者</div>
                            <div class="Film_list_modular_describe">毒液来袭</div>
                        </div>
                    </el-card>
                </div>
            </div>
        </div>

    </div>
</template>  


<script>
export default {
    data () {
        return {
            //轮播
            WheelPlanting:[
                {img:require("../../assets/L1.jpg")},
                {img:require("../../assets/L2.jpg")},
                {img:require("../../assets/L3.jpg")},
                {img:require("../../assets/L4.jpg")}
            ],
            film:require("../../assets/Film.jpg"),
        }
    },
    mounted(){

    },
    components:{

    },
    computed:{

    },
    methods:{
        details(){
            this.$router.push({
                name:"Details"
            })
        }
    }

}
</script>

<style scoped>
/* 轮播 */
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 400px;
    margin: 0;
}
  
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
  
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

/* 电影模块标题 */
.Film_Modular{
    margin-top: 10px;
}
.Film_title_flex{
    display: flex;
    justify-content:space-around;
}
.Film_title,.Film_More{
    font-size: 18px;
}

.Film_list{
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content:space-around;
}
.Film_list_modular_describe{
    color:#68838B
}   
/* 卡片 */
.time {
    font-size: 13px;
    color: #999;
} 
.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    float: right;
}

.image {
    width: 271px;
    height: 272px;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
  
.clearfix:after {
    clear: both
}
.Film_list_modular{
    display: flex;
    cursor: pointer;
}
.nusp{
    width: 4px;
    height: 50px;
}

</style>  