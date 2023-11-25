
import { defineStore  } from 'pinia'

import cart from '../assets/cart.svg'
import heart from '../assets/heart.svg'
import search from '../assets/search.svg'


export const useEStore = defineStore('todoList', {
    state: () => ({
      NavTitle: ["HOME", "STORE"],
      NavIcons: [search,cart,heart],
      
    }),
})