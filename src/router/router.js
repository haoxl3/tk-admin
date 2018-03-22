import Vue from 'vue'
import VueRouter from 'vue-router'
import INDEX from '@/page/index/'

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
                    component: _import('wel')
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
                    component: _import('table/index')
                }
            ]
        }
    ]
})
