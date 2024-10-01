<template>
    <div id="mag">
    <div class="container mt-4">
      <h2 class="mb-4">Profile Information</h2>
      <form @submit.prevent="submitForm" class="mb-5" >
        <div class="row mb-3 ">
          
          <div class="col-md-6">
            <label for="name" class="form-label">Name:</label>
            <input type="text" class="form-control" v-model="profile.nom" id="name" />
          </div>
          <div class="col-md-6">
            <label for="prenom" class="form-label">Prenom:</label>
            <input type="text" class="form-control" v-model="profile.prenom" id="prenom" />
          </div>
        </div>
       
        <div class="row mb-3">
          <div class="col-md-6">
        <label for="email" class="form-label">Email:</label>
        <input type="email" class="form-control" v-model="profile.email" id="email" disabled/>
      </div>
          <div class="col-md-6">
            <label for="date_naissance" class="form-label">Date of Birth:</label>
            <input type="date" class="form-control" v-model="profile.date_naissance" id="date_naissance" />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-md-6">
            <label for="numero" class="form-label">Numero:</label>
            <input type="text" class="form-control" v-model="profile.tel" id="numero" />
          </div>
          <div class="col-md-6">
            <label for="password" class="form-label">Password:</label>
            <input type="password" class="form-control" v-model="profile.password" id="password" />
          </div>
              
        </div>
        

        <button type="submit" class="btn btn-warning w-100 mb-5">update</button>
      </form>
  
       <!-- New Table for Reservations -->
       <h1 id="title"><u>Reservations</u></h1>
      <table class="table table-bordered table-striped">
        <thead class="table-dark">
          <tr>
            <th>ID Reservation</th>
           
            <th>City</th>
            <th>Destination</th>
            <th>Date Reserved</th>
            <th>Price</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in res" :key="r.id">
            <td>{{r.id}}</td>
           
            <td>{{r.vole.ville}}</td>
            <td>{{r.vole.destination.nom}}</td>
            <td>{{ r.Date_res }}</td>
            <td>{{ r.vole.prix }}</td>
            <td>
              <a class="icon-link">
                <router-link :to="{ name: 'Gallry', params: { id: r.vole_id } }">
                <i class="fa-solid fa-circle-info icon"></i>
              </router-link>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- New Table for Comments -->
      <h1 id="title"><u>Comments</u></h1>
      <table class="table table-bordered table-striped">
        <thead class="table-dark">
          <tr>
            <th>ID</th>
            <th>Destination</th>
            <th>City</th>
            <th>Date</th>
            <th>Comment</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="comment in comments" :key="comment.id">
            <td>{{ comment.id }}</td>
            <td>{{comment.vole.destination.nom}}</td>
            <td>{{comment.vole.ville}}</td>
            <td>{{comment.date_comm}}</td>
            <td>{{comment.message}}</td>
            <td>
              <a class="icon-link">
                <router-link :to="{ name: 'Gallry', params: { id: comment.vole_id } }">
                <i class="fa-solid fa-circle-info icon"></i>
              </router-link>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</div>

 <!-- Confermation Modal -->
 <div v-if="showModal" class="modal" tabindex="-1" style="display: block; background-color: rgba(0,0,0,0.5)" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Confirm Update</h5>
  
            </div>
            <div class="modal-body">
              <p>Your personal information has been modified successfully.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" @click="closeDeleteModal">OK</button>
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
        showModal : false,
        user:[],
        profile: {
          id: '',
          nom: '',
          prenom :'',
          password: '',
          email: '',
          tel: '',
          date_naissance: ''
        },
        res: [],
        comments:[],
        
      };
    },
    mounted(){
      this.isUser();
      this.fetchUser();
      this.fetchRes();
      this.fetchComments();
    },
    methods: {
      isUser(){
            const user = JSON.parse(localStorage.getItem('user'));
            this.user = user
        },
        closeDeleteModal(){
          this.showModal = false;
        },
      submitForm() {
        const utilisateurData = {
        nom: this.profile.nom,
        prenom: this.profile.prenom,
        email: this.profile.email,
        tel: this.profile.tel,
        date_naissance: this.profile.date_naissance,
      };
      // Add password only if it's filled in
  if (this.profile.password) {
    utilisateurData.password = this.profile.password;
  }
      axios.put(`http://localhost:8000/api/user/${this.user.id}`, utilisateurData)
        .then(response => {
          this.profile = response.data;
          this.profile.password ='';
          this.showModal = true;
          //this.fetchUser();
          console.log(' fetching USER Updating with Succes:', this.profile);
        })
        .catch(error => {
          console.error('There was an  on Update User error!', error);
        });
      },
      fetchUser(){
        axios.get(`http://localhost:8000/api/user/${this.user.id}`)
        .then(response => {
          this.profile = response.data;
          this.profile.password ='';
          //this.fetchUser();
          console.log(' fetching USER Updating with Succes:', this.profile);
        })
        .catch(error => {
          console.error('There was an  on Update User error!', error);
        });
      },
      fetchComments() {
      try {
        axios.get(`http://localhost:8000/api/commentaire/user/${this.user.id}`)
        .then(response=> {
            // Store the fetched data
            this.comments = response.data;
            console.log(' fetching comment with Succes:', this.comments);

      });
        
      } catch (error) {
        console.error('Error fetching comment details:', error);
      }
    },
    fetchRes() {
      try {
        axios.get(`http://localhost:8000/api/reserves/user/${this.user.id}`)
        .then(response=> {
            // Store the fetched data
            this.res = response.data;
            console.log(' fetching reservation with Succes:', this.res);

      });
        
      } catch (error) {
        console.error('Error fetching reservation details:', error);
      }
    },
    
    }
  };
  </script>
  
  
  