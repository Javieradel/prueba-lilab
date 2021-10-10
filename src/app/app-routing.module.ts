import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { FeedsComponent } from './home/views/feeds/feeds.component';
import { LoginComponent } from './login/views/login/login.component';
import { ProfileComponent } from './profile/views/profile/profile.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', component: FeedsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
