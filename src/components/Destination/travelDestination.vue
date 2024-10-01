<template>
    
    <!-- bradcam_area  -->
    <div class="bradcam_area bradcam_bg_2">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="bradcam_text text-center">
                        <h3>Destinations</h3>
                        <p>Pixel perfect design with awesome contents</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--/ bradcam_area  -->

    
    <div class="popular_places_area">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="filter_result_wrap">
  <h3>Filter Result</h3>
  <div class="filter_bordered">
    <div class="filter_inner">
      <div class="row">
        <div class="col-lg-12">
          <div class="form-group">
            <label for="exampleFormControlSelect1">Destination</label>
            <select v-model="selectedDestination" class="form-control" id="exampleFormControlSelect1">
                <option value="">All Destinations</option>
                <option v-for="destination in destinations" :key="destination.id" :value="destination.id">
                    {{ destination.nom }}
                 </option>
            </select>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>

                    <br>
                    <div v-if="isAuthenticated" class="filter_result_wrap">
                        <h3>Destination</h3>
                        <div class="filter_bordered">
    <div class="filter_inner">
        <div class="row">
            <div class="col-lg-12">
              <form @submit.prevent="submitFormDest">
                    <div class="form-group">
                        <label for="destinationInput">Destination</label>
                        <div class="mb-3">
                            <input
                                id="destinationInput"
                                type="text"
                                class="form-control"
                                v-model="newDestination.nom"
                                placeholder="Enter Destination"
                                required
                            />
                        </div>
                    </div>
                    <div  class="reset_btn">
                        <button class="boxed-btn4" type="submit">ADD</button>
                    </div>
                    <div class="mt-4">
                    <table class="table table-hover">
  <thead>
    <tr >
      <th scope="col">ID</th>
      <th scope="col">Destination</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="destination in destinations" :key="destination.id">
      <td>{{ destination.id }}</td>
          <td>{{ destination.nom }}</td>
      <td><a @click="deleteDestination(destination.id)" id="trash">
              <i class="fa fa-trash"></i>
            </a></td>
    </tr>
    
  </tbody>
</table>
</div>


                </form>
            </div>
        </div>
    </div>
