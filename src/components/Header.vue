<template>
    <!-- header-start -->
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <router-link to="/" class="navbar-brand">
            <img src="../../assets/img/logo.png" alt="Logo" />
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <router-link to="/" class="nav-link active">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/About" class="nav-link">About</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/Destination" class="nav-link">Destination</router-link>
              </li>
              <li class="nav-item" v-if="isAdmin">
                <router-link to="/User" class="nav-link">User</router-link>
              </li>
              <li class="nav-item" v-if="isAdmin">
                <router-link to="/Admin" class="nav-link">Admin</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/Contact" class="nav-link">Contact</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/Profile" class="nav-link">Profile</router-link>
              </li>
            </ul>
            <div id="lgin" class="d-flex align-items-center">
              <!-- Conditional rendering for login/logout based on authentication -->
              <router-link v-if="!isAuthenticated" to="/Login" class="btn btn-outline-primary me-2">Log in</router-link>
              <router-link v-if="isAuthenticated" to="/" @click.prevent="logout" class="btn btn-outline-danger me-2">Log out</router-link>
              <div class="social_links d-none d-lg-block">
                <ul class="list-unstyled d-flex">
                  <li class="me-3"><a href="https://www.instagram.com"><i class="fa fa-instagram"></i></a></li>
                  <li class="me-3"><a href="https://www.linkedin.com/in/ferdaous-ezzine-a3a659269/"><i class="fa fa-linkedin"></i></a></li>
                  <li class="me-3"><a href="https://web.facebook.com/home.php"><i class="fa fa-facebook"></i></a></li>
                  <li><a href="https://myaccount.google.com/?utm_source=OGB&utm_medium=app&pli=1&nlr=1"><i class="fa fa-google-plus"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <!-- header-end -->
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent',
    computed: {
      // Check if the user is authenticated
      isAuthenticated() {
        return localStorage.getItem('user') !== null;
      },
      // Determine if the user has admin privileges
      isAdmin() {
        const user = JSON.parse(localStorage.getItem('user'));
        return user && user.role_id === 1; // Assuming 1 is the admin role ID
      }
    },
    methods: {
      logout() {
        localStorage.removeItem('user'); // Remove user from localStorage
        this.$router.push({ name: 'Login' }); // Navigate to Login page
      }
    }
  };
  </script>
  
  <style scoped>
  /* Optional: Add custom styles here */
  .navbar {
    position: sticky;
    top: 0;
    z-index: 1000; /* Ensures navbar stays above other elements */
  }
  </style>
  