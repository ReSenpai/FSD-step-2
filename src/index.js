import './assets/css/main.css';
import './assets/scss/main.scss';
import './modules/short-dropdown/short-dropdown.js';
import './modules/expandable-checkbox-list/expandable-checkbox-list.js';
import './modules/like-button/like-button.js';
import './modules/rate-button/rate-button.js';
import './modules/dropdown/dropdown.js';
import './modules/range-slider/range-slider.js';

//- import 'jquery';
import $ from 'jquery';
import UI from 'jquery-ui';
//- import 'vue';
window.Vue = require('vue');
import store from './store';

Vue.component('example-component', require('./components/Example.vue').default)

// const app = new Vue({
//     data () {
//         return {
//             component: false,
//         }
//     },
//     store,
//     el: '#app'
// })