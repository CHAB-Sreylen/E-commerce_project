<template>
    <layout-div>
       <div class="row justify-content-md-center">
         <div class="col-12">
             <nav class="navbar navbar-expand-lg navbar-light bg-light">
                 <div class="container-fluid">
                     <a class="navbar-brand" href="#">Dashboard</a>
                     <div class="d-flex">
                         <ul class="navbar-nav">
                             <li class="nav-item">
                                 <a class="nav-link " aria-current="page" href="/">Logout</a>
                             </li>
                         </ul>
                     </div>
                 </div>
             </nav>
             <h2 class="text-center mt-5">Welcome, {{user?.name}}!</h2  >
         </div>
       </div>
    </layout-div>
 </template>
   
 <script>
 import axios from 'axios';
 import LayoutDiv from '../LayoutDiv.vue';
   
 export default {
   name: 'DashboardPage',
   components: {
     LayoutDiv,
   },
   data() {
     return {
       user: {},
     };
   },
   created() {
     this.getUser();
     if(localStorage.getItem('token') == "" || localStorage.getItem('token') == null){
       this.$router.push('/')
     }else {
       this.getUser();
     }
  
   },
   methods: {
     getUser() {
         axios.get('http://127.0.0.1/api/register', { headers:{Authorization: 'Bearer ' + localStorage.getItem('token')}})
         .then((r) => {
            this.user = r.data;
            return r
         })
         .catch((e) => {
            return e
         });
     },
  
     logoutAction() {
        const token = localStorage.getItem('token');

        // Check if there is a token
        if (!token) {
          console.warn('No token found. The user is likely not authenticated.');
          // You might choose to handle this case differently, or simply do nothing.
          return;
        }

        axios.post('http://127.0.0.1/api/logout', {}, { headers: { Authorization: 'Bearer ' + token } })
          .then((response) => {
            localStorage.setItem('token', '');
            this.$router.push('/');
          })
          .catch((error) => {
            console.error('Error during logout:', error);
          });
      }
  
   },
 };
 </script>