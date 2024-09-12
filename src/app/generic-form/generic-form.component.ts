import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-generic-form',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './generic-form.component.html',
  styleUrl: './generic-form.component.css'
})
export class GenericFormComponent {
  @Input() fields: { name: string, label: string, type: string, required: boolean }[] = [];
  @Output() formSubmit = new EventEmitter<any>();
  @Output() formCancel = new EventEmitter<void>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
   }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    let formControls:any = {};
    this.fields.forEach(field => {
      formControls[field.name] = [null, field.required ? Validators.required : []];
    });
    this.form = this.fb.group(formControls);
  }

  submitForm() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    }
  }

  cancelForm() {
    this.formCancel.emit();
  }
}
