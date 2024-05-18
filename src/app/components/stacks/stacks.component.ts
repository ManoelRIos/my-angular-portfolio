import { Component } from '@angular/core';
import { CardStackComponent } from './card-stack/card-stack.component';

@Component({
  selector: 'app-stacks',
  standalone: true,
  imports: [CardStackComponent],
  templateUrl: './stacks.component.html',
  styleUrl: './stacks.component.scss'
})
export class StacksComponent {

}
