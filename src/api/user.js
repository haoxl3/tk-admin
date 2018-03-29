import request from '@/router/axios'
import {menu, menuAll} from '@/mock/menu'
import {tableData} from '@/mock/user'

export const getMenu = (parentId) => {
    return new Promise((resolve, reject) => {
        if (!parentId) parentId = 0;
        resolve({data: menu[parentId]})
    })
}
export const getMenuAll = () => {
    return new Promise((resolve, reject) => {
        resolve({data: menu[0]})
    })
}
export const getTableData = (page) => {
    return new Promise((resolve, reject) => {
        resolve({ data: tableData });
    })
}