//load in bootstrap js
import * as Vue from 'vue';

require('./bootstrap');

//custom event listeners
require('./EventListeners/Listeners');

//import vue router along with the routers
import router from './routes/configuration';

import Navigation from './components/Navigation';
import NavList from "./components/NavList";
import NavBurgerButton from "./components/NavBurgerButton";
import HeaderComponent from "./components/Layout/HeaderComponent";

let app = Vue.createApp({});

app.component('header-component', HeaderComponent)
app.component('nav-list', NavList);
app.component('navigation', Navigation);
app.component('nav-burger-button', NavBurgerButton);

app.use(router);

app.mount("#app");
