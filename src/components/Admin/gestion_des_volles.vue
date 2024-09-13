<template>

<div class="container mt-5">
  <!-- First Table -->
  <h1 id="title"><u>En coure</u></h1>
  <table class="table table-bordered table-striped">
    <thead class="table-dark">
      <tr>
        <th>NumVole</th>
        <th>Date Debut</th>
        <th>Date Fin</th>
        <th>Nomber Total De Reservation</th>
        <th>Nomber Limite Vole</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td>12345</td>
      <td>2024-09-01</td>
      <td>2024-09-05</td>
      <td>150</td>
      <td>200</td>
      <td>
      
            <a @click="showUpdateModal = true"> <i class="fa fa-pencil" id="pencili"></i></a>

            <!-- Delete Button -->
            <a @click="showDeleteModal = true"> <i class="fa fa-trash" id="trashh"></i></a>
      </td>
      </tr>
      <tr>
        <td>67890</td>
        <td>2024-09-10</td>
        <td>2024-09-15</td>
        <td>180</td>
        <td>250</td>
        <td>
           <!-- Update Button -->
            <a @click="showUpdateModal = true"> <i class="fa fa-pencil" id="pencili"></i></a>

            <!-- Delete Button -->
            <a @click="showDeleteModal = true"> <i class="fa fa-trash" id="trashh"></i></a>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- Second Table (Same structure as the first) -->
  <h1 id="title"><u>en attente</u></h1>
  <table class="table table-bordered table-striped">
    <thead class="table-dark">
      <tr>
        <th>NumVole</th>
        <th>Date Debut</th>
        <th>Date Fin</th>
        <th>Nomber Total De Reservation</th>
        <th>Nomber Limite Vole</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>54321</td>
        <td>2024-09-20</td>
        <td>2024-09-25</td>
        <td>120</td>
        <td>220</td>
        <td>
         
            <a @click="showUpdateModal = true"> <i class="fa fa-pencil" id="pencili"></i></a>

            <!-- Delete Button -->
            <a @click="showDeleteModal = true"> <i class="fa fa-trash" id="trashh"></i></a>
        </td>
      </tr>
      <tr>
        <td>98765</td>
        <td>2024-09-30</td>
        <td>2024-10-05</td>
        <td>210</td>
        <td>300</td>
        <td>
   
          <a @click="showUpdateModal = true"> <i class="fa fa-pencil" id="pencili"></i></a>

          <!-- Delete Button -->
          <a @click="showDeleteModal = true"> <i class="fa fa-trash" id="trashh"></i></a>
        </td>
      </tr>
    </tbody>
  </table>
</div>
  <!-- Update Modal -->
    <div v-if="showUpdateModal" class="modal" tabindex="-1" style="display: block; background-color: rgba(0,0,0,0.5)" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
        
          <div class="modal-body">
            <form @submit.prevent="submitForm"> 
             <div class="modal-header">
            <h5 class="modal-title" id="title">Update Information</h5>
           
          </div>
              <div class="mb-3">
                <label for="ville" class="form-label" >Ville</label>
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
