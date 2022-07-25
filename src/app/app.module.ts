import { PersonaService } from './core/services/persona.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './core/material/material.module';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { EducationComponent } from './pages/education/education.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './shared/layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    SkillsComponent,
    AboutmeComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
  
  ],
  providers: [
    PersonaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
