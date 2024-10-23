<template>
  <div class="wrapper container">
    <div class="box">
      <form @submit.prevent="login" class="form">
        <div class="login-form">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              v-model="email"
              id="email"
              class="form-control"
              placeholder="Email"
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
              placeholder="Password"
              required
            />
          </div>

          <div class="mb-3">
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
        </div>
      </form>

      <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    async login() {
  try {
    const response = await axios.post('http://localhost:8000/api/login', {
      email: this.email,
      password: this.password,
    });

    console.log('Login response:', response.data); // Log the response
    const { user, token } = response.data;

    // Check if user and token exist in the response
    if (!user || !token) {
      this.errorMessage = 'Invalid login response';
      return;
    }

    // Store the user data and token in localStorage
    localStorage.setItem('user', JSON.stringify(user)); // Store user data
    localStorage.setItem('authToken', token); // Store token

    this.$router.push('/'); // Redirect after successful login
  } catch (error) {
    if (error.response) {
      this.errorMessage = error.response.data.message || 'Login failed. Please try again.';
    } else {
      this.errorMessage = 'Network error. Please try again later.';
    }
  }
}

  },
};
</script>

<style>
/* Add your custom styles here */
</style>
