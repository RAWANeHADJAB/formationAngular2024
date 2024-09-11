import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenericTableComponent } from './generic-table.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  template: `<app-generic-table [columns]="columns" [data]="data" [tableSize]="tableSize"></app-generic-table>`
})
class TestHostComponent {
  columns = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Name' }
  ];
  data = [
    { id: 1, name: 'ali' },
    { id: 2, name: 'malak' },
    { id: 3, name: 'amani' }
  ];
  tableSize = 2;
}

describe('GenericTableComponent', () => {
  let component: GenericTableComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, GenericTableComponent],
      declarations: [TestHostComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.debugElement.query(By.directive(GenericTableComponent)).componentInstance;
    fixture.detectChanges();
  });

  it('should display data in the table', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(2); 
    expect(rows[0].nativeElement.textContent).toContain('ali');
    expect(rows[1].nativeElement.textContent).toContain('malak');
  });

  it('should render column headers correctly', () => {
    const headers = fixture.debugElement.queryAll(By.css('thead th'));
    expect(headers.length).toBe(2);
    expect(headers[0].nativeElement.textContent).toContain('ID');
    expect(headers[1].nativeElement.textContent).toContain('Name');
  });

  it('should sort data by column', () => {
    component.sortData('name');
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows[0].nativeElement.textContent).toContain('ali');
    expect(rows[1].nativeElement.textContent).toContain('amani');
  });

  it('should paginate data correctly', () => {
    component.goToPage(2);
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(1); // Only one item should be displayed on the second page
    expect(rows[0].nativeElement.textContent).toContain('amani');
  });

  it('should disable previous button on the first page', () => {
    const prevButton = fixture.debugElement.query(By.css('button.Previous'));
    expect(prevButton.nativeElement.disabled).toBe(true);
  });

  it('should disable next button on the last page', () => {
    component.goToPage(2);
    fixture.detectChanges();

    const nextButton = fixture.debugElement.query(By.css('button.Next'));
    expect(nextButton.nativeElement.disabled).toBe(true);
  });

  it('should enable next button when there is more data', () => {
    component.goToPage(1);
    fixture.detectChanges();

    const nextButton = fixture.debugElement.query(By.css('button.Next'));
    expect(nextButton.nativeElement.disabled).toBe(false);
  });
});
