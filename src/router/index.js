import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'

//菜单
import Index from "@/components/menu/index"
import Science from  "@/components/menu/science"
import Action from  "@/components/menu/action"
import Plot from  "@/components/menu/plot"
import Comedy from  "@/components/menu/comedy"
import Terror from  "@/components/menu/terror"
import Suspense from  "@/components/menu/suspense"
import Record from  "@/components/menu/record"

//播放详情
import Details from "@/components/play/details"

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
                    path:'/science',
                    name:'Science',
                    component:Science
                },
                {
                    path:'/action',
                    name:'Action',
                    component:Action
                },
                {
                    path:'/plot',
                    name:'Plot',
                    component:Plot
                },
                {
                    path:'/comedy',
                    name:'Comedy',
                    component:Comedy
                },
                {
                    path:'/terror',
                    name:'Terror',
                    component:Terror
                },
                {
                    path:'/suspense',
                    name:'Suspense',
                    component:Suspense
                },
                {
                    path:'/record',
                    name:'Record',
                    component:Record
                },
                {
                    path:'/details',
                    name:'Details',
                    component:Details
                }

            ]
        }
  ]
})
