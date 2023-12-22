import {defineStore} from "pinia";
import usersJson from '@/data/users.json'

export const useUsersStore = defineStore('users',{
   state: () => ({
       users: usersJson,
   }),
    /*actions:{
        findItem(id){
            return this.loggedIn.cart.find(item => item.id == id)
        },
        addToCart(product){
            let productInCart = this.findItem(product.id)
            if (productInCart){
                this.findItem(product.id).amount += 1
            } else{
                product.amount = 1
                this.loggedIn.cart.push(product)
            }
        },
    },
    getters:{
       loggedIn(){
           return this.users[0];
       }
    }*/
})