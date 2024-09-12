import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { GenericFormComponent } from './generic-form.component';

describe('GenericFormComponent', () => {
  let component: GenericFormComponent;
  let fixture: ComponentFixture<GenericFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericFormComponent, ReactiveFormsModule ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericFormComponent);
    component = fixture.componentInstance;
    component.fields = [
      { name: 'firstName', label: 'First Name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mark form as invalid when required fields are empty', () => {
    expect(component.form.invalid).toBeTrue();
  });

  it('should emit formSubmit when form is valid and submitted', () => {
    spyOn(component.formSubmit, 'emit');
    
    component.form.controls['firstName'].setValue('John');
    component.form.controls['email'].setValue('john@example.com');
    fixture.detectChanges();

    component.submitForm();
    
    expect(component.formSubmit.emit).toHaveBeenCalledWith({ firstName: 'John', email: 'john@example.com' });
  });

  it('should emit formCancel when cancel button is clicked', () => {
    spyOn(component.formCancel, 'emit');
    
    const cancelButton = fixture.nativeElement.querySelector('button[type="button"]');
    cancelButton.click();
    
    expect(component.formCancel.emit).toHaveBeenCalled();
  });
});
