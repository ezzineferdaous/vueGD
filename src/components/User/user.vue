<template>
  <div style="margin-top: 140px;">
    <div class="container mt-4">
      <h1 id="title"><u>user</u></h1>

      <div class="container mt-3 d-flex justify-content-between">
        <button type="button" class="btn btn-primary" id="button" @click="openAddModal">
          Ajouter
        </button>

        
      </div>

      <!-- Table -->
      <table class="table table-bordered mt-4">
        <thead class="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nom</th>
            <th scope="col">Prenom</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Role</th>
            <th scope="col">Numero</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.tel }}</td>
            <td>{{ user.password }}</td>
            <td>{{ user.role.name }}</td>
            <td>{{ user.tel }}</td>
          
            <td>
              <!-- modifier les détails de l'user. -->
              <a @click="openUpdateModal(user)"> <i class="fa fa-pencil" id="pencili"></i></a>
              <a @click="openDeleteModal(user.id)"> <i class="fa fa-trash" id="trashh"></i></a>
            </td>
          </tr>
        </tbody>
      </table>




      <table class="table table-bordered mt-4">
        <thead class="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nom</th>
            
          </tr>
        </thead>
        <tbody>
          <tr v-for="role in roles" :key="role.id">
            <td>{{ role.id }}</td>
            <td>{{ role.name }}</td>
            
          </tr>
        </tbody>
      </table>
      <!-- Add/Update Modal -->
      <div v-if="showModal" class="modal show" tabindex="-1" style="display: block; background-color: rgba(0,0,0,0.5)" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <form @submit.prevent="submitForm">
                <h5 class="modal-title">{{ isEdit ? 'Update user' : 'Add User' }}</h5>
                <div class="mb-3">
                  <label for="nom" class="form-label">Nom</label>
                  <input type="text" class="form-control" v-model="user.nom" placeholder="Enter Nom" required>
                </div>
                <div class="mb-3">
                  <label for="prenom" class="form-label">Prenom</label>
                  <input type="text" class="form-control" v-model="user.prenom" placeholder="Enter Prenom" required>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" v-model="user.email" placeholder="Enter Email" required>
                </div>
                <div class="mb-3" v-if="!isEdit">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" class="form-control" v-model="user.password" placeholder="Enter Password" required>
                </div>
                <div class="mb-3 form-group">
                  <label for="exampleFormControlSelect1" class="form-label">Role</label>
                  <select class="form-control" id="exampleFormControlSelect1" v-model="user.role_id" required>
                    <option v-for="role in roles" :key="role.id" :value="role.id">{{ role.nom }}</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="tel" class="form-label">Numero</label>
                  <input type="text" class="form-control" v-model="user.tel" placeholder="Enter Numero" required>
                </div>
                <div class="mb-3">
                  <label for="date_naissance" class="form-label">Date Naissance</label>
                  <input type="date" class="form-control" v-model="user.date_naissance" required>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
                  <button type="submit" class="btn btn-primary">{{ isEdit ? 'Update' : 'Save' }}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- <h5 class="modal-title">{{ isEdit ? 'Update user' : 'Add User' }}</h5> -->

      <!-- Delete Modal -->
      <div v-if="showDeleteModal" class="modal" tabindex="-1" style="display: block; background-color: rgba(0,0,0,0.5)" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Confirm Delete</h5>
              <button type="button" class="btn-close" @click="closeDeleteModal"></button>
            </div>
            <div class="modal-body">
              <p>Are you sure you want to delete this user?</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" @click="deleteUtilisateur">Delete</button>
              <button type="button" class="btn btn-secondary" @click="closeDeleteModal">Cancel</button>
            </div>
          </div>
        </div>
      </div>

       <!-- Role Modal -->
       <div v-if="showRoleModal" class="modal show" tabindex="-1" style="display: block; background-color: rgba(0,0,0,0.5)" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <form @submit.prevent="submitFormRole">
                <h5 class="modal-title">Role</h5>
                <div class="mb-3">
                  <div style="display: flex;flex-wrap: wrap;">
                  <input type="text" class="form-control" style="width: 80%;" v-model="role_nom" placeholder="Enter Role" required>
                  <i @click="RoleAdd" class="fa fa-plus ml-5 mt-2" id="plus"></i>
                </div>
                <div class="mt-4">
                    <table class="table table-hover">
  <thead>
    <tr >
      <th scope="col">ID</th>
      <th scope="col">Role</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="role in roles" :key="role.id">
      <td>{{ role.id }}</td>
          <td>{{ role.nom }}</td>
      <td><a @click="deleteRole(role.id)" id="trash">
              <i class="fa fa-trash"></i>
            </a></td>
    </tr>
    
  </tbody>
