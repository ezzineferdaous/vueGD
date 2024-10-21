<template>
  <div class="dashboard">
    <div class="d-flex justify-content-end">
  <!-- <a href="/workshop" class="btn btn-danger btn-sm access-btn">Access to your workshop</a> -->
</div>


    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-8">
          <div class="card small-card">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h3 class="card-title">Users</h3>
              </div>
              <p class="card-text">Number users</p>
              <a href="#" class="btn btn-primary"><i class="fa-solid fa-users"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-8">
          <div class="card small-card">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h3 class="card-title">Documents</h3>
              </div>
              <p class="card-text">Number documents.</p>
              <a href="#" class="btn btn-primary"><i class="fa-solid fa-folder-open"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Second container -->
    <div class="container mt-5 text-center">
      <h2>General Document</h2>
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="card large-card">
            <img src="../../../public/assets/img/1.jpg" class="card-img-top" alt="Image 1">
            <div class="card-body">
              <h5 class="card-title">Card Title 1</h5>
              <p class="card-text">This is a description for Card 1. You can add more details here.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card large-card">
            <img src="../../../public/assets/img/4.jpg" class="card-img-top" alt="Image 2">
            <div class="card-body">
              <h5 class="card-title">Card Title 2</h5>
              <p class="card-text">This is a description for Card 2. You can add more details here.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card large-card">
            <img src="../../../public/assets/img/3.jpg" class="card-img-top" alt="Image 3">
            <div class="card-body">
              <h5 class="card-title">Card Title 3</h5>
              <p class="card-text">This is a description for Card 3. You can add more details here.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
}
</script>

<style scoped>
.dashboard {
  padding: 20px;
}

.card {
  margin-bottom: 20px;
  margin-top: 50px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 350px;
}

.large-card {
  min-height: 300px;
}

.small-card {
  max-height: 200px;
}

.card-title {
  font-size: 2rem;
  margin-bottom: 15px;
  text-align: center;
}

.card-text {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.img-fluid {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.container.mt-5 {
  margin-top: 40px;
}

h3 {
  text-align: center;
}

/* Style for Access to Workshop button */
.access-btn {
  margin-top: -10px; /* Align vertically to the top right */
  margin-right: -10px;
  font-size: 0.9rem;
}

</style>
