import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// import { HttpService } from "@/utils/http";

// import { VueAxios } from './utils/request'
// import axios from 'axios'
import { Request } from '@/utils/request';
import VueAxios from 'vue-axios'


const app = createApp(App as any)
// app.config.productionTip = false

app
    .use(store)
    .use(router)
    .use(Antd)
    .use(VueAxios, Request.init())
    .mount('#app')
