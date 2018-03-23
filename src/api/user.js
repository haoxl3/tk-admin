import request from '@/router/axios'
import {menu, menuAll} from '@/mock/menu'

export const getMenu = (parentId) => {
    return new Promise((resolve, reject) => {
        if (!parentId) parentId = 0;
        console.log('******menu********')
        console.log(menu[parentId])
        console.log(parentId)
        resolve({data: menu[parentId]})
    })
}
export const getMenuAll = () => {
    return new Promise((resolve, reject) => {
        resolve({data: menu[0]})
    })
}