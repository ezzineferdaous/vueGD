<template>

<div class="container mt-5">
  <!-- First Table -->
  <h3>En coure</h3>
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
      <tr>
        <td>12345</td>
        <td>2024-09-01</td>
        <td>2024-09-05</td>
        <td>150</td>
        <td>200</td>
        <td>
          <button class="btn btn-warning btn-sm">Update</button>
          <button class="btn btn-danger btn-sm">Delete</button>
        </td>
      </tr>
      <tr>
        <td>67890</td>
        <td>2024-09-10</td>
        <td>2024-09-15</td>
        <td>180</td>
        <td>250</td>
        <td>
          <button class="btn btn-warning btn-sm">Update</button>
          <button class="btn btn-danger btn-sm">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- Second Table (Same structure as the first) -->
  <h3>en attente</h3>
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
      <tr>
        <td>54321</td>
        <td>2024-09-20</td>
        <td>2024-09-25</td>
        <td>120</td>
        <td>220</td>
        <td>
          <button class="btn btn-warning btn-sm">Update</button>
          <button class="btn btn-danger btn-sm">Delete</button>
        </td>
      </tr>
      <tr>
        <td>98765</td>
        <td>2024-09-30</td>
        <td>2024-10-05</td>
        <td>210</td>
        <td>300</td>
        <td>
          <button class="btn btn-warning btn-sm">Update</button>
          <button class="btn btn-danger btn-sm">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>


</template>