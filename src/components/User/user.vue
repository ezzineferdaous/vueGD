<template >
  <div style="margin-top: 140px;">
  <div class="container mt-4">
    <h1 id="title"><u>Utilisateur</u></h1>
    
    <div class="container mt-3">
      <button type="button" class="btn btn-primary" id="button" @click="openAddModal">
        Ajouter
      </button>
      
    </div>

    <!-- Table -->
    <table class="table table-bordered">
      <thead class="table-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nom</th>
          <th scope="col">Prenom</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
          <th scope="col">Role</th>
          <th scope="col">Numero</th>
          <th scope="col">Date Naissance</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="utilisateur in utilisateurs" :key="utilisateur.id">
          <td>{{ utilisateur.id }}</td>
          <td>{{ utilisateur.nom }}</td>
          <td>{{ utilisateur.prenom }}</td>
          <td>{{ utilisateur.email }}</td>
          <td>********</td>
          <!-- In your table -->
          <td>{{ getRoleName(utilisateur.role_id) }}</td>
          <td>{{ utilisateur.tel }}</td>
          <td>{{ utilisateur.date_naissance }}</td>
          <td>
            <!-- Update Button -->
            <a @click="openUpdateModal(utilisateur)"> <i class="fa fa-pencil" id="pencili"></i></a>
            <!-- Delete Button -->
            <a @click="openDeleteModal(utilisateur.id)"> <i class="fa fa-trash" id="trashh"></i></a>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Add/Update Modal -->
    <div v-if="showModal" class="modal show" tabindex="-1" style="display: block; background-color: rgba(0,0,0,0.5)" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <!-- Form -->
            <form @submit.prevent="submitForm">
              <h5 class="modal-title" id="title">{{ isEdit ? 'Update Utilisateur' : 'Add Utilisateur' }}</h5>
              <div class="mb-3">
                <label for="nom" class="form-label">Nom</label>
                <input type="text" class="form-control" v-model="utilisateur.nom" placeholder="Enter Nom" required>
              </div>
              <div class="mb-3">
                <label for="nom" class="form-label">Prenom</label>
                <input type="text" class="form-control" v-model="utilisateur.prenom" placeholder="Enter Prenom" required>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" v-model="utilisateur.email" placeholder="Enter Email" required>
              </div>
              <div class="mb-3" v-if="!isEdit">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" v-model="utilisateur.password" placeholder="Enter Password" required>
              </div>
              <div class="mb-3 form-group">
                <label for="exampleFormControlSelect1" class="form-label">Role</label>
                <select class="form-control" id="exampleFormControlSelect1" v-model="utilisateur.role_id" required>
                  <option v-for="role in roles" :key="role.id" :value="role.id">{{ role.nom }}</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="tel" class="form-label">Numero</label>
                <input type="text" class="form-control" v-model="utilisateur.tel" placeholder="Enter Numero" required>
              </div>
              <div class="mb-3">
                <label for="date_naissance" class="form-label">Date Naissance</label>
                <input type="date" class="form-control" v-model="utilisateur.date_naissance" required>
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

    <!-- Delete Modal -->
    <div v-if="showDeleteModal" class="modal" tabindex="-1" style="display: block; background-color: rgba(0,0,0,0.5)" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Confirm Delete</h5>
            <button type="button" class="btn-close" @click="closeDeleteModal"></button>
          </div>
          <div class="modal-body">
            <p>Are you sure you want to delete this utilisateur?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" @click="deleteUtilisateur">Delete</button>
            <button type="button" class="btn btn-secondary" @click="closeDeleteModal">Cancel</button>
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
      showDeleteModal: false,
      isEdit: false,
      utilisateurs: [],
      roles: [],
      utilisateur: {
        nom: '',
        prenom: '',
        email: '',
        password: '',
        role_id: '',
        tel: '',
        date_naissance: '',
      },
      utilisateurIdToDelete: null,
    };
  },
  mounted() {
    this.fetchUtilisateurs();
    this.fetchRoles();
  },
  methods: {
    fetchUtilisateurs() {
      axios.get('http://localhost:8000/api/utilisateurs')
        .then(response => {
          this.utilisateurs = response.data;
        });
    },
    fetchRoles() {
      axios.get('http://localhost:8000/api/roles')
        .then(response => {
          this.roles = response.data;
        });
    },
    submitForm() {
      if (this.isEdit) {
        this.updateUtilisateur();
      } else {
        this.createUtilisateur();
      }
    },
    createUtilisateur() {
      axios.post('http://localhost:8000/api/utilisateurs', this.utilisateur)
        .then(response => {
          this.utilisateurs.push(response.data);
          this.closeModal();
        });
    },
    updateUtilisateur() {
  // Create a payload with only the fields the server expects
  const utilisateurData = {
    nom: this.utilisateur.nom,
    prenom: this.utilisateur.prenom,
    email: this.utilisateur.email,
    tel: this.utilisateur.tel,
    date_naissance: this.utilisateur.date_naissance,
    password: this.utilisateur.password || undefined, // Send only if the password is set
    role_id: this.utilisateur.role_id, // Send the role ID only
  };

  axios.put(`http://localhost:8000/api/utilisateurs/${this.utilisateur.id}`, utilisateurData)
    .then(response => {
      this.utilisateur = response.data;
      this.fetchUtilisateurs();
      this.closeModal(); // Close modal if applicable
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
},
    deleteUtilisateur() {
      axios.delete(`http://localhost:8000/api/utilisateurs/${this.utilisateurIdToDelete}`)
        .then(() => {
          this.utilisateurs = this.utilisateurs.filter(u => u.id !== this.utilisateurIdToDelete);
          this.closeDeleteModal();
        });
    },
    getRoleName(roleId) {
      const role = this.roles.find(r => r.id === roleId);
      return role ? role.nom : 'Unknown';
    },
    openAddModal() {
      this.utilisateur = { nom: '', email: '', password: '', role_id: '', tel: '', date_naissance: '' };
      this.isEdit = false;
      this.showModal = true;
    },
    openUpdateModal(utilisateur) {
      this.utilisateur = { ...utilisateur, password: '' }; // No password shown on update
      this.isEdit = true;
      this.showModal = true;
    },
    openDeleteModal(id) {
      this.utilisateurIdToDelete = id;
      this.showDeleteModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    closeDeleteModal() {
      this.showDeleteModal = false;
    },
  },
};
</script>
