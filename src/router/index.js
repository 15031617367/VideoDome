import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'

//菜单
import Index from "@/components/menu/index"
import Illusory from  "@/components/menu/Illusory"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            children:[
                {
                    path:'/',
                    name:'Index',
                    component:Index
                },
                {
                    path:'/Illusory',
                    name:'Illusory',
                    component:Illusory
                }
            ]
        }
  ]
})
