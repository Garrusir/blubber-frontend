import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false;

import {
  Button,
  Menu,
  Modal,
  FormModel,
  Form,
  Input,
  Icon
} from "ant-design-vue";
Vue.use(Button);
Vue.use(Menu);
Vue.use(Modal);
Vue.use(FormModel);
Vue.use(Form);
Vue.use(Input);
Vue.use(Icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
