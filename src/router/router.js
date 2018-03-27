import Vue from 'vue'
import VueRouter from 'vue-router'
import INDEX from '@/page/index/'
import Wel from '@/page/wel'
import Table from '@/page/table'

const _import = require('./_import')
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: '主页',
            redirect: '/wel'
        },
        {
            path: '/wel',
            component: INDEX, 
            redirect: '/wel/index',
            children: [
                {
                    path: 'index',
                    name: '首页',
                    component: Wel
                }
            ]
        },
        {
            path: '/table', 
            component: INDEX,
            redirect: '/table/index',
            children: [
                {
                    path: 'index',
                    name: '表格CRUD', 
                    component: Table
                }
            ]
        }
    ]
})
