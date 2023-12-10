
import { defineStore  } from 'pinia'

import img1 from "../assets/images/1.png"
import img2 from "../assets/images/2.png"


export const useImage = defineStore('images', {
    state: () => ({
      Pic: [
        {
            image: img1,
            name: "Butterfly",
            price: "35$"
        },
        {
            image: img2,
            name: "Rose Flower Hair Crown",
            price: "35$"
        },
        {
            image: img2,
            name: "Rose Flower Hair Crown",
            price: "35$"
        },
        {
            image: img2,
            name: "Rose Flower Hair Crown",
            price: "35$"
        },
        {
            image: img2,
            name: "Rose Flower Hair Crown",
            price: "35$"
        },
        {
            image: img2,
            name: "Rose Flower Hair Crown",
            price: "35$"
        },
        {
            image: img2,
            name: "Rose Flower Hair Crown",
            price: "35$"
        },
      ]
    }),
})