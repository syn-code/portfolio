//load in bootstrap js
import * as Vue from 'vue';
//import components from './components/';

require('./bootstrap');
//custom event listeners
require('./EventListeners/Listeners');

//import { Plugin } from "vue-fragment";
//Vue.use(Plugin);

import Navigation from './components/Navigation';
import NavList from "./components/NavList";
import NavBurgerButton from "./components/NavBurgerButton";
import HeaderComponent from "./components/Layout/HeaderComponent";

let app = Vue.createApp({});

app.component('header-component', HeaderComponent)
app.component('nav-list', NavList);
app.component('navigation', Navigation);
app.component('nav-burger-button', NavBurgerButton);



//app.use(components);
//app.use(components);
// Vue.component('navigation', Navigation);
// Vue.component('nav-list', NavList);
// Vue.component('nav-burger-button', NavBurgerButton);
// Vue.component('header-component', Header);

//initialise vue
// const app = new Vue({
//     el: '#app',
// });

app.mount("#app");
