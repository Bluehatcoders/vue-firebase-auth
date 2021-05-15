import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index";
import * as firebase from "firebase";
import store from "./store";

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "AIzaSyB_XI44VWLNUspyqMRjbAZAt9vTAb6LsIY",
  authDomain: "learning-vhxdqt.firebaseapp.com",
  databaseURL: "https://learning-vhxdqt.firebaseio.com",
  projectId: "learning-vhxdqt",
  storageBucket: "learning-vhxdqt.appspot.com",
  messagingSenderId: "300528074788",
  appId: "1:300528074788:web:da3b6c990169e2082258b1"
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
