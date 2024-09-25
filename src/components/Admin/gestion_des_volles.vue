
<template>
  <div class="container mt-5">
    <!-- First Table -->
    <h1 id="title"><u>En coure</u></h1>
    <table class="table table-bordered table-striped">
    <thead class="table-dark">
        <tr>
            <th>NumVole</th>
            <th>Destination</th> 
            <th>Ville</th>
            <th>Date Debut</th>
            <th>Date Fin</th>
            <th>Details</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="vole in inProgressVoles" :key="vole.id">
            <td>{{ vole.id }}</td> <!-- Replace with the actual property name -->
            <td>{{ vole.destination.nom }}</td> 
            <td>{{ vole.ville }}</td> <!-- Replace with the actual property name -->
            <td>{{ vole.du }}</td> <!-- Replace with the actual property name -->
            <td>{{ vole.au }}</td> <!-- Replace with the actual property name -->
            <td>
                <a :href="`/Gallry/${vole.id}`" class="icon-link">
                    <i class="fa-solid fa-circle-info icon"></i>
                </a>
            </td>
        </tr>
       
    </tbody>
</table>


    <!-- Second Table -->
    <h1 id="title"><u>En attente</u></h1>
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
        <tr v-for="vole in inAttVoles" :key="vole.id">
            <td>{{ vole.id }}</td> <!-- Replace with the actual property name -->
            <td>{{ vole.destination.nom }}</td> 
            <td>{{ vole.ville }}</td> <!-- Replace with the actual property name -->
            <td>{{ vole.du }}</td> <!-- Replace with the actual property name -->
            <td>{{ vole.au }}</td> <!-- Replace with the actual property name -->
            <td>
                <a :href="`/Gallry/${vole.id}`" class="icon-link">
                    <i class="fa-solid fa-circle-info icon"></i>
                </a>
            </td>
        </tr>
      </tbody>
    </table>

    <!-- New Table for id, user_id, destination_id, évaluation, comment -->
    <h1 id="title"><u>Commentaires</u></h1>
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
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      showUpdateModal: false,
      inProgressVoles: [], // To store the voles fetched from the API
      inAttVoles : [] ,
      comm : [] 
    };
  },
  methods: {
    fetchInProgressVoles() {
            try {
              axios.get('http://localhost:8000/api/voles/inprogress')
              .then(response => {
                  this.inProgressVoles = response.data;
                }) // Adjust the API endpoint
               
            } catch (error) {
                console.error("Error fetching in-progress voles:", error);
            }
        },
        fetchInAttVoles() {
            try {
              axios.get('http://localhost:8000/api/voles/inatt')
              .then(response => {
                  this.inAttVoles = response.data;
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
