import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {Networking} from "../../../networking";
import {Injectable} from "@angular/core";
import {Car} from "../models/car.model";

@Injectable({providedIn: 'root'})
export class CarService {

  private cars: Car[] = [];

  private carsUpdated = new Subject<Car[]>();

  constructor(private http: HttpClient) {}

  getCarsUpdateListener() {
    return this.carsUpdated.asObservable();
  }

  fetchCarsFromServer(){
    this.http.get<Car[]>(
      Networking.FULL_CARS_URL)
      .subscribe((cars) => {
        this.cars = cars;
        this.carsUpdated.next([...this.cars]);
      });
  }
}
