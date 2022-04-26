export default {

    OPEN_POPUP(state, object) {
        state.popup = object;
    },
    CLOSE_POPUP(state) {
        state.popup = null;
    },
    LOGIN(state) {
        state.login = true;
    },
    LOGOUT(state) {
        state.login = false;
    }

};
