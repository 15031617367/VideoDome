<template>
    <div>
        <el-container>
            <!-- :default-active="$route.path" -->
            <el-header class="Header">
                <el-menu
                    :default-active="onRoutes" 
                    router
                    class="el-menu-demo menu"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                        <div class="Header-flex">
                            <div class="Header-flex-img">
                                <img src="" alt="logo">
                            </div>
                            <div class="Header-flex-menu">
                                <el-menu-item index="/">首页</el-menu-item>
                                <el-menu-item index="/science" @click="Link('Science')">科幻</el-menu-item>
                                <el-menu-item index="/action" @click="Link('Action')">动作</el-menu-item>
                                <el-menu-item index="/plot" @click="Link('Plot')">剧情</el-menu-item>
                                <el-menu-item index="/comedy" @click="Link('Comedy')">喜剧</el-menu-item>
                                <el-menu-item index="/terror" @click="Link('Terror')">恐怖</el-menu-item>
                                <el-menu-item index="/suspense" @click="Link('Suspense')">悬疑</el-menu-item>
                                <el-menu-item index="/record" @click="Link('Record')">记录</el-menu-item>
                            </div>
                            <div class="Header-flex-query">
                                <el-input
                                    placeholder="请输入内容"
                                    @blur="query"
                                    suffix-icon="el-icon-search"
                                    v-model="queryName">
                                </el-input>
                            </div>
                            <div class="Header-flex-login">
                                <div>
                                    <span @click="Modality=true">登录</span>
                                    <span>/</span>
                                    <span @click="Modality=true">注册</span>
                                </div>
                            </div>
                        </div>
                </el-menu>
            </el-header>
            <el-main class="Main">
                <router-view></router-view>
            </el-main>
            <el-footer class="Footer">Footer</el-footer>
        </el-container>

        <!-- 登录模态框 -->
        <el-dialog
            :visible.sync="Modality"
            width="30%"
            :show-close="false"
            center>
            <div class="Modality_option">
                <div :class="switchIndex=='1'?'Modality_switch':''" @click="Modality_switch('1')">登录</div>
                <div :class="switchIndex=='2'?'Modality_switch':''" @click="Modality_switch('2')">注册</div>
            </div>
            <!-- 登录 -->
            <div v-show="switchIndex=='1'?true:false">
                <div class="Modality_login" >
                    <el-input   v-model="userName"
                                placeholder="请输入用户名"></el-input>
                </div>
                <div class="Modality_login" >
                    <el-input   v-model="userPaW" 
                                type="password"
                                placeholder="请输入密码"></el-input>
                </div>
                <div class="Modality_login_button">
                    <el-button type="primary" @click="login">登录</el-button>
                </div>
            </div>
            <!-- 注册 -->
            <div v-show="switchIndex=='2'?true:false">
                <div class="Modality_login">
                    <el-input   v-model="userName"
                                placeholder="请输入用户名"></el-input>
                </div>
                <div class="Modality_login" >
                    <el-input   v-model="userPaW" 
                                type="password"
                                placeholder="请输入密码"></el-input>
                </div>
                <div class="Modality_login">
                    <el-input   v-model="phone"
                                placeholder="请输入手机号"></el-input>                        
                </div>
                <div class="Modality_login_Verification">
                    <div>
                        <el-input   v-model="Verification"
                                placeholder="请输入验证码"></el-input> 
                    </div>
                    <div>
                        <el-button type="success">获取验证码</el-button>
                    </div>
                </div>
                <div class="Modality_login_button">
                    <el-button type="primary" @click="register">注册</el-button>
                </div>
            </div>
        </el-dialog>




    </div>
</template>

<script>
export default {
    data () {
        return {
            queryName:"",//搜索
            Modality:false,//模态框
            switchIndex:'1',//切换默认值
            userName:"",
            userPaW:"",
            phone:"",
            Verification:"",// 验证码
        }
    },
    mounted(){

    },
    components:{

    },
    computed:{
        onRoutes(){
            return this.$route.path.replace('/','/')
        }

    },
    methods:{
        handleSelect(key, keyPath) {
            
        },
        //菜单跳页
        Link(name,title){
            this.$router.push({
                name: name,
            });
        },
        //搜索
        query(){
            console.log("搜索")
        },
        //模态切换
        Modality_switch(index){
            this.switchIndex = index
        },
        //登录
        login(){
            console.log("登录")
        },
        //注册
        register(){
            console.log("注册")
        }
    }

}
</script>

<style scoped>
/* 头部 */
.Header{
    width: 100%;
    height: 300px;
    /* background: #409EFF; */
    padding: 0px;
}
.Header .menu{
    width: 100%;
}
.Header .menu .Header-flex{
    display: flex;
    justify-content:space-between;
}
.Header .menu .Header-flex .Header-flex-img{
    display: flex;
    align-items: center;
    padding-left: 20px;
}
.Header .menu .Header-flex .Header-flex-menu{
    display: flex
}
.Header-flex-query{
    display: flex;
    justify-content: center;
    align-items: center;
}
.Header-flex-login{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 150px;
    cursor: pointer;
}
/* 模态框 */
.Modality_option{
    width: 100%;
    display: flex;
}
.Modality_option>div{
    width: 50%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #555;
    cursor: pointer;
}
.Modality_switch{
    border-bottom: 2px solid rgb(3, 83, 187) !important;
    color: rgb(3, 83, 187)
}
.Modality_login{
    margin-top: 15px;
}
.Modality_login_button{
    height: 40px;
    text-align: center;
    margin-top: 15px
}
.Modality_login_Verification{
    margin-top: 15px;
    display: flex;
    justify-content:space-between;
}


.Main{
    width: 100%;
    height: auto;
    background: #EBEBEB;
}
.Footer{
    width: 100%;
    height: 20%;
    background: #080808
}
    

</style>
