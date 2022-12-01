import Vue from 'vue'
import App from './App.vue'
import LangFlag from 'vue-lang-code-flags';
import { library } from '@fortawesome/fontawesome-svg-core'; // libreria icone del progetto
import { faChevronRight, faHatWizard } from '@fortawesome/free-solid-svg-icons'; // importiamo le icone che ci servono
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'; // importazione del componente FontAwesomeIcon

library.add(faChevronRight, faHatWizard); 
Vue.component('FontAwesomeIcon', FontAwesomeIcon); 

Vue.config.productionTip = false
Vue.component('lang-flag', LangFlag);

new Vue({
  render: h => h(App),
}).$mount('#app')
