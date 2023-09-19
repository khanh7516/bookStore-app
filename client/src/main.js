import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

import router from "./router.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
// import store from './store/index.js';

import { register } from "swiper/element/bundle";

import BaseCard from "./components/utils/BaseCard.vue";
// import BaseSlider from "./components/utils/BaseSlider.vue";

// Thêm biểu tượng vào thư viện Font Awesome
library.add(faUser);
library.add(faCartShopping);
library.add(faBook);
library.add(faClockRotateLeft);

register();

const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("base-card", BaseCard);
// app.component("base-slider", BaseSlider);
// app.use(store);
app.mount("#app");
