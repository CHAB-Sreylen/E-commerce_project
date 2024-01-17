
import { defineStore  } from 'pinia'




export const useCart = defineStore('carts', {
    state: () => ({
        
        cart: [],
    }),
    actions: {
        addToCart(name,price,img) {
            
            const existingItemIndex = this.cart.findIndex(item => item.name === name && item.price === price);

            if(existingItemIndex !== -1){
                this.cart[existingItemIndex].quantity++;
            }
            else{
                this.cart.push({name,price,img , quantity: 1})
            }
        }
    }
})