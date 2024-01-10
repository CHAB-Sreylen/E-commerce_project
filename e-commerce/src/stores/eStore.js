
import { defineStore  } from 'pinia'

import cart from '../assets/cart.svg'
import heart from '../assets/heart.svg'
import search from '../assets/search.svg'

import collection1 from '../assets/collection1.png'
import collection2 from '../assets/collection2.png'

export const useEStore = defineStore('todoList', {
    state: () => ({
      NavTitle: [
        {
          title: "HOME",
          link: "/"
        },
        {
          title: "STORE",
          link: "/shop"
        },
        {
          title:"ABOUT US",
          link:"/about"

        }
      ],
      NavIcons: [search,cart,heart],

      Cbox:[
        {
          image: collection1,
          title:'Old Season Collection: 2021',
          dis:'A Perfect Combo in Fashion',
          icon: 'chevron-right'
        },
        {
          image: collection2,
          title: 'Old Season Collection: 2022',
          dis: 'A New Way of Epression',
        }
      ],
      PCategory: [
        "ALL" , "CROWN" , "HAIR PIN" , "HEAD PIECES"
      ],
      CList:[
        {
          title: "Category",
          name: ["Crown","Bracelet","Hair Pin","Earing","Rings","Watch","a","b","c"]
        },
        {
          title: "Size",
          name: ["Extra Large","Large","Medium","Small","Extra small"]
        },
        {
          title: "Collection",
          name: ["2022","2021"]
        },

      ],
      Trending:[
        {
          Img:"../src/assets/LatestProduct.jpg",
          Title:"Latest style",
          Detail:"Our design follow the latest  styles to help you update",
        },
        {
          Img:"../src/assets/Latest.jpg",
          Title:"Best price",
          Detail:"Our design follow the latest  styles to help you update"
        },
        {
          Img:"../src/assets/packaging.jpg",
          Title:"Free shipping",
          Detail:"Our design follow the latest  styles to help you update"
        }
      ]

    }),
})