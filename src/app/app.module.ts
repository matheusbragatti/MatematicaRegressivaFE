import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownToggleDirective } from './shared/dropdown-toggle.directive';
import { MateriaComponent } from './materia/materia.component';
import { HomeComponent } from './home/home.component';
import { MateriasPageComponent } from './materias-page/materias-page.component';
import { AulaComponent } from './aula/aula.component';
import { ExercicioComponent } from './exercicio/exercicio.component';
import { MateriaCardComponent } from './cards/materia-card/materia-card.component';
import { AulaCardComponent } from './cards/aula-card/aula-card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninPageComponent } from './signin-page/signin-page.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'materia/:materiaId', component: MateriaComponent},
  {path: 'home', redirectTo: '/'},
  {path: 'materias', component: MateriasPageComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'entrar', component: SigninPageComponent},
  {path: 'materia/:materiaId/aula/:idaula', component: AulaComponent, children:[
    {path: 'exercicio/:exercicioId', component: ExercicioComponent}]},
  {path: 'page-not-found', component: PageNotFoundComponent},
  
  //This path has to be the last path in Routes array
  {path: '**', redirectTo: '/page-not-found'}
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
    ExercicioComponent,
    MateriaCardComponent,
    AulaCardComponent,
    PageNotFoundComponent,
    FooterComponent,
    CadastroComponent,
    SigninPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
