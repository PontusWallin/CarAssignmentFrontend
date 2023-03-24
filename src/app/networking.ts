import {environment} from "../environments/environment";

export class Networking {

  public static readonly BASE_URL = environment.BASE_URL;
  public static readonly USERS_ENDPOINT = '/users';
  public static readonly FULL_USERS_URL = Networking.BASE_URL + Networking.USERS_ENDPOINT;

  public static readonly CARS_ENDPOINT = '/cars';
  public static readonly FULL_CARS_URL = Networking.BASE_URL + Networking.CARS_ENDPOINT;

}
