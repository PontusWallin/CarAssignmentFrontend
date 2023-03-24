import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserListComponent } from './components/user-list/user-list.component';
import {UserService} from "./components/shared/services/user.service";
import {HttpClientModule} from "@angular/common/http";
import { CarListComponent } from './components/car-list/car-list.component';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatExpansionModule} from "@angular/material/expansion";
import { MatListModule} from "@angular/material/list";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterOutlet} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    CarListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatDividerModule,
    RouterOutlet,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
