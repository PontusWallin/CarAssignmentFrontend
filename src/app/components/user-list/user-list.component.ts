import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../shared/services/user.service";
import {Subscription} from "rxjs";
import {User} from "../shared/models/user.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  protected allUsers: User[] = []
  protected displayedUsers: User[] = [];

  private usersSub: Subscription = new Subscription();

  protected searchText: string = '';

  protected sortType: string = 'id_asc';

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.searchText = this.activatedRoute.snapshot.queryParams['find'] || '';
    this.sortType = this.activatedRoute.snapshot.queryParams['sort'] || 'id_asc';

    this.userService.fetchUsersFromServer();

    this.usersSub = this.userService.getUsersUpdateListener()
      .subscribe(
        (users) => {
          this.allUsers = users;
          this.displayedUsers = users;
          this.doUserFiltering();
          this.doSorting(this.sortType);
        }
      )
  }

  private doUserFiltering(){
    if(this.searchText.length < 0){
     return;
    }

    let users = this.allUsers;
    this.displayedUsers = users.filter((user) => {
      return user.name.toLowerCase().includes(this.searchText.toLowerCase());
    })
  }

  onSearchTextChange(event: any){
    this.searchText = event.target.value;
    this.doUserFiltering();
  }

  onSortChange(event: any){
    let sortType = event.value;
    this.doSorting(sortType);
  }

  private doSorting(sortType: string) {
    if (sortType === 'name_asc') {
      this.displayedUsers.sort((a, b) => {
        return a.name.localeCompare(b.name);
      })
    }

    if (sortType === 'name_des') {
      this.displayedUsers.sort((a, b) => {
        return b.name.localeCompare(a.name);
      })
    }

    if (sortType === 'id_asc') {
      this.displayedUsers.sort((a, b) => {
        return a.id - b.id;
      })
    }

    if (sortType === 'id_des') {
      this.displayedUsers.sort((a, b) => {
        return b.id - a.id;
      })
    }
  }

  ngOnDestroy(): void {
    this.usersSub.unsubscribe();
  }

}
