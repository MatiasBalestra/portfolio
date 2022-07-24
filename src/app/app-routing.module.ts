import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutmeComponent} from './pages/aboutme/aboutme.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { EducationComponent } from './pages/education/education.component';


const routes: Routes = [
{path: 'aboutme', component: AboutmeComponent},
{path: 'education', component: EducationComponent},
{path: 'skills', component: SkillsComponent},
{path: 'projects', component: ProjectsComponent},
{path: 'experience', component: ExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
