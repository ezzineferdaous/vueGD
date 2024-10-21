<template>
  <div class="container mt-5">
    <!-- Permissions Table -->
    <h1 id="title"><u>Permissions</u></h1>
    <table class="table table-bordered table-striped">
      <thead class="table-dark">
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Password</th>
          <th>Role ID</th>
          <th>Telephone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in permissions" :key="user.id">
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.password }}</td>
          <td>{{ user.role_id }}</td>
          <td>{{ user.tel }}</td>
          <td>
            <button class="btn btn-success btn-sm me-2" @click="assignRole(user)">
              Assign
            </button>
            <button class="btn btn-danger btn-sm" @click="revokeRole(user)">
              Revoke
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Role Modal (Optional: If you still need it) -->
    <div
      v-if="showModal"
      class="modal show"
      tabindex="-1"
      style="display: block; background-color: rgba(0,0,0,0.5); font-size: 14px;"
      role="dialog"
    >
      <div class="modal-dialog">
        <div
          class="modal-content"
          style="padding: 0;"
        >
          <div class="modal-body">
            <h5 class="modal-title mb-5 mt-3">Clients</h5>
            <div class="mb-3">
              <div class="mt-4">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Date Reservation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="client in selectedReservation.reservations"
                      :key="client.id"
                    >
                      <td>{{ client.nom }}</td>
                      <td>{{ client.prenom }}</td>
                      <td>{{ client.date_reservation }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                @click="closeClientModel"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Optionally retain other modals or components as needed -->
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      permissions: [], // To store the users fetched from the API
      showModal: false,
      selectedReservation: {},
    };
  },
  methods: {
    // Fetch permissions data from the API
    fetchPermissions() {
      axios
        .get('http://localhost:8000/api/permissions') // Adjust the API endpoint
        .then((response) => {
          this.permissions = response.data;
        })
        .catch((error) => {
          console.error('Error fetching permissions:', error);
        });
    },
    // Assign role to a user
    assignRole(user) {
      // Implement the logic to assign a role
      // For example, you might send a POST request to assign a role
      axios
        .post(`http://localhost:8000/api/permissions/assign/${user.id}`)
        .then((response) => {
          // Handle success, e.g., refresh the permissions list
          this.fetchPermissions();
          alert(`Role assigned to ${user.username} successfully.`);
        })
        .catch((error) => {
          console.error('Error assigning role:', error);
          alert('Failed to assign role.');
        });
    },
    // Revoke role from a user
    revokeRole(user) {
      // Implement the logic to revoke a role
      // For example, you might send a POST or DELETE request to revoke a role
      axios
        .post(`http://localhost:8000/api/permissions/revoke/${user.id}`)
        .then((response) => {
          // Handle success, e.g., refresh the permissions list
          this.fetchPermissions();
          alert(`Role revoked from ${user.username} successfully.`);
        })
        .catch((error) => {
          console.error('Error revoking role:', error);
          alert('Failed to revoke role.');
        });
    },
    // If you need to retain modal functionality
    openClientModel(reservation) {
      this.selectedReservation = reservation;
      this.showModal = true;
    },
    closeClientModel() {
      this.showModal = false;
      this.selectedReservation = {};
    },
  },
  mounted() {
    this.fetchPermissions();
    // If you still need to fetch other data, retain or remove accordingly
    // this.fetchInProgressVoles();
    // this.fetchInAttVoles();
    // this.fetchCommentaires();
    // this.fetchArchivVoles();
  },
};
</script>

<style scoped>
.modal {
  background: rgba(0, 0, 0, 0.5);
}
.modal-content {
  border-radius: 8px;
  background-color: #fff;
  max-width: 600px;
  margin: auto;
  padding: 14px 66px;
  border-top-left-radius: 26px;
  margin-top: 196px;
  border-top-right-radius: 196px;
}
.modal-footer :hover {
  background-color: #fabc3f;
}
.modal-footer {
  display: flex;
  justify-content: flex-end;
}
#title {
  color: dodgerblue;
}
.icon-link {
  text-decoration: none;
}
.icon {
  font-size: 24px; /* Adjust size if needed */
  color: dodgerblue; /* Adjust color if needed */
}
</style>
