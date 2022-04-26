export default {

    openPopUp({ commit }, data) {
        commit('OPEN_POPUP', data);
    },
    closePopUp({ commit }) {
        commit('CLOSE_POPUP');
    },
    login({ commit }) {
        commit('LOGIN');
    },
    logout({ commit }) {
        commit('LOGOUT');
    }

}
