import { Component } from '@angular/core';
import { IExperience, ITecnology } from './interfaces';
import { technologies } from './data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  experiences: IExperience[] = [
    {
      company: "Grupo Brame",
      period: "2023-2024",
      position: "Desarrollador de Software FullStack",
      project: "Desarrollo de un ERP basado en Microservicios",
      description: "Diseño y desarrollo de un sistema ERP utilizando una arquitectura de microservicios para mejorar la escalabilidad y modularidad. El proyecto abarcó tanto el frontend como el backend, integrando diversas tecnologías para lograr un sistema robusto y eficiente.",
      technologies: this.getTechnologies(["Python", "Django", "Angular", "PostgreSQL", "Linux", "Nginx", "Git", "GitLab", "Docker"])
    },
    {
      company: "Facultad de Arquitectura y Diseño UAEMex",
      period: "2022-2023",
      position: "Desarrollador de Software FullStack",
      project: "Desarrollo de un Sistema Administrativo basado en Microservicios",
      description: "Diseño y desarrollo de un sistema administrativo utilizando una arquitectura de microservicios para mejorar la escalabilidad y modularidad del sistema. El proyecto incluye el desarrollo del backend, frontend, y la infraestructura necesaria para su despliegue.",
      technologies: this.getTechnologies(["NodeJS", "Express", "MongoDB", "Angular", "Docker"])
    }
  ];

  getTheme(): boolean {
    return localStorage.getItem('isDarkmode') === 'true';
  }

  getTechnologies(projectTechnologies: string[]): ITecnology[] {
    let techs: ITecnology[] = technologies.filter(technology => projectTechnologies.includes(technology.name));
    let groupedTechs: ITecnology[] = [];
    
    techs.forEach(tech => {
      let index = groupedTechs.findIndex(t => t.type === tech.type);
      if (index === -1) {
        groupedTechs.push(tech);
      } else {
        groupedTechs[index].name += `, ${tech.name}`;
        groupedTechs[index].icon += `, ${tech.icon}`;
      }
    });
    console.log(groupedTechs);
    groupedTechs.sort((a, b) => a.type.localeCompare(b.type));
    return groupedTechs;
  }
}
