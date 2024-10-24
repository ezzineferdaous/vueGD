<template>
  <div class="container my-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2 class="text-center">Documents Table</h2>
      <button class="btn btn-primary" @click="showAddDocumentModal">Add Document</button>
    </div>
    <input type="file" ref="fileInput" @change="handleFileUpload" style="display: none;" />

    <table class="table table-bordered table-striped">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Content</th>
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
          <td>{{ document.user ? document.user.name : 'N/A' }}</td>
          <td>{{ document.format }}</td>
          <td>{{ document.file_path }}</td>
          <td>
            <i class="fa fa-edit text-warning mx-2" @click="editDocument(document)" style="cursor: pointer;"></i>
            <i class="fa fa-trash text-danger mx-2" @click="deleteDocument(document.id)" style="cursor: pointer;"></i>
            <i class="fa fa-download text-success mx-2" @click="downloadDocument(document.file_path)" style="cursor: pointer;"></i>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal for Adding/Editing Document -->
    <div v-if="showModal" class="modal fade show" tabindex="-1" style="display: block; background: rgba(0,0,0,0.5);">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ isEditing ? 'Edit Document' : 'Add Document' }}</h5>
            <button type="button" class="close" @click="closeModal">&times;</button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="isEditing ? updateDocument() : addDocument()">
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
        const token = localStorage.getItem('authToken');
        const response = await axios.get('http://localhost:8000/api/document', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        this.documents = response.data;
      } catch (error) {
        console.error('Error fetching documents:', error);
        if (error.response && error.response.status === 401) {
          alert('Unauthorized access. Please log in.');
          this.$router.push('/login');
        }
      }
    },

    showAddDocumentModal() {
      this.showModal = true;
      this.resetForm(); // Reset form fields
    },
    
    closeModal() {
      this.showModal = false;
      this.resetForm();
    },

    async addDocument() {
      const token = localStorage.getItem('authToken');
      const formData = new FormData();
      formData.append('title', this.newDocument.title);
      formData.append('content', this.newDocument.content);
      formData.append('format', this.newDocument.format);

      if (this.selectedFile) {
        formData.append('file', this.selectedFile);
      }

      try {
        const response = await axios.post('http://localhost:8000/api/document', formData, {
          headers: { 
            Authorization: `Bearer ${token}`,
          },
        });
        this.documents.push(response.data);
        alert('Document added successfully');
      } catch (error) {
        console.error('Error adding document:', error);
        alert('There was an error adding the document. Please try again.');
      } finally {
        this.closeModal();
      }
    },

    async updateDocument() {
      const token = localStorage.getItem('authToken');
      const formData = new FormData();
      formData.append('title', this.newDocument.title);
      formData.append('content', this.newDocument.content);
      formData.append('format', this.newDocument.format);

      if (this.selectedFile) {
        formData.append('file', this.selectedFile);
      }

      try {
        const response = await axios.put(`http://localhost:8000/api/document/${this.editingDocumentId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
          }
        });

        const index = this.documents.findIndex(doc => doc.id === this.editingDocumentId);
        if (index !== -1) {
          this.documents.splice(index, 1, response.data);
        }

        alert('Document updated successfully.');
      } catch (error) {
        console.error('Error updating document:', error);
        alert('There was an error updating the document. Please try again.');
      } finally {
        this.closeModal();
      }
    },

    editDocument(document) {
      this.newDocument = { ...document }; // Use spread operator to clone the document
      this.editingDocumentId = document.id; // Store the ID for updating
      this.isEditing = true; // Set editing mode
      this.showModal = true; // Show the modal
    },

    async deleteDocument(id) {
      if (confirm('Are you sure you want to delete this document?')) {
        const token = localStorage.getItem('authToken');
        try {
          await axios.delete(`http://localhost:8000/api/document/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          this.documents = this.documents.filter(doc => doc.id !== id);
          alert('Document deleted successfully');
        } catch (error) {
          console.error('Error deleting document:', error);
          alert('There was an error deleting the document. Please try again.');
        }
      }
    },

    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedFile = file;
        this.newDocument.file_path = file.name; // Display the file name in the form
      }
    },

    triggerFileInput() {
      this.$refs.fileInput.click(); // Trigger the file input click
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

    downloadDocument(filePath) {
      const link = document.createElement('a');
      link.href = `http://localhost:8000/${filePath}`;
      link.download = filePath.split('/').pop(); // Use the file name for download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>

<style scoped>
.container {
  margin: 20px auto;
}

.modal {
  display: none;
}

.modal.fade.show {
  display: block;
}

.close {
  cursor: pointer;
}
</style>
