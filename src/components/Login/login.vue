<template>
  <div class="wrapper container">
    <div class="box">
      <h2>Login</h2>

      <form @submit.prevent="submitForm" class="form">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" v-model="email" id="email" class="form-control" placeholder="Email" required />
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" v-model="password" id="password" class="form-control" placeholder="Password" required />
        </div>

        <input type="submit" value="Login" class="btn btn-success mb-3" />
        <a href="#" @click.prevent="toggleForm" class="register">Register!</a>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '', // User's email
      password: '', // User's password
    };
  },
  methods: {
    // Submit form to backend API
    async submitForm() {
      const url = 'http://localhost:8000/api/login';
      const data = { email: this.email, password: this.password };

      
        const response = await axios.post(url, data);
        console.log('Success:', response.data);

        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(response.data.user));

        // Redirect to home page after successful login
        this.$router.push({ name: 'home' });
      } 
    },

  
};
</script>

<style scoped>
.wrapper {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}

.box {
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
}

.form {
  margin-top: 10px;
}

.mb-3 {
  margin-bottom: 15px;
}

.form-label {
  font-weight: bold;
}

.register {
  display: block;
  margin-top: 10px;
  text-align: center;
  cursor: pointer;
}
</style>