</div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="row">
                         <!--  button add  -->
                <div v-if="isAuthenticated" class="container mt-3 mb-3">
                    <button type="button" class="btn btn-primary" id="button" @click="showModal">
                         Add
                         </button>
                     </div>
                     <br> <br>

                     <div class="col-lg-8" style="width: 90%;">
                        <div class="row">
                            <!-- Display all voles or filtered voles -->
                            <div  v-for="volle in filteredVoles" :key="volle.id"  class="col-lg-6 col-md-6">
                                <div class="single_place">
          <div class="thumb">

            <img :src="`http://localhost:8000/images/${volle.image}`" alt="Vole Image" v-if="volle.image" /> 
            <a href="#" class="prise">{{ volle.prix }}$</a>
          </div>
          <!-- Icons for Update and Delete -->
      
            <!-- Update Button -->
            <a v-if="isAuthenticated" @click="openUpdateModal(volle)" id="pencil">
              <i class="fa fa-pencil"></i>
            </a>
            <!-- Delete Button -->
            <a v-if="isAuthenticated" @click="openDeleteModal(volle.id)" id="trash">
              <i class="fa fa-trash"></i>
            </a>
          <div class="place_info">
            <router-link :to="{ name: 'Gallry', params: { id: volle.id } }">
                <h3>{{ volle.ville }}</h3>
              </router-link>
            <p>{{ volle.description }}</p>
            <div class="rating_days d-flex justify-content-between">
              <span class="d-flex justify-content-center align-items-center">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <a href="#">(20 Review)</a>
              </span>
              <div class="days">
                <i class="fa fa-clock-o"></i>
                <a href="#">{{ volle.duree }} Days</a>
              </div>
            </div>
          </div>
        </div>
                        </div>
                     </div>
        

                        </div>
                    </div> 
                     </div>
                   


                    <!-- Modal -->
                    <div v-if="addVolleModal" class="modal" style="display: block; background-color: rgba(0,0,0,0.5)">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="registration-form">
            <form @submit.prevent="submitFormVolle">
              <div class="modal-header">
                <h4 class="modal-title">Add Volle</h4>
              </div>
              <div class="form-group">
                <select class="form-control" id="exampleFormControlSelect1" v-model="volle.destination_id">
                    <option value="">Select Destination</option>
                    <option v-for="destination in destinations" :key="destination.id" :value="destination.id">
                        {{ destination.nom }}
                    </option>
                </select>
            </div>
              <div class="form-group">
                <input type="text" class="form-control" v-model="volle.ville" placeholder="Enter Ville" required />
              </div>
              <div class="form-group">
                <textarea class="form-control" v-model="volle.description" rows="3" placeholder="Enter Description" required></textarea>
              </div>
              <div class="form-group">
                <input type="date" class="form-control" v-model="volle.du" placeholder="Du" required />
              </div>
              <div class="form-group">
                <input type="date" class="form-control" v-model="volle.au" placeholder="Au" required />
              </div>
              <div class="form-group">
                <input type="number" class="form-control" v-model="volle.prix" placeholder="Enter Prix" required />
              </div>
              <!-- Image Upload -->
              <div class="form-group">
                <input type="file" class="form-control" @change="onFileChange" />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="hideModal">Close</button>
                <button type="submit" class="btn btn-primary">Save Volle</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

               <!-- Update Modal -->
    <div v-if="showUpdateModal" class="modal" style="display: block; background-color: rgba(0,0,0,0.5)">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <form @submit.prevent="submitForm">
              <h5 class="modal-title">Update Information</h5>
              <div class="form-group">
                <select class="form-control" id="exampleFormControlSelect1" v-model="volle.destination_id">
                    <option value="">Select Destination</option>
                    <option v-for="destination in destinations" :key="destination.id" :value="destination.id">
                        {{ destination.nom }}
                    </option>
                </select>
            </div>
              <div class="form-group">
                <input type="text" class="form-control" v-model="volle.ville" placeholder="Enter Ville" required />
              </div>
              <div class="form-group">
                <textarea class="form-control" v-model="volle.description" rows="3" placeholder="Enter Description" required></textarea>
              </div>
              <div class="form-group">
                <label for=""> Date Debut</label>
                <input type="date" class="form-control" v-model="volle.du" placeholder="Du" required />
              </div>
              <div class="form-group">
                <label for=""> Date Fin</label>
                <input type="date" class="form-control" v-model="volle.au" placeholder="Au" required />
              </div>
              <div class="form-group">
                <input type="number" class="form-control" v-model="volle.prix" placeholder="Enter Prix" required />
              </div>
              <!-- Image Upload 
              <div class="form-group">
                    <input type="file" class="form-control" @change="onFileChange" />
                </div>-->
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="closeUpdateModal">Cancel</button>
                <button type="submit" class="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

                <!-- Delete Modal -->
    <div v-if="showDeleteModal" class="modal" style="display: block; background-color: rgba(0,0,0,0.5)">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <h5>Are you sure you want to delete this Vole?</h5>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" @click="deleteItem(volleToDelete)">Delete</button>
              <button type="button" class="btn btn-secondary" @click="closeDeleteModal">Cancel</button>
            </div>
          </div>
        </div>
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
        destinations: [],
        newDestination: {
        nom: ''
      },
      addVolleModal: false,
      showUpdateModal: false,
      showDeleteModal: false,
      volleToDelete: null,
      volle: {
        ville: '',
        description: '',
        du: '',
        au: '',
        prix: '',
        image: null, 
        destination_id: ''
      },
      filteredVoles: [],
      voles: [],
      selectedDestination: '',  // Variable to bind selected destination
      imageUrl: null,
      user:[],
    };
  },
  computed: {
    filteredVoles() {
      if (!this.selectedDestination) {
        // If no destination is selected, show all voles
        return this.voles;
      }
      // Otherwise, filter voles based on the selected destination
      return this.voles.filter(
        (volle) => volle.destination_id === parseInt(this.selectedDestination)
      );
    },
    // Check if user is authenticated
    isAuthenticated() {
        //const user = JSON.parse(localStorage.getItem('user'));
      //return user && user.token; // If there's a user and token, user is authenticated
      return this.user != null && this.user.role_id == 1;
    },
  },
  methods: {
    isUser(){
            const user = JSON.parse(localStorage.getItem('user'));
            this.user = user
        },
    /*handleImageUpload(event) {
        this.image = event.target.files[0];
     },*/

     /*handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.volle.image = file.name;
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target.result; // Display the image preview
        };
        reader.readAsDataURL(file);
      }
    },*/

     // Handle file input change
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.volle.image = file; // Store the file for upload
      }
    },
    fetchVoles() {
      axios
        .get('http://localhost:8000/api/voles')
        .then(response => {
          this.voles = response.data;
        })
        .catch(error => {
          console.error('Error fetching voles:', error);
        });
    },
    filterByDestination() {
      if (this.selectedDestination) {
        // Filter the 'allVoles' array based on the selected destination
        this.filteredVoles = this.voles.filter(vole => vole.destination_id === this.selectedDestination);
      } else {
        // If no destination is selected, show all voles
        this.filteredVoles = this.voles;
      }
    },
    resetFilter() {
      // Reset the selected destination and show all voles
      this.selectedDestination = '';
      this.filteredVoles = this.voles;
    },
    fetchDestinations() {
    axios.get('http://localhost:8000/api/destination')
    .then(response => {
          console.log('Destinations fetched:', response.data);  // Check the fetched data
          this.destinations = response.data;
        })
        .catch(error => {
          console.error('There was an error fetching destinations!', error);
        });
    },
    hideModal() {
      this.addVolleModal = false;
    },
    showModal() {
        this.volle = { 
      ville: '', 
      description: '', 
      du: '', 
      au: '', 
      prix: '', 
      destination_id: '' 
    }; // Clear the inputs
      this.addVolleModal = true;
    },
    submitFormDest() {
      axios.post('http://localhost:8000/api/destination', this.newDestination)
        .then(response => {
          console.log('Destination added:', response.data);
          this.newDestination.nom = ''; // Clear the input field
          this.fetchDestinations();
          // Optionally, refresh the list of destinations or handle success
        })
        .catch(error => {
          console.error('There was an error adding the destination!', error);
        });
    },
    submitFormVolleTEST() {
    /*const formData = new FormData();
    formData.append('ville', this.volle.ville);
    formData.append('description', this.volle.description);
    formData.append('du', this.volle.du);
    formData.append('au', this.volle.au);
    formData.append('prix', this.volle.prix);
    formData.append('destination_id', this.volle.destination_id);
    if (this.imageFile) {
      formData.append('image', this.imageFile);
    }*/
    const volledata = {
      ville: this.volle.ville,
      description: this.volle.description,
    du: this.volle.du,
    au: this.volle.au,
    prix: this.volle.prix,
    destination_id: this.volle.destination_id,
    image: this.volle.image // Just the image name (string)
    };
    axios.post('http://localhost:8000/api/voles', volledata)
      .then(response => {
        this.voles.push(response.data);
        this.hideModal();
      })
      .catch(error => {
        console.error('Error adding volle:', error);
      });
  },

  // Submit the form with FormData
  submitFormVolle() {
      const formData = new FormData();

      // Append the form fields
      formData.append('ville', this.volle.ville);
      formData.append('description', this.volle.description);
      formData.append('du', this.volle.du);
      formData.append('au', this.volle.au);
      formData.append('prix', this.volle.prix);
      formData.append('destination_id', this.volle.destination_id);

      // Append the image file if present
      if (this.volle.image) {
        formData.append('image', this.volle.image);
      }

      // Send the data via axios
      axios.post('http://localhost:8000/api/voles', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        console.log('Vole saved successfully!', response.data);
        this.fetchVoles();
        this.hideModal();
        // Handle success (e.g., clear form, update UI)
      })
      .catch(error => {
        console.error('There was an error saving the vole:', error);
      });
    },
    openUpdateModal(volle) {
      this.volle = { ...volle }; // Clone the vol object into the form data
      this.showUpdateModal = true;
    },
    closeUpdateModal() {
      this.showUpdateModal = false;
    },
    openDeleteModal(id) {
      this.volleToDelete = id;
      this.showDeleteModal = true;
    },
    closeDeleteModal() {
      this.showDeleteModal = false;
    },
    submitFormTEST2345() {
      const volledata = {
      ville: this.volle.ville,
      description: this.volle.description,
    du: this.volle.du,
    au: this.volle.au,
    prix: this.volle.prix,
    destination_id: this.volle.destination_id,
    image: this.volle.image // Just the image name (string)
    };

  axios.put(`http://localhost:8000/api/voles/${this.volle.id}`, volledata)
    .then(response => {
      this.volle = responsedata;
      this.fetchVoles();
      this.closeUpdateModal(); // Close modal if applicable
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
}
,
    deleteItem(id) {
      axios
        .delete(`http://localhost:8000/api/voles/${id}`)
        .then(() => {
          this.voles = this.voles.filter(v => v.id !== id);
          this.closeDeleteModal();
        })
        .catch(error => {
          console.error('Error deleting volle:', error);
        });
    },
    deleteDestination(id){
      axios
        .delete(`http://localhost:8000/api/destination/${id}`)
        .then(() => {
          this.destinations = this.destinations.filter(v => v.id !== id);
        })
        .catch(error => {
          console.error('Error deleting destination:', error);
        });
    },
    submitForm(){
      const volledata = {
      ville: this.volle.ville,
      description: this.volle.description,
    du: this.volle.du,
    au: this.volle.au,
    prix: this.volle.prix,
    destination_id: this.volle.destination_id,
    image: this.volle.image // Just the image name (string)
    };

      // Send the data via axios
      axios.put(`http://localhost:8000/api/voles/${this.volle.id}`, volledata)
      .then(response => {
        console.log('Vole update successfully!', response.data);
        this.fetchVoles();
        this.closeUpdateModal();
        // Handle success (e.g., clear form, update UI)
      })
      .catch(error => {
        console.error('There was an error updating the vole:', error);
      });
    }
  },
  mounted() {
    this.fetchVoles();
    this.fetchDestinations();
    this.isUser();
  }
};
</script>



