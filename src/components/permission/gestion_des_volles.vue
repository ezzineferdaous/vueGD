<template>
  <div class="container mt-5">
    <!-- Permissions Header -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h1 id="title"><u>Permissions</u></h1>
      <button class="btn btn-primary" @click="openAddPermissionModal">Add Permission</button>
    </div>

    <!-- Permissions Table -->
    <table class="table table-bordered table-striped">
      <thead class="table-dark">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="permission in permissions" :key="permission.id_permission">
          <td>{{ permission.id_permission }}</td>
          <td>{{ permission.name }}</td>
          <td>{{ permission.description }}</td>
          <td>
            <button class="btn btn-success btn-sm me-2" @click="openAssignPermissionModal(permission)">Assign</button>
            <button class="btn btn-info btn-sm me-2" @click="openUpdatePermissionModal(permission)">Update</button>
            <button class="btn btn-danger btn-sm" @click="deletePermission(permission.id_permission)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Assign Permission Modal -->
    <div
      v-if="showAssignPermissionModal"
      class="modal show"
      tabindex="-1"
      style="display: block; background-color: rgba(0, 0, 0, 0.5); font-size: 14px;"
      role="dialog"
    >
      <div class="modal-dialog">
        <div class="modal-content" style="padding: 0;">
          <div class="modal-body">
            <h5 class="modal-title mb-5 mt-3">Assign Permission to User</h5>
            <div class="mb-3">
              <label for="userId">User ID</label>
              <input type="number" class="form-control" v-model="userId" id="userId" required>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="closeAssignPermissionModal">Close</button>
              <button type="button" class="btn btn-primary" @click="assignPermission">Assign Permission</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Permission Modal -->
    <div
      v-if="showAddPermissionModal"
      class="modal show"
      tabindex="-1"
      style="display: block; background-color: rgba(0, 0, 0, 0.5); font-size: 14px;"
      role="dialog"
    >
      <div class="modal-dialog">
        <div class="modal-content" style="padding: 0;">
          <div class="modal-body">
            <h5 class="modal-title mb-5 mt-3">Add Permission</h5>
            <div class="mb-3">
              <label for="permissionName">Permission Name</label>
              <input type="text" class="form-control" v-model="newPermission.name" id="permissionName" required>
            </div>
            <div class="mb-3">
              <label for="permissionDescription">Description</label>
              <textarea class="form-control" v-model="newPermission.description" id="permissionDescription" required></textarea>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="closeAddPermissionModal">Close</button>
              <button type="button" class="btn btn-primary" @click="addPermission">Add Permission</button>
            </div>
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
      permissions: [],
      showModal: false,
      showAddPermissionModal: false,
      showAssignPermissionModal: false,
      newPermission: {
        id_permission: null,
        name: '',
        description: ''
      },
      userId: null,
      selectedPermission: null,
    };
  },
  methods: {
    fetchPermissions() {
      const token = localStorage.getItem('authToken');
      if (!token) {
        alert('Unauthorized: No token found');
        return;
      }

      axios.get('http://localhost:8000/api/permissions', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        this.permissions = response.data;
      })
      .catch(error => {
        console.error('Error fetching permissions:', error);
      });
    },
    openAddPermissionModal() {
      this.newPermission = { id_permission: null, name: '', description: '' };
      this.showAddPermissionModal = true;
    },
    closeAddPermissionModal() {
      this.showAddPermissionModal = false;
    },
    addPermission() {
      const token = localStorage.getItem('authToken');
      const method = this.newPermission.id_permission ? 'put' : 'post';
      const url = this.newPermission.id_permission 
        ? `http://localhost:8000/api/permissions/${this.newPermission.id_permission}`
        : 'http://localhost:8000/api/permissions';

      axios[method](url, this.newPermission, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        this.fetchPermissions();
        this.closeAddPermissionModal();
        alert(this.newPermission.id_permission ? 'Permission updated successfully!' : 'Permission added successfully!');
      })
      .catch(error => {
        console.error('Error adding/updating permission:', error);
        alert('Failed to add/update permission.');
      });
    },
    openAssignPermissionModal(permission) {
      this.selectedPermission = permission; // Store the permission to be assigned
      this.userId = null; // Reset userId input
      this.showAssignPermissionModal = true; // Show the modal
    },
    closeAssignPermissionModal() {
      this.showAssignPermissionModal = false; // Hide the modal
    },
    async assignPermission() {
      const token = localStorage.getItem('authToken'); // Retrieve the token from local storage
      if (!token) {
        alert('Unauthorized: No token found');
        return; // Exit if there's no token
      }

      try {
        const response = await axios.post(`http://localhost:8000/api/users/${this.userId}/assign-permission`, {
          id_permission: this.selectedPermission.id_permission // Pass the permission ID
        }, {
          headers: {
            Authorization: `Bearer ${token}` // Include the token in the Authorization header
          }
        });
        this.fetchPermissions(); // Refresh the permissions list
        this.closeAssignPermissionModal(); // Close the modal
        alert(response.data.message); // Show success message
      } catch (error) {
        console.error('Error assigning permission:', error);
        alert('Failed to assign permission.');
      }
    },
    deletePermission(id_permission) {
      const token = localStorage.getItem('authToken');
      if (!token) {
        alert('Unauthorized: No token found');
        return;
      }

      axios.delete(`http://localhost:8000/api/permissions/${id_permission}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        this.fetchPermissions();
        alert('Permission deleted successfully!');
      })
      .catch(error => {
        console.error('Error deleting permission:', error);
        alert('Failed to delete permission.');
      });
    }
  },
  mounted() {
    this.fetchPermissions();
  },
};
</script>

<style scoped>
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
}
</style>
