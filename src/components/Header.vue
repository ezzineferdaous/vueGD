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
            
            <!-- Admin Links -->
           
              <li class="nav-item">
                <router-link to="/workshop" class="nav-link" v-if="isAdmin">Workshop</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/category" class="nav-link" v-if="isAdmin">Category</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/User" class="nav-link" v-if="isAdmin">Users</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/Profile" class="nav-link" v-if="isAdmin">Profile</router-link>
              </li>
          

            <!-- Client Links -->
            
              <li class="nav-item">
                <router-link to="/Profile" class="nav-link" v-if="isClient">Profile</router-link>
              </li>
        

          </ul>

          <div id="login" class="d-flex align-items-center">
            <!-- Authentication logic -->
            <template v-if="!isAuthenticated">
              <router-link to="/Login" class="btn btn-outline-primary me-2">Log in</router-link>
              <router-link to="/Register" class="btn btn-secondary">Register</router-link>
            </template>
            <template v-else>
              <router-link to="/" @click="logout" class="btn btn-secondary">Log out</router-link>
            </template>

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
 isAuthenticated() {
        return localStorage.getItem('user') !== null;
      },
  isAdmin() {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      console.log('isAdmin user:', user);
      return user && user.role_id === 1;
    } catch (error) {
      console.error('Error in isAdmin:', error);
      return false;
    }
  },
  isClient() {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      console.log('isClient user:', user);
      return user && user.role_id === 2;
    } catch (error) {
      console.error('Error in isClient:', error);
      return false;
    }
  }
}
,
methods: {
  logout() {
    try {
      localStorage.removeItem('user'); // Safely remove user
      this.$router.push({ name: 'Login' }); // Navigate to login
    } catch (error) {
      console.error("Error during logout:", error);
    }
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