<style scoped>


.modal {
  display: block;
  background: rgba(0, 0, 0, 0.5);
}
.modal-dialog {
  background-color: #fff;
  max-width: 600px;
  margin: auto;
  border-top-left-radius: 26px;
  border-top-right-radius: 196px;
 
}
</style>

<!-- Styling for white background -->
<style scoped>
@import 'bootstrap/dist/css/bootstrap.min.css';

/* Custom modal form style */
.modal-form-style {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.modal-white-bg {
  background-color: withe;
}
.modal-header {
  border-bottom: 1px solid #eaeaea;
 border-radius: 8px;
 background-color:withe
}

.modal-body {
  padding: 72px;
  background-color: withe ; 
}

.modal-footer {
  border-top: 1px solid white;
  padding-top: 15px;
  display: flex;
  justify-content: flex-end;
}

.btn-primary {
  background-color: #FABC3F;
  border-color: #000;
  transition: background-color 0.3s ease;
   border-radius: 9px;
   width: 100px;
   float: right;

}

.btn-primary:hover {
  background-color: #E85C0D;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #000;
  border-radius: 11px;
  transition: background-color 0.3s ease;
}

.btn-secondary:hover {
  background-color: #565e64;
}

.form-control {
    border-radius: 6px;
    padding: 7px;
    border: 1px solid #FABC3F;
    color: gray;
}

.modal-content {
  border-radius: 8px;
}

.form-label{
    color: gray; 
}
.icon{
    margin-left: 20px;
}
a i {
    margin-left: 16px;
}


</style>