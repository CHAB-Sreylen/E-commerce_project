<template>

    <div class="contain">
        <router-link to="/login">
            <div class="flex justify-end items-center">
                <p class="mr-20 text-[#7E7676]">Sign in / Register</p>
            </div>
        </router-link>
        <div class="flex justify-center items-center border-y border-[#B16969] py-1">
            <img class="h-[124px] w-[279px]" src="@/assets/envylogo.svg" alt="">
        </div>
        <Navbar class="sticky top-0 z-50"></Navbar>
        <div class="flex flex-col items-center gap-[19px] mt-5">
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title mb-4">
                            Hello again ! <br/>
                            Sign In</h5>
                        <form class="w-full">
                             <p v-if="Object.keys(validationErrors).length != 0" class='text-center '><small class='text-danger'>Incorrect Email or Password</small></p>
                             <div class="mb-3">
                                 <label 
                                     htmlFor="email"
                                     class="form-label">
                                         Email address
                                 </label>
                                 <input 
                                     v-model="email"
                                     type="email"
                                     class="form-control"
                                     id="email"
                                     name="email"
                                 />
                             </div>
                             <div class="mb-3">
                                 <label 
                                     htmlFor="password"
                                     class="form-label">Password
                                 </label>
                                 <input 
                                     v-model="password"
                                     type="password"
                                     class="form-control"
                                     id="password"
                                     name="password"
                                 />
                             </div>
                             <div class="d-grid gap-2">
                                 <button 
                                     :disabled="isSubmitting"
                                     @click="loginAction()"
                                     type="button"
                                     class="btn btn-primary btn-block">Login</button>
                                 <p class="text-center">Don't have account? 
                                     <router-link to="/register">Register here </router-link>
                                 </p>
                             </div>
                         </form>
                     </div>
                 </div>
             </div>
         </div> 
    </div>

 </template>
   

<script>
import Navbar from '../Navbar.vue';
 import axios from 'axios';
 import LayoutDiv from '../LayoutDiv.vue';
   
 export default {
   name: 'LoginPage',
   components: {
     Navbar,
     LayoutDiv,
   },
   data() {
     return {
         email:'',
         password:'',
         validationErrors:{},
         isSubmitting:false,
     };
   },
   created() {
     if(localStorage.getItem('token') != "" && localStorage.getItem('token') != null){
         this.$router.push('/Login')
     }
   },
   methods: {
      loginAction(){
         this.isSubmitting = true
         let payload = {
             email: this.email,
             password: this.password,
         }
         axios.post('http://127.0.0.1/api/login', payload)
           .then(response => {
             localStorage.setItem('token', response.data.token)
             this.$router.push('/dashboard')
             return response
           })
           .catch(error => {
             this.isSubmitting = false
            if (error.response.data.errors != undefined) {
                 this.validationErrors = error.response.data.errors
             }
             if (error.response.data.error != undefined) {
                 this.validationErrors = error.response.data.error
             }
             return error
           });
      }
   },
 };
 </script>

<style scoped>
/* Ajoutez des styles spécifiques ici */
.justify-content-md-center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
}

.card-body {
    padding: 2rem;
}

.card-title {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1rem;
}

form {
    width: 100%;
}

label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
}

input {
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.mb-3 {
    margin-bottom: 1rem;
}

.btn-primary {
    color: #fff;
    background-color: #e0b0b0;
    border-color: #e0b0b0;
}

.btn-primary:hover {
    background-color: #B16969;
    border-color: #B16969;
}

.text-danger {
    color: #dc3545;
}

.text-center {
    text-align: center;
}

.contain {
    width: 100%,
}

</style>
