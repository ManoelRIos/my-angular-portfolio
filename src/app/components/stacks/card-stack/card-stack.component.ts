import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-stack',
  standalone: true,
  imports: [],
  templateUrl: './card-stack.component.html',
  styleUrl: './card-stack.component.scss'
})
export class CardStackComponent {
  @Input() text: string = ''
  @Input() tag: string = ''
  @Input() icon: string = ''

  constructor(){}

}
