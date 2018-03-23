const common = {
    state: {
        isFullScren: false,
    },
    actions: {

    },
    mutations: {
        SET_FULLSCREN: (state, action) => {
            state.isFullScren = !state.isFullScren;
        },
    }
}
export default common