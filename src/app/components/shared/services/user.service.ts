import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {User} from "../models/user.model";
import {Networking} from "../../../networking";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class UserService {

  private users: User[] = [];

  private usersUpdated = new Subject<User[]>();

  constructor(private http: HttpClient) {}

  getUsersUpdateListener() {
    return this.usersUpdated.asObservable();
  }

  fetchUsersFromServer(){
    this.http.get<User[]>(
      Networking.FULL_USERS_URL)
      .subscribe((users) => {
        this.users = users;
        this.usersUpdated.next([...this.users]);
      });
  }
}
