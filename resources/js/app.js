import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import index from "./index";
import vuetify from "./vuetify";

Vue.use(VueRouter);
require("./bootstrap");

window.Vue = require("vue").default;

const app = new Vue({
    el: "#app",
    router: new VueRouter(routes),
    components: {
        index
    },
    vuetify
});
