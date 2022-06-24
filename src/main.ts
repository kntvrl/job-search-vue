import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faAngleDown,faAngleUp,faSearch,} from "@fortawesome/free-solid-svg-icons";
import { createApp } from "vue";

import App from "@/App.vue";
import "@/assets/tailwind.css";
import router from "@/router";
import store,{key} from "@/store";

library.add(faSearch);
library.add(faAngleDown);
library.add(faAngleUp);
createApp(App)
  .use(store,key)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");