import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GenericTable';

  tableColumns = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Name' },
    { field: 'age', header: 'Age' }
  ];
  
  tableData = [
    { id: 1, name: 'adem', age: 28 },
    { id: 2, name: 'sana', age: 32 },
    { id: 3, name: 'malak', age: 24 },
    { id: 4, name: 'amani', age: 27 },
    { id: 5, name: 'walid', age: 25 },
    { id: 6, name: 'ali', age: 44 },
    { id: 7, name: 'rawan', age: 22 },
    { id: 8, name: 'sana', age: 22 },
    { id: 9, name: 'anis', age: 24 },
    { id: 10, name: 'amani', age: 17 },
    { id: 11, name: 'imane', age: 25 },
    { id: 12, name: 'ali', age: 14 },
  ];
  //------------------------------------------------------------------------------------------------------
  handleConfirm() {
    console.log('Action confirmée');
  }
  
  handleCancel() {
    console.log('Action annulée');
  }
  //----------------------------------------------------------------------------

  formFields = [
    { name: 'firstName', label: 'First Name', type: 'text', required: true },
    { name: 'lastName', label: 'Last Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
  ];

  handleFormSubmit(formData: any) {
    console.log('Form Submitted', formData);
  }

  handleFormCancel() {
    console.log('Form Canceled');
  }
}

