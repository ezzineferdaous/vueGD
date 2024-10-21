<template>
  <div class="container my-4">
    <div class="d-flex justify-content-between align-items-center">
      <h2 class="text-center">Category Table</h2>
      <button class="btn btn-success" @click="openAddCategoryModal">+ Add Category</button>
    </div>

    <table class="table table-bordered table-striped mt-3">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Category Name</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(category, index) in categories" :key="category.id_category">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ category.name }}</td>
          <td>
            <button class="btn btn-warning btn-sm" @click="editCategory(category)">Edit</button>
            <button class="btn btn-danger btn-sm" @click="deleteCategory(category.id_category)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Add Category Modal -->
    <div v-if="showAddModal" class="modal fade show" tabindex="-1" style="display: block; background: rgba(0,0,0,0.5);">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Category</h5>
            <button type="button" class="close" @click="closeAddModal">&times;</button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addCategory">
              <div class="form-group">
                <label for="addName">Category Name</label>
                <input type="text" id="addName" v-model="newCategory.name" class="form-control" required>
              </div>
              <button type="submit" class="btn btn-primary">Add Category</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Category Modal -->
    <div v-if="showEditModal" class="modal fade show" tabindex="-1" style="display: block; background: rgba(0,0,0,0.5);">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Category</h5>
            <button type="button" class="close" @click="closeEditModal">&times;</button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateCategory">
              <div class="form-group">
                <label for="editName">Category Name</label>
                <input type="text" id="editName" v-model="currentCategory.name" class="form-control" required>
              </div>
              <button type="submit" class="btn btn-primary">Update Category</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CategoryTable',
  data() {
    return {
      categories: [],
      showAddModal: false,
      showEditModal: false,
      currentCategory: {
        id_category: null,
        name: '',
      },
      newCategory: {
        name: '',
      },
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const token = localStorage.getItem('authToken'); // Retrieve the token from local storage
        const response = await axios.get('http://localhost:8000/api/categories', {
          headers: {
            Authorization: `Bearer ${token}` // Include the token in the Authorization header
          }
        });
        this.categories = response.data;
        console.log('Fetching categories:', this.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
        if (error.response && error.response.status === 401) {
          alert('Unauthorized access. Please log in.');
          this.$router.push('/login'); // Redirect to login page
        }
      }
    },
    openAddCategoryModal() {
      this.showAddModal = true;
      this.resetAddForm();
    },
    closeAddModal() {
      this.showAddModal = false;
    },
    resetAddForm() {
      this.newCategory.name = '';
    },
    async addCategory() {
      try {
        const token = localStorage.getItem('authToken'); // Retrieve the token from local storage
        const response = await axios.post('http://localhost:8000/api/categories', {
          name: this.newCategory.name,
        }, {
          headers: {
            Authorization: `Bearer ${token}` // Include the token in the Authorization header
          }
        });
        this.categories.push(response.data);
        alert('Category added successfully.');
      } catch (error) {
        console.error('Error adding category:', error);
        alert('There was an error adding the category. Please try again.');
      } finally {
        this.closeAddModal();
      }
    },
    editCategory(category) {
      this.currentCategory = { ...category };
      this.showEditModal = true;
    },
    closeEditModal() {
      this.showEditModal = false;
    },
    async updateCategory() {
      try {
        const token = localStorage.getItem('authToken'); // Retrieve the token from local storage
        const response = await axios.put(`http://localhost:8000/api/categories/${this.currentCategory.id_category}`, {
          name: this.currentCategory.name,
        }, {
          headers: {
            Authorization: `Bearer ${token}` // Include the token in the Authorization header
          }
        });

        const index = this.categories.findIndex(category => category.id_category === this.currentCategory.id_category);
        if (index !== -1) {
          this.categories.splice(index, 1, response.data);
        }

        alert('Category updated successfully.');
      } catch (error) {
        console.error('Error updating category:', error);
        alert('There was an error updating the category. Please try again.');
      } finally {
        this.closeEditModal();
      }
    },
    async deleteCategory(id_category) {
      if (confirm('Are you sure you want to delete this category?')) {
        try {
          const token = localStorage.getItem('authToken'); // Retrieve the token from local storage
          await axios.delete(`http://localhost:8000/api/categories/${id_category}`, {
            headers: {
              Authorization: `Bearer ${token}` // Include the token in the Authorization header
            }
          });

          this.categories = this.categories.filter(category => category.id_category !== id_category);
          alert('Category deleted successfully.');
        } catch (error) {
          console.error('Error deleting category:', error);
          alert('There was an error deleting the category. Please try again.');
        }
      }
    },
  }
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
