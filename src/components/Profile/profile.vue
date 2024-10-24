<template>
  <div id="mag">
  <div class="container mt-4">
    <h2 class="mb-4">Profile Information</h2>
    <form @submit.prevent="submitForm" class="mb-5" >
      <div class="row mb-3 ">
        
        <div class="col-md-6">
          <label for="name" class="form-label">userName:</label>
          <input type="text" class="form-control" v-model="profile.nom" id="name" />
        </div>
        
      </div>
     
      <div class="row mb-3">
        <div class="col-md-6">
      <label for="email" class="form-label">Email:</label>
      <input type="email" class="form-control" v-model="profile.email" id="email" disabled/>
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
      const userData = {
      nom: this.profile.nom,
      prenom: this.profile.prenom,
      email: this.profile.email,
      tel: this.profile.tel,
      date_naissance: this.profile.date_naissance,
    };
    // Add password only if it's filled in
if (this.profile.password) {
  userData.password = this.profile.password;
}
    axios.put(`http://localhost:8000/api/user/${this.user.id}`, userData)
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


