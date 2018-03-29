import {getMenu, getMenuAll, getTableData} from '@/api/user'
const user = {
    state: {
        menu: [],
        menuAll: []
    },
    actions: {
        //获取系统菜单
        GetMenu({commit}, parentId) {
            parentId
            return new Promise(resolve => {
                getMenu(parentId).then((res) => {
                    const data = res.data 
                    commit('SET_MENU', data)
                    resolve(data)
                })
            })
        },
        //获取全部菜单
        GetMenuAll({commit}) {
            return new Promise(resolve => {
                getMenuAll().then((res) => {
                    const data = res.data 
                    commit('SET_MENU_ALL', data)
                    resolve(data)
                })
            })
        },
        //获取表格数据
        GetTableData({ commit, state, dispatch }, page) {
            return new Promise((resolve, reject) => {
                getTableData(page).then(res => {
                    const data = res.data;
                    resolve(data);
                })
            })
        },
    },
    mutations: {
        SET_MENU: (state, menu) => {
            const list = menu.filter(ele => {
                // if (validatenull(ele.meta.roles)) {
                //     return true;
                // }
                // if (ele.meta.roles.indexOf(state.roles[0]) != -1) {
                //     return true;
                // } else {
                //     return false;
                // }
                return true 
            })
            state.menu = list 
        },
        SET_MENU_ALL: (state, menuAll) => {
            state.menuAll = menuAll;
        },
    }
}
export default user