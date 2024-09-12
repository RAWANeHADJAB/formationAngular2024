import { Component , Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-multi-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.css'
})
export class MultiSelectComponent {
  @Input() options: { label: string, value: any }[] = [];
  @Input() selectedValues: any[] = [];
  @Input() selectedStyle: { [key: string]: string } = {color:'green'};

  
  @Output() selectionChange = new EventEmitter<any[]>();

  toggleSelection(optionValue: any) {
    if (this.selectedValues.includes(optionValue)) {
      this.selectedValues = this.selectedValues.filter(value => value !== optionValue);
    } else {
      this.selectedValues.push(optionValue);
    }
    this.selectionChange.emit(this.selectedValues);
  }

  isSelected(optionValue: any): boolean {
    return this.selectedValues.includes(optionValue);
  }
  toggleSelectAll(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const checked = inputElement.checked;
  
    if (checked) {
      this.selectedValues = this.options.map(option => option.value);
    } else {
      this.selectedValues = [];
    }
    this.selectionChange.emit(this.selectedValues);
  }
  
  
  isAllSelected(): boolean {
    return this.selectedValues?.length === this.options.length;
  }
  
}
