import { createApp } from 'vue'
import App from './App.vue'

import { Quasar, QTable, QBtn, QTd } from 'quasar'
import quasarIconSet from 'quasar/icon-set/material-icons'

// CSS compilado do Quasar (sem SASS)
import 'quasar/dist/quasar.css'
import '@quasar/extras/material-icons/material-icons.css'

const app = createApp(App)

app.use(Quasar, {
  components: {
    QTable,
    QBtn,
    QTd
  },
  plugins: {},          // se quiser usar Notify, Dialog etc. depois
  iconSet: quasarIconSet
})

app.mount('#app')
