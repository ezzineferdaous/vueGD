<template>
  <div class="wrapper container">
    <div class="box">
      <h2>{{ formType }}</h2>

      <form @submit.prevent="submitForm" class="form">
        <!-- Login Form -->
        <div v-if="!isRegister" class="login-form">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" v-model="email" id="email" class="form-control" placeholder="Email" />
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" v-model="password" id="password" class="form-control" placeholder="Password" />
          </div>
        </div>
      

        <!-- Register Form -->
        <div v-if="isRegister" class="register-form" id="register-form">
          <div class="row mb-3">
            <div class="col">
              <label for="first-name" class="form-label">First Name</label>
              <input type="text" v-model="nom" id="first-name" class="form-control" placeholder="First Name" />
            </div>
            <div class="col">
              <label for="last-name" class="form-label">Last Name</label>
              <input type="text" v-model="prenom" id="last-name" class="form-control" placeholder="Last Name" />
            </div>
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" v-model="email" id="email" class="form-control" placeholder="Email" />
          </div>

          <div class="mb-3">
            <label for="tel" class="form-label">Phone Number</label>
            <input type="text" v-model="tel" id="tel" class="form-control" placeholder="Phone Number" />
          </div>

          <div class="mb-3">
            <label for="date" class="form-label">Date of birth</label>
            <input type="date" v-model="date" id="date" class="form-control" />
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" v-model="password" id="password" class="form-control" placeholder="Password" />
          </div>
        </div>

        <input type="submit" :value="submitButtonValue" class="btn btn-success mb-3" id="submit" />
        <a href="#" @click.prevent="toggleForm" class="register">{{ linkText }}</a>
      </form>
    </div>
  </div>
</template>




<script>
import axios from 'axios';

export default {
  data() {
    return {
      isRegister: false,
      formType: 'Login',
      submitButtonValue: 'Login',
      linkText: 'Register!',
      email: '',
      password: '',
      nom: '',
      prenom: '',
      tel: '',
      date: '',
      role: '', // Selected role
      isRoleDropdownOpen: false, // Manage dropdown visibility
    };
  },
  methods: {
    toggleForm() {
      this.isRegister = !this.isRegister;
      this.formType = this.isRegister ? 'Register' : 'Login';
      this.submitButtonValue = this.isRegister ? 'Register' : 'Login';
      this.linkText = this.isRegister ? 'Login!' : 'Register!';
    },
    toggleRoleDropdown() {
      this.isRoleDropdownOpen = !this.isRoleDropdownOpen; // Toggle dropdown
    },
    async submitForm() {
      const url = this.isRegister
        ? 'http://localhost:8000/api/register'
        : 'http://localhost:8000/api/login';

      const data = this.isRegister
        ? { email: this.email, password: this.password, nom: this.nom, prenom: this.prenom, tel: this.tel, date_naissance: this.date }
        : { email: this.email, password: this.password, role: this.role }; // Include role in login data

      try {
        const response = await axios.post(url, data);
        console.log('Success:', response.data);

        // Store user in localStorage
        localStorage.setItem('user', JSON.stringify(response.data.user));

        // Show alert message
      

        this.$router.push({ name: 'home' }); // Redirect after successful login or register
      } catch (error) {
        console.error('Error:', error.response.data);
        // Check for invalid credentials
    if (error.response && error.response.status === 401) {
      alert('Incorrect password or email. Please try again.');
    } else {
      alert('An error occurred. Please try again.');
    }
       
      }
    },
  },
};
</script>





