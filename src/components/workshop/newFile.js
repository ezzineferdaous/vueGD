import axios from 'axios';

export default (await import('vue')).defineComponent({
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
const response = await axios.get('http://localhost:8000/api/document');
this.documents = response.data;
} catch (error) {
console.error('Error fetching documents:', error);
}
},
showAddDocumentModal() {
this.showModal = true;
this.resetForm(); // Make sure to reset form for a new document
},
closeModal() {
this.showModal = false;
this.resetForm();
},
async addOrUpdateDocument() {
try {
const formData = new FormData();
formData.append('title', this.newDocument.title);
formData.append('content', this.newDocument.content);
formData.append('format', this.newDocument.format);

if (this.selectedFile) {
formData.append('file', this.selectedFile);
}

if (this.isEditing) {
// Update the existing document
const response = await axios.post('http://localhost:8000/api/document', formData, {
headers: {
'Content-Type': 'multipart/form-data',
}
});
console.log(response.data); // Ensure file_path is part of the response
this.documents.push(response.data); // Add document to the table

const index = this.documents.findIndex(doc => doc.id === this.editingDocumentId);
if (index !== -1) {
this.documents.splice(index, 1, response.data);
}
alert('Document updated successfully');
} else {
// Create a new document
const response = await axios.post('http://localhost:8000/api/document', formData, {
headers: {
'Content-Type': 'multipart/form-data',
},
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
},
});
