import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { FontAwesomeSolid } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

// FontAwesomeLibrary.add(FontAwesomeSolid)
library.add(faSquareGithub, faLinkedin)

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
