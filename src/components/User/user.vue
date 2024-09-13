<template> 
  <div class="container mt-4">
  <h1 id="title"><u>Volle</u> </h1>
    <div class="container mt-3">

   
      <button type="button" class="btn btn-primary" id="button" @click="showModal = true">
        Ajouter
      </button>
    </div>

    <!-- Table -->
    
    <table class="table table-bordered">
      <thead class="table-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
          <th scope="col">Role</th>
          <th scope="col">Numero</th>
          <th scope="col">Date Naissance</th>
          <th scope="col">Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John Doe</td>
          <td>john.doe@example.com</td>
          <td>********</td>
          <td>
            <select class="form-select">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </td>
          <td>+1234567890</td>
          <td>1990-01-01</td>
          <td>
            <!-- Update Button -->
            <a @click="showUpdateModal = true"> <i class="fa fa-pencil" id="pencili"></i></a>

            <!-- Delete Button -->
            <a @click="showDeleteModal = true"> <i class="fa fa-trash" id="trashh"></i></a>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Add Modal -->
    <div v-if="showModal" class="modal show" tabindex="-1" style="display: block; background-color: rgba(0,0,0,0.5)" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content modal-white-bg">
         
          <div class="modal-body">
            <!-- Form -->
            <form @submit.prevent="submitForm"> 
            <h5 class="modal-title" id="title">Add Volle</h5>
          
              <div class="mb-3">
                <label for="ville" class="form-label">Ville</label>
                <input type="text" class="form-control" v-model="volle.ville" placeholder="Enter Ville" required>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea class="form-control" v-model="volle.description" rows="3" placeholder="Enter Description" required></textarea>
              </div>
              <div class="mb-3">
                <label for="du" class="form-label">Du</label>
                <input type="date" class="form-control" v-model="volle.du" required>
              </div>
              <div class="mb-3">
                <label for="au" class="form-label">Au</label>
                <input type="date" class="form-control" v-model="volle.au" required>
              </div>
              <div class="mb-3">
                <label for="prix" class="form-label">Prix</label>
                <input type="number" class="form-control" v-model="volle.prix" placeholder="Enter Prix" required>
              </div>
              <div class="mb-3">
                <label for="avion" class="form-label">Avion</label>
                <input type="text" class="form-control" v-model="volle.avion" placeholder="Enter Avion" required>
              </div> 
               <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="showModal = false">Close</button>
                <button type="submit" class="btn btn-primary"  @click="submitForm">Save Volle</button>
              </div>
            </form>
          </div>
        
        </div>
      </div>
    </div>

    <!-- Update Modal -->
    <div v-if="showUpdateModal" class="modal" tabindex="-1" style="display: block; background-color: rgba(0,0,0,0.5)" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Update Information</h5>
            <button type="button" class="btn-close" @click="showUpdateModal = false"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <label for="ville" class="form-label">Ville</label>
                <input type="text" class="form-control" v-model="volle.ville" placeholder="Enter Ville" required>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea class="form-control" v-model="volle.description" rows="3" placeholder="Enter Description" required></textarea>
              </div>
              <div class="mb-3">
                <label for="du" class="form-label">Du</label>
                <input type="date" class="form-control" v-model="volle.du" required>
              </div>
              <div class="mb-3">
                <label for="au" class="form-label">Au</label>
                <input type="date" class="form-control" v-model="volle.au" required>
              </div>
              <div class="mb-3">
                <label for="prix" class="form-label">Prix</label>
                <input type="number" class="form-control" v-model="volle.prix" placeholder="Enter Prix" required>
              </div>
              <div class="mb-3">
                <label for="avion" class="form-label">Avion</label>
                <input type="text" class="form-control" v-model="volle.avion" placeholder="Enter Avion" required>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary">Update</button>
            <button type="button" class="btn btn-secondary" @click="showUpdateModal = false">Cancel</button>
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
            <button type="button" class="btn-close" @click="showDeleteModal = false"></button>
          </div>
          <div class="modal-body">
            <p>Are you sure you want to delete this item?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" @click="deleteItem">Delete</button>
            <button type="button" class="btn btn-secondary" @click="showDeleteModal = false">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      showUpdateModal: false,
      showDeleteModal: false,
      volle: {
        ville: '',
        description: '',
        du: '',
        au: '',
        prix: '',
        avion: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic
      console.log('Form data:', this.volle);
      this.showModal = false;  // Close modal after submit
      this.showUpdateModal = false;  // Also handle the update modal
    },
    deleteItem() {
      // Handle delete logic
      console.log('Item deleted');
      this.showDeleteModal = false;
    },
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
  padding: 50px 70px;
  border-top-left-radius: 26px;
  border-top-right-radius: 196px;

}
.modal-footer :hover {
background-color: #FABC3F ;
}
.modal-footer {
  display: flex;
  justify-content: flex-end;
}
.tablr-dark{
    background-color: dodgerblue;
}
 tr {
    border: 1px solid #dee2e6;
    margin-top: 36px;
}
</style>
