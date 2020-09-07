import { TdfComponent } from './components/tdf/tdf.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'reactive', component: ReactiveFormsComponent },
  { path: 'tdf', component: TdfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
