import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Notfound} from './components/others/notfound/notfound';
import {Todolist} from './components/todo/todolist/todolist';
import {Login} from './components/user/login/login';
import {Signup} from './components/user/signup/signup';
import {Networkerror} from './components/others/networkerror/networkerror';
import {AuthGuard} from './auth/auth-guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'todo', component: Todolist,  canActivate: [AuthGuard] },
  {path: 'login', component: Login},
  {path: 'signup', component: Signup},
  {path: 'network-error', component: Networkerror},
  {path: '**', component: Login}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
