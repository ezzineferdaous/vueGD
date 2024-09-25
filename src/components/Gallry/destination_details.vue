<template>
     <div class="destination_banner_wrap overlay">
        <div class="destination_text text-center">
            <h3>Saintmartine Iceland</h3>
            <p>Pixel perfect design with awesome contents</p>
        </div>
    </div>
    <div class="destination_details_info">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-9">
                    <h1 style="display: none;">{{ this.voleId }}</h1>
                    <h1 style="display: none;">{{ this.user}}</h1>
                    <div 
                 class="destination_info">
                        <h3>Description of {{ voleDetails.ville }}</h3>
                        <p>{{ voleDetails.description }}</p>
                    </div>
                    <div class="col-lg-12 contact_join"  >
                        <div class="submit_btn" v-if="isAuthenticated">
                            <button class="boxed-btn4" type="submit" @click="handleReservationClick()" >Reservation</button>
                         </div>
                     </div>
                    <div class="bordered_1px"></div>


                    <div class="contact_join" v-if="isAuthenticated">
                        <h3>Comment</h3>
                        <form @submit.prevent="submitComment">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="single_input">
                                        <textarea v-model="message" cols="30" rows="10" placeholder="Message" required></textarea>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="submit_btn">
                                        <button class="boxed-btn4" type="submit">Send</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </div>
    </div>

    <!-- newletter_area_start  -->
    <div class="newletter_area overlay">
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-10">
                    <div class="row align-items-center">
                        <div class="col-lg-5">
                            <div class="newsletter_text">
                               
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="mail_form">
                                <div class="row no-gutters">
                                    <div class="col-lg-9 col-md-8">
                                       
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- newletter_area_end  -->

    <div class="popular_places_area">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="section_title text-center mb_70">
                        <h3>More Places</h3>
                    </div>
                </div>
            </div>
            <div class="row">
            <div class="col-lg-4 col-md-6" v-for="vole in voles.slice(0, 3)" :key="vole.id">
    <div class="single_place">
      <div class="thumb">
        <img :src="`http://localhost:8000/images/${vole.image}`" alt="" v-if="vole.image" />
        <a href="#" class="prise">{{ vole.prix }}$</a>
      </div>
      <div class="place_info">
        <a :href="`/Gallry/${vole.id}`"><h3>{{ vole.ville }}</h3></a>
        <p>{{ vole.description }}</p>
        <div class="rating_days d-flex justify-content-between">
          <span class="d-flex justify-content-center align-items-center">
            <i class="fa fa-star" v-for="n in 5" :key="n"></i>
            <a href="#">(20 Review)</a>
          </span>
          <div class="days">
            <i class="fa fa-clock-o"></i>
            <a href="#">{{ vole.duree }} Days</a>
          </div>
        </div>
      </div>
    </div>
            </div>
</div>


                
            </div>
        </div>



    <div v-if="showResModal" class="modal" style="display: block; background-color: rgba(0,0,0,0.5)">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <form @submit.prevent="submitReservation">
                <h5>Do you really want to make a reservation for this trip?</h5>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="closeResModal">Cancel</button>
                <button type="submit" class="btn btn-primary">Yes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Sign-in prompt modal for non-authenticated users -->
<div v-if="showSigninModal" class="modal" style="display: block; background-color: rgba(0,0,0,0.5)">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <h5>You need to sign in to make a reservation.</h5>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeSigninModal">Cancel</button>
          <button type="button" class="btn btn-primary" @click="redirectToLogin">Sign In</button>
        </div>
      </div>
    </div>
  </div>
</div>

</template>



<script>
import axios from 'axios';
export default{
    data() {
    return {
      voleId: null,
      voleDetails: [],
      showResModal: false,   // Modal for reservation confirmation
      showSigninModal: false, // Modal for sign-in prompt
      user:[],
      message: '',
      voles: [], // Array to hold the voles data
    }
    },
    mounted() {
    this.voleId = this.$route.params.id; // Get the ID from the route parameters
    // Fetch the details for the specific vole using this.voleId
    this.fetchVoleDetails();
    this.isUser();
    this.fetchVoles(); // Fetch the voles when the component is mounted
  },computed: {
    // Check if user is authenticated
    isAuthenticated() {
        //const user = JSON.parse(localStorage.getItem('user'));
      //return user && user.token; // If there's a user and token, user is authenticated
      return this.user != null && this.user.role_id == 2;
    },
   
  },
    methods:{
        isUser(){
            const user = JSON.parse(localStorage.getItem('user'));
            this.user = user
        },
     fetchVoleDetails() {
      try {
        axios.get(`http://localhost:8000/api/voles/details/${this.voleId}`)
        .then(response=> {
            // Store the fetched data
            this.voleDetails = response.data;
            console.log(' fetching vole details with Succes:', this.voleDetails);

      });
        
      } catch (error) {
        console.error('Error fetching vole details:', error);
      }
    },
    handleReservationClick() {
      if (this.userId != 0) {
        this.showResModal = true;  // Show reservation modal if authenticated
      } else {
        this.showSigninModal = true;  // Show sign-in modal if not authenticated
      }
    },
    closeResModal() {
      this.showResModal = false;  // Close reservation modal
    },
    closeSigninModal() {
      this.showSigninModal = false;  // Close sign-in prompt modal
    },
    redirectToLogin() {
      this.closeSigninModal();
      this.$router.push({ name: 'login' });  // Redirect to login page
    },
    submitReservation() {
        const data ={
            utilisateur_id : this.user.id,
            vole_id : this.voleId,
            Date_res : new Date().toISOString().slice(0, 10), // Current date in YYYY-MM-DD format
        };
        try {
        // Send reservation data to API
       axios.post('http://localhost:8000/api/reserves', data)
        .then(response => {
            console.log('Reservation added with Succes:', response.data);
            this.closeResModal();
        });
          
      } catch (error) {
        console.error('Error Reservation added :', error);
      }
    },
    submitComment(){
        const DataComm = {
            message : this.message,
            utilisateur_id : this.user.id,
            vole_id : this.voleId,
            date_comm : new Date().toISOString().slice(0, 10), // Current date in YYYY-MM-DD format
        };
        axios.post('http://localhost:8000/api/commentaire', DataComm)
      .then(response => {
        // Handle successful response
        console.log('Comment added:', response.data);
        this.message = ''; // Clear the textarea
      })
      .catch(error => {
        console.error('Error adding comment:', error);
      });
    },
    fetchVoles() {
    axios.get('http://localhost:8000/api/voles') // Adjust the URL as needed
      .then(response => {
        this.voles = response.data; // Store the fetched voles
      })
      .catch(error => {
        console.error('Error fetching voles:', error);
      });
  },
}
    
}
</script>