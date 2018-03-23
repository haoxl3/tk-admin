const common = {
    state: {
        isFullScren: false,
        isCollapse: false,
    },
    actions: {

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