import Vue from 'vue'
import Router from 'vue-router'
import Sign from '@/components/Sign'
import Interactive from '@/components/Interactive'
import Process from '@/components/Process'
import Register from '@/components/Register'
import Publish from '@/components/Publish'
import One from '@/components/One'

import { emoji } from '@/api/emoji.js'

Vue.prototype.emoji = emoji

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router)

Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/Interactive',
      name: 'Interactive',
      component: Interactive
    },
    {
      path: '/Process',
      name: 'Process',
      component: Process
    },

    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
     path: '/Publish',
     name: 'Publish',
     component: Publish
    },
    {
      path: '/One',
      name: 'One',
      component: One
    }
  ]
})
