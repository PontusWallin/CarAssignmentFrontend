import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CarListComponent} from "./components/car-list/car-list.component";
import {UserListComponent} from "./components/user-list/user-list.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: 'cars', component: CarListComponent},
  { path: 'users', component: UserListComponent},
  { path: '', component: AppComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
