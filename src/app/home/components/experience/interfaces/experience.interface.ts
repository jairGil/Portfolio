import { ITecnology } from "./technology.interface";

export interface IExperience {
    company: string;
    period: string;
    position: string;
    project: string;
    description: string;
    technologies: ITecnology[];
}