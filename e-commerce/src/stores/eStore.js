
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
          tranding: true,
          new: true,
        },
        { 
          DiscountBox:true,
          discount:"-20%",
          img:"./src/assets/pic10.png",
          name:"Yellow Gold Plume Play Ring",
          promotion:true,
          baseprice:"100$",
          price:"70$",
          tranding: true,
          new: true,
        },
        { 
          DiscountBox:true,
          discount:"-25%",
          img:"./src/assets/pic11.png",
          name:"Royal Chain Ring",
          promotion:true,
          baseprice:"30$",
          price:"22.5$",
          tranding: true,
          new: true,
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
          DiscountBox:true,
          promotion: true,
          discount: "-50%",
          img:"./src/assets/DaintyBowNecklace.png",
          name:"Dainty Bow Necklace",
          baseprice:"100$",
          price:"50$",
        },
        {
          DiscountBox:false,
          img:"./src/assets/pic4.png",
          name:"Encircrle Pendant Necklace",
          price:"20$",
        },
        {
          DiscountBox:false,
          img:"./src/assets/pic5.png",
          name: "Dandieline Hairpin",
          price:"30$",
          tranding: true,
        },
        {
          DiscountBox:false,
          img:"./src/assets/pic6.png",
          name:"Gold Cuff Brancelet",
          price:"30$",
          tranding: true,
        },
        {
          DiscountBox:false,
          img:"./src/assets/pic7.png",
          name:"Hoop Earring",
          price:"30$",
        },
        {
          DiscountBox:false,
          img:"./src/assets/pic8.png",
          name:"Hoop earring with pearl",
          price:"30$",
        },
        {
          DiscountBox:false,
          img:"./src/assets/pic9.png",
          name:"Metal Geometric Hoop earing",
          price:"30$",
          tranding: true,
        },
      
      ]


    }),
})