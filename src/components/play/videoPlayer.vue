<template>
    <div class="body">
        <div class="video">
            <video-player   class="video-player vjs-custom-skin video_size"
                            ref="videoPlayer"
                            :playsinline="true"
                            :options="playerOptions"
                            @play="onPlayerPlay($event)"
                            @pause="onPlayerPause($event)">

            </video-player>
        </div>
    </div>
</template>

<script>
import { videoPlayer } from "vue-video-player"
export default {
    data(){
        return {
            playerOptions:{
                playbackRates: [0.7, 1.0, 1.5, 2.0],
                height: 200,
                width:200,
                autoplay: false,
                muted: false,
                loop: false,
                preload: 'auto',
                language: 'zh-CN',
                aspectRatio: '4:3',
                fluid: true,
                sources: [{
                    type: "video/mp4",
                    src: "http://222.222.88.250/6773259249F337146FFE9397D/03000A01005BDA8F81B153C1AB3FE65006E573-ABF3-4265-842C-394BA7F12E4C.mp4?ccode=0502&duration=95&expire=18000&psid=5ad9a8fc4891987a029f3d09741b806c&ups_client_netip=1bbd80aa&ups_ts=1542977939&ups_userid=&utid=e8ccFG4nqQQCAXZ%2BjuWPJS%2F9&vid=XMzg5ODM5MTM3Ng&vkey=A577d205b7f0f0c26ed1dab78305bcf07&s=1f1b995a017c11df97c0&sp=&ali_redirect_domain=vali-dns.cp31.ott.cibntv.net&ali_redirect_ex_ftag=374ff5138f18cbb70af984cd74746362e67424cc0b27a0de&ali_redirect_ex_tmining_ts=1542977995&ali_redirect_ex_tmining_expire=3600&ali_redirect_ex_hot=0"
                }],
                poster:require("../../assets/Film.jpg"),
                width: document.documentElement.clientWidth,
                notSupportedMessage: '此视频暂无法播放，请稍后再试'
            }
        }
    },
    mounted(){
      
    },
    components:{
        videoPlayer
    },
    computed:{
        player() {
            return this.$refs.videoPlayer.player
        }
    },
    methods:{
        onPlayerPlay(player) {
            console.log("播放");
        },
        onPlayerPause(player){
            console.log("暂停");
        }
    },
}
</script>

<style scoped>
/* test */
.body{
    width: 100%;
    height:800px;
    background:#fff;
    display: flex;
    justify-content: center
}
.video{
    width: 700px;
}



</style>

