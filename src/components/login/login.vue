<template>
    <div class="all" :style="bg">
        <!-- 粒子特效 -->
        <vue-particles
        color="#fff"
        :particleOpacity="1"
        :particlesNumber="250"
        shapeType="circle"
        :particleSize="3"
        linesColor="#134695"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        :style="bg"
      >
      </vue-particles>

        <div class='login'>
            <div class="switchBtn">
                <div :class="{switchBtn_submit:isActive}" class="switchBtn_routine" @click="loginModular">登录</div>
                <div :class="{switchBtn_submit:isActive2}" class="switchBtn_routine" @click="registerModular">注册</div>
            </div>
            <div class='login_fields'>
                <!-- 登录 -->
                <div class='login_fields__user distance'>
                    <div class='icon'>
                        <img alt="" :src='accIoc'>
                    </div>
                    <input  name="login" 
                            placeholder='用户名' 
                            maxlength="16" 
                            type='text'  
                            v-model="account"/>
	            </div>
                <!-- 密码 -->
                <div class='login_fields__password distance'>
                    <div class='icon'>
                        <img alt="" :src='pwdIoc'>
                    </div>
                    <input name="pwd" placeholder='密码' maxlength="16" type='text' autocomplete="off" v-model="paw">
	            </div> 
                <!-- 注册密码 -->
                <div class='login_fields__password distance' v-show="pawverifyShow">
                    <div class='icon'>
                        <img alt="" :src='pwdIoc'>
                    </div>
                    <input name="pwd" placeholder='再一次验证密码' maxlength="16" type='text' autocomplete="off" v-model="pawverify">
	            </div> 
                <!-- 验证码 -->
                <div class='login_fields__password distance'>
                    <div class='icon'>
                        <img alt="" :src='verifyIoc'>
                    </div>
                    <input name="code" placeholder='验证码' maxlength="4" type='text' autocomplete="off" v-model="verifyStr">
	            </div>

                <div class='login_fields__submit'>
                    <input type='button' value='登录' @click="submit">
                </div>
            </div>
        </div>

        <div class='authent'>
            <div class="loader" style="height: 44px;width: 44px;margin-left: 28px;">
                <div class="ball-clip-rotate-multiple">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                </div>
            <p>认证中...</p>
        </div>




    </div>
</template>

<script>
export default {
    data(){
        return {
            bg:{
                backgroundImage: "url(" + require('../../assets/login/img/Starry.jpg') + ")",
            },
            accIoc:require("../../assets/login/img/user_icon_copy.png"),
            pwdIoc:require("../../assets/login/img/lock_icon_copy.png"),
            verifyIoc:require("../../assets/login/img/key.png"),
            //登录
            account:'',
            paw:'',
            pawverify:'',
            verifyStr:'',
            //注册
            pawverifyShow:false,
            //选中
            isActive:true,
            isActive2:false
        }
    },
    mounted(){},

    methods:{
        submit(){
            console.log("test");
            $('.login').addClass('test'); //倾斜特效
	        setTimeout(function () {
	            $('.login').addClass('testtwo'); //平移特效
	        }, 300);
	        setTimeout(function () {
	            $('.authent').show().animate({ right: -320 }, {
	                easing: 'easeOutQuint',
	                duration: 600,
	                queue: false
	            });
	            $('.authent').animate({ opacity: 1 }, {
	                duration: 200,
	                queue: false
                }).addClass('visible');
            }, 500);

            if(this.account!="admin"&&this.paw!="admin"){
                console.log("donghuajieshu")
                setTimeout(function () {
	                $('.authent').show().animate({ right: 90 }, {
	                    easing: 'easeOutQuint',
	                    duration: 600,
	                    queue: false
	                });
	                $('.authent').animate({ opacity: 0 }, {
	                    duration: 200,
	                    queue: false
	                }).addClass('visible');
                        $('.login').removeClass('testtwo'); //平移特效
                        $('.login').removeClass('test');
                        $('.authent').css("display","none")
	            }, 2000);
            }else{
                setTimeout(()=>{
                    this.$router.push({
                        name:'Index'
                    })
                },2000)
            }
        },
        //登录
        loginModular(){
            this.pawverifyShow = false;
            this.isActive = true;
            this.isActive2 = false;
        },
        //注册
        registerModular(){
            this.pawverifyShow = true;
            this.isActive = false;
            this.isActive2 = true;
        }       
    }
}
</script>

<style socped>
   @import '../login/file/default.css';
   @import '../login/file/styles.css';
   @import '../login/file/loaders.css';
   .all { 
        padding: 0; 
        margin: 0; 
        height: 100%; 
        font-size: 16px; 
        background-repeat: no-repeat; 
        background-position: left top; 
        background-color: #242645; 
        color: #fff; 
        font-family: 'Source Sans Pro'; 
        background-size: 100%; 
    }
    .switchBtn{
        display: flex;
        justify-content:space-around;
    }
    .switchBtn_submit,
    .switchBtn_register{
        height: 25px;
        width: 50%;
        border-bottom: 1px solid #4FA1D9;
        color:#4FA1D9;
        cursor: pointer;
    }
    .switchBtn_routine{
        height: 25px;
        width: 50%;
        cursor: pointer;
    }
    .distance{
        margin-top: 10px;
    }
</style>
/*  */

