<template>
  <div class="container my-4">
    <h2 class="text-center">User Profile</h2>
    <div class="row justify-content-center">
      <div class="col-lg-4 col-md-6">
        <div class="card">
          <img :src="user.profilePicture" class="card-img-top" alt="Profile Picture" />
          <div class="card-body text-center">
            <h5 class="card-title">{{ user.name }}</h5>
            <p class="card-text">{{ user.email }}</p>
            <button class="btn btn-primary" @click="editMode = !editMode">
              {{ editMode ? 'Cancel' : 'Edit Profile' }}
            </button>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Profile Details</h5>
            <form v-if="editMode" @submit.prevent="updateProfile">
              <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  v-model="user.username"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="user.name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="user.email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="user.password"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="role_id" class="form-label">Role ID</label>
                <input
                  type="text"
                  class="form-control"
                  id="role_id"
                  v-model="user.role_id"
                  required
                />
              </div>
              <button type="submit" class="btn btn-success">Save Changes</button>
            </form>
            <div v-else>
              <p><strong>Username:</strong> {{ user.username }}</p>
              <p><strong>Name:</strong> {{ user.name }}</p>
              <p><strong>Email:</strong> {{ user.email }}</p>
              <p><strong>Role ID:</strong> {{ user.role_id }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfilePage',
  data() {
    return {
      editMode: false,
      user: {
        username: 'johndoe', // Added username
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: '', // Placeholder for password
        role_id: '1', // Added role_id
        profilePicture: 'https://via.placeholder.com/150',
      },
    };
  },
  methods: {
    updateProfile() {
      
      // Implement profile update logic here
      console.log('Profile updated:', this.user);
      this.editMode = false; // Exit edit mode after saving
    },
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 20px;
}
.card-img-top {
  border-radius: 50%;
  max-width: 150px;
  margin: 0 auto;
}
</style>
