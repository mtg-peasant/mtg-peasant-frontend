import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'

Vue.use(Vuetify, {
  iconfont: 'md',
})

Vue.use(VueRouter)

Vue.use(VueI18n)