</table>
</div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" @click="closeRoleModal">Close</button>
                </div>
              </form>
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
      showModal: false,
      showRoleModal: false,
      showDeleteModal: false,
      isEdit: false,
      user: [],
      roles: [],
      user: {
        nom: '',
        prenom: '',
        email: '',
        password: '',
        role_id: '',
        tel: '',
        date_naissance: '',
      },
     
      filtereduser: [],
      role_nom:'',
      userIdToDelete: null,
      selectedRole: '', // New state for filtering by role
    };
  },
  mounted() {
    this.fetchuser();
    this.fetchRoles();
  },
  computed: {
    // filtrer dynamiquement la liste des user 
    filtereduser() {

      if (this.selectedRole) {
        return this.user.filter(user => {
          const roleName = this.getRoleName(user.role_id);
          return roleName && roleName.toLowerCase() === this.selectedRole.toLowerCase();
        });
      }
      return this.user;
    },
  },
  methods: {
    async fetchuser() {
  try {
    console.log('start fetch user')
  localStorage.setItem('user', JSON.stringify(user));
console.log('User stored in localStorage:', localStorage.getItem('user'));
    const response = await axios.get('http://localhost:8000/api/user', {
      headers: {
        Authorization: `Bearer ${token}` // Include the token in the Authorization header
      }
    });
  console.log('fetch user in table users')

    this.users = response.data;
    console.log('Fetching users:', this.users);
  } catch (error) {
    console.error('Error fetching users:', error);
    if (error.response && error.response.status === 401) {
      alert('Unauthorized access. Please log in.');
      // Optionally redirect to login page
      this.$router.push('/login'); // Adjust the path as needed
    }
  }


},
async fetchRoles() {
  console.log('start fetch role')
      const token = localStorage.getItem('authToken'); // Retrieve the token from local storage
    const response = await axios.get('http://localhost:8000/api/roles', {
      headers: {
        Authorization: `Bearer ${token}` // Include the token in the Authorization header
      }
    });
    console.log(' fetching role')

    this.roles = response.data;
    console.log(' end fetching role',this.roles)
      // axios.get('http://localhost:8000/api/roles')
      //   .then(response => {
          
          
      //   });

    },
    submitForm() {
      if (this.isEdit) {
        this.updateUtilisateur();
      } else {
        this.createuser();
      }
    },
    createuser() {
      axios.post('http://localhost:8000/api/user', this.user)
        .then(response => {
          this.user.push(response.data);
          this.closeModal();
        });
    },
    RoleAdd() {
      axios.post('http://localhost:8000/api/roles', {
      nom: this.role_nom // Wrap it as an object with key 'nom'
    })
        .then(response => {
          this.roles.push(response.data);
          this.fetchRoles();
        })
        .catch(error => {
      console.error('Error adding role:', error);
    });
    },
    updateuser() {
      const userData = {
        nom: this.user.nom,
        prenom: this.user.prenom,
        email: this.user.email,
        tel: this.user.tel,
        date_naissance: this.user.date_naissance,
        password: this.user.password || undefined,
        role_id: this.user.role_id,
      };

      axios.put(`http://localhost:8000/api/user/${this.user.id}`, userData)
        .then(response => {
          this.user = response.data;
          this.fetchduser();
          this.closeModal();
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    },
    deleteUtilisateur() {
      axios.delete(`http://localhost:8000/api/user/${this.userIdToDelete}`)
        .then(() => {
          this.user = this.user.filter(u => u.id !== this.userIdToDelete);
          this.closeDeleteModal();
        });
    },
    deleteRole(id) {
      axios
        .delete(`http://localhost:8000/api/roles/${id}`)
        .then(() => {
          this.roles = this.roles.filter(v => v.id !== id);
          this.fetchRoles();
        })
        .catch(error => {
          console.error('Error deleting volle:', error);
        });
    },
    openAddModal() {
      this.showModal = true;
      this.isEdit = false;
      this.user = {
        nom: '',
        prenom: '',
        email: '',
        password: '',
        role_id: '',
        tel: '',
        date_naissance: '',
      };
    },
    openRoleModal() {
      this.showRoleModal = true;
     role_nom = '';
    },
    closeRoleModal() {
      this.showRoleModal = false;
    },
    openUpdateModal(user) {
      this.showModal = true;
      this.isEdit = true;
      this.user = { ...user };
    },
    openDeleteModal(id) {
      this.showDeleteModal = true;
      this.userIdToDelete = id;
    },

    closeModal() {
      this.showModal = false;
    },
    closeDeleteModal() {
      this.showDeleteModal = false;
    },
    getRoleName(roleId) {
      const role = this.roles.find(r => r.id === roleId);
      return role ? role.nom : 'Unknown';
    },
    
  },
};
</script>

<style>
#plus{
  color: #e85c0d;
  cursor: pointer;
}
</style>