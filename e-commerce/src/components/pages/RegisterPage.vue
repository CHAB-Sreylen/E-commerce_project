<template>
    <div>
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
                            Welcome ! <br/>
                            Register
                        </h5>
                        <form class="w-full">
                             <div class="mb-3">
                                 <label 
                                     htmlFor="name"
                                     class="form-label">Name
                                 </label>
                                 <input 
                                     type="text"
                                     class="form-control"
                                     id="name"
                                     name="name"
                                     v-model="name"
                                 />
                                 <div v-if="validationErrors.name" class="flex flex-col">
                                     <small  class="text-danger">
                                     {{validationErrors?.name[0]}}
                                     </small >
                                 </div>      
                             </div>
                             <div class="mb-3">
                                 <label 
                                     htmlFor="email"
                                     class="form-label">Email address
                                 </label>
                                 <input 
                                     type="email"
                                     class="form-control"
                                     id="email"
                                     name="email"
                                     v-model="email"
                                 />
                                 <div v-if="validationErrors.email" class="flex flex-col">
                                     <small  class="text-danger">
                                     {{validationErrors?.email[0]}}
                                     </small >
                                 </div>
                             </div>
                             <div class="mb-3">
                                 <label 
                                     htmlFor="password"
                                     class="form-label">Password
                                 </label>
                                 <input 
                                     type="password"
                                     class="form-control"
                                     id="password"
                                     name="password"
                                     v-model="password"
                                 />
                                <div v-if="validationErrors.password" class="flex flex-col">
                                     <small  class="text-danger">
                                     {{validationErrors?.password[0]}}
                                     </small >
                                 </div>
                             </div>
                             <div class="mb-3">
                                 <label 
                                     htmlFor="confirm_password"
                                     class="form-label">Confirm Password
                                 </label>
                                 <input 
                                     type="password"
                                     class="form-control"
                                     id="confirm_password"
                                     name="confirm_password"
                                     v-model="confirmPassword"
                                 />
                             </div>
                             <div class="d-grid gap-2">
                                 <button 
                                     :disabled="isSubmitting"
                                     @click="registerAction()"
                                     type="button"
                                     class="btn btn-primary btn-block">Register Now
                                 </button>
                                 <p 
                                     class="text-center">Have already an account <router-link to="/login">Login here</router-link>
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
   name: 'RegisterPage',
   components: {
     LayoutDiv,
     Navbar,
   },
   data() {
     return {
         name:'',
         email:'',
         password:'',
         confirmPassword:'',
         validationErrors:{},
         isSubmitting:false,
     };
   },
   created() {
     if(localStorage.getItem('token') != "" && localStorage.getItem('token') != null){
         this.$router.push('/dashboard')
     }
   },
   methods: {
      registerAction(){
         this.isSubmitting = true
         let payload = {
             name:this.name,
             email: this.email,
             password: this.password,
             password_confirmation: this.confirmPassword
         }
         axios.post('/api/register', payload)
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
             return error
           });
      }
   },
 };
 </script>

<style>
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
</style>
