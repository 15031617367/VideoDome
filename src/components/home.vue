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
                            <div>
                                <el-input
                                    placeholder="请输入内容"
                                    suffix-icon="el-icon-date"
                                    v-model="input6">
                                </el-input>
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
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
