
import { defineStore  } from 'pinia'




export const useCart = defineStore('carts', {
    state: () => ({ 
        cart: [],
    }),
    getters: {
        getTotalPrice() {
        return this.cart.reduce((total, item) => total + parseFloat(item.price) * parseInt(item.quantity, 10), 0);
        },
    },
    actions: {
        addToCart(name,price,img) {
            
            const existingItemIndex = this.cart.findIndex(item => item.name === name && item.price === price);

            if(existingItemIndex !== -1){
                this.cart[existingItemIndex].quantity++;
            }
            else{
                this.cart.push({name,price,img , quantity: 1})
            }
        },
        deleteCart(name, price) {
            this.cart = this.cart.filter(item => !(item.name === name && item.price === price));
        },
    }
})