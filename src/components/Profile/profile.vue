<template>
    <div id="mag">
    <div class="container mt-4">
      <h2 class="mb-4">Profile Information</h2>
      <form @submit.prevent="submitForm" class="mb-5" >
        <div class="row mb-3 ">
          
          <div class="col-md-6">
            <label for="name" class="form-label">Name:</label>
            <input type="text" class="form-control" v-model="profile.name" id="name" />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-md-6">
            <label for="password" class="form-label">Password:</label>
            <input type="password" class="form-control" v-model="profile.password" id="password" />
          </div>
          <div class="col-md-6">
            <label for="password" class="form-label">Confirmation password:</label>
            <input type="password" class="form-control" v-model="profile.password" id="password" />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-md-6">
            <label for="numero" class="form-label">Numero:</label>
            <input type="text" class="form-control" v-model="profile.numero" id="numero" />
          </div>
          <div class="col-md-6">
            <label for="date_naissance" class="form-label">Date of Birth:</label>
            <input type="date" class="form-control" v-model="profile.date_naissance" id="date_naissance" />
          </div>
        </div>
        <button type="submit" class="btn btn-warning w-100 mb-5">update</button>
      </form>
  
       <!-- New Table for Reservations -->
       <h1 id="title"><u>Reservations</u></h1>
      <table class="table table-bordered table-striped">
        <thead class="table-dark">
          <tr>
            <th>ID Res</th>
            <th>User ID</th>
            <th>Volle ID</th>
            <th>Date Res</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>101</td>
            <td>501</td>
            <td>2024-09-22</td>
            <td>
              <a href="/Gallry" class="icon-link">
                <i class="fa-solid fa-circle-info icon"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>102</td>
            <td>502</td>
            <td>2024-09-28</td>
            <td>
              <a href="/Gallry" class="icon-link">
                <i class="fa-solid fa-circle-info icon"></i>
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
            <th>User </th>
            <th>Destination </th>
            <th>Comment</th>
           
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>101</td>
            <td>555</td>
          
            <td>Great destination!</td>
  
          </tr>
          <tr>
            <td>2</td>
            <td>102</td>
            <td>556</td>
          
            <td>Had a nice time!</td>
            
          </tr>
        </tbody>
      </table>
    </div>
</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        profile: {
          id: '',
          name: '',
          password: '',
          role_id: '',
          numero: '',
          date_naissance: ''
        },
        reservations: [
          { id_res: 1, id_user: 101, id_volle: 202, date_res: '2023-09-01' },
          { id_res: 2, id_user: 102, id_volle: 203, date_res: '2023-09-02' }
          // Add more reservations here
        ]
      };
    },
    methods: {
      submitForm() {
        // Handle form submission logic here
        console.log(this.profile);
      }
    }
  };
  </script>
  
  
  