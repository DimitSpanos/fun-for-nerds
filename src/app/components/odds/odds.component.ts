import { Component, Input, SimpleChanges } from '@angular/core';
import { InputTextComponent } from '../input-text/input-text.component';


@Component({
  selector: 'app-odds',
  standalone: true,
  imports: [InputTextComponent],
  templateUrl: './odds.component.html',
  styleUrl: './odds.component.css'
})
export class OddsComponent {
  @Input() dataFromInputTextOdds: string | undefined;

  dataFromInputArrayOdds: string[] = [];

  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['dataFromInputTextOdds'] && changes['dataFromInputTextOdds'].currentValue) {
      this.dataFromInputArrayOdds.push(changes['dataFromInputTextOdds'].currentValue);
    }
  } 

  
}
