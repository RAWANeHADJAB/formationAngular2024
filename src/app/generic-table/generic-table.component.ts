import { Component , Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generic-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.css'
})
export class GenericTableComponent {
  @Input() columns: { field: string, header: string }[] = []; 
  @Input() data: any[] = []; 
  @Input() tableSize: number = 10;

  currentPage: number = 1;

  get paginatedData() {
    const start = (this.currentPage - 1) * this.tableSize;
    const end = start + this.tableSize;
    return this.data.slice(start, end);
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  sortData(field: string) {
    this.data.sort((a, b) => a[field] > b[field] ? 1 : -1);
  }
  trackByFn(index: number, item: any): any {
    return item ? item.id : index; 
  }
  
}
