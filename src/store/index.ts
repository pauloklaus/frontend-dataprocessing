import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import session from "@/store/session";

export default new Vuex.Store({
    modules: {
        session
    }
});
