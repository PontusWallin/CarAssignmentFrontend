import {Component, OnDestroy, OnInit} from '@angular/core';
import {CarService} from "../shared/services/car.service";
import {Subscription} from "rxjs";
import {Car} from "../shared/models/car.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit, OnDestroy {

  protected allCars: Car[] = [];
  protected displayedCars: Car[] = [];

  private carsSub: Subscription = new Subscription();

  protected searchText: string = '';

  protected sortType: string = 'id_asc';

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.searchText = this.activatedRoute.snapshot.queryParams['find'] || '';
    this.sortType = this.activatedRoute.snapshot.queryParams['sort'] || 'id_asc';

    this.carService.fetchCarsFromServer();

    this.carsSub = this.carService.getCarsUpdateListener()
      .subscribe(
          (cars) => {
            this.allCars = cars;
            this.displayedCars = cars;
            this.doCarFiltering();
            this.doSorting(this.sortType);
          }
        )
  }

  onSearchTextChange(event: any){
    this.searchText = event.target.value;
    this.doCarFiltering();
  }

  onSortChange(event: any){
    this.sortType = event.value;
    this.doSorting(this.sortType);
  }

  private doSorting(sortType: string) {
    if (sortType === 'id_asc') {
      this.displayedCars.sort((a, b) => {
        return a.id - b.id;
      })
    }

    if (sortType === 'id_des') {
      this.displayedCars.sort((a, b) => {
        return b.id - a.id;
      })
    }

    if (sortType === 'make_asc') {
      this.displayedCars.sort((a, b) => {
        return a.make.localeCompare(b.make);
      })
    }

    if (sortType === 'make_des') {
      this.displayedCars.sort((a, b) => {
        return b.make.localeCompare(a.make);
      })
    }

    if (sortType === 'model_asc') {
      this.displayedCars.sort((a, b) => {
        return a.model.localeCompare(b.model);
      })
    }

    if (sortType === 'model_des') {
      this.displayedCars.sort((a, b) => {
        return b.model.localeCompare(a.model);
      })
    }

    if (sortType === 'numberplate_asc') {
      this.displayedCars.sort((a, b) => {
        return a.numberplate.localeCompare(b.numberplate);
      })
    }

    if (sortType === 'numberplate_des') {
      this.displayedCars.sort((a, b) => {
        return b.numberplate.localeCompare(a.numberplate);
      })
    }
  }

  private doCarFiltering(){
    if(this.searchText.length < 0){
      return;
    }

    let cars = this.allCars;

    this.displayedCars = cars.filter((car) => {
      return car.make.toLowerCase().includes(this.searchText.toLowerCase());
    })
  }

  ngOnDestroy(): void {
    this.carsSub.unsubscribe();
  }

}
