<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-8">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title text-center">Register</h3>
              <form @submit.prevent="register">
                <div class="mb-3">
                  <label for="username" class="form-label">Username</label>
                  <input
                    type="text"
                    v-model="username"
                    id="username"
                    class="form-control"
                    placeholder="Enter your username"
                    required
                  />
                </div>
  
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input
                    type="email"
                    v-model="email"
                    id="email"
                    class="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>
  
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input
                    type="password"
                    v-model="password"
                    id="password"
                    class="form-control"
                    placeholder="Enter your password"
                    required
                  />
                </div>
  
                <div class="mb-3">
                  <label for="tel" class="form-label">Telephone</label>
                  <input
                    type="text"
                    v-model="tel"
                    id="tel"
                    class="form-control"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
  
                
  
                <div class="mb-3">
                  <button type="submit" class="btn btn-primary w-100">Register</button>
                </div>
              </form>
  
              <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
              <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
        tel: '',
        role_id: 2, // Default role is client
        errorMessage: '',
        successMessage: '',
      };
    },
    methods: {
      async register() {
        try {
          const response = await axios.post('http://localhost:8000/api/register', {
            username: this.username,
            email: this.email,
            password: this.password,
            tel: this.tel,
            role_id: this.role_id,
          });
          this.successMessage = 'Registration successful';
          this.errorMessage = '';
          // Optionally, redirect to a different page or reset form
        } catch (error) {
          if (error.response) {
            this.errorMessage = error.response.data.message || 'Registration failed. Please try again.';
            this.successMessage = '';
          } else {
            this.errorMessage = 'Network error. Please try again later.';
            this.successMessage = '';
          }
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your custom styles */
  </style>
  