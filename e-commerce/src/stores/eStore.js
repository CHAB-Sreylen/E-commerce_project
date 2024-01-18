
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

import pic1 from '../assets/HeartBracelet.png';
import pic2 from '../assets/pic10.png'
import pic3 from '../assets/pic12.png'
import pic4 from '../assets/HeartNecklace.png'
import pic5 from '../assets/PlumeRing.png'
import pic6 from '../assets/DaintyBowNecklace.png'
import pic7 from '../assets/pic4.png'
import pic8 from '../assets/pic5.png'
import pic9 from '../assets/pic6.png'
import pic10 from '../assets/pic7.png'
import pic11 from '../assets/pic8.png'
import pic12 from '../assets/pic8.png'

import Tpic1 from '../assets/Latest.jpg'
import Tpic2 from '../assets/LatestProduct.jpg'
import Tpic3 from '../assets/packaging.jpg'


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
      Trending:[
        {
          Img:Tpic1,
          Title:"Latest product",
          Detail:"Our design follow the latest  styles to help you update",
        },
        {
          Img: Tpic2,
          Title:"Best price",
          Detail:"Our design follow the latest  styles to help you update",
        },
        {
          Img: Tpic3,
          Title:"Free shipping ",
          Detail:"Our design follow the latest  styles to help you update",
        }
      ],
      PDT:{
        Page: productTheme,
        image: [pdetail1,pdetail2,pdetail3,pdetail4,pdetail5]
      },
      Items:[
        { 
          DiscountBox:true,
          discount:"-80%",
          img:pic1,
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
          img: pic2,
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
          img: pic3,
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
          img:pic4,
          name:"Heart Necklace",
          promotion:true,
          price:"50",
          category: "necklace"
        },
        {
          DiscountBox:true,
          discount:"-50%",
          img:pic5,
          name:"Plume Ring",
          price:"20",
          category: "ring",
        },
        {
          DiscountBox:true,
          promotion: true,
          discount: "-50%",
          img:pic6,
          name:"Dainty Bow Necklace",
          baseprice:"100$",
          price:"50",
          category: "necklace"
        },
        {
          DiscountBox:false,
          img:pic7,
          name:"Encircrle Pendant Necklace",
          price:"20",
          category: "necklace"
        },
        {
          DiscountBox:false,
          img:pic8,
          name: "Dandieline Hairpin",
          price:"30",
          tranding: true,
        },
        {
          DiscountBox:false,
          img:pic9,
          name:"Gold Cuff Brancelet",
          price:"30",
          tranding: true,
          category: "bracelet",
        },
        {
          DiscountBox:false,
          img:pic10,
          name:"Hoop Earring",
          price:"30",
          category: "earring"
        },
        {
          DiscountBox:false,
          img:pic11,
          name:"Hoop earring with pearl",
          price:"30",
          category: "earring"
        },
        {
          DiscountBox:false,
          img: pic12,
          name:"Metal Geometric Hoop earing",
          price:"30",
          tranding: true,
          category: "earring"
        },
      
      ]


    }),
})