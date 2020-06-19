import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false;

import {
  Button,
  Menu,
  Steps,
  Progress,
  Tooltip,
  Modal,
  FormModel,
  Form,
  Input,
  Icon,
  DatePicker,
  Select
} from "ant-design-vue";
const { Step } = Steps;
Vue.use(Button);
Vue.use(Menu);
Vue.use(Modal);
Vue.use(Progress);
Vue.use(FormModel);
Vue.use(Form);
Vue.use(Input);
Vue.use(Icon);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Tooltip);
Vue.use(DatePicker);
Vue.use(Select);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
