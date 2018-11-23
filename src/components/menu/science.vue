<template>
    <div>
        <div class="button_Modular">
            <el-button type="primary" @click="switchBtn('1')">最新</el-button>
            <el-button type="danger" @click="switchBtn('2')">最热</el-button>
            <el-button type="success"  @click="switchBtn('3')">好评</el-button>
        </div>
        <el-row :gutter="20">
            <el-col :span="6" v-for="(item,index) in 9" :key="index">
                <el-card :body-style="{ padding: '0px' }">
                    <img :src="film" class="image">
                    <div>
                        <div class="Film_list_modular_name">{{name}}</div>
                        <div class="Film_list_modular_describe">{{describe}}</div>
                        <div>
                            <el-rate
                                v-model="score"
                                :max=5
                                disabled
                                show-score
                                text-color="#ff9900"
                                score-template="{value}">
                            </el-rate>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>  

    </div>
</template>

<script>
export default {
    data(){
        return {
            film:require("../../assets/Film.jpg"),//样图
            name:'毒液：致命守护者',
            describe:'毒液来袭',
            score:4.8,//评分
        }
    },
    mounted(){
      
    },
    components:{},
    computed:{},
    methods:{
        switchBtn(index){
            switch(index){
                case '1':
                    this.film = require("../../assets/Film.jpg");
                    this.name='毒液：致命守护者';
                    this.describe='毒液来袭';
                    this.score=4.8;
                    break;
                case '2':
                    this.film = require("../../assets/FL.jpg");
                    this.name="复仇者联盟3";
                    this.describe="漫威系列";
                    this.score=4.9;
                    break;
                default:
                    this.film = require("../../assets/YR.jpg"); 
                    this.name="蚁人2";
                    this.describe="蚁人-漫威系列";
                    this.score=3.2  
            }
        }
    },
}
</script>

<style scoped>
.button_Modular{
    text-align: left
}
.Film_list{
    margin-top: 20px;
    padding: 0px 10px 0px 10;
    display: flex;
    flex-wrap:wrap;
}
/* 卡片布局 */
.el-row {
    margin-bottom: 20px;
    margin-top: 20px;
  }
.el-col {
    border-radius: 4px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
}

/* 卡片 */
.Film_list_modular{
    display: flex;
    cursor: pointer;
}
.Film_list_modular_describe{
    color:#68838B
} 
.image {
    width: 271px;
    height: 272px;
    display: block;
}




</style>

