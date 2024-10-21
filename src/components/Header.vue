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
              <router-link to="/workshop" class="nav-link">workshop</router-link>
            </li>
            <!-- Admin Links -->
            <!-- v-if="isAdmin" -->
            <li class="nav-item" >
              <router-link to="/User" class="nav-link">Users</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/category" class="nav-link">category</router-link>
            </li>
            
            <li class="nav-item" >

              <router-link to="/permission " class="nav-link">permission </router-link>
            </li>
            <!-- Client Links -->
            <!-- <li class="nav-item" v-if="isClient"> -->
              <li class="nav-item">

              <router-link to="/Profile" class="nav-link">Profile</router-link>
            </li>
           
          </ul>
          <div id="login" class="d-flex align-items-center">
            <!-- Login/Logout logic -->
            <router-link v-if="!isAuthenticated" to="/Login" class="btn btn-outline-primary me-2">Log in</router-link>
            <router-link v-if="!isAuthenticated" to="/Logout" class="btn btn-outline-primary me-2">Log out</router-link>
            <router-link v-if="isAuthenticated" to="/" @click.prevent="logout" class="btn btn-outline-danger me-2">Log out</router-link>
            <!-- Social Links -->
            <div class="social_links d-none d-lg-block">
              <ul class="list-unstyled d-flex">
                <li class="me-3">
                  <a href="https://www.instagram.com" target="_blank"><i class="fa fa-instagram"></i></a>
                </li>
                <li class="me-3">
                  <a href="https://www.linkedin.com/in/ferdaous-ezzine-a3a659269/" target="_blank"><i class="fa fa-linkedin"></i></a>
                </li>
                <li class="me-3">
                  <a href="https://web.facebook.com/home.php" target="_blank"><i class="fa fa-facebook"></i></a>
                </li>
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
    },
    isClient() {
      const user = JSON.parse(localStorage.getItem('user'));
      return user && user.role_id === 2; // Assuming 2 is the client role ID
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

.social_links ul {
  padding: 0;
}

.social_links ul li a {
  color: #333; /* Customize color */
}

.social_links ul li a:hover {
  color: #007bff; /* Hover effect */
}

.navbar-toggler {
  border-color: rgba(0, 0, 0, 0.1);
}
</style>
