import { Injectable } from '@angular/core';
import { Vehiculo } from './vehiculo';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ParqueaderoService {

  private baseUrl = 'http://localhost:8282';

  constructor(private  httpClient:  HttpClient) { }

  consultarVehiculos() {
      return this.httpClient.get(`${this.baseUrl}/consultarVehiculos`);
  }

  retirarVehiculo(vehiculo: Vehiculo) {
      return this.httpClient.put(`${this.baseUrl}/retirarVehiculo/`, vehiculo);
  }

  ingresarVehiculo(vehiculo: Vehiculo) {
      return this.httpClient.post(`${this.baseUrl}/ingresarVehiculo/`, vehiculo);
  }
}
