<template>
  <div class="card">
    <div class="card-header">Register Form</div>
    <div class="card-body">
      <form @submit.prevent="handleRegister">
        <label>First Name</label>
        <input type="text" v-model="form.name" name="name" id="name" class="form-control" required />

        <label>Email</label>
        <input type="email" v-model="form.email" name="email" id="email" class="form-control" required />

        <label>Password</label>
        <input type="password" v-model="form.password" name="password" id="password" class="form-control" required />

        <label>Confirm Password</label>
        <input type="password" v-model="form.password_confirmation" name="password_confirmation" id="password_confirmation" class="form-control" required />

        <button type="submit" :disabled="loading" class="btn btn-success">
          {{ loading ? 'Loading...' : 'Save' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const form = ref({
  name: "",
  password: "",
  email: "",
  password_confirmation: "",
});

const loading = ref(false);

const handleRegister = async () => {
  try {
    loading.value = true;
    await axios.post("http://127.0.0.1/register", {
      name: form.value.name,
      password: form.value.password,
      email: form.value.email,
      password_confirmation: form.value.password_confirmation,
    });
    router.push("/");
  } catch (error) {
    // Handle error (show a message, log it, etc.)
    console.error("Registration failed:", error);
  } finally {
    loading.value = false;
  }
};
</script>
