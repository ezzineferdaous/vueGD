<template>
 <div class="container mt-4">
    <!-- Ajouter Button -->
    <button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#addVolleModal">
      Ajouter
    </button>

    <!-- Table -->
    <table class="table table-bordered">
      <thead class="table-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
          <th scope="col">Role</th>
          <th scope="col">Numero</th>
          <th scope="col">Date Naissance</th>
          <th scope="col">Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John Doe</td>
          <td>john.doe@example.com</td>
          <td>********</td>
          <td>
            <select class="form-select">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </td>
          <td>+1234567890</td>
          <td>1990-01-01</td>
          <td>
            <button class="btn btn-sm btn-warning">
              <i class="fa-solid fa-pen"></i> Update
            </button>
            <button class="btn btn-sm btn-danger">
              <i class="fa-solid fa-trash"></i> Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Modal for "Ajouter" Button -->
  <div class="modal fade" id="addVolleModal" tabindex="-1" aria-labelledby="addVolleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content modal-white-bg">
        <div class="modal-header">
          <h5 class="modal-title" id="addVolleModalLabel">Add Volle</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- Form inside modal -->
          <form id="volleForm">
            <div class="mb-3">
              <label for="ville" class="form-label">Ville</label>
              <input type="text" class="form-control" id="ville" placeholder="Enter Ville" required>
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">Description</label>
              <textarea class="form-control" id="description" rows="3" placeholder="Enter Description" required></textarea>
            </div>
            <div class="mb-3">
              <label for="du" class="form-label">Du</label>
              <input type="date" class="form-control" id="du" required>
            </div>
            <div class="mb-3">
              <label for="au" class="form-label">Au</label>
              <input type="date" class="form-control" id="au" required>
            </div>
            <div class="mb-3">
              <label for="prix" class="form-label">Prix</label>
              <input type="number" class="form-control" id="prix" placeholder="Enter Prix" required>
            </div>
            <div class="mb-3">
              <label for="avion" class="form-label">Avion</label>
              <input type="text" class="form-control" id="avion" placeholder="Enter Avion" required>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary" form="volleForm">Save Volle</button>
        </div>
      </div>
    </div>
  </div>

</template>
