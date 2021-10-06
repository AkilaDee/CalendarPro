import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyA7j9GQqAwCorXfItKl9JXUZQ_8oe_he44",
  authDomain: "calendar-pro-app.firebaseapp.com",
  projectId: "calendar-pro-app",
  storageBucket: "calendar-pro-app.appspot.com",
  messagingSenderId: "693493156821",
  appId: "1:693493156821:web:e8588baa31ba16e14fcb5c"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
