import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "./styles/index.css";
import "virtual:uno.css";
import "@unocss/reset/tailwind.css";

const app = createApp(App);
const pinia = createPinia();
pinia.use(createPersistedState());
app.use(router);
app.use(pinia);
app.mount("#app");
