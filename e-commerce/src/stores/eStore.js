
import { defineStore  } from 'pinia'

import cart from '../assets/cart.svg'
import heart from '../assets/heart.svg'
import search from '../assets/search.svg'

import collection1 from '../assets/collection1.png'
import collection2 from '../assets/collection2.png'

import productTheme from '../assets/ProductTheme.png'

import pdetail1 from '../assets/detail1.png'
import pdetail2 from '../assets/detail2.png'
import pdetail3 from '../assets/detail3.png'
import pdetail4 from '../assets/detail4.png'
import pdetail5 from '../assets/detail5.png'

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
      NavIcons: [
        { 
          name: "search",
          img: search
        },
        { 
          name: "cart",
          img: cart
        },
        { 
          name: "heart",
          img: heart
        },
        ],

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
        { 
          name: "ALL",
          link: "/"
        } 
        , 
        {
          name: "CROWN",
          link: "/working"
        },
        {
          name: "NECKLACE",
          link: "/working"
        },
        {
          name: "RINGS",
          link: "/working"
        }
      ],
      CList:[
        {
          title:"Promotion",
          name: [{n: "Ring", path: "/promotion"},{n: "branclat", path: "/promotion"},{n: "Necklace", path: "/promotion"},{n: "Earring", path: "/promotion"}],
          link: "/promotion",
        },
        {
          title:"Category",
          name: [{n: "Ring", path: "/ring"},{n: "branclat", path: "/bracelet"},{n: "Necklace", path: "/necklace"},{n: "Earring", path: "/earring"}],
          link: "/shop",
        },
        // {
        //   title: "Category",
        //   Items: [{name: "RING", path: "/ring"},{name: "BRANCLET", path: "/branclate"},{name: "NECKLACE", path: "/necklace"},{name: "EARRING", path: "/earring"}],
        //   link: "/"
        // },
        {
          title: "Size",
          name: [{n: "Extra Large", path: "/shop"},{n: "Large", path: "/shop"},{n: "Medium", path: "/shop"},{n: "Small", path: "/shop"},{n: "Extra small", path: "/shop"}],
          link: "/shop"
        },
        {
          title: "Collection",
          name: [{n: "2021", path: "/shop"},{n: "2022", path: "/shop"}],
          link: "/shop"
        },

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
          price:"50",
          tranding: true,
          new: true,
          category: "bracelet",
        },
        { 
          DiscountBox:true,
          discount:"-20%",
          img:"./src/assets/pic10.png",
          name:"Yellow Gold Plume Play Ring",
          promotion:true,
          baseprice:"100$",
          price:"70",
          tranding: true,
          new: true,
          category: "ring",
        },
        { 
          DiscountBox:true,
          discount:"-25%",
          img:"./src/assets/pic12.png",
          name:"Royal Chain Ring",
          promotion:true,
          baseprice:"30$",
          price:"22.5",
          tranding: true,
          new: true,
          category: "ring"
        },
        { 
          DiscountBox:true,
          discount:"-75%",
          img:"./src/assets/HeartNecklace.png",
          name:"Heart Necklace",
          promotion:true,
          price:"50",
          category: "necklace"
        },
        {
          DiscountBox:true,
          discount:"-50%",
          img:"./src/assets/PlumeRing.png",
          name:"Plume Ring",
          price:"20",
          category: "ring",
        },
        {
          DiscountBox:true,
          promotion: true,
          discount: "-50%",
          img:"./src/assets/DaintyBowNecklace.png",
          name:"Dainty Bow Necklace",
          baseprice:"100$",
          price:"50",
          category: "necklace"
        },
        {
          DiscountBox:false,
          img:"./src/assets/pic4.png",
          name:"Encircrle Pendant Necklace",
          price:"20",
          category: "necklace"
        },
        {
          DiscountBox:false,
          img:"./src/assets/pic5.png",
          name: "Dandieline Hairpin",
          price:"30",
          tranding: true,
        },
        {
          DiscountBox:false,
          img:"./src/assets/pic6.png",
          name:"Gold Cuff Brancelet",
          price:"30",
          tranding: true,
          category: "bracelet",
        },
        {
          DiscountBox:false,
          img:"./src/assets/pic7.png",
          name:"Hoop Earring",
          price:"30",
          category: "earring"
        },
        {
          DiscountBox:false,
          img:"./src/assets/pic8.png",
          name:"Hoop earring with pearl",
          price:"30",
          category: "earring"
        },
        {
          DiscountBox:false,
          img:"./src/assets/pic9.png",
          name:"Metal Geometric Hoop earing",
          price:"30",
          tranding: true,
          category: "earring"
        },
      
      ]


    }),
})