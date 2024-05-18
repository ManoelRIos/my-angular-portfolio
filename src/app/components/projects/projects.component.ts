import { CardProjectComponent } from './card-project/card-project.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
