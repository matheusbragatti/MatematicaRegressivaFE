import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownToggleDirective } from './shared/dropdown-toggle.directive';
import { MateriaComponent } from './materia/materia.component';
import { HomeComponent } from './home/home.component';
import { MateriasPageComponent } from './materias-page/materias-page.component';
import { AulaComponent } from './aula/aula.component';
import { ExercicioComponent } from './exercicio/exercicio.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'materia/:materiaId', component: MateriaComponent},
  {path: 'home', component: HomeComponent},
  {path: 'materias', component: MateriasPageComponent},
  {path: 'materia/:materiaId/aula/:idaula', component: AulaComponent},
  {path: 'materia/:materiaId/aula/:idaula/exercicio/:exercicioId', component: ExercicioComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownToggleDirective,
    MateriaComponent,
    HomeComponent,
    MateriasPageComponent,
    AulaComponent,
    ExercicioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
