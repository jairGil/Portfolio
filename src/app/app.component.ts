import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './home/components/header/header.component';
import { ProfileComponent } from './home/components/profile/profile.component';
import { ExperienceComponent } from './home/components/experience/experience.component';
import { ProjectsComponent } from './home/components/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProfileComponent, ExperienceComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
