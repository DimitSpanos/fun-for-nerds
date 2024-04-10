import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputTextComponent } from './components/input-text/input-text.component';
import { OddsComponent } from './components/odds/odds.component';
import { EvensComponent } from './components/evens/evens.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterOutlet, InputTextComponent, OddsComponent, EvensComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})  
export class AppComponent {
  
  evenData: string = '';
  oddData: string = '';

  onSubmit(event: string) { //stores the value of the input from the input-text component
    if (event.length % 2 === 0) {
      this.evenData = event;
    } else {
      this.oddData = event;
    }
    
  }
  
}
