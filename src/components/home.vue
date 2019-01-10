<template>
    <div>
        <el-container>
            <!-- :default-active="$route.path" -->
            <el-header class="Header" id="header">
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
                                    <span @click="loginBtn">登录</span>
                                    <span>/</span>
                                    <span @click="loginBtn">注册</span>
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


    </div>
</template>

<script>
export default {
    data () {
        return {
            queryName:"",//搜索
            userName:"",
            userPaW:"",
            phone:"",
            Verification:"",// 验证码
        }
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll);
        // location.reload()
    },
    components:{

    },
    computed:{
        onRoutes(){
            return this.$route.path.replace('/','/')
        }
    },
    methods:{
        //滚轮监听
        handleScroll () {
            console.log(document.getElementById("header"))
            console.log(window.scrollY)
            // console.log(window.scrollX)
            // console.log(window.scrollX)
            if(window.scrollY>56){
                var header = $("#header");
                console.log(header);
                // var header = document.getElementById("header");
                // header.style.position = "absolute";
                // console.log("asdsad")
            }
        },
        //菜单回调
        handleSelect(key, keyPath) {
            // console.log(key, keyPath);
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
        //登录跳转
        loginBtn(){
            console.log("登录调换");
            this.$router.push({
                name:'Login'
            })
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
