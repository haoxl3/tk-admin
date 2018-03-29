import { getDic } from '@/api/admin'
const common = {
    state: {
        isFullScren: false,
        isCollapse: false,
    },
    actions: {
        //获取字典公用类
        GetDic({ commit, state, dispatch }, dic) {
            return new Promise((resolve, reject) => {
                if (dic instanceof Array) {
                    Promise.all(dic.map(ele => getDic(ele))).then(data => {
                        let result = {};
                        dic.forEach((ele, index) => {
                            result[ele] = data[index].data;
                        })
                        resolve(result)
                    })
                }
            })
        }
    },
    mutations: {
        SET_FULLSCREN: (state, action) => {
            state.isFullScren = !state.isFullScren;
        },
        SET_COLLAPSE: (state, action) => {
            state.isCollapse = !state.isCollapse;
        },
    }
}
export default common