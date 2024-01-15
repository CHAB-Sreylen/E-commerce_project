
import { defineStore  } from 'pinia'

import cart from '../assets/cart.svg'
import heart from '../assets/heart.svg'
import search from '../assets/search.svg'

import collection1 from '../assets/collection1.png'
import collection2 from '../assets/collection2.png'

<<<<<<< HEAD
=======
import productTheme from '../assets/ProductTheme.png'

import pdetail1 from '../assets/detail1.png'
import pdetail2 from '../assets/detail2.png'
import pdetail3 from '../assets/detail3.png'
import pdetail4 from '../assets/detail4.png'
import pdetail5 from '../assets/detail5.png'

>>>>>>> main
export const useEStore = defineStore('todoList', {
    state: () => ({
      NavTitle: [
        {
          title: "HOME",
          link: "/"
<<<<<<< HEAD
        },{
          title: "STORE",
          link: "/shop"
=======
        },
        {
          title: "STORE",
          link: "/shop"
        },
        {
          title:"ABOUT US",
          link:"/about"

>>>>>>> main
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
<<<<<<< HEAD
        "ALL" , "CROWN" , "HAIR PIN" , "HEAD PIECES"
      ],
      CList:[
        {
          title: "Category",
          name: ["Crown","Bracelet","Hair Pin","Earing","Rings","Watch","a","b","c"]
=======
        { 
          name: "ALL",
          link: "/"
        } 
        , 
        {
          name: "CROWN",
          link: "/skdfadsj"
        }
      ],
      CList:[
        {
          title:"Promotion",
          name: ["Ring","Bracelet","Necklace","Earing","a","b","c"]
        },
        {
          title: "Category",
          name: ["Ring","Bracelet","Necklace","Earing","a","b","c"]
>>>>>>> main
        },
        {
          title: "Size",
          name: ["Extra Large","Large","Medium","Small","Extra small"]
        },
        {
          title: "Collection",
          name: ["2022","2021"]
        },

<<<<<<< HEAD
      ]

=======
      ],
      PDT:{
        Page: productTheme,
        image: [pdetail1,pdetail2,pdetail3,pdetail4,pdetail5]
      },
      Items:[
        { 
          DiscountBox:true,
          discount:"-80%",
          img:"./src/assets/HeartBracelet.png",
          name:"Heart Bracelet",
          promotion:true,
          baseprice:"100$",
          price:"50$",

        },
        { 
          DiscountBox:true,
          discount:"-75%",
          img:"./src/assets/HeartNecklace.png",
          name:"Heart Necklace",
          promotion:true,
          price:"50$",
        },
        {
          DiscountBox:true,
          discount:"-50%",
          img:"./src/assets/PlumeRing.png",
          name:"Plume Ring",
          price:"20$",
        },
        {
          DiscountBox:false,
          img:"./src/assets/HeartBracelet.png",
          name:"HeartBracelet",
          price:"20$",
        },
        {
          DiscountBox:false,
          img:"./src/assets/HeartBracelet.png",
          name:"HeartBracelet",
          price:"20$",
        },
        {
          DiscountBox:false,
          img:"./src/assets/HeartBracelet.png",
          name:"HeartBracelet",
          price:"20$",
        },
        {
          DiscountBox:false,
          img:"./src/assets/HeartBracelet.png",
          name:"HeartBracelet",
          price:"20$",
        },
        {
          DiscountBox:false,
          img:"./src/assets/HeartBracelet.png",
          name:"HeartBracelet",
          price:"20$",
        },
        {
          DiscountBox:false,
          img:"./src/assets/HeartBracelet.png",
          name:"HeartBracelet",
          price:"20$",
        },
      
      ]


>>>>>>> main
    }),
})