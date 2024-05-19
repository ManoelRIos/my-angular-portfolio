import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.scss',
})
export class CardProjectComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() projectImg: string = '';
}
