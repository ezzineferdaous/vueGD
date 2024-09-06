<template>
  <div class="wrapper">
    <div class="box">
      <h2>{{ formType }}</h2>

      <form :action="formAction">
        <!-- Login Form -->
        <div v-if="!isRegister" class="login-form">
          <label for="username">Username</label>
          <input type="text" id="username" placeholder="Username" />
          
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Password" />
        </div>

        <!-- Register Form -->
        <div v-if="isRegister" class="register-form">
          <label for="first-name">First Name</label>
          <input type="text" id="first-name" placeholder="First Name" />
          
          <label for="last-name">Last Name</label>
          <input type="text" id="last-name" placeholder="Last Name" />
          
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Email" />
        </div>

        <input type="submit" :value="submitButtonValue" id="submit" />
        <a href="#" @click.prevent="toggleForm" class="register">{{ linkText }}</a>
        <a v-if="!isRegister" href="#" class="forgot-password">Forgot password?</a>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRegister: false, // Initially show login form
      formType: 'Login', // Header text for form
      submitButtonValue: 'Login', // Submit button text
      linkText: 'Register!', // Link text for switching forms
      formAction: 'login.php' // Form action URL
    };
  },
  methods: {
    toggleForm() {
      // Toggle between login and register forms
      this.isRegister = !this.isRegister;
      
      // Update form details based on the form state
      this.formType = this.isRegister ? 'Register' : 'Login';
      this.submitButtonValue = this.isRegister ? 'Register' : 'Login';
      this.linkText = this.isRegister ? 'Login!' : 'Register!';
      this.formAction = this.isRegister ? 'register.php' : 'login.php';
    }
  }
};
</script>