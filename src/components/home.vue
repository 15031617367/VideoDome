<template>
    <div>
        <el-container>
            <el-header class="Header">
                <el-menu
                    :default-active="MenuIndex"
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
                                <el-menu-item index="1">首页</el-menu-item>
                                <el-menu-item index="2" @click="Link('Illusory')">科幻</el-menu-item>
                                <el-menu-item index="3">动作</el-menu-item>
                                <el-menu-item index="4">剧情</el-menu-item>
                                <el-menu-item index="5">喜剧</el-menu-item>
                                <el-menu-item index="6">恐怖</el-menu-item>
                                <el-menu-item index="7">悬疑</el-menu-item>
                                <el-menu-item index="8">记录</el-menu-item>
                                <el-submenu  index="10">
                                    <template slot="title">全部美剧</template>
                                    <el-menu-item index="2-1">全部美剧1</el-menu-item>
                                    <el-menu-item index="2-2">全部美剧2</el-menu-item>
                                    <el-menu-item index="2-3">全部美剧3</el-menu-item>
                                </el-submenu >
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
            MenuIndex:'1'
        }
    },
    mounted(){

    },
    components:{

    },
    computed:{

    },
    methods:{
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        //菜单跳页
        Link(name){
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
