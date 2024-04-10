import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.css'
})
export class InputTextComponent {
  @Output() buttonSubmit = new EventEmitter<string>();
  userInput: string = '';

  

  onInput(event: Event) { //kanei bind to value tou input se mia metavliti
    this.userInput = (<HTMLInputElement>event.target).value;
  }

  onSubmit() { //kanei emit to value tou input
    this.buttonSubmit.emit(this.userInput);
  }

}
