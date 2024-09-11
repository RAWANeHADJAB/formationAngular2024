import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmPopupComponent } from './confirm-popup.component';
import { By } from '@angular/platform-browser';


describe('ConfirmPopupComponent', () => {
  let component: ConfirmPopupComponent;
  let fixture: ComponentFixture<ConfirmPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmPopupComponent] 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should display the correct title', () => {
    component.message = 'Test message';
    fixture.detectChanges();
    
    const messageElement = fixture.debugElement.query(By.css('span')).nativeElement;
    expect(messageElement.textContent).toContain('popup!');
  });

  it('should display the correct message', () => {
    component.message = 'Test message';
    fixture.detectChanges();
    
    const messageElement = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(messageElement.textContent).toContain('Test message');
  });

  it('should display the correct button texts', () => {
    component.confirmText = 'Oui';
    component.cancelText = 'Non';
    fixture.detectChanges();
    
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons[0].nativeElement.textContent).toContain('Oui');
    expect(buttons[1].nativeElement.textContent).toContain('Non');
  });

  it('should emit confirm event on confirm button click', () => {
    spyOn(component.confirm, 'emit');
    
    const confirmButton = fixture.debugElement.queryAll(By.css('button'))[0];
    confirmButton.triggerEventHandler('click', null);
    
    expect(component.confirm.emit).toHaveBeenCalled();
  });

  it('should emit cancel event on cancel button click', () => {
    spyOn(component.cancel, 'emit');
    
    const cancelButton = fixture.debugElement.queryAll(By.css('button'))[1];
    cancelButton.triggerEventHandler('click', null);
    
    expect(component.cancel.emit).toHaveBeenCalled();
  });
});
