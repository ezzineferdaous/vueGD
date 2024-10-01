
<template>
  <div class="container mt-5">
    <!-- First Table -->
    <h1 id="title"><u>In Progress</u></h1>
    <table class="table table-bordered table-striped">
    <thead class="table-dark">
        <tr>
            <th>NumVole</th>
            <th>Destination</th> 
            <th>City</th>
            <th>From</th>
            <th>To</th>
            <th>Total Reservation</th>
            <th>Clients</th>
            <th>Details</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="reservation in inProgressVoles" :key="reservation.vole_id">
            <td>{{ reservation.vole_id }}</td> <!-- Replace with the actual property name -->
            <td>{{ reservation.destination}}</td> 
            <td>{{ reservation.vole }}</td> <!-- Replace with the actual property name -->
            <td>{{ reservation.date_du }}</td> <!-- Replace with the actual property name -->
            <td>{{ reservation.date_au }}</td> <!-- Replace with the actual property name -->
            <td>{{ reservation.total_reservations }}</td>
            <td>
                <a  class="icon-link" @click="openClientModel(reservation)">
                    <i class="fa-solid fa-circle-info icon"></i>
                </a>
            </td>
            <td>
                <a :href="`/Gallry/${reservation.vole_id}`" class="icon-link">
                    <i class="fa-solid fa-circle-info icon"></i>
                </a>
            </td>
        </tr>
       
    </tbody>
</table>


    <!-- Second Table -->
    <h1 id="title"><u>In Attent</u></h1>
    <table class="table table-bordered table-striped">
    <thead class="table-dark">
        <tr>
            <th>NumVole</th>
            <th>Destination</th> 
            <th>City</th>
            <th>From</th>
            <th>To</th>
            <th>Total Reservation</th>
            <th>Clients</th>
            <th>Details</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="reservation in inAttVoles" :key="reservation.vole_id">
            <td>{{ reservation.vole_id }}</td> <!-- Replace with the actual property name -->
            <td>{{ reservation.destination}}</td> 
            <td>{{ reservation.vole }}</td> <!-- Replace with the actual property name -->
            <td>{{ reservation.date_du }}</td> <!-- Replace with the actual property name -->
            <td>{{ reservation.date_au }}</td> <!-- Replace with the actual property name -->
            <td>{{ reservation.total_reservations }}</td>
            <td>
                <a  class="icon-link" @click="openClientModel(reservation)">
                    <i class="fa-solid fa-circle-info icon"></i>
                </a>
            </td>
            <td>
                <a :href="`/Gallry/${reservation.vole_id}`" class="icon-link">
                    <i class="fa-solid fa-circle-info icon"></i>
                </a>
            </td>
        </tr>
       
    </tbody>
</table>
<!-- third Table -->
<h1 id="title"><u>In Archiv</u></h1>
    <table class="table table-bordered table-striped">
    <thead class="table-dark">
        <tr>
            <th>NumVole</th>
            <th>Destination</th> 
            <th>City</th>
            <th>From</th>
            <th>To</th>
            <th>Total Reservation</th>
            <th>Clients</th>
            <th>Details</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="reservation in inArchivVoles" :key="reservation.vole_id">
            <td>{{ reservation.vole_id }}</td> <!-- Replace with the actual property name -->
            <td>{{ reservation.destination}}</td> 
            <td>{{ reservation.vole }}</td> <!-- Replace with the actual property name -->
            <td>{{ reservation.date_du }}</td> <!-- Replace with the actual property name -->
            <td>{{ reservation.date_au }}</td> <!-- Replace with the actual property name -->
            <td>{{ reservation.total_reservations }}</td>
            <td>
                <a  class="icon-link" @click="openClientModel(reservation)">
                    <i class="fa-solid fa-circle-info icon"></i>
                </a>
            </td>
            <td>
                <a :href="`/Gallry/${reservation.vole_id}`" class="icon-link">
                    <i class="fa-solid fa-circle-info icon"></i>
                </a>
            </td>
        </tr>
       
    </tbody>
</table>
    <!-- New Table for id, user_id, destination_id, évaluation, comment -->
    <h1 id="title"><u>Comments</u></h1>
<table class="table table-bordered table-striped">
    <thead class="table-dark">
        <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Ville</th> <!-- Updated this header -->
            <th>Comment</th>
            <th>Details</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="commentaire in comm" :key="commentaire.id">
            <td>{{ commentaire.id }}</td>
            <td>{{ commentaire.utilisateur_id }}</td>
            <td>{{ commentaire.vole.ville }}</td>
            <td>{{ commentaire.message }}</td>
            <td>
                <a :href="`/Gallry/${commentaire.vole_id}`" class="icon-link">
                    <i class="fa-solid fa-circle-info icon"></i>
                </a>
            </td>
        </tr>
    </tbody>
</table>

  </div>



   <!-- Role Modal -->
   <div v-if="showModal" class="modal show"  tabindex="-1" style="display: block; background-color: rgba(0,0,0,0.5); font-size: 14px;" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content " style="padding: 0;">
            <div class="modal-body"  >
                <h5 class="modal-title mb-5 mt-3">Clients</h5>
                <div class="mb-3" >

                <div class="mt-4" >
                    <table class="table table-striped">
  <thead>
    <tr>
      <th >First  Name</th>
      <th >Last Name</th>
      <th >Date Reservation</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="client in selectedReservation.reservations" :key="client.id">
      <td>{{ client.nom }}</td>
      <td>{{ client.prenom }}</td>
      <td>{{ client.date_reservation }}</td>
    </tr>
    
  </tbody>
</table>
</div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" @click="closeClientModel">Close</button>
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
      showUpdateModal: false,
      inProgressVoles: [], // To store the voles fetched from the API
      inAttVoles : [] ,
      inArchivVoles : [] ,
      comm : [] ,
      showModal : false,
      selectedReservation: {},
    };
  },  
  methods: {
    openClientModel(reservation){
      this.selectedReservation = reservation;
      this.showModal = true;
    },
    closeClientModel(){
      this.showModal = false;
      this.selectedReservation = {};
    },
    fetchInProgressVoles() {
            try {
              axios.get('http://localhost:8000/api/volencours')
              .then(response => {
                  this.inProgressVoles = response.data;
                }) // Adjust the API endpoint
               
            } catch (error) {
                console.error("Error fetching in-progress voles:", error);
            }
        },
        fetchInAttVoles() {
            try {
              axios.get('http://localhost:8000/api/volenattent')
              .then(response => {
                  this.inAttVoles = response.data;
                }) // Adjust the API endpoint
               
            } catch (error) {
                console.error("Error fetching in-att voles:", error);
            }
        },
        fetchArchivVoles() {
            try {
              axios.get('http://localhost:8000/api/volarchiv')
              .then(response => {
                  this.inArchivVoles = response.data;
                }) // Adjust the API endpoint
               
            } catch (error) {
                console.error("Error fetching in-progress voles:", error);
            }
        },
        fetchCommentaires() {
            try {
              axios.get('http://localhost:8000/api/commentaire')
              .then(response => {
                this.comm = response.data;
                }) // Adjust the API endpoint
               
            } catch (error) {
                console.error("Error fetching commentaire:", error);
            }
        }
},
mounted() {
  this.fetchInProgressVoles();
  this.fetchInAttVoles();
  this.fetchCommentaires();
  this.fetchArchivVoles();
}

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
  background-color: #FABC3F;
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
