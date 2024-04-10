import { Component, Input, SimpleChanges } from '@angular/core';
import { InputTextComponent } from '../input-text/input-text.component';



@Component({
  selector: 'app-evens',
  standalone: true,
  imports: [InputTextComponent,],
  templateUrl: './evens.component.html',
  styleUrl: './evens.component.css'
})
export class EvensComponent {
  @Input() dataFromInputTextEvens: string | undefined;

  dataFromInputArrayEvens: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dataFromInputTextEvens'] && changes['dataFromInputTextEvens'].currentValue) {
      this.dataFromInputArrayEvens.push(changes['dataFromInputTextEvens'].currentValue);
    }
  } 
}
