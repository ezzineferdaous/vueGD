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
                                            <label for="exampleFormControlSelect1">Country</label>
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option data-display="Country">Country</option>
                                                <option value="1">Africa</option>
                                                <option value="2">canada</option>
                                                <option value="4">USA</option>
                                              </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label for="exampleFormControlSelect1">Travel type</label>
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option data-display="Travel type">Travel type</option>
                                                <option value="1">advance</option>
                                                <option value="2">advance</option>
                                                <option value="4">premium</option>
                                              </select>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                            <div class="reset_btn">
                                <button class="boxed-btn4" type="submit">Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="single_place">
                                <div class="thumb">
                                    <img src="../../../img/place/1.png" alt="">
                                    <a href="#" class="prise">$500</a>
                                </div>
                                  <div class="container mt-3">
                                    <button type="button" class="btn btn-primary" @click="showModal">
                                        Add
                                    </button>
                                   

                                  </div>

                                

                                <div class="place_info">
                                
                                    <a href="/Gallry"><h3>California</h3></a>
                                    <p>United State of America</p>
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
                                            <a href="#">5 Days</a>
                                        </div>

                                    </div>
                                </div>
                                    <!-- Icons for Update and Delete -->
                                    
                                      <!-- Update Button -->
                                    <a  @click="openUpdateModal">   <i class="fa fa-pencil"></i></a>

                                    <!-- Delete Button -->
                                    <a  @click="openDeleteModal"> <i class="fa fa-trash"></i></a>
                               </div>
                               </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="single_place">
                                        <div class="thumb">
                                            <img src="../../../img/place/2.png" alt="">
                                            <a href="#" class="prise">$500</a>
                                        </div>
                                    <div class="container mt-3">
                                            <button type="button" class="btn btn-primary" @click="showModal">
                                                Add
                                            </button>
                                        </div>
                                        <div class="place_info">
                                            <a href="/Gallry"><h3>Korola Megna</h3></a>
                                            <p>United State of America</p>
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
                                                    <a href="#">5 Days</a>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Icons for Update and Delete -->
                                    
                                      <!-- Update Button -->
                                    <a  @click="openUpdateModal">   <i class="fa fa-pencil"></i></a>

                                    <!-- Delete Button -->
                                    <a  @click="openDeleteModal"> <i class="fa fa-trash"></i></a>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="single_place">
                                        <div class="thumb">
                                            <img src="../../../img/place/3.png" alt="">
                                            <a href="#" class="prise">$500</a>
                                        </div>
                                    <div class="container mt-3">
                                            <button type="button" class="btn btn-primary" @click="showModal">
                                                Add
                                            </button>
                                        </div>
                                        <div class="place_info">
                                            <a href="/Gallry"><h3>London</h3></a>
                                            <p>United State of America</p>
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
                                                    <a href="#">5 Days</a>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="single_place">
                                        <div class="thumb">
                                            <img src="../../../img/place/4.png" alt="">
                                            <a href="#" class="prise">$500</a>
                                        </div>
                                    <div class="container mt-3">
                                            <button type="button" class="btn btn-primary" @click="showModal">
                                                Add
                                            </button>
                                        </div>
                                        <div class="place_info">
                                            <a href="/Gallry"><h3>Miami Beach</h3></a>
                                            <p>United State of America</p>
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
                                                    <a href="#">5 Days</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="single_place">
                                        <div class="thumb">
                                            <img src="../../../img/place/5.png" alt="">
                                            <a href="#" class="prise">$500</a>
                                        </div>
                                        <div class="container mt-3">
                                            <button type="button" class="btn btn-primary" @click="showModal">
                                                Add
                                            </button>
                                        </div>
                                        <div class="place_info">
                                            <a href="/Gallry"><h3>California</h3></a>
                                            <p>United State of America</p>
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
                                                    <a href="#">5 Days</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="single_place">
                                        <div class="thumb">
                                            <img src="../../../img/place/6.png" alt="">
                                            <a href="#" class="prise">$500</a>
                                        </div>
                                        <div class="container mt-3">
                                            <button type="button" class="btn btn-primary" @click="showModal">
                                                Add
                                            </button>
                                        </div>
                                        <div class="place_info">
                                            <a href="/Gallry"><h3>Saintmartine Iceland</h3></a>
                                            <p>United State of America</p>
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
                                                    <a href="#">5 Days</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="more_place_btn text-center">
                                <a class="boxed-btn4" href="#">More Places</a>
                            </div>
                        </div>
                    </div>
                    <!-- Modal -->
                    <div class="modal fade" id="addVolleModal" tabindex="-1" aria-labelledby="addVolleModalLabel" aria-hidden="true" ref="modal">
                    <div class="modal-dialog">
                        <div class="modal-content modal-white-bg">
                        <div class="modal-header">
                            <h5 class="modal-title" id="addVolleModalLabel">Add Volle</h5>
                            <button type="button" class="btn-close" @click="hideModal"></button>
                        </div>
                        <div class="modal-body">
                            <!-- Form -->
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
                            <button type="button" class="btn btn-secondary" @click="hideModal">Close</button>
                            <button type="submit" class="btn btn-primary" @click="submitForm">Save Volle</button>
                        </div>
                    </div>
                    </div>
                
                    </div>
                    </div>
                </div>
                <!-- Update Modal (Form) -->
                <div v-if="showUpdateModal" class="modal" tabindex="-1" role="dialog" style="display: block; background-color: rgba(0,0,0,0.5)">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Update Information</h5>
                        <a  class="close" @click="closeUpdateModal">
                        <span>&times;</span>
                        </a>
                    </div>
                    <div class="modal-body">
                        <!-- Form -->
                        <form @submit.prevent="submitForm">
                        <div class="mb-3">
                            <label for="ville" class="form-label">Ville</label>
                            <input
                            type="text"
                            class="form-control"
                            v-model="volle.ville"
                            placeholder="Enter Ville"
                            required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <textarea
                            class="form-control"
                            v-model="volle.description"
                            rows="3"
                            placeholder="Enter Description"
                            required
                            ></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="du" class="form-label">Du</label>
                            <input
                            type="date"
                            class="form-control"
                            v-model="volle.du"
                            required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="au" class="form-label">Au</label>
                            <input
                            type="date"
                            class="form-control"
                            v-model="volle.au"
                            required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="prix" class="form-label">Prix</label>
                            <input
                            type="number"
                            class="form-control"
                            v-model="volle.prix"
                            placeholder="Enter Prix"
                            required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="avion" class="form-label">Avion</label>
                            <input
                            type="text"
                            class="form-control"
                            v-model="volle.avion"
                            placeholder="Enter Avion"
                            required
                            />
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary">Update</button>
                            <button type="button" class="btn btn-secondary" @click="closeUpdateModal">Cancel</button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>

                <!-- Delete Modal (Confirmation) -->
                <div v-if="showDeleteModal" class="modal" tabindex="-1" role="dialog" style="display: block; background-color: rgba(0,0,0,0.5)">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Confirm Delete</h5>
                        <a  class="close" @click="closeDeleteModal">
                        <span>&times;</span>
                        </a>
                    </div>
                    <div class="modal-body">
                        <p>Are you sure you want to delete this item?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" @click="deleteItem">Supprimer</button>
                        <button type="button" class="btn btn-secondary" @click="closeDeleteModal">Annuler</button>
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
                                    <h4>Abonnez-vous à notre newsletter</h4>
                                    <p>Abonnez-vous à la newsletter 
                                    pour recevoir des offres et des informations sur de nouveaux endroits à découvrir.</p>
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
export default {
  data() {
    return {
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
    openUpdateModal() {
      this.showUpdateModal = true;
    },
    closeUpdateModal() {
      this.showUpdateModal = false;
    },
    openDeleteModal() {
      this.showDeleteModal = true;
    },
    closeDeleteModal() {
      this.showDeleteModal = false;
    },
    submitForm() {
      // Handle form submission logic
      console.log("Updated form:", this.volle);
      this.closeUpdateModal();
    },
    deleteItem() {
      // Handle delete logic
      console.log("Item deleted");
      this.closeDeleteModal();
    },
  },
};
</script>



<style scoped>


.modal {
  display: block;
  background: rgba(0, 0, 0, 0.5);
}
.modal-dialog {
  max-width: 600px;
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
  padding: 20px;
  background-color: withe ; 
}

.modal-footer {
  border-top: 1px solid black;
  padding-top: 15px;
  display: flex;
  justify-content: flex-end;
}

.btn-primary {
  background-color: #007bff;
  border-color: #000;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #000;
  transition: background-color 0.3s ease;
}

.btn-secondary:hover {
  background-color: #565e64;
}

.form-control {
    border-radius: 6px;
    padding: 7px;
    border: 1px solid #2e353e;
    color:black;
}

.modal-content {
  border-radius: 8px;
}
.modal-title{
    color : red;
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