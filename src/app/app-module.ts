import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Networkerror } from './components/others/networkerror/networkerror';
import { Notfound } from './components/others/notfound/notfound';
import { Todoform } from './components/todo/todoform/todoform';
import { Todoitems } from './components/todo/todoitems/todoitems';
import { Todolist } from './components/todo/todolist/todolist';
import { Login } from './components/user/login/login';
import { Signup } from './components/user/signup/signup';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
// import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    App,
    Networkerror,
    Notfound,
    Todoform,
    Todoitems,
    Todolist,
    Login,
    Signup
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // Ng2SearchPipeModule,
    NgxPaginationModule,

    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center',
      closeButton: true,
      progressBar: false,
      preventDuplicates: true,
    })
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
