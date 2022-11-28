import { createApp } from "vue";
import { createPinia } from "pinia";

import router from "./router";
import App from "./App.vue";

import "./assets/main.css";
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";

const app = createApp(App);

app.use(router).use(createPinia());

app.mount("#app");
