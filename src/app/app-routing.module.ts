import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { UsersComponentComponent } from './users-component/users-component.component';
import { FronteggAuthGuard } from '@frontegg/angular';


/** Option to protect all routes **/
const routes: Routes = [
  {
    path: '',
    canActivate: [FronteggAuthGuard],
    children: [
      { path: '', component: HomeComponentComponent },
      { path: 'users', component: UsersComponentComponent },
      { path: '**', component: NotFoundComponentComponent },
    ]
  },
]

@NgModule({
  declarations: [HomeComponentComponent, UsersComponentComponent, NotFoundComponentComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}