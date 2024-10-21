<template>
  <div class="container my-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2 class="text-center">Documents Table</h2>
      <button class="btn btn-primary" @click="showAddDocumentModal">Add Document</button>
    </div>
    <input
      type="file"
      ref="fileInput"
      @change="handleFileUpload"
      style="display: none;"
    />

    <table class="table table-bordered table-striped">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Content</th>
          <th scope="col">Category</th>
          <th scope="col">User</th>
          <th scope="col">Format</th>
          <th scope="col">File Path</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(document, index) in documents" :key="document.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ document.title }}</td>
          <td>{{ document.content }}</td>
          <td>{{ document.category ? document.category.name : 'N/A' }}</td>
          <td>{{ document.user ? document.user.name : 'N/A' }}</td>
          <td>
            <select v-model="document.format" class="form-control">
              <option value="PDF">PDF</option>
              <option value="Excel">Excel</option>
              <option value="Word">Word</option>
            </select>
          </td>
          <td>{{ document.file_path }}</td>
          <td>
            <i class="fa fa-eye text-info mx-2" @click="viewDocument(document.id)" style="cursor: pointer;"></i>
            <i class="fa fa-edit text-warning mx-2" @click="editDocument(document.id)" style="cursor: pointer;"></i>
            <i class="fa fa-trash text-danger mx-2" @click="deleteDocument(document.id)" style="cursor: pointer;"></i>
            <i class="fa fa-download text-success mx-2" @click="downloadDocument(document.file_path)" style="cursor: pointer;"></i>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal for Adding Document -->
    <div v-if="showModal" class="modal fade show" tabindex="-1" style="display: block; background: rgba(0,0,0,0.5);">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ isEditing ? 'Edit Document' : 'Add Document' }}</h5>
            <button type="button" class="close" @click="closeModal">&times;</button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addOrUpdateDocument">
              <div class="form-group">
                <label for="title">Title</label>
                <input type="text" id="title" v-model="newDocument.title" class="form-control" required />
              </div>
              <div class="form-group">
                <label for="content">Content</label>
                <textarea id="content" v-model="newDocument.content" class="form-control" required></textarea>
              </div>
              <div class="form-group">
                <label for="format">Format</label>
                <select id="format" v-model="newDocument.format" class="form-control">
                  <option value="PDF">PDF</option>
                  <option value="Excel">Excel</option>
                  <option value="Word">Word</option>
                </select>
              </div>
              <div class="form-group">
                <label for="file_path">File</label>
                <input type="text" id="file_path" v-model="newDocument.file_path" class="form-control" readonly />
                <button type="button" @click="triggerFileInput" class="btn btn-secondary mt-2">Upload File</button>
              </div>
              <button type="submit" class="btn btn-primary">{{ isEditing ? 'Update Document' : 'Save Document' }}</button>
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
  name: 'DocumentsTable',
  data() {
    return {
      documents: [],
      showModal: false,
      newDocument: {
        title: '',
        content: '',
        format: 'PDF',
        file_path: '',
      },
      selectedFile: null,
      isEditing: false,
      editingDocumentId: null,
    };
  },
  mounted() {
    this.fetchDocuments();
  },
  methods: {
    
    async fetchDocuments() {
  try {
    const token = localStorage.getItem('authToken'); // Retrieve the token from local storage
    const response = await axios.get('http://localhost:8000/api/document', {
      headers: {
        Authorization: `Bearer ${token}` // Include the token in the Authorization header
      }
    });
    this.documents = response.data;
    console.log('Fetching documents:', this.documents);
  } catch (error) {
    console.error('Error fetching documents:', error);
    if (error.response && error.response.status === 401) {
      alert('Unauthorized access. Please log in.');
      // Optionally redirect to login page
      this.$router.push('/login'); // Adjust the path as needed
    }
  }


},

    showAddDocumentModal() {
      this.showModal = true;
      this.resetForm();
    },
    closeModal() {
      this.showModal = false;
      this.resetForm();
    },
    async addOrUpdateDocument() {
      console.log('start add document');
      try {
        const formData = new FormData();
        formData.append('title', this.newDocument.title);
        formData.append('content', this.newDocument.content);
        formData.append('format', this.newDocument.format);
        if (this.selectedFile) {
          formData.append('file', this.selectedFile);
        }
      console.log(' add format data document', formData);

        let response;
        if (this.isEditing) {
          response = await axios.put(`http://localhost:8000/api/document/${this.editingDocumentId}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });
          const index = this.documents.findIndex(doc => doc.id === this.editingDocumentId);
          if (index !== -1) {
            this.documents.splice(index, 1, response.data);
          }
          alert('Document updated successfully');
        } else {
      console.log(' start send format data document', formData);

          response = await axios.post('http://localhost:8000/api/document', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });
          this.documents.push(response.data);
          alert('Document added successfully');
        }
      } catch (error) {
        console.error('Error saving document:', error);
        alert('There was an error saving the document. Please try again.');
      } finally {
        this.closeModal();
      }
    },
    adddocument(){

    },
    async viewDocument(id) {
      try {
        const response = await axios.get(`http://localhost:8000/api/document/${id}`);
        console.log('Document details:', response.data);
        // Consider implementing a modal to show document details
      } catch (error) {
        console.error('Error viewing document:', error);
        alert('There was an error retrieving the document details. Please try again.');
      }
    },
    async editDocument(id) {
      try {
        const response = await axios.get(`http://localhost:8000/api/document/${id}`);
        this.newDocument = { ...response.data };
        this.isEditing = true;
        this.editingDocumentId = id;
        this.showModal = true;
      } catch (error) {
        console.error('Error fetching document for editing:', error);
        alert('There was an error retrieving the document for editing. Please try again.');
      }
    },
    async deleteDocument(id) {
      if (confirm('Are you sure you want to delete this document?')) {
        try {
          await axios.delete(`http://localhost:8000/api/document/${id}`);
          this.documents = this.documents.filter(document => document.id !== id);
          alert('Document deleted successfully.');
        } catch (error) {
          console.error('Error deleting document:', error);
          alert('There was an error deleting the document. Please try again.');
        }
      }
    },
    resetForm() {
      this.newDocument = {
        title: '',
        content: '',
        format: 'PDF',
        file_path: '',
      };
      this.selectedFile = null;
      this.isEditing = false;
      this.editingDocumentId = null;
    },
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0];
      this.newDocument.file_path = this.selectedFile ? this.selectedFile.name : '';
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    downloadDocument(filePath) {
      window.open(filePath, '_blank');
    },
  },
};
</script>

<style>
/* Add custom styles here */
</style>
