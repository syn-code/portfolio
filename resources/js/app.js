//load in bootstrap js
require('./bootstrap');
//custom event listeners
require('./EventListeners/Listeners');

import Vue from 'vue';
import { Plugin } from "vue-fragment";
Vue.use(Plugin);

import Navigation from './Components/Navigation';
import NavList from "./Components/NavList";
import NavBurgerButton from "./Components/NavBurgerButton";

Vue.component('navigation', Navigation);
Vue.component('nav-list', NavList);
Vue.component('nav-burger-button', NavBurgerButton);

//initialise vue
const app = new Vue({
    el: '#app',
});
